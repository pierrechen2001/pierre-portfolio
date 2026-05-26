'use client';

import Image from "next/image";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import Typewriter from '@/components/Typewriter';
import { projects } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';

// 視差背景組件
function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      ref.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden bg-[#181c24]">
      <div ref={ref} className="absolute inset-[-10%] w-[120%] h-[120%]" style={{ willChange: 'transform' }}>
        {/* 使用 radial-gradient 避免 blur 大值造成的塊狀顆粒感 */}
        {/* 左上角：金黃光暈 */}
        <div className="parallax-blob absolute top-[-10%] left-[-10%] w-[60%] h-[60%]" style={{
          background: 'radial-gradient(ellipse at center, rgba(243,178,55,0.12) 0%, rgba(243,178,55,0.04) 50%, transparent 70%)',
        }}></div>

        {/* 右側：深藍光暈 */}
        <div className="parallax-blob absolute top-[10%] right-[-15%] w-[65%] h-[65%]" style={{
          background: 'radial-gradient(ellipse at center, rgba(39,104,168,0.14) 0%, rgba(39,104,168,0.05) 50%, transparent 70%)',
        }}></div>

        {/* 中央偏下：深藍金交融 */}
        <div className="parallax-blob absolute bottom-[0%] left-[20%] w-[60%] h-[60%]" style={{
          background: 'radial-gradient(ellipse at center, rgba(39,104,168,0.10) 0%, rgba(243,178,55,0.04) 50%, transparent 70%)',
        }}></div>
      </div>
    </div>
  );
}

