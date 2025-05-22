'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

// 客戶端元數據，因為我們不能在客戶端組件中使用 export const metadata
const pageMetadata = {
  title: '關於我 | Pierre\'s Portfolio',
  description: '了解更多關於我的背景、技能和經驗',
};

// 用戶端組件，用於處理視差效果
function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      ref.current.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden bg-[#181c24]">
      <div ref={ref} className="absolute inset-0 scale-110">
        {/* 深藍色至黑色的漸層背景 */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#e9a42e]/10 rounded-full blur-[50px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[15%] right-[-20%] w-[40%] h-[40%] bg-indigo-300/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-[15%] left-[10%] w-[60%] h-[60%] bg-slate-800/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-[-15%] right-[30%] w-[30%] h-[30%] bg-blue-700/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '9s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[45%] h-[45%] bg-slate-700/20 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '11s' }}></div>
      </div>
    </div>
  );
}

// 創建一個滾動視差效果
function ScrollParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.parallax-scroll');
      
      scrollElements.forEach((el) => {
        const scrollY = window.scrollY;
        const element = el as HTMLElement;
        const speed = element.dataset.speed || '0.2';
        
        element.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return null;
}

export default function AboutPage() {
  // 使用 useEffect 設置頁面標題和描述
  useEffect(() => {
    document.title = pageMetadata.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageMetadata.description);
    }
  }, []);
  
  return (
    <ParallaxProvider>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        
        {/* 添加視差背景 */}
        <ParallaxBackground />
        <ScrollParallax />
        
        {/* 覆蓋一層半透明背景以確保內容可讀性 */}
        <div className="fixed inset-0 z-[-1] bg-[var(--background)]/90 backdrop-blur-sm"></div>
        
        <main className="flex-grow bg-transparent">
          <div className="container mx-auto py-16 px-4 md:px-6">
            {/* 頂部區域：標題和簡介 */}
            <div className="mb-20 text-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">關於我</h1>
              <p className="text-lg max-w-2xl mx-auto text-[var(--foreground-muted)]">
                了解更多關於我的背景、技能和經驗，以及我對軟件開發的熱情。
              </p>
            </div>
            
            {/* 個人介紹區 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="relative parallax-scroll" data-speed="-0.03">
                  <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/profile.png"
                      alt="Pierre 的照片"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      priority
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-7 order-1 md:order-2 parallax-scroll" data-speed="0.03">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary/80 to-secondary/80 bg-clip-text text-transparent">我是誰</h2>
                <div className="space-y-4 text-[var(--foreground)] backdrop-blur-sm bg-[var(--background)]/50 p-6 rounded-xl shadow-sm">
                  <p>
                    嗨，我是 Pierre，一名充滿熱情的全端開發者，專注於創建高品質的網站和應用程式。
                    我擁有多年的開發經驗，熟悉多種前後端技術。
                  </p>
                  <p>
                    我相信好的設計不僅僅是美觀，還應該是功能性和用戶友好的。我的目標是創建不僅好看，還能解決實際問題的產品。
                  </p>
                  <p>
                    除了編程，我還喜歡攝影、旅行和學習新技術。我總是保持好奇心，並尋找新的方式來提升我的技能和知識。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 技能區域 */}
            <div className="mb-24 parallax-scroll" data-speed="0.02">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">專業技能</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card hover:shadow-md transition-all p-6 backdrop-blur-sm bg-[var(--background-alt)]/80 border border-[var(--border)]/10 rounded-xl">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">前端開發</h3>
                  <ul className="space-y-2 text-[var(--foreground)]">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      React / Next.js
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      HTML / CSS
                    </li>
                  </ul>
                </div>
                
                <div className="card hover:shadow-md transition-all p-6 backdrop-blur-sm bg-[var(--background-alt)]/80 border border-[var(--border)]/10 rounded-xl">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2h-14z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">後端開發</h3>
                  <ul className="space-y-2 text-[var(--foreground)]">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Node.js
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Express
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      MongoDB
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      PostgreSQL
                    </li>
                  </ul>
                </div>
                
                <div className="card hover:shadow-md transition-all p-6 backdrop-blur-sm bg-[var(--background-alt)]/80 border border-[var(--border)]/10 rounded-xl">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">移動開發</h3>
                  <ul className="space-y-2 text-[var(--foreground)]">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      React Native
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Flutter
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      iOS / Android
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Progressive Web Apps
                    </li>
                  </ul>
                </div>
                
                <div className="card hover:shadow-md transition-all p-6 backdrop-blur-sm bg-[var(--background-alt)]/80 border border-[var(--border)]/10 rounded-xl">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">其他技能</h3>
                  <ul className="space-y-2 text-[var(--foreground)]">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      DevOps
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      CI/CD
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      UX/UI 設計
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      SEO 優化
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 工作經歷區域 */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">工作經歷</h2>
              
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block"></div>

                <div className="space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    <div className="md:text-right md:pr-12 parallax-scroll" data-speed="0.03">
                      <span className="text-lg font-semibold text-[var(--text-muted)]">2025年 - 現在</span>
                      <h3 className="text-2xl font-bold mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dogtor 全端工程師</h3>
                      <p className="font-medium mt-2 text-[var(--primary)]">AI 學習應用開發團隊</p>
                    </div>
                    <div className="md:pl-12 backdrop-blur-sm bg-[var(--background)]/50 p-6 rounded-xl shadow-sm parallax-scroll" data-speed="-0.01">
                      <p className="text-[var(--foreground)] mb-4">
                        參與 Dogtor 專案的全端開發，結合 Flutter、FastAPI 和 MySQL 建構學生學習平台，並部署於 GCP。
                      </p>
                      <ul className="list-none space-y-2 text-[var(--foreground)]">
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          設計與建置個人化錯題追蹤與練習系統
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          將後端 API 部署至 Cloud Run，串接 Flutter 應用
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          整合 OpenAI 模型進行題目生成與回饋
                        </li>
                      </ul>
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    <div className="md:text-left md:pr-12 order-1 md:order-2 parallax-scroll pl-4 md:pl-12" data-speed="0.01">
                      <span className="text-lg font-semibold text-[var(--text-muted)]">2023年 - 現在</span>
                      <h3 className="text-2xl font-bold mt-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">精湛教育創辦人兼技術開發</h3>
                      <p className="font-medium mt-2 text-[var(--primary)]">Superb Education</p>
                    </div>
                    <div className="md:pl-12 order-2 md:order-1 parallax-scroll mt-8" data-speed="-0.02">
                      <p className="text-[var(--foreground)] mb-4">
                        獨立開發 LINE 聊天機器人與教學平台，協助高中生學習數理與英文，並整合 Google Sheet API 進行出勤與作業追蹤。
                      </p>
                      <ul className="list-none space-y-2 text-[var(--foreground)]">
                        <li className="flex items-center">
                          <span className="mr-2 text-secondary">•</span>
                          使用 Python 串接 LINE Message API 與 Google Sheets API
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-secondary">•</span>
                          將後端應用部署至 Heroku 提供穩定服務
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-secondary">•</span>
                          設計官網前端頁面，使用 HTML/CSS/JS 完成
                        </li>
                      </ul>
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-secondary"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    <div className="md:text-right md:pr-12 parallax-scroll" data-speed="0.01">
                      <span className="text-lg font-semibold text-[var(--text-muted)]">2023年 - 預計2027年</span>
                      <h3 className="text-2xl font-bold mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">資訊管理學士</h3>
                      <p className="font-medium mt-2 text-[var(--primary)]">國立台灣大學</p>
                    </div>
                    <div className="md:pl-12 backdrop-blur-sm bg-[var(--background)]/50 p-6 rounded-xl shadow-sm parallax-scroll mt-2" data-speed="-0.02">
                      <p className="text-[var(--foreground)] mb-4">
                        主修資訊管理，修習軟體工程、資料庫系統、深度學習與人機互動等課程，積極參與校內外程式設計競賽與應用專題開發。
                      </p>
                      <ul className="list-none space-y-2 text-[var(--foreground)]">
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          開發多個 AI 教育與社會影響應用專案
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          擔任「災害風險管理」課程助教
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          擔任校內冬令營講師，教授溝通與領導技巧
                        </li>
                      </ul>
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>

              
            </div>
            
            {/* 教育背景 */}
            <div className="parallax-scroll" data-speed="0.01">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">教育背景</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* NTU 學歷卡片 */}
                <div className="transition-all p-6 backdrop-blur-sm bg-[var(--background-alt)]/80 border border-[var(--border)]/10 rounded-xl">
                  <div className="flex flex-col justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">資訊管理學士</h3>
                    <span className="text-lg font-semibold text-[var(--text-muted)]">2023年 - 預計2027年</span>
                  </div>
                  <p className="text-xl font-medium mb-4 text-[var(--primary)]">國立台灣大學</p>
                  <p className="text-[var(--foreground)]">
                    主修資訊管理，修習軟體工程、資料庫、深度學習、人機互動等課程，並積極參與校內外專案與競賽。
                  </p>
                </div>

                {/* KMU 學歷卡片 */}
                <div className="transition-all p-6 backdrop-blur-sm bg-[var(--background-alt)]/80 border border-[var(--border)]/10 rounded-xl">
                  <div className="flex flex-col justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">化學學士</h3>
                    <span className="text-lg font-semibold text-[var(--text-muted)]">2019年 - 2023年</span>
                  </div>
                  <p className="text-xl font-medium mb-4 text-[var(--primary)]">高雄醫學大學</p>
                  <p className="text-[var(--foreground)]">
                    主修化學，進行癌症生物標記分析研究，參與學生會並擔任學生代表、活動總召，發展出良好的溝通與領導能力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ParallaxProvider>
  );
} 