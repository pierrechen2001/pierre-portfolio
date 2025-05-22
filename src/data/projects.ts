export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  status: 'completed' | 'in-progress' | 'planned';
  date: string;
  skills: {
    name: string;
    color: string;
  }[];
  features?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'dogtor',
    title: 'Dogtor AI 學習助教',
    description: '專為國高中生打造的 AI 輔助學習應用。',
    fullDescription: `
      Dogtor 是一款結合 AI 的學習應用，透過 ChatGPT 與自建題庫，為學生提供個人化練習體驗。
      
      我負責整體系統架構，包括 Flutter 前端、FastAPI 後端、GCP 部署與 MySQL 資料庫整合。
      系統能追蹤學生錯題紀錄並生成對應練習，提供即時回饋。
    `,
    imageUrl: '/projects/project-card.svg',
    status: 'in-progress',
    date: '2025年2月',
    skills: [
      { name: 'Flutter', color: 'bg-cyan-200 text-cyan-800' },
      { name: 'FastAPI', color: 'bg-red-200 text-red-800' },
      { name: 'MySQL', color: 'bg-blue-200 text-blue-800' },
      { name: 'GCP', color: 'bg-gray-200 text-gray-800' }
    ],
    features: [
      'AI 題目生成與答題紀錄',
      '學生個人化練習追蹤',
      'GCP 雲端部署'
    ],
    githubUrl: 'https://github.com/yourusername/dogtor'
  },
  {
    id: 'crm-system',
    title: '中興害蟲防治 CRM 系統',
    description: '為中興環保公司設計的顧客關係管理系統。',
    fullDescription: `
      這是一套為害蟲防治業者設計的 CRM 系統，協助業務員追蹤客戶、管理訂單並進行回訪紀錄。
      
      我負責整體前後端開發，前端使用 React，後端使用 Firebase Authentication 與 Firestore。
      系統具備客戶清單、施工排程、任務追蹤與統計報表功能。
    `,
    imageUrl: '/projects/project-card.svg',
    status: 'completed',
    date: '2024年6月',
    skills: [
      { name: 'React', color: 'bg-blue-200 text-blue-800' },
      { name: 'Firebase', color: 'bg-yellow-200 text-yellow-800' },
      { name: 'TypeScript', color: 'bg-purple-200 text-purple-800' }
    ],
    features: [
      '顧客資料與服務紀錄管理',
      '行程排程與提醒',
      '統計分析報表'
    ],
    githubUrl: 'https://github.com/yourusername/crm-system'
  },
  {
    id: 'seven-peach',
    title: '七桃：銀髮交友應用',
    description: '針對熟齡族群打造的交友與活動媒合平台。',
    fullDescription: `
      七桃是一款專為銀髮族設計的交友應用，讓使用者能透過活動參與認識新朋友。
      
      我主導整體產品開發，使用 Flutter 製作前端介面，後端串接推薦演算法，根據用戶興趣、朋友參與度與地點距離推送活動。
      同時注重 UI/UX 設計，確保使用者操作友善。
    `,
    imageUrl: '/projects/project-card.svg',
    status: 'in-progress',
    date: '2024年8月',
    skills: [
      { name: 'Flutter', color: 'bg-cyan-200 text-cyan-800' },
      { name: 'Dart', color: 'bg-blue-200 text-blue-800' },
      { name: 'Firebase', color: 'bg-yellow-200 text-yellow-800' }
    ],
    features: [
      '活動推薦系統',
      '使用者認證與配對',
      '熟齡友善介面'
    ],
    githubUrl: 'https://github.com/yourusername/seven-peach'
  },
  {
    id: 'lakycarcar',
    title: 'LakyCarcar 遊戲專案',
    description: '一款邏輯解謎遊戲，挑戰玩家在最少步數內解開停車場困境。',
    fullDescription: `
      LakyCarcar 是我們在 C++ 課程中共同開發的期末專案，靈感來自於經典的『Get Out the Parking Lot』遊戲。
      我負責設計遊戲核心邏輯與資料結構，並使用 SFML 函式庫實作圖形介面，使遊戲畫面更直覺且操作順暢。
      
      遊戲具備重製、儲存關卡進度、自訂難度等功能，並支援滑鼠互動操作。
    `,
    imageUrl: '/projects/project-card.svg',
    status: 'completed',
    date: '2024年1月',
    skills: [
      { name: 'C++', color: 'bg-blue-200 text-blue-800' },
      { name: 'SFML', color: 'bg-gray-200 text-gray-800' }
    ],
    features: [
      '滑鼠互動操作',
      '解謎遊戲邏輯',
      '儲存進度與自訂關卡'
    ],
    githubUrl: 'https://github.com/yourusername/lakycarcar'
  }
];
