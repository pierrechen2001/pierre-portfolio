import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "聯絡我 - 與 Pierre Chen 取得聯繫",
  description: "歡迎與 Pierre Chen 聯繫！無論是工作邀約、專案合作或技術交流，都可以透過電子郵件、電話或聯絡表單與我取得聯繫。",
  keywords: [
    "聯絡我", "聯繫 Pierre Chen", "工作邀約", "專案合作", "技術交流",
    "電子郵件", "聯絡表單", "全端開發者聯繫", "軟體工程師聯繫",
    "b12705058@g.ntu.edu.tw", "台北", "中正區"
  ],
  openGraph: {
    title: "聯絡我 - 與 Pierre Chen 取得聯繫",
    description: "歡迎與 Pierre Chen 聯繫！無論是工作邀約、專案合作或技術交流，都可以透過多種方式與我取得聯繫。",
    url: 'https://www.pierre-chen.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.pierre-chen.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
} 