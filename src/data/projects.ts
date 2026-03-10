export interface Project {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  fullDescription: {
    en: string;
    zh: string;
  };
  imageUrl: string;
  status: 'completed' | 'in-progress' | 'planned';
  date: {
    en: string;
    zh: string;
  };
  skills: {
    name: string;
    color: string;
  }[];
  features?: {
    en: string[];
    zh: string[];
  };
  milestones?: {
    en: {
      title: string;
      description: string;
      type: 'achievement' | 'skill' | 'learning';
      icon?: string;
    }[];
    zh: {
      title: string;
      description: string;
      type: 'achievement' | 'skill' | 'learning';
      icon?: string;
    }[];
  };
  githubUrl?: string;
  demoUrl?: string;
  appStoreUrl?: string;
  featured?: boolean;
  viewLiveUrl?: string;
  viewCodeUrl?: string;
  youtubeVideoId?: string;
  galleryImages?: string[];
}

export const projects: Project[] = [
  {
    id: 'dogtor',
    title: {
      en: 'Dogtor AI Learning Assistant',
      zh: 'Dogtor AI 學習助教'
    },
    description: {
      en: 'An AI-powered learning application designed for high school students, offering intelligent question generation and error tracking.',
      zh: '專為國高中生設計的 AI 學習應用，提供智慧題目生成與錯題追蹤功能。'
    },
    fullDescription: {
      en: `
        Dogtor is an AI-powered learning app that helps high school students practice effectively by generating personalized questions and tracking their learning progress.
        
        I spearheaded the entire system design and development, including:
        - AI engineering and deep learning model training for personalized question generation
        - FastAPI backend with RESTful APIs and automatic documentation
        - MySQL database schema for error tracking and learning analytics
        - Cloud deployment on Google Cloud Run and Cloud SQL for scalability
        
        Dogtor not only generates questions tailored to each student's weak points but also provides instant feedback, helping students focus on their learning gaps.
      `,
      zh: `
        Dogtor 是一款 AI 輔助學習應用，專為國高中生打造，能依據學生學習情況生成個人化練習題，並追蹤學習進度。
        
        我主導整體系統架構與開發，負責：
        - AI 工程與深度學習模型訓練，用於個人化題目生成
        - FastAPI 後端建構 RESTful API 並自動生成文件
        - MySQL 資料庫設計，追蹤錯題紀錄與學習分析
        - GCP Cloud Run 與 Cloud SQL 雲端部署，確保系統可擴展性與穩定性
        
        Dogtor 讓學生根據自身弱點練習題目，並即時收到反饋，聚焦學習成效，提升學習動力。
      `
    },
    imageUrl: '/projects/dt.jpg',
    status: 'completed',
    date: {
      en: '2025 - Present',
      zh: '2025年 - 現在'
    },
    demoUrl: 'https://dogtor.superb-tutor.com/',
    appStoreUrl: 'https://apps.apple.com/tw/app/dogtor-%E9%80%97%E8%AA%B2/id6751773627',
    skills: [
      { name: 'Flutter', color: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
      { name: 'FastAPI', color: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' },
      { name: 'MySQL', color: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' },
      { name: 'GCP Cloud Run', color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
      { name: 'Cloud SQL', color: 'bg-purple-600/20 text-purple-300 border border-purple-600/30' }
    ],
    features: {
      en: [
        'AI question generation tailored to student learning gaps',
        'Error tracking and personalized practice recommendations',
        'GCP Cloud Run + Cloud SQL deployment for scalability'
      ],
      zh: [
        'AI 題目生成，針對學生弱點量身打造',
        '錯題紀錄與個人化練習推薦',
        'GCP Cloud Run + Cloud SQL 雲端部署，支援高可擴展性'
      ]
    },
    milestones: {
      en: [
        {
          title: 'Led Full-Stack AI Application Development',
          description: 'Designed and built the entire AI learning system, integrating AI question generation, backend, database, and frontend.',
          type: 'achievement',
          icon: '🚀'
        },
        {
          title: 'Mastered Cloud Infrastructure',
          description: 'Deployed scalable backend and database on Google Cloud Run and Cloud SQL.',
          type: 'skill',
          icon: '☁️'
        },
        {
          title: 'Built RESTful APIs with FastAPI',
          description: 'Developed efficient, well-documented APIs with FastAPI, enabling seamless communication between frontend and backend.',
          type: 'learning',
          icon: '⚡'
        },
        {
          title: 'Database Design & Analytics',
          description: 'Designed MySQL schema for learning progress tracking, enabling error analysis and personalized learning paths.',
          type: 'skill',
          icon: '🗄️'
        },
        {
          title: 'App Store Launch',
          description: 'Successfully launched on App Store, ranked #4 in Education category.',
          type: 'achievement',
          icon: '🏆'
        }
      ],
      zh: [
        {
          title: '主導全端 AI 應用開發',
          description: '設計並開發完整 AI 學習系統，整合 AI 題目生成、後端、資料庫與前端。',
          type: 'achievement',
          icon: '🚀'
        },
        {
          title: '精通雲端架構部署',
          description: '使用 Google Cloud Run 與 Cloud SQL 部署具可擴展性的後端與資料庫。',
          type: 'skill',
          icon: '☁️'
        },
        {
          title: '打造 FastAPI RESTful API',
          description: '開發高效能、帶有自動文件的 REST API，串接前後端功能。',
          type: 'learning',
          icon: '⚡'
        },
        {
          title: '資料庫設計與學習分析',
          description: '設計 MySQL 資料庫結構，支援錯題分析與個人化學習路徑。',
          type: 'skill',
          icon: '🗄️'
        },
        {
          title: 'App Store 上架',
          description: '成功上架 App Store，教育類排名第 4 名。',
          type: 'achievement',
          icon: '🏆'
        }
      ]
    },
    galleryImages: [
      '/projects/dogtor/2.jpg',
      '/projects/dogtor/8.jpg',
      '/projects/dogtor/12.jpg',
      '/projects/dogtor/16.jpg'
    ]
  },
  {
    id: '200ok',
    title: {
      en: '200OK Software Outsourcing Platform',
      zh: '200OK 軟體外包接案平台'
    },
    description: {
      en: 'A professional software outsourcing platform connecting clients with engineers through transparent matching processes and AI-assisted mechanisms.',
      zh: '專業的軟體外包接案平台，連結需求方與工程師，透過透明媒合流程與 AI 輔助機制提升專案合作品質。'
    },
    fullDescription: {
      en: `
        200OK is a professional software outsourcing platform designed to connect clients with engineers, improving project collaboration quality and efficiency through transparent matching processes and AI-assisted mechanisms.
        
        As a team member (Group 18), I contributed to the full-stack development of this platform, which supports complete workflows including project posting, proposal submission, real-time communication, and token-based payment systems.
        
        Key responsibilities and features I worked on:
        - **Authentication & Authorization**: Email registration with verification, Google OAuth integration via NextAuth.js
        - **Project Management**: Full CRUD operations for project posting, browsing, and proposal management
        - **Real-time Communication**: Socket.io integration for instant messaging between clients and engineers
        - **Token System**: Digital token management for viewing proposals, submitting proposals, and unlocking contact information
        - **AI Integration**: Google Gemini API integration for intelligent project matching and recommendations
        
        The platform simulates real-world commercial platform operations with comprehensive business logic including payment flows, status machines, and automated refund mechanisms.
      `,
      zh: `
        200OK 是一個專業的軟體外包接案平台，目標在於連結需求方與工程師，透過透明的媒合流程與 AI 輔助機制，提升專案合作品質與效率。
        
        作為團隊成員（Group 18），我參與了這個平台的全端開發，支援完整的發案、接案、即時溝通與代幣付費流程。
        
        我負責的主要功能與開發項目：
        - **認證與授權**：Email 註冊與信箱驗證、透過 NextAuth.js 整合 Google OAuth
        - **專案管理**：完整的專案發佈、瀏覽與提案管理 CRUD 操作
        - **即時通訊**：整合 Socket.io 實現發案者與接案者間的即時訊息傳送
        - **代幣系統**：數位代幣管理機制，用於查看提案、提交提案與解鎖聯絡方式
        - **AI 整合**：整合 Google Gemini API 提供智慧專案媒合與推薦功能
        
        平台模擬實際商業平台的運作模式，包含完整的付費機制、狀態機設計與自動退款流程等商業邏輯。
      `
    },
    imageUrl: '/projects/200okp.png',
    status: 'completed',
    date: {
      en: 'October 2025 - December 2025',
      zh: '2025年10月 - 2025年12月'
    },
    skills: [
      { name: 'Next.js', color: 'bg-slate-500/20 text-slate-400 border border-slate-500/30' },
      { name: 'React', color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
      { name: 'TypeScript', color: 'bg-blue-600/20 text-blue-300 border border-blue-600/30' },
      { name: 'Tailwind CSS', color: 'bg-teal-500/20 text-teal-400 border border-teal-500/30' },
      { name: 'FastAPI', color: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' },
      { name: 'PostgreSQL', color: 'bg-purple-700/20 text-purple-300 border border-purple-700/30' },
      { name: 'Socket.io', color: 'bg-orange-500/20 text-orange-400 border border-orange-500/30' },
      { name: 'NextAuth.js', color: 'bg-green-500/20 text-green-400 border border-green-500/30' }
    ],
    features: {
      en: [
        'Email registration with verification & Google OAuth login',
        'Complete project posting and proposal submission workflows',
        'Real-time messaging system with Socket.io',
        'Token-based payment system for proposals and contact unlocking',
        'AI-powered project matching with Google Gemini API',
        'Automated refund mechanism (7-day auto-refund for unresponded proposals)'
      ],
      zh: [
        'Email 註冊驗證與 Google OAuth 快速登入',
        '完整的發案與提案提交流程',
        'Socket.io 即時訊息溝通系統',
        '代幣付費機制，用於查看提案與解鎖聯絡方式',
        'Google Gemini API 智慧專案媒合推薦',
        '自動化退款機制（7 日內無回應自動退款）'
      ]
    },
    milestones: {
      en: [
        {
          title: 'Full-Stack Platform Development',
          description: 'Collaborated on building a complete commercial outsourcing platform from scratch, handling complex business logic including payment flows and state management.',
          type: 'achievement',
          icon: '🚀'
        },
        {
          title: 'Real-time Communication Integration',
          description: 'Implemented Socket.io for instant messaging, enabling seamless communication between clients and engineers within the platform.',
          type: 'skill',
          icon: '💬'
        },
        {
          title: 'Authentication & Authorization System',
          description: 'Integrated NextAuth.js with email verification and Google OAuth, ensuring secure user authentication and authorization.',
          type: 'skill',
          icon: '🔐'
        },
        {
          title: 'Token-based Payment System',
          description: 'Developed a digital token management system for viewing proposals, submitting proposals, and unlocking contact information with automated refund logic.',
          type: 'learning',
          icon: '💰'
        },
        {
          title: 'AI-powered Matching',
          description: 'Integrated Google Gemini API to provide intelligent project recommendations and matching between clients and engineers.',
          type: 'learning',
          icon: '🤖'
        }
      ],
      zh: [
        {
          title: '全端平台開發',
          description: '參與從零開始建立完整的商業外包接案平台，處理包含付費流程與狀態管理等複雜商業邏輯。',
          type: 'achievement',
          icon: '🚀'
        },
        {
          title: '即時通訊系統整合',
          description: '實作 Socket.io 即時訊息功能，讓發案者與接案者能在平台內無縫溝通。',
          type: 'skill',
          icon: '💬'
        },
        {
          title: '認證與授權系統',
          description: '整合 NextAuth.js 與 Email 驗證、Google OAuth，確保使用者認證與授權的安全性。',
          type: 'skill',
          icon: '🔐'
        },
        {
          title: '代幣付費系統',
          description: '開發數位代幣管理系統，用於查看提案、提交提案與解鎖聯絡方式，並實作自動退款邏輯。',
          type: 'learning',
          icon: '💰'
        },
        {
          title: 'AI 智慧媒合',
          description: '整合 Google Gemini API 提供智慧專案推薦與媒合功能，協助發案者與接案者快速配對。',
          type: 'learning',
          icon: '🤖'
        }
      ]
    },
    youtubeVideoId: '3eJiVbF_AcI'
  },
  {
    id: 'aiplanner',
    title: {
      en: 'aiPlanner Smart Calendar',
      zh: 'aiPlanner 智慧行程助理'
    },
    description: {
      en: 'An iOS-native smart calendar app that uses natural language input and AI to simplify event creation and daily planning.',
      zh: '一款 iOS 原生智慧行程應用，透過自然語言輸入與 AI，讓事件建立與日程規劃更直覺。'
    },
    fullDescription: {
      en: `
        aiPlanner is a smart calendar app built exclusively for iOS, designed to streamline how users create and manage schedules.  
        
        With natural language processing (NLP) at its core, users can simply type or speak phrases like *"Dinner with John next Friday at 7 PM"* and have events automatically parsed and added to their calendar.  
        
        I designed and developed aiPlanner with the following architecture:
        - Swift-based iOS app with Apple-style UI
        - Natural Language Processing for event parsing
        - Supabase backend for authentication and optional shared event storage
        - Local iCloud sync for private, personal data
        
        aiPlanner provides users with a frictionless way to manage their daily lives while ensuring both **privacy** and **usability**.
      `,
      zh: `
        aiPlanner 是一款專為 iOS 打造的智慧行程應用，目標是讓使用者以更直覺的方式規劃與管理行程。  
        
        核心功能是自然語言處理 (NLP)，使用者只需輸入或說出 *「下週五晚上七點和 John 吃晚餐」*，事件就會自動解析並加入行事曆。  
        
        我主導了系統設計與開發，包含：
        - 使用 Swift 開發 iOS 原生應用，維持 Apple 風格的簡潔設計
        - 導入自然語言處理，支援快速解析事件
        - Supabase 提供帳號驗證與共享事件儲存
        - iCloud 本地同步，保障個人資料隱私
        
        aiPlanner 讓使用者以最自然的方式管理日常，兼顧 **隱私性** 與 **便利性**。  
      `
    },
    imageUrl: '/projects/aip.jpg',
    status: 'completed',
    date: {
      en: 'July 2025 - August 2025',
      zh: '2025年7月 - 2025年8月'
    },
    skills: [
      { name: 'Swift', color: 'bg-orange-500/20 text-orange-400 border border-orange-500/30' },
      { name: 'Natural Language Processing', color: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' },
      { name: 'Supabase', color: 'bg-green-500/20 text-green-400 border border-green-500/30' },
      { name: 'iCloud', color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
      { name: 'iOS Development', color: 'bg-gray-500/20 text-gray-400 border border-gray-500/30' }
    ],
    features: {
      en: [
        'Natural language event creation (text & voice)',
        'Swift-based iOS app with minimalist UI',
        'Private iCloud sync for personal events',
        'Supabase backend for authentication & shared events'
      ],
      zh: [
        '自然語言事件建立（文字 & 語音）',
        '以 Swift 開發的 iOS 原生應用與極簡 UI',
        'iCloud 私有同步，保障個人事件',
        'Supabase 後端支援帳號驗證與共享事件'
      ]
    },
    milestones: {
      en: [
        {
          title: 'Built iOS-native Calendar App',
          description: 'Developed aiPlanner using Swift with Apple-style UI and smooth user experience.',
          type: 'achievement',
          icon: '📱'
        },
        {
          title: 'Implemented Natural Language Parsing',
          description: 'Enabled users to create events with simple text or voice inputs.',
          type: 'skill',
          icon: '🗣️'
        },
        {
          title: 'Integrated Supabase',
          description: 'Added authentication and shared event storage via Supabase.',
          type: 'learning',
          icon: '🛠️'
        },
        {
          title: 'Enhanced Privacy with iCloud',
          description: 'Leveraged iCloud sync for secure, private personal events.',
          type: 'skill',
          icon: '🔒'
        }
      ],
      zh: [
        {
          title: '開發 iOS 原生行事曆應用',
          description: '以 Swift 打造 aiPlanner，提供 Apple 風格的流暢體驗。',
          type: 'achievement',
          icon: '📱'
        },
        {
          title: '導入自然語言解析',
          description: '支援以簡單文字或語音快速建立事件。',
          type: 'skill',
          icon: '🗣️'
        },
        {
          title: '整合 Supabase',
          description: '透過 Supabase 提供帳號驗證與共享事件儲存。',
          type: 'learning',
          icon: '🛠️'
        },
        {
          title: '強化隱私與 iCloud 同步',
          description: '利用 iCloud 確保個人事件安全私密同步。',
          type: 'skill',
          icon: '🔒'
        }
      ]
    },
    galleryImages: [
      '/projects/aip1.jpg',
      '/projects/aip2.jpg',
      '/projects/aip3.jpg',
      '/projects/aip4.jpg'
    ]
  },
  {
    id: 'erp-system',
    title: {
      en: 'Zhongxing Pest Control ERP System',
      zh: '中星害蟲防治 ERP 系統'
    },
    description: {
      en: 'An enterprise resource planning (ERP) system designed for Zhongxing Environmental Company to manage customers, work orders, scheduling, and business operations.',
      zh: '為中星環保公司設計的企業資源規劃 (ERP) 系統，整合客戶管理、工單處理、排程與業務營運管理。'
    },
    fullDescription: {
      en: `
        This ERP system was developed for Zhongxing Pest Control to streamline their business operations, including customer management, work order scheduling, task tracking, and reporting.
        
        I led the full-stack development, using React with TypeScript for the frontend and Firebase Authentication + Firestore for the backend. 
        The system supports:
        - Customer profiles and contact records
        - Work order management (pest control visits, service details)
        - Scheduling and reminders for field staff
        - Task tracking with status updates
        - Business analytics reports for decision-making
        
        This project was my first time handling real-world business data, designing a system that directly supports frontline operations.
      `,
      zh: `
        這套 ERP 系統專為中星害蟲防治公司設計，目的是簡化業務營運流程，包括客戶管理、工單處理、行程安排、任務追蹤與報表生成。
        
        我主導整體前後端開發，前端使用 React 搭配 TypeScript，後端使用 Firebase Authentication 與 Firestore。
        系統功能包含：
        - 客戶資料與聯絡紀錄管理
        - 工單管理（施工安排、服務細節）
        - 前線人員排程與提醒
        - 任務追蹤與狀態更新
        - 業務決策用的統計分析報表
        
        這是我第一次處理真實商業資料，設計並實作一個直接支援公司前線營運的系統。
      `
    },
    imageUrl: '/projects/erp.jpg',
    status: 'completed',
    date: {
      en: 'June 2025',
      zh: '2025年6月'
    },
    skills: [
      { name: 'React', color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
      { name: 'TypeScript', color: 'bg-blue-600/20 text-blue-300 border border-blue-600/30' },
      { name: 'Firebase Authentication', color: 'bg-amber-500/20 text-amber-400 border border-amber-500/30' },
      { name: 'Firestore', color: 'bg-purple-400/20 text-purple-300 border border-purple-400/30' }
    ],
    features: {
      en: [
        'Customer profiles and contact management',
        'Work order creation, scheduling, and task status tracking',
        'Automated reminders for field staff',
        'Business analytics and reporting for decision-making',
        'Real-time data sync with Firebase'
      ],
      zh: [
        '客戶檔案與聯絡管理',
        '工單建立、排程與任務狀態追蹤',
        '前線人員自動提醒',
        '業務決策統計分析報表',
        'Firebase 即時資料同步'
      ]
    },
    milestones: {
      en: [
        {
          title: 'First End-to-End ERP System',
          description: 'Designed and developed a complete ERP system tailored for a real-world pest control business.',
          type: 'achievement',
          icon: '💼'
        },
        {
          title: 'Firebase Ecosystem Mastery',
          description: 'Utilized Firebase Authentication for secure login, Firestore for real-time data, and Firebase Rules for access control.',
          type: 'skill',
          icon: '🔥'
        },
        {
          title: 'TypeScript in Production',
          description: 'Implemented TypeScript in a real-world application, ensuring type safety and reducing runtime errors.',
          type: 'skill',
          icon: '📝'
        },
        {
          title: 'Business Workflow Understanding',
          description: 'Gained deep understanding of ERP workflows in the pest control industry, including scheduling, field operations, and reporting.',
          type: 'learning',
          icon: '📊'
        }
      ],
      zh: [
        {
          title: '首個端到端 ERP 系統',
          description: '設計並開發專為真實害蟲防治公司量身打造的完整 ERP 系統。',
          type: 'achievement',
          icon: '💼'
        },
        {
          title: 'Firebase 生態系統精通',
          description: '掌握 Firebase Authentication 用戶登入、Firestore 即時資料管理，以及 Firebase Rules 權限控管。',
          type: 'skill',
          icon: '🔥'
        },
        {
          title: 'TypeScript 生產環境應用',
          description: '於真實專案中導入 TypeScript，確保型別安全並降低執行時錯誤。',
          type: 'skill',
          icon: '📝'
        },
        {
          title: '商業流程理解',
          description: '深入了解 ERP 系統在害蟲防治產業的實際運作，包括排程、外勤作業與報表分析。',
          type: 'learning',
          icon: '📊'
        }
      ]
    },
    // githubUrl: 'https://github.com/yourusername/erp-system',
    youtubeVideoId: 'ViVosgnhEbM', // Rick Astley - Never Gonna Give You Up
  },
  {
    id: 'superbot',
    title: {
      en: 'SuperBot: Administrative Automation Tool',
      zh: 'SuperBot：行政自動化工具'
    },
    description: {
      en: 'An automation tool that streamlines administrative workflows for educational institutions, handling tasks like class check-ins, assignment tracking, and attendance calculation.',
      zh: '一款協助教育機構數位化行政工作的自動化工具，支援上課打卡、作業指派與時數統計等功能。'
    },
    fullDescription: {
      en: `
        SuperBot is an administrative automation system designed for educational settings. It helps teachers and administrators save time by automating routine tasks such as:
        - Sending class reminders via LINE
        - Assigning and tracking homework tasks
        - Handling check-ins for teachers and students
        - Calculating and exporting attendance hours
  
        I independently developed SuperBot using:
        - **Python + LINE API** for chat-based user interaction
        - **Google Sheets API** for data storage and real-time synchronization
        - **Heroku deployment** for public accessibility
  
        SuperBot significantly reduced manual work, enabling teachers to focus more on teaching while ensuring accurate administrative records.
      `,
      zh: `
        SuperBot 是一套專為教育場景設計的行政自動化工具，旨在協助教師與行政人員減少日常繁瑣工作，讓管理更高效。功能包含：
        - 透過 LINE 發送上課提醒
        - 指派作業與追蹤學生進度
        - 處理教師與學生的上課打卡
        - 計算並匯出出席時數
  
        我獨立開發並完成了：
        - 使用 **Python + LINE API** 建立對話式互動介面
        - 整合 **Google Sheets API** 作為資料儲存與即時同步平台
        - 部署於 **Heroku** 供公開使用
  
        SuperBot 大幅降低行政負擔，讓教師能專注於教學，並確保行政紀錄正確且自動化。
      `
    },
    imageUrl: '/projects/sb.jpg',
    status: 'completed',
    date: {
      en: 'July 2024',
      zh: '2024年7月'
    },
    skills: [
      { name: 'Python', color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
      { name: 'LINE API', color: 'bg-green-600/20 text-green-400 border border-green-600/30' },
      { name: 'Google Sheets API', color: 'bg-blue-600/20 text-blue-300 border border-blue-600/30' },
      { name: 'Heroku', color: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' }
    ],
    features: {
      en: [
        'Class reminders and notifications',
        'Homework assignment and tracking',
        'Attendance check-in and timestamp logging',
        'Automated hour calculation and reporting'
      ],
      zh: [
        '課程提醒與通知',
        '作業指派與進度追蹤',
        '出勤打卡與時間記錄',
        '自動化時數計算與報表產出'
      ]
    },
    milestones: {
      en: [
        {
          title: 'Independent System Development',
          description: 'Designed, built, and deployed the entire system independently, from backend logic to LINE chatbot integration.',
          type: 'achievement',
          icon: '💻'
        },
        {
          title: 'Google Sheets Integration',
          description: 'Used Google Sheets as a real-time database to enable collaborative data management.',
          type: 'skill',
          icon: '📊'
        },
        {
          title: 'Deployment on Heroku',
          description: 'Learned and applied cloud deployment techniques, making the system publicly accessible.',
          type: 'skill',
          icon: '☁️'
        },
        {
          title: 'Automating Admin Workflows',
          description: 'Automated routine administrative tasks, significantly improving efficiency for teachers and staff.',
          type: 'achievement',
          icon: '⚙️'
        }
      ],
      zh: [
        {
          title: '獨立開發全系統',
          description: '從後端邏輯到 LINE 聊天機器人整合，獨立設計、開發與部署整個系統。',
          type: 'achievement',
          icon: '💻'
        },
        {
          title: 'Google Sheets 整合',
          description: '將 Google Sheets 作為即時資料庫，支援多人協作的數據管理。',
          type: 'skill',
          icon: '📊'
        },
        {
          title: 'Heroku 雲端部署',
          description: '學習並實作雲端部署技術，讓系統可供公開訪問。',
          type: 'skill',
          icon: '☁️'
        },
        {
          title: '行政流程自動化',
          description: '自動化處理例行行政工作，大幅提升教師與行政人員的效率。',
          type: 'achievement',
          icon: '⚙️'
        }
      ]
    },
    // githubUrl: 'https://github.com/yourusername/superbot'
  },
  {
    id: 'seven-peach',
    title: {
      en: 'Seven Peach: Senior Social App',
      zh: '七桃：銀髮交友應用'
    },
    description: {
      en: 'A social and activity matching platform designed to help seniors expand their social circles and enjoy an active lifestyle.',
      zh: '為熟齡族群打造的交友與活動媒合平台，協助長輩拓展社交圈、享受積極生活。'
    },
    fullDescription: {
      en: `
        Seven Peach is a mobile application that empowers seniors to build meaningful connections through shared activities. By offering a curated activity recommendation system and a user-friendly interface, it helps seniors overcome loneliness and engage in their communities.
  
        As the founder and lead developer, I drove the entire product development process:
        - Designed and implemented the frontend using Flutter with a focus on senior-friendly UX
        - Developed a personalized activity recommendation algorithm based on user interests, social participation, and location proximity
        - Integrated Firebase Authentication and Firestore for seamless user management and data storage
        - Conducted user research and testing with seniors to refine the design and ensure accessibility
  
        Seven Peach is not just an app, but a solution addressing real-world challenges of aging societies, promoting social inclusion and active aging.
      `,
      zh: `
        七桃是一款專為銀髮族設計的行動應用，透過活動媒合幫助長輩拓展社交圈，提升生活幸福感，減緩孤單感，實現社會參與。
  
        身為創辦人與技術負責人，我主導整個產品開發流程：
        - 使用 Flutter 設計並實作前端，專注於熟齡友善的 UX 設計
        - 開發個人化活動推薦演算法，根據用戶興趣、社交參與程度與距離推播活動
        - 整合 Firebase Authentication 與 Firestore，實現使用者管理與資料儲存
        - 進行用戶研究與長輩測試，優化設計，確保無障礙使用體驗
  
        七桃不只是 App，更是針對高齡社會挑戰的解決方案，推動社會共融與積極老化。
      `
    },
    imageUrl: '/projects/sp.jpg',
    status: 'completed',
    date: {
      en: 'August 2024',
      zh: '2024年8月'
    },
    skills: [
      { name: 'Flutter', color: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
      { name: 'Dart', color: 'bg-cyan-600/20 text-cyan-300 border border-cyan-600/30' },
      { name: 'Firebase', color: 'bg-amber-500/20 text-amber-400 border border-amber-500/30' },
      { name: 'UX Research', color: 'bg-green-500/20 text-green-400 border border-green-500/30' },
      { name: 'Algorithm Design', color: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' }
    ],
    features: {
      en: [
        'Curated activity recommendation system for seniors',
        'User-friendly interface designed for accessibility',
        'Firebase-powered authentication and data storage',
        'Focus on community building and social inclusion'
      ],
      zh: [
        '為熟齡族群設計的活動推薦系統',
        '無障礙設計的使用者介面',
        'Firebase 驅動的認證與資料儲存',
        '強調社群建立與社會參與'
      ]
    },
    milestones: {
      en: [
        {
          title: 'Founder & Product Lead',
          description: 'Drove the entire project from ideation to development, leading a cross-functional team and managing product vision.',
          type: 'achievement',
          icon: '👑'
        },
        {
          title: 'Senior-Centric UX Design',
          description: 'Designed a user interface specifically for older adults, ensuring accessibility, simplicity, and usability.',
          type: 'skill',
          icon: '🎨'
        },
        {
          title: 'Recommendation System Integration',
          description: 'Developed a personalized activity recommendation algorithm that considers user interests, friends\\\' participation, and location proximity.',
          type: 'learning',
          icon: '🤖'
        },
        {
          title: 'Social Innovation Impact',
          description: 'Addressed real-world aging society challenges by creating a solution that promotes active aging and social engagement.',
          type: 'achievement',
          icon: '❤️'
        }
      ],
      zh: [
        {
          title: '創辦人與產品負責人',
          description: '從概念發想到開發實作全程主導專案，領導跨領域團隊並管理產品方向。',
          type: 'achievement',
          icon: '👑'
        },
        {
          title: '銀髮友善 UX 設計',
          description: '專為熟齡族群設計的使用者介面，確保無障礙、簡潔與易用性。',
          type: 'skill',
          icon: '🎨'
        },
        {
          title: '推薦系統整合',
          description: '開發活動推薦演算法，根據用戶興趣、朋友參與度與地點距離進行推播。',
          type: 'learning',
          icon: '🤖'
        },
        {
          title: '社會創新影響力',
          description: '針對高齡社會挑戰提出解決方案，推動積極老化與社會參與。',
          type: 'achievement',
          icon: '❤️'
        }
      ]
    },
    // githubUrl: 'https://github.com/yourusername/seven-peach',
    youtubeVideoId: 'gFHqAii7p5Y',
  },
  {
    id: 'lakycarcar',
    title: {
      en: 'LakyCarcar: Puzzle Game Project',
      zh: 'LakyCarcar：解謎遊戲專案'
    },
    description: {
      en: 'A logic-based puzzle game inspired by "Get Out the Parking Lot", challenging players to solve parking dilemmas with minimal moves.',
      zh: '一款以邏輯為核心的解謎遊戲，靈感來自「Get Out the Parking Lot」，挑戰玩家在最少步數內解決停車困境。'
    },
    fullDescription: {
      en: `
        LakyCarcar is a puzzle game project developed as the final assignment for our C++ programming course. The game challenges players to move cars within a grid-based parking lot to free the target vehicle.
  
        My responsibilities included:
        - **Designing core game logic and data structures** for efficient state representation and move calculation
        - **Implementing memory management and object-oriented design** principles in C++
        - **Developing an interactive UI with SFML**, handling real-time mouse input and smooth visual feedback
        - Adding features like reset, save/load progress, and custom difficulty levels
  
        This project was my first deep dive into graphics programming and memory optimization in C++, significantly strengthening my software engineering foundations.
      `,
      zh: `
        LakyCarcar 是我們 C++ 程式設計課程的期末專案，一款以停車場為主題的解謎遊戲，玩家需在最少步數內移動車輛，解決困境。
  
        我的負責項目包含：
        - **設計遊戲核心邏輯與資料結構**，實現高效的狀態表示與移動計算
        - **運用 C++ 物件導向設計與記憶體管理**，優化遊戲效能
        - **使用 SFML 開發互動式介面**，實現即時滑鼠輸入與流暢的視覺反饋
        - 增加重置、存檔/讀檔進度、自訂難度等功能
  
        這是我首次深入接觸圖形程式設計與 C++ 記憶體最佳化，為我的軟體工程基礎打下了扎實基礎。
      `
    },
    imageUrl: '/projects/lk.jpg',
    status: 'completed',
    date: {
      en: 'January 2024',
      zh: '2024年1月'
    },
    skills: [
      { name: 'C++', color: 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' },
      { name: 'SFML', color: 'bg-orange-600/20 text-orange-300 border border-orange-600/30' },
      { name: 'Data Structures', color: 'bg-green-500/20 text-green-400 border border-green-500/30' },
      { name: 'Memory Management', color: 'bg-red-600/20 text-red-400 border border-red-600/30' }
    ],
    features: {
      en: [
        'Grid-based puzzle logic',
        'Real-time mouse interaction',
        'Save/load progress and custom levels',
        'Dynamic difficulty adjustment'
      ],
      zh: [
        '基於網格的解謎邏輯',
        '即時滑鼠互動操作',
        '儲存/讀取進度與自訂關卡',
        '動態難度調整'
      ]
    },
    milestones: {
      en: [
        {
          title: 'First Game Development Project',
          description: 'Completed my first full-featured game, integrating logic design, graphics programming, and user interaction.',
          type: 'achievement',
          icon: '🎮'
        },
        {
          title: 'C++ Advanced Programming',
          description: 'Applied advanced C++ concepts including object-oriented design, memory management, and custom data structures.',
          type: 'skill',
          icon: '⚙️'
        },
        {
          title: 'Graphics Programming with SFML',
          description: 'Gained hands-on experience building an interactive UI with SFML, handling events, rendering, and user feedback.',
          type: 'learning',
          icon: '🖼️'
        },
        {
          title: 'Collaborative Development Skills',
          description: 'Enhanced teamwork and code collaboration abilities through pair programming and version control.',
          type: 'skill',
          icon: '🤝'
        }
      ],
      zh: [
        {
          title: '首次遊戲開發專案',
          description: '完成第一款完整功能的遊戲，整合邏輯設計、圖形程式設計與使用者互動。',
          type: 'achievement',
          icon: '🎮'
        },
        {
          title: 'C++ 進階程式設計',
          description: '實作 C++ 高階概念，包括物件導向設計、記憶體管理與自訂資料結構。',
          type: 'skill',
          icon: '⚙️'
        },
        {
          title: 'SFML 圖形程式設計',
          description: '實際操作 SFML 建立互動介面，學習事件處理、畫面渲染與使用者反饋。',
          type: 'learning',
          icon: '🖼️'
        },
        {
          title: '團隊合作開發能力',
          description: '透過 pair programming 與版本控制，增進團隊協作與程式碼管理能力。',
          type: 'skill',
          icon: '🤝'
        }
      ]
    },
    // githubUrl: 'https://github.com/yourusername/lakycarcar',
    youtubeVideoId: 'sPTc4_vDMfo',
  }
];
