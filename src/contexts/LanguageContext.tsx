'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// 預設語言內容
const translations = {
  en: {
    // 頁面頭部
    'iam': 'I am',
    'fullname': 'Pierre Chen',
    'description': 'Full-stack developer focused on creating elegant and functional websites and applications, providing digital solutions for all businesses with over 5 years of experience.',
    'view_portfolio': 'View My Portfolio',
    'contact_me': 'Contact Me',
    
    // 作品集區塊
    'my_portfolio': 'My Portfolio',
    'portfolio_description': 'These are some of my recent projects that showcase my skills and experience. Each work represents my attention to detail and problem-solving abilities.',
    'view_all_projects': 'View All Projects',
    'view_details': 'View Details',
    
    // 專案狀態
    'completed': 'Completed',
    'in_progress': 'In Progress',
    'planned': 'Planned',
    
    // 頁腳
    'about_me': 'Focused on creating excellent websites and applications, turning creativity into reality. Providing comprehensive solutions, from website design to application development.',
    'quick_links': 'Quick Links',
    'home': 'Home',
    'portfolio': 'Portfolio',
    'about': 'About',
    'contact': 'Contact',
    'contact_info': 'Contact Info',
    'rights_reserved': 'All rights reserved',
  },
  zh: {
    // 頁面頭部
    'iam': '我是',
    'fullname': 'Pierre Chen',
    'description': '全端開發者，專注於創建精美且實用的網站和應用程式，為所有企業提供數位解決方案，擁有超過5年的經驗。',
    'view_portfolio': '查看我的作品',
    'contact_me': '聯繫我',
    
    // 作品集區塊
    'my_portfolio': '我的作品集',
    'portfolio_description': '這些是我最近開發的一些專案，展示了我的技能和經驗。每個作品都代表了我對細節的關注和解決問題的能力。',
    'view_all_projects': '查看所有作品',
    'view_details': '查看詳情',
    
    // 專案狀態
    'completed': '已完成',
    'in_progress': '進行中',
    'planned': '計劃中',
    
    // 頁腳
    'about_me': '專注於打造優秀的網站和應用程式，將創意轉化為現實。提供全方位的解決方案，從網站設計到應用開發。',
    'quick_links': '快速連結',
    'home': '首頁',
    'portfolio': '作品集',
    'about': '關於我',
    'contact': '聯絡',
    'contact_info': '聯絡資訊',
    'rights_reserved': '版權所有',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en'); // 預設為英文

  useEffect(() => {
    // 檢查本地存儲是否有語言設置
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // 翻譯函數
  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 