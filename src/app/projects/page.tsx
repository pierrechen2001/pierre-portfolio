import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: "專案作品集 - 展示我的開發作品",
  description: "瀏覽 Pierre Chen 的完整專案作品集，包含 AI 學習助手 Dogtor、智慧行事曆 aiPlanner、企業 ERP 系統等多元化開發專案，展現全端開發與 AI 技術整合能力。",
  keywords: [
    "專案作品集", "開發作品", "AI專案", "App開發", "全端開發", 
    "Dogtor", "aiPlanner", "ERP系統", "Flutter", "React", "Next.js"
  ],
  openGraph: {
    title: "專案作品集 - Pierre Chen 的開發作品展示",
    description: "瀏覽 Pierre Chen 的完整專案作品集，包含 AI 學習助手、智慧行事曆、企業系統等多元化開發專案。",
    url: 'https://www.pierre-chen.com/projects',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.pierre-chen.com/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
} 