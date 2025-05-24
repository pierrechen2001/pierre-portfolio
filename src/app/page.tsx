'use client';

import Image from "next/image";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

// 客戶端元數據
const pageMetadata = {
  title: 'Pierre\'s Portfolio',
  description: '全端開發者作品集',
};

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
          <div className="container mx-auto py-16 px-4 md:px-6">
            {/* Hero Section */}
            <div className="mb-20 pt-6 md:pt-14 md:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-7 order-2 md:order-1 text-center md:text-left parallax-scroll" data-speed="0.03">
                  <p className="text-xl text-[var(--primary)] mb-2 font-medium">{t('iam')}</p>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 leading-tight">
                    {t('fullname')}
                  </h1>
                  <div className="space-y-4 text-[var(--foreground)] backdrop-blur-sm bg-[var(--background)]/50 p-6 rounded-xl shadow-sm mb-10">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {t('description')}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link
                      href="/projects"
                      className="btn btn-primary"
                    >
                      {t('view_portfolio')}
                    </Link>
                    <Link
                      href="/contact"
                      className="btn btn-secondary"
                    >
                      {t('contact_me')}
                    </Link>
                  </div>
                </div>
                
                <div className="md:col-span-5 order-1 md:order-2">
                  <div className="relative parallax-scroll" data-speed="-0.07">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                      <Image
                        src="/avatar.svg"
                        alt="Pierre's Avatar"
                        width={384}
                        height={384}
                        className="rounded-full bg-[var(--background-alt)] p-1 border border-[var(--border-color)]"
                      />
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-20 blur-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Featured Projects Section */}
            <div className="mb-24 parallax-scroll" data-speed="0.05">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('my_portfolio')}</h2>
                <div className="backdrop-blur-sm bg-[var(--background)]/50 p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
                  <p className="text-[var(--text-muted)] text-lg">
                    {t('portfolio_description')}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className="parallax-scroll" data-speed="-0.08">
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      status={project.status}
                      date={project.date}
                      skills={project.skills}
                    />
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link
                  href="/projects"
                  className="btn btn-secondary view-all-button transition-transform duration-300 origin-center"
                  data-speed="-0.2"
                >
                  {t('view_all_projects')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
