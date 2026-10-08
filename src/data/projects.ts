import type { IconName } from '@/components/InteractiveIcon';

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
  productStory?: {
    en: { problem: string; approach: string };
    zh: { problem: string; approach: string };
  };
  userFlow?: {
    en: string[];
    zh: string[];
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
      icon?: IconName;
    }[];
    zh: {
      title: string;
      description: string;
      type: 'achievement' | 'skill' | 'learning';
      icon?: IconName;
    }[];
  };
  githubUrl?: string;
  demoUrl?: string;
  appStoreUrl?: string;
  featured?: boolean;
  viewLiveUrl?: string;
  viewCodeUrl?: string;
  youtubeVideoId?: string;
  youtubeIsShort?: boolean;
  galleryImages?: string[];
}

export const projects: Project[] = [
  {
    id: 'mapit',
    title: {
      en: 'MapIt — Restaurant Discovery & Social Map',
      zh: 'MapIt — 餐廳收藏與好友地圖'
    },
    description: {
      en: 'A team capstone app that turns restaurant links into map-based collections, then helps friends share places and decide where to go.',
      zh: '臺大資管團隊專題：將餐廳連結解析為地圖收藏，並透過好友動態、邀約與共同造訪紀錄幫助大家決定去哪裡。'
    },
    fullDescription: {
      en: `
        MapIt is a National Taiwan University Information Management capstone project. It helps people save restaurants they discover in social posts or web links, organize them on a personal map, and plan visits with friends.

        Users can import a link or search for a place. An AI-assisted backend extracts restaurant information; the Flutter app then presents saved places on a Mapbox map. Friends can share places through a feed, invite each other to visit, and keep a record of places they visited together.

        I contributed across the mobile experience and supporting services. My work in the project includes Mapbox integration and map interactions, improvements to the link-parsing prompts and post-processing, and flows for profiles, shared visits, and saved-place performance. This is an ongoing team project, so these contributions sit alongside work by other members.
      `,
      zh: `
        MapIt 是國立臺灣大學資訊管理學系的團隊專題，協助使用者把社群貼文或網頁中看到的餐廳存成個人地圖，整理收藏並和朋友規劃聚餐。

        使用者可以貼上連結或直接搜尋店家；後端協助解析餐廳資訊，Flutter App 再透過 Mapbox 呈現收藏地點。好友之間也能在動態中分享店家、發送邀約，並記錄一起去過的地方。

        我參與行動端體驗與相關服務開發，包括 Mapbox 導入與地圖互動、連結解析提示詞及後處理優化、個人檔案與共同造訪流程，以及收藏地點的效能改善。這是持續開發中的團隊作品，功能由多位成員共同完成。
      `
    },
    imageUrl: '/projects/mapit_cover.webp',
    productStory: {
      en: {
        problem: 'Restaurant recommendations get buried across social posts and saved links. Even after saving them, finding a place that fits the moment and agreeing on it with friends takes another round of searching.',
        approach: 'Turn a link into a place on a personal map, then connect that saved place to discovery, invitations, and shared visit records. The product follows the decision from “that looks good” to “we went there.”'
      },
      zh: {
        problem: '想吃的餐廳散落在社群貼文與收藏連結中；等到要約朋友吃飯時，還得重新翻找、比對和討論。',
        approach: '把連結變成個人地圖上的店家，再串起篩選、好友邀約與共同造訪紀錄，讓「看到想吃」能接到「真的一起去」。'
      }
    },
    userFlow: {
      en: ['Share or paste a restaurant link', 'Review extracted places and save one to the map', 'Find a place with map filters or a friends feed', 'Invite friends or draw from saved places', 'Record the visit together'],
      zh: ['分享或貼上餐廳連結', '檢視解析結果並加入地圖', '用地圖篩選或好友動態找店', '揪朋友或從收藏中轉蛋選店', '記錄一起去過的地方']
    },
    status: 'in-progress',
    date: {
      en: 'Apr 2026 - Present',
      zh: '2026年4月 - 現在'
    },
    skills: [
      { name: 'Flutter', color: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
      { name: 'FastAPI', color: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' },
      { name: 'Mapbox', color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
      { name: 'Supabase', color: 'bg-green-500/20 text-green-400 border border-green-500/30' },
      { name: 'PostgreSQL', color: 'bg-purple-700/20 text-purple-300 border border-purple-700/30' },
      { name: 'OpenAI API', color: 'bg-green-600/20 text-green-300 border border-green-600/30' }
    ],
    features: {
      en: [
        'Import restaurant links and review AI-extracted places',
        'Browse and filter saved places on a personal Mapbox map',
        'Share discoveries in a friends feed and invite friends to visit',
        'Record places visited together and organize collaborative lists'
      ],
      zh: [
        '匯入餐廳連結並檢視 AI 解析出的店家',
        '在個人 Mapbox 地圖瀏覽與篩選收藏',
        '透過好友動態分享店家並發送聚餐邀約',
        '記錄共同造訪的地點並整理協作清單'
      ]
    },
    milestones: {
      en: [
        { title: 'Map experience', description: 'Integrated Mapbox and refined map gestures, saved pins, and place discovery in the Flutter app.', type: 'skill', icon: 'map' },
        { title: 'Link understanding', description: 'Improved prompts and post-processing in the AI-assisted link-to-place pipeline.', type: 'skill', icon: 'link' },
        { title: 'Social and performance flows', description: 'Worked on profiles, shared-visit records, caching, and saved-place loading.', type: 'achievement', icon: 'zap' }
      ],
      zh: [
        { title: '地圖體驗', description: '導入 Mapbox，調整 Flutter 地圖手勢、收藏圖釘與地點探索體驗。', type: 'skill', icon: 'map' },
        { title: '連結理解', description: '優化 AI 輔助連結解析流程的提示詞與後處理。', type: 'skill', icon: 'link' },
        { title: '社交與效能流程', description: '參與個人檔案、共同造訪紀錄、快取及收藏載入改善。', type: 'achievement', icon: 'zap' }
      ]
    }
  },
  {
    id: 'dogtor',
    title: {
      en: 'Dogtor AI Learning Assistant',
      zh: 'DOGTOR 逗課 AI 學習軟體'
    },
    description: {
      en: 'An AI learning companion that helps students keep a study rhythm through practice and feedback; co-built for 7,000+ users.',
      zh: '從補教現場出發的 AI 學伴，透過練習與即時回饋幫學生維持學習節奏；共同打造並累積超過 7,000 位用戶。'
    },
    fullDescription: {
      en: `
        Dogtor (逗課) is an AI learning app for secondary-school students. It combines question practice, error tracking, learning progress, and personalized guidance. The product has reached 7,000+ users and 2,600 monthly active users, and ranked #4 in App Store Education.

        As a co-founder and software engineer, I owned the AI feature lifecycle and much of the production backend and data work: knowledge-point modeling, LLM orchestration, event collection, FastAPI APIs, and deployment on Cloud Run and Cloud SQL.

        I also built paid parent analytics that turns student answers, incorrect choices, and knowledge-point performance into AI-generated weakness analyses and personalized guidance.
      `,
      zh: `
        Dogtor（逗課）是為國高中生設計的 AI 學習 App，整合題目練習、錯題追蹤、學習進度與個人化建議。產品已累積超過 7,000 位用戶、每月 2,600 位活躍用戶，曾登上 App Store 教育類第 4 名。

        作為共同創辦人與軟體工程師，我負責 AI 功能生命週期，以及大部分正式環境的後端與資料工作，包括知識點建模、LLM 編排、事件蒐集、FastAPI API，以及 Cloud Run 和 Cloud SQL 部署。

        我也開發付費家長分析功能，將學生答題、錯誤選項與知識點表現轉換成 AI 弱點分析和個人化建議。
      `
    },
    imageUrl: '/projects/dt.jpg',
    productStory: {
      en: {
        problem: 'After years of teaching, I saw that many students wanted to learn but struggled to keep a rhythm when studying felt repetitive and feedback came too late.',
        approach: 'I wanted an AI learning companion for short, interactive practice. Question feedback and knowledge-point records help students keep going and make their weak areas visible to them and their parents.'
      },
      zh: {
        problem: '在補教現場待了多年，我看到不少學生並非不想學，而是傳統練習缺少即時互動與回饋，很難維持學習節奏。',
        approach: '我想做能陪學生持續練習的 AI 學伴：用短時間的互動練題建立節奏，再用錯題與知識點紀錄讓學生和家長看見下一步。'
      }
    },
    userFlow: {
      en: ['Practice questions', 'Get feedback and explanations', 'Track mistakes by knowledge point', 'Practice weaker areas', 'Review progress and parent insights'],
      zh: ['練習題目', '查看回饋與解題說明', '依知識點累積錯題', '針對弱點再練習', '查看進度與家長分析']
    },
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
        'AI question generation tailored to each student\'s learning gaps',
        'Subject-specific question banks covering math and science',
        'Adaptive difficulty system that adjusts to student performance',
        'Error tracking and personalized practice recommendations',
        'Instant feedback with step-by-step explanations',
        'Daily push notifications and learning streaks to build habits',
        'Progress visualization and learning analytics dashboard',
        'Paid parent analytics with AI-generated weakness insights',
        'GCP Cloud Run + Cloud SQL deployment for scalability'
      ],
      zh: [
        'AI 題目生成，針對每位學生弱點量身打造',
        '涵蓋數學、自然的分科題庫',
        '根據答題表現自動調整難度的自適應系統',
        '錯題紀錄與個人化練習推薦',
        '即時反饋與逐步解題說明',
        '每日推播提醒與學習連續天數，培養學習習慣',
        '學習進度視覺化與分析儀表板',
        '付費家長分析，提供 AI 弱點洞察',
        'GCP Cloud Run + Cloud SQL 雲端部署，支援高可擴展性'
      ]
    },
    milestones: {
      en: [
        {
          title: 'Owned AI Features and Data Systems',
          description: 'Built knowledge-point models, LLM orchestration, event collection, and production APIs for the learning experience.',
          type: 'achievement',
          icon: 'rocket'
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Deployed scalable backend and database on Google Cloud Run and Cloud SQL.',
          type: 'skill',
          icon: 'cloud'
        },
        {
          title: 'Built RESTful APIs with FastAPI',
          description: 'Developed efficient, well-documented APIs with FastAPI, enabling seamless communication between frontend and backend.',
          type: 'learning',
          icon: 'zap'
        },
        {
          title: 'Database Design & Analytics',
          description: 'Designed MySQL schema for learning progress tracking, enabling error analysis and personalized learning paths.',
          type: 'skill',
          icon: 'database'
        },
        {
          title: 'App Store Launch',
          description: 'Successfully launched on App Store, ranked #4 in Education category.',
          type: 'achievement',
          icon: 'trophy'
        }
      ],
      zh: [
        {
          title: '負責 AI 功能與資料系統',
          description: '建立知識點模型、LLM 編排、事件蒐集與正式環境 API，支援學生學習體驗。',
          type: 'achievement',
          icon: 'rocket'
        },
        {
          title: '雲端架構部署',
          description: '使用 Google Cloud Run 與 Cloud SQL 部署具可擴展性的後端與資料庫。',
          type: 'skill',
          icon: 'cloud'
        },
        {
          title: '打造 FastAPI RESTful API',
          description: '開發高效能、帶有自動文件的 REST API，串接前後端功能。',
          type: 'learning',
          icon: 'zap'
        },
        {
          title: '資料庫設計與學習分析',
          description: '設計 MySQL 資料庫結構，支援錯題分析與個人化學習路徑。',
          type: 'skill',
          icon: 'database'
        },
        {
          title: 'App Store 上架',
          description: '成功上架 App Store，教育類排名第 4 名。',
          type: 'achievement',
          icon: 'trophy'
        }
      ]
    },
    youtubeVideoId: '97PbV861JYs',
    youtubeIsShort: true,
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
      en: 'A software-focused outsourcing platform shaped by the gaps I saw in generic freelance sites, connecting project posts, proposals, and direct discussion.',
      zh: '從自身接案時遇到的需求溝通障礙出發，打造專為軟體案件設計的發案、提案與即時討論平台。'
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
    imageUrl: '/projects/200okp.webp',
    productStory: {
      en: {
        problem: 'While taking software freelance jobs, I found that many general-purpose platforms were not built around software projects. They often missed the questions engineers needed answered, or asked them in ways clients could not understand, leaving both sides with unclear requirements.',
        approach: 'I wanted a platform designed around software outsourcing, where clients can post a project and engineers can respond with proposals, then clarify the work through direct conversation before moving forward.'
      },
      zh: {
        problem: '我自己接軟體案時發現，許多接案平台不是為軟體專案設計：工程師在意的需求資訊沒有被問到；有些問題業主看不懂，只能隨意填，讓雙方從一開始就很難對焦。',
        approach: '因此我想做專門承接軟體案件的平台，把發案、工程師提案和即時討論接在一起，讓雙方有機會先釐清需求再推進合作。'
      }
    },
    userFlow: {
      en: ['Client posts a project', 'Engineer discovers it and submits a proposal', 'Client reviews proposals', 'Both sides discuss through messaging', 'Contact information is unlocked to continue'],
      zh: ['需求方發布案件', '工程師找到案件並提案', '需求方比較提案', '雙方透過訊息討論', '解鎖聯絡資訊並推進合作']
    },
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
          icon: 'rocket'
        },
        {
          title: 'Real-time Communication Integration',
          description: 'Implemented Socket.io for instant messaging, enabling seamless communication between clients and engineers within the platform.',
          type: 'skill',
          icon: 'message'
        },
        {
          title: 'Authentication & Authorization System',
          description: 'Integrated NextAuth.js with email verification and Google OAuth, ensuring secure user authentication and authorization.',
          type: 'skill',
          icon: 'key'
        },
        {
          title: 'Token-based Payment System',
          description: 'Developed a digital token management system for viewing proposals, submitting proposals, and unlocking contact information with automated refund logic.',
          type: 'learning',
          icon: 'coins'
        },
        {
          title: 'AI-powered Matching',
          description: 'Integrated Google Gemini API to provide intelligent project recommendations and matching between clients and engineers.',
          type: 'learning',
          icon: 'bot'
        }
      ],
      zh: [
        {
          title: '全端平台開發',
          description: '參與從零開始建立完整的商業外包接案平台，處理包含付費流程與狀態管理等複雜商業邏輯。',
          type: 'achievement',
          icon: 'rocket'
        },
        {
          title: '即時通訊系統整合',
          description: '實作 Socket.io 即時訊息功能，讓發案者與接案者能在平台內無縫溝通。',
          type: 'skill',
          icon: 'message'
        },
        {
          title: '認證與授權系統',
          description: '整合 NextAuth.js 與 Email 驗證、Google OAuth，確保使用者認證與授權的安全性。',
          type: 'skill',
          icon: 'key'
        },
        {
          title: '代幣付費系統',
          description: '開發數位代幣管理系統，用於查看提案、提交提案與解鎖聯絡方式，並實作自動退款邏輯。',
          type: 'learning',
          icon: 'coins'
        },
        {
          title: 'AI 智慧媒合',
          description: '整合 Google Gemini API 提供智慧專案推薦與媒合功能，協助發案者與接案者快速配對。',
          type: 'learning',
          icon: 'bot'
        }
      ]
    },
    youtubeVideoId: '3eJiVbF_AcI'
  },
  {
    id: 'whisper-of-the-abyss',
    title: {
      en: 'Whisper of the Abyss',
      zh: 'Whisper of the Abyss'
    },
    description: {
      en: 'A 2.5D Unity puzzle game built on the physics engine around limited jumps, map exploration, teleport stations, and item-use points. Playable online.',
      zh: '以 Unity 物理引擎打造的 2.5D 益智遊戲，透過有限跳躍次數、地圖探索、傳送站與道具使用點設計關卡，可線上遊玩。'
    },
    fullDescription: {
      en: `
        Whisper of the Abyss is a 2.5D puzzle game built by our team with Unity. Built on Unity's physics engine, its puzzles revolve around a limited number of jumps, map exploration, teleport stations, and items that must be brought to their matching use points.

        My responsibilities included:
        - **Lighting & shadows**: Designing the game's lighting and shadow atmosphere
        - **Ray tracing**: Implementing ray tracing for the game's lighting
        - **Tileset**: Building the tile-based map system used to compose the game's levels
        - **Dynamic background computation**: Calculating and updating the game background in real time as the game state changes
        - **Item mechanics**: Designing and implementing how items are picked up and used at their matching use points

        The game is published on itch.io and can be played directly in the browser.
      `,
      zh: `
        Whisper of the Abyss 是我們團隊以 Unity 製作的 2.5D 益智遊戲。遊戲利用 Unity 的物理引擎，透過有限的跳躍次數、地圖探索、傳送站，以及道具與對應的道具使用點來設計謎題。

        我的負責項目包含：
        - **光影設計**：設計遊戲整體的光影氛圍
        - **光線追蹤**：實作遊戲中的光線追蹤效果
        - **Tileset**：建立以圖塊組成關卡的地圖系統
        - **動態遊戲背景運算**：依遊戲狀態即時計算並更新遊戲背景
        - **道具機制**：設計並實作道具的取得，以及在對應使用點使用道具的機制

        遊戲已發布於 itch.io，可直接在瀏覽器線上遊玩。
      `
    },
    imageUrl: '/projects/abyss.jpg',
    userFlow: {
      en: ['Explore the map', 'Plan moves within the limited jumps', 'Travel through teleport stations', 'Collect items', 'Use items at their matching points to solve the puzzle'],
      zh: ['探索地圖', '在有限跳躍次數內規劃路線', '透過傳送站移動', '取得道具', '在對應使用點使用道具解開謎題']
    },
    status: 'completed',
    date: {
      en: 'October 2025 - December 2025',
      zh: '2025年10月 - 2025年12月'
    },
    skills: [
      { name: 'Unity', color: 'bg-slate-500/20 text-slate-400 border border-slate-500/30' },
      { name: 'C#', color: 'bg-violet-500/20 text-violet-400 border border-violet-500/30' },
      { name: 'Media', color: 'bg-pink-500/20 text-pink-400 border border-pink-500/30' },
      { name: 'Game Development', color: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
      { name: 'Ray Tracing', color: 'bg-amber-500/20 text-amber-400 border border-amber-500/30' }
    ],
    features: {
      en: [
        '2.5D puzzle gameplay built on Unity physics',
        'Limited jumps, map exploration, and teleport stations',
        'Items paired with matching use points',
        'Lighting, shadows, and ray tracing',
        'Tile-based levels with a real-time dynamic background',
        'Playable online on itch.io'
      ],
      zh: [
        '基於 Unity 物理引擎的 2.5D 益智玩法',
        '有限跳躍次數、地圖探索與傳送站',
        '道具與對應道具使用點的解謎設計',
        '光影設計與光線追蹤',
        'Tileset 關卡與即時運算的動態背景',
        '可於 itch.io 線上遊玩'
      ]
    },
    milestones: {
      en: [
        {
          title: 'Published Playable Game',
          description: 'Shipped a 2.5D puzzle game on itch.io that anyone can play in the browser.',
          type: 'achievement',
          icon: 'gamepad'
        },
        {
          title: 'Lighting & Ray Tracing',
          description: 'Designed the game\'s lighting and shadows and implemented ray tracing to shape its atmosphere.',
          type: 'skill',
          icon: 'flame'
        },
        {
          title: 'Tileset & Dynamic Background',
          description: 'Built the tile-based level system and a background that is computed and updated in real time during gameplay.',
          type: 'learning',
          icon: 'image'
        },
        {
          title: 'Item Mechanics',
          description: 'Designed and implemented items and their matching use points as a core puzzle mechanic.',
          type: 'skill',
          icon: 'zap'
        }
      ],
      zh: [
        {
          title: '發布可線上遊玩的遊戲',
          description: '將 2.5D 益智遊戲發布於 itch.io，任何人都能直接在瀏覽器遊玩。',
          type: 'achievement',
          icon: 'gamepad'
        },
        {
          title: '光影與光線追蹤',
          description: '設計遊戲的光影，並實作光線追蹤來營造遊戲氛圍。',
          type: 'skill',
          icon: 'flame'
        },
        {
          title: 'Tileset 與動態背景',
          description: '建立 Tileset 關卡系統，以及在遊戲中即時運算更新的背景。',
          type: 'learning',
          icon: 'image'
        },
        {
          title: '道具機制',
          description: '設計並實作道具與對應使用點，作為核心解謎機制。',
          type: 'skill',
          icon: 'zap'
        }
      ]
    },
    demoUrl: 'https://ocean1029.itch.io/team-project',
    youtubeVideoId: 'a0MbaG1MBfU'
  },
  {
    id: 'aiplanner',
    title: {
      en: 'aiPlanner Smart Calendar',
      zh: 'aiPlanner 智慧行程助理'
    },
    description: {
      en: 'Designed and built a Swift calendar app that turns natural-language text or speech into events, with Supabase and iCloud integration.',
      zh: '以 Swift 設計並開發行事曆 App，將自然語言文字或語音轉成行程，並整合 Supabase 與 iCloud。'
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
    userFlow: {
      en: ['Type or speak a plan', 'Parse its date, time, and event', 'Add it to the calendar', 'View or share the schedule'],
      zh: ['輸入或說出計畫', '解析日期、時間與事件', '加入行事曆', '查看或共享行程']
    },
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
          icon: 'smartphone'
        },
        {
          title: 'Implemented Natural Language Parsing',
          description: 'Enabled users to create events with simple text or voice inputs.',
          type: 'skill',
          icon: 'speech'
        },
        {
          title: 'Integrated Supabase',
          description: 'Added authentication and shared event storage via Supabase.',
          type: 'learning',
          icon: 'wrench'
        },
        {
          title: 'Enhanced Privacy with iCloud',
          description: 'Leveraged iCloud sync for secure, private personal events.',
          type: 'skill',
          icon: 'lock'
        }
      ],
      zh: [
        {
          title: '開發 iOS 原生行事曆應用',
          description: '以 Swift 打造 aiPlanner，提供 Apple 風格的流暢體驗。',
          type: 'achievement',
          icon: 'smartphone'
        },
        {
          title: '導入自然語言解析',
          description: '支援以簡單文字或語音快速建立事件。',
          type: 'skill',
          icon: 'speech'
        },
        {
          title: '整合 Supabase',
          description: '透過 Supabase 提供帳號驗證與共享事件儲存。',
          type: 'learning',
          icon: 'wrench'
        },
        {
          title: '強化隱私與 iCloud 同步',
          description: '利用 iCloud 確保個人事件安全私密同步。',
          type: 'skill',
          icon: 'lock'
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
      en: 'Led development of a React and Firebase ERP for customer records, work orders, field scheduling, and reporting.',
      zh: '主導以 React 與 Firebase 開發企業 ERP，整合客戶資料、工單、外勤排程與報表。'
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
    productStory: {
      en: {
        problem: 'Customer records, service visits, and field schedules need to stay connected so staff can follow a job from request to completion.',
        approach: 'Organize customer details, work orders, scheduling, task status, and reports around the actual pest-control service process.'
      },
      zh: {
        problem: '害蟲防治服務涉及客戶資料、施工安排與外勤進度；這些紀錄若分散，行政與現場人員就難以追蹤同一筆服務。',
        approach: '以實際服務流程整理客戶、工單、排程、任務狀態與報表，讓資料能從接案一路連到完成。'
      }
    },
    userFlow: {
      en: ['Create a customer record', 'Open and schedule a work order', 'Field staff complete the visit', 'Update task status', 'Review service reports'],
      zh: ['建立客戶資料', '建立工單並安排外勤', '現場完成服務', '更新任務狀態', '查看服務報表']
    },
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
          icon: 'briefcase'
        },
        {
          title: 'Firebase Ecosystem Mastery',
          description: 'Utilized Firebase Authentication for secure login, Firestore for real-time data, and Firebase Rules for access control.',
          type: 'skill',
          icon: 'flame'
        },
        {
          title: 'TypeScript in Production',
          description: 'Implemented TypeScript in a real-world application, ensuring type safety and reducing runtime errors.',
          type: 'skill',
          icon: 'notebook'
        },
        {
          title: 'Business Workflow Understanding',
          description: 'Gained deep understanding of ERP workflows in the pest control industry, including scheduling, field operations, and reporting.',
          type: 'learning',
          icon: 'chart'
        }
      ],
      zh: [
        {
          title: '首個端到端 ERP 系統',
          description: '設計並開發專為真實害蟲防治公司量身打造的完整 ERP 系統。',
          type: 'achievement',
          icon: 'briefcase'
        },
        {
          title: 'Firebase 生態系統精通',
          description: '掌握 Firebase Authentication 用戶登入、Firestore 即時資料管理，以及 Firebase Rules 權限控管。',
          type: 'skill',
          icon: 'flame'
        },
        {
          title: 'TypeScript 生產環境應用',
          description: '於真實專案中導入 TypeScript，確保型別安全並降低執行時錯誤。',
          type: 'skill',
          icon: 'notebook'
        },
        {
          title: '商業流程理解',
          description: '深入了解 ERP 系統在害蟲防治產業的實際運作，包括排程、外勤作業與報表分析。',
          type: 'learning',
          icon: 'chart'
        }
      ]
    },
    // githubUrl: 'https://github.com/yourusername/erp-system',
    youtubeVideoId: 'ViVosgnhEbM',
  },
  {
    id: 'superbot',
    title: {
      en: 'SuperBot: Administrative Automation Tool',
      zh: 'SuperBot：行政自動化工具'
    },
    description: {
      en: 'A LINE assistant I built to handle the repetitive class and attendance work I faced while running an education business.',
      zh: '為減少自己在補教現場反覆處理的提醒、作業與出勤工作，我獨立開發了 LINE 行政助手。'
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
    productStory: {
      en: {
        problem: 'When I started running Superb Education, attendance, homework follow-ups, and repeated schedule questions consumed time I needed for teaching and student support.',
        approach: 'I built a LINE assistant that students could use in a familiar chat, with Google Sheets behind it to record check-ins, answer routine questions, and keep the admin work moving.'
      },
      zh: {
        problem: '剛創辦精湛教育時，我每天都在處理出缺勤、作業追蹤與補課時間詢問；這些小事不能漏，卻不斷擠掉教學與陪伴學生的時間。',
        approach: '我因此做了 LINE 小助手，讓學生用熟悉的聊天方式查詢與打卡，並把資料交由 Google Sheets 記錄和統計。'
      }
    },
    userFlow: {
      en: ['Set up classes and tasks', 'Send reminders through LINE', 'Collect homework and check-ins', 'Calculate hours and export records'],
      zh: ['設定課程與任務', '透過 LINE 發送提醒', '收集作業與打卡紀錄', '計算時數並匯出資料']
    },
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
          icon: 'laptop'
        },
        {
          title: 'Google Sheets Integration',
          description: 'Used Google Sheets as a real-time database to enable collaborative data management.',
          type: 'skill',
          icon: 'chart'
        },
        {
          title: 'Deployment on Heroku',
          description: 'Learned and applied cloud deployment techniques, making the system publicly accessible.',
          type: 'skill',
          icon: 'cloud'
        },
        {
          title: 'Automating Admin Workflows',
          description: 'Automated routine administrative tasks, significantly improving efficiency for teachers and staff.',
          type: 'achievement',
          icon: 'settings'
        }
      ],
      zh: [
        {
          title: '獨立開發全系統',
          description: '從後端邏輯到 LINE 聊天機器人整合，獨立設計、開發與部署整個系統。',
          type: 'achievement',
          icon: 'laptop'
        },
        {
          title: 'Google Sheets 整合',
          description: '將 Google Sheets 作為即時資料庫，支援多人協作的數據管理。',
          type: 'skill',
          icon: 'chart'
        },
        {
          title: 'Heroku 雲端部署',
          description: '學習並實作雲端部署技術，讓系統可供公開訪問。',
          type: 'skill',
          icon: 'cloud'
        },
        {
          title: '行政流程自動化',
          description: '自動化處理例行行政工作，大幅提升教師與行政人員的效率。',
          type: 'achievement',
          icon: 'settings'
        }
      ]
    },
    youtubeVideoId: 'fnHZp87Gb9g',
    youtubeIsShort: true,
    // githubUrl: 'https://github.com/yourusername/superbot'
  },
  {
    id: 'seven-peach',
    title: {
      en: 'Seven Peach: Senior Social App',
      zh: '七桃：銀髮交友應用'
    },
    description: {
      en: 'An activity discovery app we designed to help older family members get out of the house and meet new friends.',
      zh: '希望鼓勵家中長輩出門走走、認識朋友，我們設計了熟齡友善的活動探索 App。'
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
    productStory: {
      en: {
        problem: 'We thought about older family members spending long stretches at home with few reasons to go out. We wanted to make it easier for them to find company and something enjoyable to do.',
        approach: 'We designed Seven Peach to encourage older adults to go out, take part in activities, and make friends, with an interface and recommendations shaped for them.'
      },
      zh: {
        problem: '我們想到家裡的長輩常常長時間待在家裡，生活容易無聊，也少了出門認識人的機會。',
        approach: '因此我們想做一個真正適合長輩使用的產品，透過容易操作的活動探索與推薦，鼓勵他們出門走走、參加活動、交新朋友。'
      }
    },
    userFlow: {
      en: ['Set up a profile and interests', 'Browse recommended activities', 'Choose an activity to join', 'Meet people through shared participation'],
      zh: ['建立個人檔案與興趣', '瀏覽推薦活動', '選擇想參加的活動', '透過共同活動認識人']
    },
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
          icon: 'crown'
        },
        {
          title: 'Senior-Centric UX Design',
          description: 'Designed a user interface specifically for older adults, ensuring accessibility, simplicity, and usability.',
          type: 'skill',
          icon: 'palette'
        },
        {
          title: 'Recommendation System Integration',
          description: 'Developed a personalized activity recommendation algorithm that considers user interests, friends\\\' participation, and location proximity.',
          type: 'learning',
          icon: 'bot'
        },
        {
          title: 'Social Innovation Impact',
          description: 'Addressed real-world aging society challenges by creating a solution that promotes active aging and social engagement.',
          type: 'achievement',
          icon: 'heart'
        }
      ],
      zh: [
        {
          title: '創辦人與產品負責人',
          description: '從概念發想到開發實作全程主導專案，領導跨領域團隊並管理產品方向。',
          type: 'achievement',
          icon: 'crown'
        },
        {
          title: '銀髮友善 UX 設計',
          description: '專為熟齡族群設計的使用者介面，確保無障礙、簡潔與易用性。',
          type: 'skill',
          icon: 'palette'
        },
        {
          title: '推薦系統整合',
          description: '開發活動推薦演算法，根據用戶興趣、朋友參與度與地點距離進行推播。',
          type: 'learning',
          icon: 'bot'
        },
        {
          title: '社會創新影響力',
          description: '針對高齡社會挑戰提出解決方案，推動積極老化與社會參與。',
          type: 'achievement',
          icon: 'heart'
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
      en: 'Built the core logic, data structures, and SFML interface for a C++ parking puzzle game.',
      zh: '為 C++ 停車場解謎遊戲設計核心邏輯與資料結構，並以 SFML 開發互動介面。'
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
    productStory: {
      en: {
        problem: 'This was a C++ course project: the goal was to make game states, legal moves, and visual feedback work together in an interactive puzzle.',
        approach: 'Use a parking-lot puzzle as a concrete way to practice data structures, object-oriented design, and graphics programming.'
      },
      zh: {
        problem: '這是 C++ 課程期末作品，出發點是把狀態表示、合法移動與畫面回饋整合成真的能玩的互動程式。',
        approach: '選擇停車場解謎作為題材，具體練習資料結構、物件導向設計與圖形介面。'
      }
    },
    userFlow: {
      en: ['Choose a puzzle', 'Move cars within the grid', 'Check the changing route', 'Free the target car'],
      zh: ['選擇關卡', '在格子中移動車輛', '觀察路徑變化', '讓目標車輛脫困']
    },
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
          icon: 'gamepad'
        },
        {
          title: 'C++ Advanced Programming',
          description: 'Applied advanced C++ concepts including object-oriented design, memory management, and custom data structures.',
          type: 'skill',
          icon: 'settings'
        },
        {
          title: 'Graphics Programming with SFML',
          description: 'Gained hands-on experience building an interactive UI with SFML, handling events, rendering, and user feedback.',
          type: 'learning',
          icon: 'image'
        },
        {
          title: 'Collaborative Development Skills',
          description: 'Enhanced teamwork and code collaboration abilities through pair programming and version control.',
          type: 'skill',
          icon: 'handshake'
        }
      ],
      zh: [
        {
          title: '首次遊戲開發專案',
          description: '完成第一款完整功能的遊戲，整合邏輯設計、圖形程式設計與使用者互動。',
          type: 'achievement',
          icon: 'gamepad'
        },
        {
          title: 'C++ 進階程式設計',
          description: '實作 C++ 高階概念，包括物件導向設計、記憶體管理與自訂資料結構。',
          type: 'skill',
          icon: 'settings'
        },
        {
          title: 'SFML 圖形程式設計',
          description: '實際操作 SFML 建立互動介面，學習事件處理、畫面渲染與使用者反饋。',
          type: 'learning',
          icon: 'image'
        },
        {
          title: '團隊合作開發能力',
          description: '透過 pair programming 與版本控制，增進團隊協作與程式碼管理能力。',
          type: 'skill',
          icon: 'handshake'
        }
      ]
    },
    // githubUrl: 'https://github.com/yourusername/lakycarcar',
    youtubeVideoId: 'sPTc4_vDMfo',
  }
];
