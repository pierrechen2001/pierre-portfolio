'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

// 視差背景組件 - 與首頁相同
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
        {/* 專案頁面專用的色塊配置 */}
        <div className="parallax-blob absolute top-[-10%] left-[-20%] w-[55%] h-[55%] bg-gradient-to-br from-[#e9a42e]/25 to-[#f3b237]/15 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: '7s' }}></div>
        
        <div className="parallax-blob absolute top-[25%] right-[-30%] w-[60%] h-[60%] bg-gradient-to-bl from-indigo-400/20 to-blue-500/12 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '9s' }}></div>     
        
        <div className="parallax-blob absolute top-[70%] right-[10%] w-[35%] h-[35%] bg-gradient-to-bl from-purple-500/20 to-indigo-600/15 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: '11s' }}></div>
        
        <div className="parallax-blob absolute top-[5%] left-[80%] w-[45%] h-[45%] bg-gradient-to-tr from-teal-500/15 to-emerald-400/10 rounded-full blur-[70px] animate-pulse" style={{ animationDuration: '8.5s' }}></div>        

        <div className="parallax-blob absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-gradient-to-bl from-teal-500/15 to-emerald-400/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '9.5s' }}></div>
      </div>
    </div>
  );
}

// 滾動視差效果
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

export default function ProjectsClient() {
  const { t } = useLanguage();
  
  return (
    <ParallaxProvider>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        
        {/* 添加視差背景 - 與首頁風格一致 */}
        <ParallaxBackground />
        <ScrollParallax />
        
        {/* 覆蓋一層半透明背景以確保內容可讀性 */}
        <div className="fixed inset-0 z-[-1] bg-[var(--background)]/90 backdrop-blur-sm"></div>
        
        <main className="flex-grow bg-transparent">
          <div className="container mx-auto py-16 px-4 md:px-6">
            {/* Hero Section - 與首頁風格一致 */}
            <div className="mb-20 pt-6 md:pt-14 md:pb-6 text-center">
              <div className="parallax-scroll" data-speed="0.03">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 leading-tight">
                  {t('projects_page_title')}
                </h1>
                <div className="backdrop-blur-sm bg-[var(--background)]/50 p-6 rounded-xl shadow-sm max-w-3xl mx-auto mb-16">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {t('projects_page_description')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Projects Grid - 統一的卡片設計 */}
            <div className="parallax-scroll" data-speed="0.05">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={project.id} className="parallax-scroll" data-speed="-0.1">
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
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
