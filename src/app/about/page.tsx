'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useLanguage } from '@/contexts/LanguageContext';

// 客戶端元數據，因為我們不能在客戶端組件中使用 export const metadata
const pageMetadata = {
  title: '關於我 | Pierre\'s Portfolio',
  description: '一些關於我、我的技能和經驗',
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
        <div className="parallax-blob absolute top-[70%] right-[10%] w-[35%] h-[35%] bg-gradient-to-bl from-purple-500/20 to-indigo-600/15 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: '11s' }}></div>
        
        <div className="parallax-blob absolute top-[5%] left-[80%] w-[45%] h-[45%] bg-gradient-to-tr from-teal-500/15 to-emerald-400/10 rounded-full blur-[70px] animate-pulse" style={{ animationDuration: '8.5s' }}></div>        

        <div className="parallax-blob absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-gradient-to-bl from-teal-500/15 to-emerald-400/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '9.5s' }}></div>
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
  const { t, language } = useLanguage();
  
  // 使用 useEffect 設置頁面標題和描述
  useEffect(() => {
    document.title = `${t('about_page_title')} | Pierre's Portfolio`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('about_page_description'));
    }
  }, [t, language]);
  
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
            <div className="mb-20 pt-6 md:pt-14 md:pb-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">{t('about_page_title')}</h1>
              <p className="text-lg max-w-2xl mx-auto text-[var(--foreground-muted)]">
                {t('about_page_description')}
              </p>
            </div>
            
            {/* 個人介紹區 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="relative parallax-scroll" data-speed="-0.07">
                  <div className="relative h-[30rem] w-full max-w-sm mx-auto">
                    <Image
                      src="/av.png"
                      alt={`${t('fullname')} photo`}
                      fill
                      sizes="(max-width: 768px) 100vw, 384px"
                      className="object-contain bg-transparent"
                      priority
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-7 order-1 md:order-2 parallax-scroll" data-speed="0.03">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary/80 to-secondary/80 bg-clip-text text-transparent">{t('who_am_i')}</h2>
                <div className="space-y-4 text-[var(--foreground)] backdrop-blur-sm bg-[var(--background)]/50 p-6 rounded-xl shadow-sm">
                  <p>
                    {t('about_intro_1')}
                  </p>
                  <p>
                    {t('about_intro_2')}
                  </p>
                  <p>
                    {t('about_intro_3')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* 工作經歷區域 */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('work_experience')}</h2>
              
              <div className="relative">
                {/* 時間軸線 - 在桌面版顯示，手機版隱藏 */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block"></div>

                <div className="space-y-12 md:space-y-16">
                  {/* 第一項時間軸條目 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
                    {/* 桌面版時間軸點 */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"></div>
                    
                    {/* 手機版時間軸點 */}
                    <div className="md:hidden relative w-full pl-8 mb-2">
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary"></div>
                      <div className="absolute left-2 top-2 w-[1px] h-full bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50"></div>
                      <span className="text-lg font-semibold text-[var(--text-muted)]">{t('dogtor_period')}</span>
                      <h3 className="text-xl md:text-2xl font-bold mt-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('dogtor_position')}</h3>
                      <p className="font-medium mt-1 text-[var(--primary)]">{t('dogtor_company')}</p>
                    </div>
                    
                    {/* 桌面版左側內容 */}
                    <div className="md:text-right md:pr-12 parallax-scroll hidden md:block" data-speed="0.05">
                      <span className="text-lg font-semibold text-[var(--text-muted)]">{t('dogtor_period')}</span>
                      <h3 className="text-2xl font-bold mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('dogtor_position')}</h3>
                      <p className="font-medium mt-2 text-[var(--primary)]">{t('dogtor_company')}</p>
                    </div>
                    
                    {/* 右側內容 */}
                    <div className="md:pl-12 backdrop-blur-sm bg-[var(--background)]/50 p-4 md:p-6 rounded-xl shadow-sm parallax-scroll pl-8 md:pl-12" data-speed="-0.01">
                      <p className="text-[var(--foreground)] mb-3 md:mb-4">
                        {t('dogtor_description')}
                      </p>
                      <ul className="list-none space-y-1 md:space-y-2 text-[var(--foreground)]">
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          {t('dogtor_achievement_1')}
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          {t('dogtor_achievement_2')}
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          {t('dogtor_achievement_3')}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 第二項時間軸條目 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
                    {/* 桌面版時間軸點 */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-secondary"></div>
                    
                    {/* 手機版時間軸點 */}
                    <div className="md:hidden relative w-full pl-8 mb-2">
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-secondary"></div>
                      <div className="absolute left-2 top-2 w-[1px] h-full bg-gradient-to-b from-secondary/50 via-primary/50 to-secondary/50"></div>
                      <span className="text-lg font-semibold text-[var(--text-muted)]">{t('superb_period')}</span>
                      <h3 className="text-xl md:text-2xl font-bold mt-1 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">{t('superb_position')}</h3>
                      <p className="font-medium mt-1 text-[var(--primary)]">{t('superb_company')}</p>
                    </div>
                    
                    {/* 桌面版右側內容（交錯效果） */}
                    <div className="md:text-left md:order-2 parallax-scroll hidden md:block md:pl-12" data-speed="0.03">
                      <span className="text-lg font-semibold text-[var(--text-muted)]">{t('superb_period')}</span>
                      <h3 className="text-2xl font-bold mt-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">{t('superb_position')}</h3>
                      <p className="font-medium mt-2 text-[var(--primary)]">{t('superb_company')}</p>
                    </div>
                    
                    {/* 左側內容（在桌面版） */}
                    <div className="md:order-1 parallax-scroll backdrop-blur-0 bg-[var(--background)]/50 p-8 md:p-6 rounded-xl shadow-sm pl-8 md:pl-6" data-speed="-0.02">
                      <p className="text-[var(--foreground)] mb-3 md:mb-4">
                        {t('superb_description')}
                      </p>
                      <ul className="list-none space-y-1 md:space-y-2 text-[var(--foreground)]">
                        <li className="flex items-center">
                          <span className="mr-2 text-secondary">•</span>
                          {t('superb_achievement_1')}
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-secondary">•</span>
                          {t('superb_achievement_2')}
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-secondary">•</span>
                          {t('superb_achievement_3')}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 第三項時間軸條目 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
                    {/* 桌面版時間軸點 */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"></div>
                    
                    {/* 手機版時間軸點 */}
                    <div className="md:hidden relative w-full pl-8 mb-2">
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary"></div>
                      <div className="absolute left-2 top-2 w-[1px] h-[80%] bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent"></div>
                      <span className="text-lg font-semibold text-[var(--text-muted)]">{t('ntu_period')}</span>
                      <h3 className="text-xl md:text-2xl font-bold mt-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('ntu_degree')}</h3>
                      <p className="font-medium mt-1 text-[var(--primary)]">{t('ntu_school')}</p>
                    </div>
                    
                    {/* 桌面版左側內容 */}
                    <div className="md:text-right md:pr-12 parallax-scroll hidden md:block" data-speed="0.01">
                      <span className="text-lg font-semibold text-[var(--text-muted)]">{t('ntu_period')}</span>
                      <h3 className="text-2xl font-bold mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('ntu_degree')}</h3>
                      <p className="font-medium mt-2 text-[var(--primary)]">{t('ntu_school')}</p>
                    </div>
                    
                    {/* 右側內容 */}
                    <div className="md:pl-12 backdrop-blur-0 bg-[var(--background)]/50 p-10 md:p-6 rounded-xl shadow-sm parallax-scroll pl-8 md:pl-12" data-speed="-0.02">
                      <p className="text-[var(--foreground)] mb-3 md:mb-4">
                        {t('ntu_description')}
                      </p>
                      <ul className="list-none space-y-1 md:space-y-2 text-[var(--foreground)]">
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          {t('ntu_achievement_1')}
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          {t('ntu_achievement_2')}
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-primary">•</span>
                          {t('ntu_achievement_3')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 教育背景 */}
            <div className="parallax-scroll" data-speed="0.01">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">{t('education')}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* NTU 學歷卡片 */}
                <div className="transition-all p-6 backdrop-blur-sm bg-[var(--background-alt)]/80 border border-[var(--border)]/10 rounded-xl">
                  <div className="flex flex-col justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('ntu_degree')}</h3>
                    <span className="text-lg font-semibold text-[var(--text-muted)]">{t('ntu_period')}</span>
                  </div>
                  <p className="text-xl font-medium mb-4 text-[var(--primary)]">{t('ntu_school')}</p>
                  <p className="text-[var(--foreground)]">
                    {t('ntu_description')}
                  </p>
                </div>

                {/* KMU 學歷卡片 */}
                <div className="transition-all p-6 backdrop-blur-sm bg-[var(--background-alt)]/80 border border-[var(--border)]/10 rounded-xl">
                  <div className="flex flex-col justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">{t('kmu_degree')}</h3>
                    <span className="text-lg font-semibold text-[var(--text-muted)]">{t('kmu_period')}</span>
                  </div>
                  <p className="text-xl font-medium mb-4 text-[var(--primary)]">{t('kmu_school')}</p>
                  <p className="text-[var(--foreground)]">
                    {t('kmu_description')}
                  </p>
                </div>
              </div>
            </div>

            {/* 技能區域 */}
            <div className="pt-16 md:pt-24 mb-24 parallax-scroll" data-speed="0.02">
              <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">{t('skills')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card hover:shadow-md transition-all p-6 backdrop-blur-sm bg-[var(--background-alt)]/80 border border-[var(--border)]/10 rounded-xl">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t('frontend_dev')}</h3>
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
                  <h3 className="text-xl font-semibold mb-3">{t('backend_dev')}</h3>
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
                  <h3 className="text-xl font-semibold mb-3">{t('mobile_dev')}</h3>
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
                  <h3 className="text-xl font-semibold mb-3">{t('other_skills')}</h3>
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
          </div>
        </main>
        
        <Footer />
      </div>
    </ParallaxProvider>
  );
} 