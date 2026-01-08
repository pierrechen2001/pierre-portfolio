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

  // 根據專案 ID 生成特定的 SEO 標題和描述
  const getProjectSEO = (projectId: string, project: any) => {
    const seoMap: Record<string, { title: string; description: string }> = {
      'dogtor': {
        title: 'Dogtor AI 學習助手 - 高中生專用 AI 問答與錯題追蹤系統',
        description: 'Dogtor 是一款專為高中生設計的 AI 學習助手，提供智能題目生成、錯題追蹤功能，使用 Flutter、FastAPI、MySQL 與 GCP 技術開發。'
      },
      'aiplanner': {
        title: 'aiPlanner 智慧行事曆 - iOS 原生 AI 日程管理 App',
        description: 'aiPlanner 是一款 iOS 原生智慧行事曆應用，支援自然語言輸入與 AI 智能推薦，使用 Swift、Supabase 與 iCloud 技術開發。'
      },
      'erp-system': {
        title: '中星白蟻 ERP 系統 - 企業資源規劃管理系統',
        description: '為中星白蟻公司開發的企業資源規劃系統，管理客戶、工單、排程等業務流程，使用 React、TypeScript、Firebase 技術開發。'
      },
      'superbot': {
        title: 'SuperBot AI LineBot - 多功能智能助手',
        description: 'SuperBot 是一款 AI LineBot，提供智能對話與協助精湛教育課務任務功能，展現 AI 技術在日常應用中的實用性。'
      },
      'seven-peach': {
        title: '七桃交友 App - 樂齡族的 AI 約會助手',
        description: '七桃是一款為銀髮族打造的交友 App，打造跨世代連結的美好生活。'
      },
      'lakycarcar': {
        title: 'LakyCar 單人桌機解謎遊戲',
        description: 'LakyCar 是一個單人桌機解謎遊戲，使用 C++ 開發。'
      }
    };

    return seoMap[projectId] || {
      title: `${project.title.zh} - Pierre Chen 開發專案`,
      description: project.fullDescription?.zh || project.description.zh
    };
  };

  const seo = getProjectSEO(id, project);
  const skills = project.skills.map(skill => skill.name).join(', ');
  
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