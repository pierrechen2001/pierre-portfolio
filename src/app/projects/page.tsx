import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: "專案作品集 - 展示我的開發作品",
  description: "瀏覽 Pierre Chen 的八個開發作品，包括 MapIt 社交餐廳地圖、DOGTOR AI 學習 App、aiPlanner 行事曆及企業系統。",
  keywords: [
    "專案作品集", "開發作品", "AI專案", "App開發", "全端開發", 
    "MapIt", "Dogtor", "aiPlanner", "ERP系統", "Flutter", "React", "Next.js"
  ],
  openGraph: {
    title: "專案作品集 - Pierre Chen 的開發作品展示",
    description: "瀏覽 Pierre Chen 的 MapIt 社交地圖、DOGTOR AI 學習 App、智慧行事曆與企業系統專案。",
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
