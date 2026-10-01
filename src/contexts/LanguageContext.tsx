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
    'description': 'AI application developer and full-stack engineer. I co-build Dogtor, a learning app with 7,000+ users, and contribute to MapIt, a social restaurant map. My work spans Flutter, FastAPI, data systems, and product experience.',
    'view_portfolio': 'View My Portfolio',
    'contact_me': 'Contact Me',
    
    // 作品集區塊
    'my_portfolio': 'My Portfolio',
    'portfolio_description': 'From Dogtor and the MapIt capstone to iOS and business tools, these projects show the problems I worked on and my contribution to each team.',
    'view_all_projects': 'View All Projects',
    'view_details': 'View Details',
    
    // 專案狀態
    'completed': 'Completed',
    'in_progress': 'In Progress',
    'planned': 'Planned',
    
    // 頁腳
    'about_me': 'Full-stack developer building mobile apps, web platforms, and AI learning tools from idea to release.',
    'quick_links': 'Quick Links',
    'home': 'Home',
    'portfolio': 'Portfolio',
    'about': 'About',
    'contact': 'Contact',
    'contact_info': 'Contact Info',
    'rights_reserved': 'All rights reserved',
    
    // About 頁面
    'about_page_title': 'About Me',
    'about_page_description': 'From chemistry research to information management and AI application development, with experience across product, data, and mobile engineering.',
    'who_am_i': 'Who Am I',
    'about_intro_1': 'Hi, I\'m Pierre. I am an AI Application Developer Intern at Aiii.AI and a co-founder and software engineer building Dogtor. Dogtor has reached 7,000+ users and #4 in App Store Education.',
    'about_intro_2': 'My path began in chemistry research and continued into information management. I use that research mindset to map user problems, design data flows, and test product decisions before refining the implementation.',
    'about_intro_3': 'At Akira Dialog Tech, I worked on backend APIs and synthetic-data research. I also contribute to MapIt, an ongoing NTU capstone that turns restaurant links into a social map, and have built client and education tools through Superb Education.',
    'work_experience': 'Work Experience',
    'experience_and_projects': 'Experience & Products',
    'education': 'Education',
    'skills': 'Professional Skills',
    'frontend_dev': 'Frontend Development',
    'backend_dev': 'Backend Development',
    'mobile_dev': 'Mobile Development',
    'other_skills': 'Other Skills',
    
    // 工作經歷詳細內容
    'aiii_position': 'AI Application Developer Intern',
    'aiii_company': 'Aiii.AI',
    'aiii_period': 'Sep 2026 - Present',
    'aiii_summary': 'AI application development internship in Taipei.',
    'akira_position': 'Software Engineer Intern',
    'akira_company': 'Akira Dialog Tech Inc.',
    'akira_location': 'Taipei, Taiwan',
    'akira_period': 'Oct 2025 - Jan 2026',
    'akira_description': 'Software engineering intern focused on backend API development and machine learning data enhancement.',
    'akira_achievement_1': 'Built REST APIs for profile management and Firebase-backed SMS authentication, including database schemas and validation flows',
    'akira_achievement_2': 'Researched synthetic data and text mining for model training and evaluation, from generation methods to labeling and pipeline design',
    'akira_achievement_3': 'Collaborated cross-functionally with frontend engineers to define API specifications, review QA checklists, and establish an efficient backend-frontend integration workflow',
    
    'dogtor_position': 'Co-Founder & Software Engineer',
    'dogtor_company': 'SuperB Software Technology — DOGTOR',
    'dogtor_period': 'Apr 2026 - Present',
    'dogtor_description': 'Co-founded Dogtor and built AI features, backend data systems, and the student learning product.',
    'dogtor_achievement_1': 'Scaled Dogtor to 7,000+ users and 2,600 monthly active users; reached #4 in App Store Education',
    'dogtor_achievement_2': 'Owned knowledge-point models, LLM orchestration, event collection, FastAPI APIs, and Cloud Run / Cloud SQL deployment',
    'dogtor_achievement_3': 'Built paid parent analytics that turns learning data into AI-generated weakness analyses and guidance',
    
    'superb_position': 'Founder & Technology Developer',
    'superb_company': 'Superb Education / Superb Tech Studio',
    'superb_period': 'Aug 2023 - Present',
    'superb_description': 'Founded an education and software organization that delivers client projects and builds automation for learning operations.',
    'superb_achievement_1': 'Founded and led a 20-person education and software organization',
    'superb_achievement_2': 'Delivered 10+ client projects across education and software workflows',
    'superb_achievement_3': 'Built Python, LINE, and Google Sheets automation for operations and learning-progress tracking',
    
    // 教育背景
    'ntu_degree': 'Bachelor of Information Management',
    'ntu_school': 'National Taiwan University',
    'ntu_period': '2023 - Expected Dec 2026',
    'ntu_description': 'Majoring in Information Management, studying software engineering, database systems, deep learning, and human-computer interaction, actively participating in programming competitions and application project development.',
    'ntu_achievement_1': 'Developed multiple AI education and social impact application projects',
    'ntu_achievement_2': 'Served as teaching assistant for "Disaster Risk Management" course',
    'ntu_achievement_3': 'Served as instructor for campus winter camp, teaching communication and leadership skills',
    
    'kmu_degree': 'Bachelor of Chemistry',
    'kmu_school': 'Kaohsiung Medical University',
    'kmu_period': '2019 - 2023',
    'kmu_description': 'Majored in Chemistry with cancer biomarker research experience. The analytical, hypothesis-driven mindset from lab work directly informs how I approach software architecture and complex problem-solving today.',
    
    // Projects 頁面
    'projects_page_title': 'Projects',
    'projects_page_description': 'Eight projects spanning AI learning, a social map, mobile apps, business systems, and education tools. Open a project to see the work and implementation.',
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
    'contact_description': 'Feel free to reach out to me for project inquiries or just to say hello. I\'m always open to discussing new projects, creative ideas or opportunities to be part of your vision.',

    // 終端機文字
    'term_welcome': 'Pierre Contact System v2.0.0',
    'term_initial_help': 'Type "help" for available commands, or "start" to send a message.',
    'term_available_commands': 'Available commands:',
    'term_cmd_start': '  start    - Start the secure messaging protocol',
    'term_cmd_clear': '  clear    - Clear terminal screen',
    'term_cmd_whoami': '  whoami   - Display current user',
    'term_initializing': 'Initializing secure connection...',
    'term_enter_name': 'Please enter your name:',
    'term_enter_email': 'Enter your email address:',
    'term_enter_subject': 'Enter message subject:',
    'term_enter_message': 'Enter your message:',
    'term_name_empty': 'Name cannot be empty.',
    'term_invalid_email': 'Invalid email format.',
    'term_subject_empty': 'Subject cannot be empty.',
    'term_message_empty': 'Message cannot be empty.',
    'term_ready_send': 'Ready to send. Type "yes" to confirm or "no" to cancel.',
    'term_encrypting': 'Encrypting packet... [OK]',
    'term_handshake': 'Establishing handshake... [OK]',
    'term_success': 'Message transmitted successfully.',
    'term_connection_closed': 'Connection closed.',
    'term_restart': 'Type "start" to send another message.',
    'term_failed': 'Transmission failed',
    'term_error_failed': 'Error: Transmission failed. Please try again later.',
    'term_cancelled': 'Operation cancelled.',
    'term_cmd_not_found': 'Command not found:',
    'term_confirm_yes': 'yes'
  },
  zh: {
    // 頁面頭部
    'iam': '我是',
    'fullname': 'Pierre Chen',
    'description': '我在 Aiii.AI 擔任 AI 應用開發實習生，也參與 Dogtor 與 MapIt 的產品開發。Dogtor 累積超過 7,000 位用戶；我的工作涵蓋 Flutter、FastAPI、資料系統與產品體驗。',
    'view_portfolio': '查看我的作品',
    'contact_me': '聯繫我',
    
    // 作品集區塊
    'my_portfolio': '我的作品集',
    'portfolio_description': '從 Dogtor、MapIt 專題到 iOS 與企業工具，這些作品呈現我參與的問題、實際分工與技術實作。',
    'view_all_projects': '查看所有作品',
    'view_details': '查看詳情',
    
    // 專案狀態
    'completed': '已完成',
    'in_progress': '進行中',
    'planned': '計劃中',
    
    // 頁腳
    'about_me': '開發行動應用、網頁平台與 AI 學習工具，參與產品從構想到發布的過程。',
    'quick_links': '快速連結',
    'home': '首頁',
    'portfolio': '作品集',
    'about': '關於我',
    'contact': '聯絡',
    'contact_info': '聯絡資訊',
    'rights_reserved': '版權所有',
    
    // About 頁面
    'about_page_title': '關於我',
    'about_page_description': '從化學研究轉向資訊管理與 AI 應用開發，累積產品、資料與行動端的實作經驗。',
    'who_am_i': '我是誰',
    'about_intro_1': '嗨，我是 Pierre，目前在 Aiii.AI 擔任 AI 應用開發實習生，也是 Dogtor 的共同創辦人與軟體工程師。Dogtor 已累積超過 7,000 位用戶，曾登上 App Store 教育類第 4 名。',
    'about_intro_2': '我從化學研究走進資訊管理。研究訓練讓我習慣先釐清問題、整理資料流程，再設計系統並反覆驗證產品決策。',
    'about_intro_3': '曾在皓談心理科技投入後端 API 與合成資料研究；目前也參與 MapIt 臺大資管專題，把餐廳連結轉成可與好友分享的地圖收藏，並透過精湛教育開發客戶與教學工具。',
    'work_experience': '工作經歷',
    'experience_and_projects': '經歷與產品',
    'education': '教育背景',
    'skills': '專業技能',
    'frontend_dev': '前端開發',
    'backend_dev': '後端開發',
    'mobile_dev': '移動開發',
    'other_skills': '其他技能',
    
    // 工作經歷詳細內容
    'aiii_position': 'AI 應用開發實習生',
    'aiii_company': 'Aiii.AI',
    'aiii_period': '2026年9月 - 現在',
    'aiii_summary': '於台北參與 AI 應用開發實習。',
    'akira_position': '軟體工程實習生',
    'akira_company': '皓談心理科技',
    'akira_location': '台北，台灣',
    'akira_period': '2025年10月 - 2026年1月',
    'akira_description': '專注於後端 API 開發與機器學習資料增強的軟體工程實習生。',
    'akira_achievement_1': '建置用戶資料管理與 Firebase 簡訊驗證 API，包含資料庫結構與驗證流程',
    'akira_achievement_2': '研究模型訓練與評估用的合成資料及文本探勘，涵蓋生成方法、標註與流程設計',
    'akira_achievement_3': '跨職能協作前端工程師，定義 API 規格、審查 QA 檢查清單，並建立高效的前後端整合工作流程',
    
    'dogtor_position': '共同創辦人暨軟體工程師',
    'dogtor_company': 'SuperB Software Technology — DOGTOR 逗課',
    'dogtor_period': '2026年4月 - 現在',
    'dogtor_description': '共同創辦 Dogtor，開發 AI 功能、後端資料系統與學生學習產品。',
    'dogtor_achievement_1': 'Dogtor 累積超過 7,000 位用戶、每月 2,600 位活躍用戶，曾登上 App Store 教育類第 4 名',
    'dogtor_achievement_2': '負責知識點模型、LLM 編排、事件蒐集、FastAPI API，以及 Cloud Run／Cloud SQL 部署',
    'dogtor_achievement_3': '開發付費家長分析功能，將學習資料轉成 AI 弱點分析與個人化建議',
    
    'superb_position': '創辦人暨技術開發',
    'superb_company': '精湛教育／精湛資訊工作室',
    'superb_period': '2023年8月 - 現在',
    'superb_description': '創辦教育與軟體團隊，交付客戶專案，並開發教學營運自動化工具。',
    'superb_achievement_1': '創辦並帶領 20 人教育與軟體團隊',
    'superb_achievement_2': '交付超過 10 個教育與軟體客戶專案',
    'superb_achievement_3': '以 Python、LINE 與 Google Sheets 開發營運及學習進度追蹤自動化工具',
    
    // 教育背景
    'ntu_degree': '資訊管理學士',
    'ntu_school': '國立台灣大學',
    'ntu_period': '2023年 - 預計2026年12月',
    'ntu_description': '主修資訊管理，修習軟體工程、資料庫系統、深度學習與人機互動等課程，積極參與校內外程式設計競賽與應用專題開發。',
    'ntu_achievement_1': '開發多個 AI 教育與社會影響應用專案',
    'ntu_achievement_2': '擔任「災害風險管理」課程助教',
    'ntu_achievement_3': '擔任校內冬令營講師，教授溝通與領導技巧',
    
    'kmu_degree': '醫藥化學學士',
    'kmu_school': '高雄醫學大學',
    'kmu_period': '2019年 - 2023年',
    'kmu_description': '主修化學，進行癌症生物標記分析研究。實驗室培養的假設驅動、系統化分析思維，直接影響了我現在對軟體架構與複雜問題拆解的方式。',
    
    // Projects 頁面
    'projects_page_title': '專案作品',
    'projects_page_description': '收錄八個 AI 學習、社交地圖、行動應用、企業系統與教育工具專案。點進作品查看開發內容與實作方式。',
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
    'contact_description': '無論是專案邀約還是打聲招呼，都歡迎與我聯繫。我一直樂於討論新專案、創意想法或加入您願景的機會。',

    // 終端機文字
    'term_welcome': 'Pierre 聯絡系統 v2.0.0',
    'term_initial_help': '輸入 "help" 查看可用指令，或輸入 "start" 開始發送訊息。',
    'term_available_commands': '可用指令:',
    'term_cmd_start': '  start    - 啟動安全訊息協定',
    'term_cmd_clear': '  clear    - 清除終端機螢幕',
    'term_cmd_whoami': '  whoami   - 顯示目前使用者',
    'term_initializing': '正在初始化安全連線...',
    'term_enter_name': '請輸入您的姓名:',
    'term_enter_email': '請輸入您的電子郵件:',
    'term_enter_subject': '請輸入訊息主旨:',
    'term_enter_message': '請輸入您的訊息:',
    'term_name_empty': '姓名不能為空。',
    'term_invalid_email': '無效的電子郵件格式。',
    'term_subject_empty': '主旨不能為空。',
    'term_message_empty': '訊息不能為空。',
    'term_ready_send': '準備發送。輸入 "yes" 確認或 "no" 取消。',
    'term_encrypting': '正在加密封包... [OK]',
    'term_handshake': '正在建立握手... [OK]',
    'term_success': '訊息傳輸成功。',
    'term_connection_closed': '連線已關閉。',
    'term_restart': '輸入 "start" 發送另一則訊息。',
    'term_failed': '傳輸失敗',
    'term_error_failed': '錯誤：傳輸失敗。請稍後再試。',
    'term_cancelled': '操作已取消。',
    'term_cmd_not_found': '找不到指令：',
    'term_confirm_yes': 'yes'
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
