'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useLanguage } from '@/contexts/LanguageContext';
import CodeBlock from '@/components/CodeBlock';

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

// Tech Stack Badge Component
const TechBadge = ({ name, color }: { name: string, color: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded border text-xs font-mono bg-opacity-10 border-opacity-30 hover:bg-opacity-20 transition-all duration-300 ${color}`}>
    {name}
  </span>
);

// 簡單的標籤雲組件，無百分比
const TechTagCloud = ({ tags, color }: { tags: string[], color: string }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map(tag => (
      <span key={tag} className={`px-2 py-1 rounded text-xs font-mono border border-opacity-20 bg-opacity-5 ${color}`}>
        {tag}
      </span>
    ))}
  </div>
);

export default function AboutClient() {
  const { t, language } = useLanguage();
  
  const techStacks = {
    frontend: [
      { name: 'React', color: 'bg-blue-500 border-blue-500 text-blue-400' },
      { name: 'Next.js', color: 'bg-slate-500 border-slate-500 text-slate-400' },
      { name: 'TypeScript', color: 'bg-blue-600 border-blue-600 text-blue-300' },
      { name: 'Tailwind', color: 'bg-cyan-500 border-cyan-500 text-cyan-400' },
    ],
    backend: [
      { name: 'Python', color: 'bg-yellow-500 border-yellow-500 text-yellow-400' },
      { name: 'Node.js', color: 'bg-green-600 border-green-600 text-green-400' },
      { name: 'FastAPI', color: 'bg-teal-500 border-teal-500 text-teal-400' },
      { name: 'PostgreSQL', color: 'bg-blue-400 border-blue-400 text-blue-300' },
    ],
    mobile: [
      { name: 'Flutter', color: 'bg-cyan-500 border-cyan-500 text-cyan-400' },
      { name: 'React Native', color: 'bg-blue-400 border-blue-400 text-blue-300' },
      { name: 'iOS', color: 'bg-gray-500 border-gray-500 text-gray-300' },
      { name: 'Android', color: 'bg-green-500 border-green-500 text-green-400' },
    ],
    ai: [
      { name: 'Machine Learning', color: 'bg-purple-500 border-purple-500 text-purple-400' },
      { name: 'TensorFlow', color: 'bg-orange-500 border-orange-500 text-orange-400' },
      { name: 'OpenAI API', color: 'bg-green-500 border-green-500 text-green-400' },
    ]
  };

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
              <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] font-mono text-sm">
                $ whoami
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 tracking-tight">
                {t('about_page_title')}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--foreground-muted)] font-light leading-relaxed">
                {t('about_page_description')}
              </p>
            </div>
            
            {/* 個人介紹區 - IDE 風格 - 調整圖片比例與佈局 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-32 items-start">
              {/* 照片區域 - 縮小佔比 (3/12) */}
              <div className="md:col-span-3 order-1 md:order-1 flex justify-center md:justify-end">
                <div className="relative parallax-scroll w-full max-w-[240px]" data-speed="-0.05">
                  <div className="relative aspect-[3/4] w-full">
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <Image
                        src="/av.png"
                        alt={`${t('fullname')} photo`}
                        fill
                        sizes="(max-width: 768px) 240px, 300px"
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        priority
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 代碼區塊 - 擴大佔比 (9/12) */}
              <div className="md:col-span-9 order-2 md:order-2 parallax-scroll" data-speed="0.02">
                <div className="mb-4 flex items-center gap-2">
                   <span className="w-2 h-6 bg-[var(--primary)] rounded-sm"></span>
                   <h2 className="text-xl font-bold text-white">{t('who_am_i')}</h2>
                </div>
                
                <CodeBlock title="README.md" language="markdown">
                  <span className="text-purple-400"># {t('fullname')}</span>
                  {'\n\n'}
                  {t('about_intro_1')}
                  {'\n\n'}
                  <span className="text-[var(--primary)]">## Core Philosophy</span>
                  {'\n'}
                  {t('about_intro_2')}
                  {'\n\n'}
                  <span className="text-[var(--secondary)]">## Current Focus</span>
                  {'\n'}
                  {t('about_intro_3')}
                </CodeBlock>
              </div>
            </div>
            
            {/* 工作經歷區域 - Git Log Style - 保持不變 */}
            <div className="mb-32">
              <div className="flex items-center justify-center gap-3 mb-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Commit History
                </h2>
              </div>
              
              <div className="relative max-w-4xl mx-auto">
                {/* 主時間軸線 */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--border-color)] via-[var(--primary)]/50 to-[var(--border-color)]"></div>

                <div className="space-y-20">
                  {/* Akira Dialog Tech */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:text-right pt-2">
                       <div className="inline-block px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] font-mono text-xs mb-2">
                         {t('akira_period')}
                       </div>
                       <h3 className="text-xl font-bold text-white">{t('akira_company')}</h3>
                       <p className="text-[var(--text-muted)] font-mono text-sm">{t('akira_position')}</p>
                    </div>
                    
                    {/* Git Node */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-[7px] mt-3 rounded-full bg-[var(--background)] border-2 border-[var(--primary)] z-10 shadow-[0_0_10px_var(--primary)]"></div>

                    <div className="pl-16 md:pl-0 md:pt-2">
                      <div className="p-6 rounded-xl bg-[var(--background-alt)]/40 border border-[var(--border-color)] hover:border-[var(--primary)]/50 transition-all duration-300 group">
                        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[var(--text-muted)]">
                          <span className="text-green-400">feat:</span>
                          <span>AI Dialog System Implementation</span>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-300">
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--primary)] mt-1">+</span>
                             {t('akira_achievement_1')}
                           </li>
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--primary)] mt-1">+</span>
                             {t('akira_achievement_2')}
                           </li>
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--primary)] mt-1">+</span>
                             {t('akira_achievement_3')}
                           </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Superb Tech Studio */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:order-2 pt-2">
                       <div className="inline-block px-3 py-1 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 text-[var(--secondary)] font-mono text-xs mb-2">
                         {t('superb_tech_period')}
                       </div>
                       <h3 className="text-xl font-bold text-white">{t('superb_tech_company')}</h3>
                       <p className="text-[var(--text-muted)] font-mono text-sm">{t('superb_tech_position')}</p>
                    </div>
                    
                    {/* Git Node */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-[7px] mt-3 rounded-full bg-[var(--background)] border-2 border-[var(--secondary)] z-10 shadow-[0_0_10px_var(--secondary)]"></div>

                    <div className="pl-16 md:pl-0 md:text-right md:order-1 md:pt-2">
                      <div className="p-6 rounded-xl bg-[var(--background-alt)]/40 border border-[var(--border-color)] hover:border-[var(--secondary)]/50 transition-all duration-300">
                         <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[var(--text-muted)] md:justify-end">
                          <span className="text-blue-400">refactor:</span>
                          <span>System Architecture & Leadership</span>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-300 inline-block text-left">
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--secondary)] mt-1">+</span>
                             {t('superb_tech_achievement_1')}
                           </li>
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--secondary)] mt-1">+</span>
                             {t('superb_tech_achievement_2')}
                           </li>
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--secondary)] mt-1">+</span>
                             {t('superb_tech_achievement_3')}
                           </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Dogtor */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:text-right pt-2">
                       <div className="inline-block px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] font-mono text-xs mb-2">
                         {t('dogtor_period')}
                       </div>
                       <h3 className="text-xl font-bold text-white">{t('dogtor_company')}</h3>
                       <p className="text-[var(--text-muted)] font-mono text-sm">{t('dogtor_position')}</p>
                    </div>
                    
                    {/* Git Node */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-[7px] mt-3 rounded-full bg-[var(--background)] border-2 border-[var(--primary)] z-10 shadow-[0_0_10px_var(--primary)]"></div>

                    <div className="pl-16 md:pl-0 md:pt-2">
                      <div className="p-6 rounded-xl bg-[var(--background-alt)]/40 border border-[var(--border-color)] hover:border-[var(--primary)]/50 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[var(--text-muted)]">
                          <span className="text-yellow-400">init:</span>
                          <span>Dogtor Platform Launch</span>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-300">
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--primary)] mt-1">+</span>
                             {t('dogtor_achievement_1')}
                           </li>
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--primary)] mt-1">+</span>
                             {t('dogtor_achievement_2')}
                           </li>
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--primary)] mt-1">+</span>
                             {t('dogtor_achievement_3')}
                           </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Superb Education */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="md:order-2 pt-2">
                       <div className="inline-block px-3 py-1 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 text-[var(--secondary)] font-mono text-xs mb-2">
                         {t('superb_period')}
                       </div>
                       <h3 className="text-xl font-bold text-white">{t('superb_company')}</h3>
                       <p className="text-[var(--text-muted)] font-mono text-sm">{t('superb_position')}</p>
                    </div>
                    
                    {/* Git Node */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-[7px] mt-3 rounded-full bg-[var(--background)] border-2 border-[var(--secondary)] z-10 shadow-[0_0_10px_var(--secondary)]"></div>

                    <div className="pl-16 md:pl-0 md:text-right md:order-1 md:pt-2">
                      <div className="p-6 rounded-xl bg-[var(--background-alt)]/40 border border-[var(--border-color)] hover:border-[var(--secondary)]/50 transition-all duration-300">
                         <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[var(--text-muted)] md:justify-end">
                          <span className="text-purple-400">merge:</span>
                          <span>Education Tech Integration</span>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-300 inline-block text-left">
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--secondary)] mt-1">+</span>
                             {t('superb_achievement_1')}
                           </li>
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--secondary)] mt-1">+</span>
                             {t('superb_achievement_2')}
                           </li>
                           <li className="flex items-start gap-2">
                             <span className="text-[var(--secondary)] mt-1">+</span>
                             {t('superb_achievement_3')}
                           </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* 分開的區塊：先是教育 */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8 border-b border-[var(--border-color)] pb-4">
                <h2 className="text-3xl font-bold text-white">
                  <span className="text-[var(--secondary)] mr-2">#</span>{t('education')}
                </h2>
                <div className="text-sm font-mono text-[var(--text-muted)] hidden md:block">
                  // Academic Background
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* NTU */}
                <div className="group relative p-8 rounded-2xl bg-[var(--background-alt)]/30 border border-[var(--border-color)] hover:border-[var(--primary)]/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--primary)]/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  
                  <div className="font-mono text-xs text-[var(--primary)] mb-3 tracking-wider uppercase">{t('ntu_period')}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('ntu_school')}</h3>
                  <div className="inline-block px-3 py-1 rounded bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
                    {t('ntu_degree')}
                  </div>
                  <p className="text-sm text-gray-400 font-mono leading-relaxed border-t border-[var(--border-color)]/30 pt-4">
                    // {t('ntu_description')}
                  </p>
                </div>
                
                {/* KMU */}
                <div className="group relative p-8 rounded-2xl bg-[var(--background-alt)]/30 border border-[var(--border-color)] hover:border-[var(--secondary)]/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--secondary)]/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  
                  <div className="font-mono text-xs text-[var(--secondary)] mb-3 tracking-wider uppercase">{t('kmu_period')}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('kmu_school')}</h3>
                  <div className="inline-block px-3 py-1 rounded bg-[var(--secondary)]/10 text-[var(--secondary)] text-sm font-medium mb-4">
                    {t('kmu_degree')}
                  </div>
                  <p className="text-sm text-gray-400 font-mono leading-relaxed border-t border-[var(--border-color)]/30 pt-4">
                    // {t('kmu_description')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* 分開的區塊：後是技能 */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-8 border-b border-[var(--border-color)] pb-4">
                <h2 className="text-3xl font-bold text-white">
                  <span className="text-[var(--primary)] mr-2">#</span>{t('skills')}
                </h2>
                <div className="text-sm font-mono text-[var(--text-muted)] hidden md:block">
                  // Tech Stack & Tools (v2.0.0)
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* Frontend Stack */}
                 <div className="p-6 rounded-xl bg-[var(--background-alt)]/20 border border-[var(--border-color)] hover:bg-[var(--background-alt)]/40 transition-all">
                   <div className="flex items-center gap-2 mb-4 text-[var(--text-muted)]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                     <h3 className="font-mono text-sm">./frontend</h3>
                   </div>
                   <div className="flex flex-wrap gap-2 mb-4">
                     {techStacks.frontend.map(tech => (
                       <TechBadge key={tech.name} {...tech} />
                     ))}
                   </div>
                   <p className="text-xs text-gray-500 leading-relaxed">
                     Optimized component architecture with modern state management.
                   </p>
                 </div>
                 
                 {/* Backend Stack */}
                 <div className="p-6 rounded-xl bg-[var(--background-alt)]/20 border border-[var(--border-color)] hover:bg-[var(--background-alt)]/40 transition-all">
                   <div className="flex items-center gap-2 mb-4 text-[var(--text-muted)]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2h-14z" />
                     </svg>
                     <h3 className="font-mono text-sm">./backend</h3>
                   </div>
                   <div className="flex flex-wrap gap-2 mb-4">
                     {techStacks.backend.map(tech => (
                       <TechBadge key={tech.name} {...tech} />
                     ))}
                   </div>
                   <p className="text-xs text-gray-500 leading-relaxed">
                     Scalable microservices & high-performance API design.
                   </p>
                 </div>
                 
                 {/* Mobile Stack */}
                 <div className="p-6 rounded-xl bg-[var(--background-alt)]/20 border border-[var(--border-color)] hover:bg-[var(--background-alt)]/40 transition-all">
                   <div className="flex items-center gap-2 mb-4 text-[var(--text-muted)]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                     </svg>
                     <h3 className="font-mono text-sm">./mobile</h3>
                   </div>
                   <div className="flex flex-wrap gap-2 mb-4">
                     {techStacks.mobile.map(tech => (
                       <TechBadge key={tech.name} {...tech} />
                     ))}
                   </div>
                   <p className="text-xs text-gray-500 leading-relaxed">
                     Native-like performance across all mobile platforms.
                   </p>
                 </div>
                 
                 {/* AI & Other Stack - 更新為無進度條樣式 */}
                 <div className="p-6 rounded-xl bg-[var(--background-alt)]/20 border border-[var(--border-color)] hover:bg-[var(--background-alt)]/40 transition-all">
                   <div className="flex items-center gap-2 mb-4 text-[var(--text-muted)]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                     </svg>
                     <h3 className="font-mono text-sm">./ai-other</h3>
                   </div>
                   <div className="flex flex-wrap gap-2 mb-4">
                     {techStacks.ai.map(tech => (
                       <TechBadge key={tech.name} {...tech} />
                     ))}
                     <TechTagCloud tags={['System Design', 'DevOps', 'Socket']} color="text-gray-400" />
                   </div>
                   <p className="text-xs text-gray-500 leading-relaxed">
                     Advanced problem solving with ML & system architecture.
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
