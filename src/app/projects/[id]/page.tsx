import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import type { Metadata } from 'next';
import ProjectDetailClient from '@/components/ProjectDetailClient';

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  
  if (!project) {
    return {
      title: '專案不存在 | Pierre\'s Portfolio',
      description: '找不到該專案',
    };
  }

  const seo = {
    title: `${project.title.zh} - Pierre Chen 開發專案`,
    description: project.description.zh,
  };
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: [
      project.title.zh,
      project.title.en,
      ...project.skills.map(skill => skill.name),
      'Pierre Chen',
      '專案開發',
      '作品集',
      project.status === 'completed' ? '已完成專案' : '開發中專案'
    ],
    authors: [{ name: "Pierre Chen" }],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://www.pierre-chen.com/projects/${id}`,
      type: 'article',
      images: [
        {
          url: project.imageUrl,
          width: 800,
          height: 600,
          alt: `${project.title.zh} 專案截圖`,
        }
      ],
      publishedTime: project.date.zh,
      tags: project.skills.map(skill => skill.name),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [project.imageUrl],
    },
    alternates: {
      canonical: `https://www.pierre-chen.com/projects/${id}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} id={id} />;
}
