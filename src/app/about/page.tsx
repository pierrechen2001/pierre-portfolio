import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "關於我 - Pierre Chen 的個人簡介與技能經歷",
  description: "了解 Pierre Chen 的個人背景、工作經歷、教育背景與技能專長。從台大資工系到全端開發者，專精於 AI、Flutter、React 等技術領域的成長歷程。",
  keywords: [
    "Pierre Chen", "關於我", "個人簡介", "工作經歷", "教育背景", "技能專長",
    "台大資工", "全端開發者", "AI開發", "Flutter", "React", "軟體工程師",
    "Superb Education", "Dogtor", "程式設計", "軟體開發"
  ],
  openGraph: {
    title: "關於我 - Pierre Chen 的個人簡介與技能經歷",
    description: "了解 Pierre Chen 的個人背景、工作經歷、教育背景與技能專長。從台大資工系到全端開發者的成長歷程。",
    url: 'https://www.pierre-chen.com/about',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://www.pierre-chen.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
} 