// 滾動視差效果
function ScrollParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.parallax-scroll');
      const viewAllButton = document.querySelector('.view-all-button');

      scrollElements.forEach((el) => {
        const scrollY = window.scrollY;
        const element = el as HTMLElement;
        const speed = element.dataset.speed || '0.2';
        
        element.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
      });

      // 為 "查看所有專案" 按鈕添加滾動放大效果
      if (viewAllButton) {
        const scrollY = window.scrollY;
        const scaleStart = 800; // 開始放大的滾動位置
        const scaleMax = 1.3; // 最大放大倍數
        const scaleDistance = 500; // 達到最大放大的滾動距離
        
        if (scrollY > scaleStart) {
          const progress = Math.min((scrollY - scaleStart) / scaleDistance, 1);
          const scale = 1 + (scaleMax - 1) * progress;
          (viewAllButton as HTMLElement).style.transform = `scale(${scale})`;
        } else {
          (viewAllButton as HTMLElement).style.transform = 'scale(1)';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return null;
}

export default function Home() {
  // 手動指定最具代表性的三個專案：AI + Full Stack + Mobile
  const FEATURED_IDS = ['dogtor', '200ok', 'aiplanner'];
  const featuredProjects = FEATURED_IDS.map(id => projects.find(p => p.id === id)!).filter(Boolean);
  const { t, language } = useLanguage();
  
  const roles = language === 'zh'
    ? ['全端開發者', 'AI 應用開發者', 'App Store 發布者', '產品打造者']
    : ['Full Stack Developer', 'AI Application Builder', 'App Store Publisher', 'Product Builder'];

  // 使用 useEffect 設置頁面標題
  useEffect(() => {
    document.title = `Pierre's Portfolio`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('description'));
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
          {/* Hero Section with improved mobile layout */}
          <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
            {/* Mobile layout with avatar and name side by side */}
            <div className="md:hidden">
              {/* Mobile header with avatar and I am Pierre Chen */}
              <div className="flex items-end justify-between mb-6">
                {/* Left side - I am Pierre Chen */}
                <div className="flex-1 parallax-scroll" data-speed="0.05">
                  <div className="font-mono text-[var(--primary)] font-medium mb-2 flex items-center text-sm">
                    <span className="mr-2 opacity-70">&gt;</span>
                    {t('iam')}
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight mb-2">
                    {t('fullname')}
                  </h1>
                  <div className="h-6 flex items-center overflow-hidden">
                    <span className="text-[var(--border-color)] font-mono mr-2 text-sm">{'//'}</span>
                    <Typewriter 
                      words={roles} 
                      className="text-xs text-[var(--text-muted)]"
                    />
                  </div>
                </div>
                
                {/* Right side - smaller avatar */}
                <div className="flex-shrink-0 ml-4">
                  <div className="relative parallax-scroll" data-speed="-0.07">
                    <div className="avatar-container relative w-36 h-44 top-1.5">
                      {/* Smaller decorative elements */}
                      <div className="absolute -top-1 -left-1 w-2 h-2 border border-primary/30 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border border-secondary/30 rounded rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
                      
                      <Image
                        src="/nb_pixel_av.png"
                        alt="Pierre's Avatar"
                        fill
                        sizes="80px"
                        className="object-contain bg-transparent"
                        priority
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile description */}
              <div className="space-y-6 pl-4 border-l border-[var(--border-color)]">
                <div className="parallax-scroll" data-speed="0.05">
                  <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
                    {t('description')}
                  </p>
                </div>

                {/* Achievement Stats Strip - Mobile */}
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    { value: '10K+', label: language === 'zh' ? '用戶' : 'Users' },
                    { value: '#4',   label: language === 'zh' ? 'App Store' : 'App Store' },
                    { value: '8',    label: language === 'zh' ? '上線專案' : 'Shipped' },
                  ].map(stat => (
                    <div key={stat.value} className="flex items-baseline gap-1.5">
                      <span className="text-xl font-bold text-[var(--primary)]">{stat.value}</span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 parallax-scroll" data-speed="0.02">
                  <Link
                    href="/projects"
                    className="bg-primary text-[var(--dark)] px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center group"
                  >
                    {t('view_portfolio')}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="flex-1 border border-[var(--border-color)] text-[var(--foreground)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--background-alt)] transition-all duration-300 hover:border-primary/50 inline-flex items-center justify-center"
                    >
                      {t('contact_me')}
                    </Link>
                    <a
                      href="https://github.com/pierrechen2001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[var(--border-color)] text-[var(--foreground)] px-4 py-4 rounded-lg font-semibold hover:bg-[var(--background-alt)] transition-all duration-300 hover:border-primary/50 inline-flex items-center justify-center"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout - original grid layout */}
            <div className="hidden md:grid grid-cols-12 gap-8 md:gap-12 items-center min-h-[40vh]">
              
              {/* Left side content with better spacing */}
              <div className="col-span-7 space-y-8">
                <div className="parallax-scroll" data-speed="0.05">
                  <div className="flex items-center space-x-3 font-mono text-[var(--primary)] mb-4 opacity-90">
                    <span className="animate-pulse text-lg">_</span>
                    <span className="text-lg md:text-xl font-medium tracking-wide">{t('iam')}</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                    {t('fullname')}
                  </h1>
                  <div className="h-10 mb-8 flex items-center">
                    <span className="text-[var(--border-color)] font-mono mr-4 text-xl md:text-2xl">{'//'}</span>
                    <Typewriter 
                      words={roles} 
                      className="text-xl md:text-2xl text-[var(--text-muted)] font-medium"
                    />
                  </div>
                  <div className="pl-6 border-l-2 border-[var(--primary)]/30">
                    <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-2xl">
                      {t('description')}
                    </p>
                  </div>
                </div>

                {/* Achievement Stats Strip */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 pl-6 border-l-2 border-[var(--primary)]/20 parallax-scroll" data-speed="0.03">
                  {[
                    { value: '10K+', label: language === 'zh' ? '應用用戶' : 'App Users' },
                    { value: '#4',   label: language === 'zh' ? 'App Store 教育類' : 'App Store Education' },
                    { value: '8',    label: language === 'zh' ? '上線專案' : 'Projects Shipped' },
                  ].map(stat => (
                    <div key={stat.value} className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-[var(--primary)]">{stat.value}</span>
                      <span className="text-xs text-[var(--text-muted)] font-mono leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 parallax-scroll pt-2" data-speed="0.02">
                  <Link
                    href="/projects"
                    className="bg-primary text-[var(--dark)] px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center group"
                  >
                    {t('view_portfolio')}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-[var(--border-color)] text-[var(--foreground)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--background-alt)] transition-all duration-300 hover:border-primary/50 inline-flex items-center justify-center"
                  >
                    {t('contact_me')}
                  </Link>
                  <a
                    href="https://github.com/pierrechen2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[var(--border-color)] text-[var(--foreground)] px-5 py-4 rounded-lg font-semibold hover:bg-[var(--background-alt)] transition-all duration-300 hover:border-primary/50 inline-flex items-center justify-center gap-2"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
              
              {/* Right side image with better integration */}
              <div className="col-span-5">
                <div className="relative parallax-scroll" data-speed="-0.07">
                  <div className="avatar-container relative w-64 h-96 md:w-80 md:h-[30rem] mx-auto">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-secondary/30 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/4 -right-8 w-4 h-4 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                    
                    <Image
                      src="/nb_pixel_av.png"
                      alt="Pierre's Avatar"
                      fill
                      sizes="(max-width: 768px) 256px, 320px"
                      className="object-contain bg-transparent"
                      priority
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured Projects Section with improved spacing */}
          <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('my_portfolio')}
              </h2>
              <p className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto">
                {t('portfolio_description')}
              </p>
            </div>
            
            <div className="project-cards-grid">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="parallax-scroll" data-speed="0.02">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            <div className="text-center mt-16 mt-20">
              <Link
                href="/projects"
                className="inline-flex items-center bg-[var(--background-alt)] border border-[var(--border-color)] text-[var(--foreground)] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-primary hover:text-[var(--dark)] hover:border-primary transition-all duration-300 group text-sm md:text-base w-full sm:w-auto justify-center"
              >
                <span className="whitespace-nowrap">{t('view_all_projects')}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
