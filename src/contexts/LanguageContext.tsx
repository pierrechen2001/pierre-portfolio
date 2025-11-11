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
    'description': 'A creative full-stack developer passionate about building meaningful products. I love solving real-world problems through code and integrating technology into daily life to make a positive impact.',
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
    'about_intro_1': 'Hi, I\'m Pierre, a full-stack developer who loves creating meaningful products that solve real-world problems. I combine front-end and back-end technologies to build solutions that make a difference in people\'s lives.',
    'about_intro_2': 'I believe great design is not just about aesthetics, but about solving problems and enhancing user experiences. My goal is to build practical, impactful solutions that add value and create positive change.',
    'about_intro_3': 'Beyond coding, I enjoy photography, traveling, and exploring new technologies. I always stay curious and seek new ways to improve my skills and approach problem-solving.',
    'work_experience': 'Work Experience',
    'education': 'Education',
    'skills': 'Professional Skills',
    'frontend_dev': 'Frontend Development',
    'backend_dev': 'Backend Development',
    'mobile_dev': 'Mobile Development',
    'other_skills': 'Other Skills',
    
    // 工作經歷詳細內容
    'akira_position': 'Software Engineer Intern',
    'akira_company': 'Akira Dialog Tech Inc.',
    'akira_location': 'Taipei, Taiwan',
    'akira_period': 'Oct 2025 - Present',
    'akira_description': 'Software engineering intern focused on backend API development and machine learning data enhancement.',
    'akira_achievement_1': 'Designed and implemented RESTful APIs for mobile number verification and user profile management, including backend database schema planning and integration with SMS service providers',
    'akira_achievement_2': 'Conducted end-to-end research on synthetic data generation for machine learning model enhancement - proposed methodology, designed labeling strategies, generated training datasets, and optimized model training pipelines',
    'akira_achievement_3': 'Collaborated cross-functionally with frontend engineers to define API specifications, review QA checklists, and establish an efficient backend-frontend integration workflow',
    
    'superb_tech_position': 'Technical Developer',
    'superb_tech_company': 'Superb Tech Studio',
    'superb_tech_period': 'Aug 2025 - Present',
    'superb_tech_description': 'Full-stack development and technical consulting for technology projects.',
    'superb_tech_achievement_1': 'Developed custom web applications and automation tools for institutions',
    'superb_tech_achievement_2': 'Implemented API integrations and database optimization solutions',
    'superb_tech_achievement_3': 'Provided technical consulting and code reviews for client projects',
    
    'dogtor_position': 'Dogtor Full-Stack Engineer',
    'dogtor_company': 'AI Learning Application Development Team',
    'dogtor_period': '2025 - Present',
    'dogtor_description': 'Participated in full-stack development of the Dogtor project, combining Flutter, FastAPI, and MySQL to build a student learning platform deployed on GCP.',
    'dogtor_achievement_1': 'Designed and built personalized error tracking and practice system',
    'dogtor_achievement_2': 'Deployed backend API to Cloud Run, integrated with Flutter application',
    'dogtor_achievement_3': 'Integrated OpenAI models for question generation and feedback',
    
    'superb_position': 'Founder & Technical Developer',
    'superb_company': 'Superb Education',
    'superb_period': '2023 - Present',
    'superb_description': 'Independently developed LINE chatbot and teaching platform to assist high school students in learning mathematics and English, integrated Google Sheets API for attendance and assignment tracking.',
    'superb_achievement_1': 'Used Python to integrate LINE Message API and Google Sheets API',
    'superb_achievement_2': 'Deployed backend application to Heroku for stable service',
    'superb_achievement_3': 'Designed website frontend using HTML/CSS/JS',
    
    // 教育背景
    'ntu_degree': 'Bachelor of Information Management',
    'ntu_school': 'National Taiwan University',
    'ntu_period': '2023 - Expected 2027',
    'ntu_description': 'Majoring in Information Management, studying software engineering, database systems, deep learning, and human-computer interaction, actively participating in programming competitions and application project development.',
    'ntu_achievement_1': 'Developed multiple AI education and social impact application projects',
    'ntu_achievement_2': 'Served as teaching assistant for "Disaster Risk Management" course',
    'ntu_achievement_3': 'Served as instructor for campus winter camp, teaching communication and leadership skills',
    
    'kmu_degree': 'Bachelor of Chemistry',
    'kmu_school': 'Kaohsiung Medical University',
    'kmu_period': '2019 - 2023',
    'kmu_description': 'Majored in Chemistry, conducted cancer biomarker analysis research, participated in student government as student representative and event organizer, developed excellent communication and leadership skills.',
    
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
    'description': '熱愛創造能帶來價值的產品，專注於開發解決真實問題的程式，將科技融入生活並改善使用者體驗的全端開發者。',
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
    'about_intro_1': '嗨，我是 Pierre，一名熱愛開發、專注於創造有價值產品的全端開發者。我擅長結合前後端技術，打造能夠解決真實問題的應用，讓科技成為生活的一部分。',
    'about_intro_2': '我相信好的設計不只是好看，而是能夠幫助使用者解決問題、提升體驗。我的目標是開發出實用又有溫度的產品，創造對世界有正面影響的解決方案。',
    'about_intro_3': '除了寫程式，我喜歡攝影、旅行和探索新技術，並持續保持好奇心，學習新知識，找到更好的方法解決問題。',
    'work_experience': '工作經歷',
    'education': '教育背景',
    'skills': '專業技能',
    'frontend_dev': '前端開發',
    'backend_dev': '後端開發',
    'mobile_dev': '移動開發',
    'other_skills': '其他技能',
    
    // 工作經歷詳細內容
    'akira_position': '軟體工程實習生',
    'akira_company': '皓談心理科技',
    'akira_location': '台北，台灣',
    'akira_period': '2025年10月 - 現在',
    'akira_description': '專注於後端 API 開發與機器學習資料增強的軟體工程實習生。',
    'akira_achievement_1': '設計並實作手機號碼驗證與用戶資料管理的 RESTful API，包含後端資料庫架構規劃及與簡訊服務商的整合',
    'akira_achievement_2': '進行端到端的合成資料生成研究以增強機器學習模型 - 提出方法論、設計標註策略、生成訓練資料集，並優化模型訓練流程',
    'akira_achievement_3': '跨職能協作前端工程師，定義 API 規格、審查 QA 檢查清單，並建立高效的前後端整合工作流程',
    
    'superb_tech_position': '技術開發',
    'superb_tech_company': '精湛資訊工作室',
    'superb_tech_period': '2025年8月 - 現在',
    'superb_tech_description': '為科技專案提供全端開發與技術顧問服務。',
    'superb_tech_achievement_1': '為機構開發客製化網頁應用與自動化工具',
    'superb_tech_achievement_2': '實作 API 整合與資料庫優化解決方案',
    'superb_tech_achievement_3': '為客戶專案提供技術諮詢與程式碼審查',
    
    'dogtor_position': 'Dogtor 全端工程師',
    'dogtor_company': 'AI 學習應用開發團隊',
    'dogtor_period': '2025年 - 現在',
    'dogtor_description': '參與 Dogtor 專案的全端開發，結合 Flutter、FastAPI 和 MySQL 建構學生學習平台，並部署於 GCP。',
    'dogtor_achievement_1': '設計與建置個人化錯題追蹤與練習系統',
    'dogtor_achievement_2': '將後端 API 部署至 Cloud Run，串接 Flutter 應用',
    'dogtor_achievement_3': '整合 OpenAI 模型進行題目生成與回饋',
    
    'superb_position': '創辦人兼技術開發',
    'superb_company': '精湛教育',
    'superb_period': '2023年 - 現在',
    'superb_description': '獨立開發 LINE 聊天機器人與教學平台，協助高中生學習數理與英文，並整合 Google Sheet API 進行出勤與作業追蹤。',
    'superb_achievement_1': '使用 Python 串接 LINE Message API 與 Google Sheets API',
    'superb_achievement_2': '將後端應用部署至 Heroku 提供穩定服務',
    'superb_achievement_3': '設計官網前端頁面，使用 HTML/CSS/JS 完成',
    
    // 教育背景
    'ntu_degree': '資訊管理學士',
    'ntu_school': '國立台灣大學',
    'ntu_period': '2023年 - 預計2027年',
    'ntu_description': '主修資訊管理，修習軟體工程、資料庫系統、深度學習與人機互動等課程，積極參與校內外程式設計競賽與應用專題開發。',
    'ntu_achievement_1': '開發多個 AI 教育與社會影響應用專案',
    'ntu_achievement_2': '擔任「災害風險管理」課程助教',
    'ntu_achievement_3': '擔任校內冬令營講師，教授溝通與領導技巧',
    
    'kmu_degree': '醫藥化學學士',
    'kmu_school': '高雄醫學大學',
    'kmu_period': '2019年 - 2023年',
    'kmu_description': '主修化學，進行癌症生物標記分析研究，參與學生會並擔任學生代表、活動總召，發展出良好的溝通與領導能力。',
    
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