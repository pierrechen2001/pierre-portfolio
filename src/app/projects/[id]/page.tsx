import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import type { Metadata } from 'next';
import ProjectDetailClient from '@/components/ProjectDetailClient';

interface Props {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    return {
      title: '專案不存在 | Pierre\'s Portfolio',
      description: '找不到該專案',
    };
  }
  
  return {
    title: `${project.title} | Pierre's Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} id={params.id} />;
} 