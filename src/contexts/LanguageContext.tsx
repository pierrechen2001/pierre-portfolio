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
    
    // About 頁面
    'about_page_title': 'About Me',
    'about_page_description': 'Learn more about my background, skills, and experience.',
    'who_am_i': 'Who Am I',
    'about_intro_1': 'Hi, I\'m Pierre, a passionate full-stack developer focused on creating high-quality websites and applications. I have years of development experience and am familiar with various front-end and back-end technologies.',
    'about_intro_2': 'I believe good design is not just about aesthetics, but also about functionality and user-friendliness. My goal is to create products that not only look good, but also solve real problems.',
    'about_intro_3': 'Besides programming, I also enjoy photography, traveling, and learning new technologies. I always maintain curiosity and look for new ways to enhance my skills and knowledge.',
    'work_experience': 'Work Experience',
    'education': 'Education',
    'skills': 'Professional Skills',
    'frontend_dev': 'Frontend Development',
    'backend_dev': 'Backend Development',
    'mobile_dev': 'Mobile Development',
    'other_skills': 'Other Skills',
    
    // Projects 頁面
    'projects_page_title': 'Projects',
    'projects_page_description': 'Explore my portfolio of projects showcasing my skills and experience.',
    'all_projects': 'All Projects',
    'featured_projects': 'Featured Projects',
    'project_details': 'Project Details',
    'technologies_used': 'Technologies Used',
    'project_duration': 'Project Duration',
    'project_role': 'My Role',
    'view_live': 'View Live',
    'view_code': 'View Code',
    
    // Contact 頁面
    'contact_page_title': 'Contact Me',
    'contact_page_description': 'Get in touch with me for work inquiries or just to say hello.',
    'contact_form_name': 'Name',
    'contact_form_email': 'Email',
    'contact_form_subject': 'Subject',
    'contact_form_message': 'Message',
    'contact_form_send': 'Send Message',
    'contact_form_sending': 'Sending...',
    'contact_success': 'Thank you! Your message has been sent successfully.',
    'contact_error': 'Oops! Something went wrong. Please try again.',
    'name_required': 'Please enter your name',
    'email_required': 'Please enter your email',
    'email_invalid': 'Please enter a valid email',
    'message_required': 'Please enter your message',
    'get_in_touch': 'Get In Touch',
    'contact_description': 'Feel free to reach out to me for project inquiries or just to say hello. I\'m always open to discussing new projects, creative ideas or opportunities to be part of your vision.'
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
    
    // About 頁面
    'about_page_title': '關於我',
    'about_page_description': '了解更多關於我的背景、技能和經驗。',
    'who_am_i': '我是誰',
    'about_intro_1': '嗨，我是 Pierre，一名充滿熱情的全端開發者，專注於創建高品質的網站和應用程式。我擁有多年的開發經驗，熟悉多種前後端技術。',
    'about_intro_2': '我相信好的設計不僅僅是美觀，還應該是功能性和用戶友好的。我的目標是創建不僅好看，還能解決實際問題的產品。',
    'about_intro_3': '除了編程，我還喜歡攝影、旅行和學習新技術。我總是保持好奇心，並尋找新的方式來提升我的技能和知識。',
    'work_experience': '工作經歷',
    'education': '教育背景',
    'skills': '專業技能',
    'frontend_dev': '前端開發',
    'backend_dev': '後端開發',
    'mobile_dev': '移動開發',
    'other_skills': '其他技能',
    
    // Projects 頁面
    'projects_page_title': '專案作品',
    'projects_page_description': '探索我的作品集，展示我的技能和經驗。',
    'all_projects': '所有專案',
    'featured_projects': '精選專案',
    'project_details': '專案詳情',
    'technologies_used': '使用技術',
    'project_duration': '專案期間',
    'project_role': '我的角色',
    'view_live': '查看線上版本',
    'view_code': '查看程式碼',
    
    // Contact 頁面
    'contact_page_title': '聯絡我',
    'contact_page_description': '有工作邀約或只是想打聲招呼，都歡迎與我聯繫。',
    'contact_form_name': '姓名',
    'contact_form_email': '電子郵件',
    'contact_form_subject': '主旨',
    'contact_form_message': '訊息',
    'contact_form_send': '發送訊息',
    'contact_form_sending': '發送中...',
    'contact_success': '謝謝您！您的訊息已成功發送。',
    'contact_error': '抱歉！發生錯誤，請再試一次。',
    'name_required': '請輸入您的姓名',
    'email_required': '請輸入您的電子郵件',
    'email_invalid': '請輸入有效的電子郵件',
    'message_required': '請輸入您的訊息',
    'get_in_touch': '與我聯繫',
    'contact_description': '無論是專案邀約還是打聲招呼，都歡迎與我聯繫。我一直樂於討論新專案、創意想法或加入您願景的機會。'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en'); // 預設為英文

  useEffect(() => {
    // 檢查本地存儲是否有語言設置，如果沒有則使用英文
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguageState(savedLanguage);
    } else {
      // 如果沒有儲存的語言設置，使用英文並將其保存到 localStorage
      localStorage.setItem('language', 'en');
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