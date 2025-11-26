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
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      ref.current.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
    };

    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const parallaxElements = ref.current.querySelectorAll('.parallax-blob');
      
      parallaxElements.forEach((el, index) => {
        const element = el as HTMLElement;
        const speed = 0.3 + (index * 0.1); // 不同元素不同的視差速度
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden bg-[#181c24]">
      <div ref={ref} className="absolute inset-0 scale-110">
        {/* 增強的圓形色塊 - 更明顯、更豐富 */}
        <div className="parallax-blob absolute top-[-15%] left-[-15%] w-[40%] h-[40%] bg-gradient-to-br from-[#e9a42e]/30 to-[#f3b237]/20 rounded-full blur-[40px] animate-pulse" style={{ animationDuration: '6s' }}></div>
        
        <div className="parallax-blob absolute top-[20%] right-[-25%] w-[50%] h-[50%] bg-gradient-to-bl from-indigo-400/25 to-blue-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        <div className="parallax-blob absolute bottom-[10%] left-[5%] w-[70%] h-[70%] bg-gradient-to-tr from-slate-600/20 to-slate-400/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        
        <div className="parallax-blob absolute bottom-[-20%] right-[25%] w-[40%] h-[40%] bg-gradient-to-tl from-blue-600/25 to-cyan-500/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '7s' }}></div>
        
        <div className="parallax-blob absolute top-[35%] left-[25%] w-[55%] h-[55%] bg-gradient-to-br from-slate-500/20 to-gray-600/10 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '9s' }}></div>
        
        {/* 新增更多豐富的色塊 */}
        <div className="parallax-blob absolute top-[60%] right-[10%] w-[35%] h-[35%] bg-gradient-to-bl from-purple-500/20 to-indigo-600/15 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: '11s' }}></div>
        
        <div className="parallax-blob absolute top-[5%] left-[60%] w-[45%] h-[45%] bg-gradient-to-tr from-teal-500/15 to-emerald-400/10 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '8.5s' }}></div>
        
        
        <div className="parallax-blob absolute top-[80%] right-[45%] w-[30%] h-[30%] bg-gradient-to-tl from-pink-500/15 to-rose-400/10 rounded-full blur-[85px] animate-pulse" style={{ animationDuration: '6.5s' }}></div>
      </div>
    </div>
  );
}

// 滾動視差效果
function ScrollParallax() {
  useEffect(() => {
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
  // 只顯示前3個專案
  const featuredProjects = projects.slice(0, 3);
  const { t, language } = useLanguage();
  
  const roles = language === 'zh' 
    ? ['全端開發者', 'AI 解決方案專家', '軟體架構師', '創新思維者']
    : ['Full Stack Developer', 'AI Specialist', 'Software Architect', 'Creative Thinker'];

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
                  <Link
                    href="/contact"
                    className="border border-[var(--border-color)] text-[var(--foreground)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--background-alt)] transition-all duration-300 hover:border-primary/50 inline-flex items-center justify-center"
                  >
                    {t('contact_me')}
                  </Link>
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
