import { notFound } from 'next/navigation';
import { notes } from '@/data/notes';
import type { Metadata } from 'next';
import NoteDetailClient from '@/components/NoteDetailClient';

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return notes.map((note) => ({
    id: note.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const note = notes.find((n) => n.id === id);
  
  if (!note) {
    return {
      title: '筆記不存在 | Pierre\'s Portfolio',
      description: '找不到該筆記',
    };
  }

  return {
    title: `${note.title.zh} | Pierre's Portfolio`,
    description: note.description.zh,
    keywords: [
      note.title.zh,
      note.title.en,
      ...note.tags,
      'Pierre Chen',
      '開發筆記',
      '技術筆記',
      note.category.zh
    ],
    authors: [{ name: "Pierre Chen" }],
    openGraph: {
      title: `${note.title.zh} | Pierre's Portfolio`,
      description: note.description.zh,
      url: `https://www.pierre-chen.com/notes/${id}`,
      type: 'article',
      images: [
        {
          url: 'https://www.pierre-chen.com/og-image.png',
          width: 800,
          height: 600,
          alt: `${note.title.zh} 筆記`,
        }
      ],
      publishedTime: note.publishedAt,
      modifiedTime: note.updatedAt || note.publishedAt,
      tags: note.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${note.title.zh} | Pierre's Portfolio`,
      description: note.description.zh,
      images: ['https://www.pierre-chen.com/og-image.png'],
    },
    alternates: {
      canonical: `https://www.pierre-chen.com/notes/${id}`,
    },
  };
}

export default async function NotePage({ params }: Props) {
  const { id } = await params;
  const note = notes.find((n) => n.id === id);
  
  if (!note) {
    notFound();
  }

  return <NoteDetailClient note={note} id={id} />;
}
