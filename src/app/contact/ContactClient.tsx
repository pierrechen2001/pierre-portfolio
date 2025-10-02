'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

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

export default function ContactClient() {
  const { t, language } = useLanguage();
  
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
          {/* 整頁一體設計 - 移除容器限制，使用全寬度佈局 */}
          <div className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16">
            
            {/* 主要內容區域 - 垂直居中 */}
            <div className="max-w-7xl mx-auto w-full">
              
              {/* 標題區域 */}
              <div className="text-center mb-16 parallax-scroll" data-speed="0.1">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
                  {t('contact_page_title')}
                </h1>
                <p className="text-xl md:text-2xl text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed">
                  {t('contact_page_description')}
                </p>
              </div>
              
              {/* 主要內容 - 聯絡表單和資訊並排 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                
                {/* 左側：聯絡表單 */}
                <div className="parallax-scroll" data-speed="0.05">
                  <div className="backdrop-blur-md bg-[var(--background)]/60 p-8 md:p-12 rounded-2xl shadow-2xl border border-[var(--border)]/20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary/90 to-secondary/90 bg-clip-text text-transparent">
                      {t('get_in_touch')}
                    </h2>
                    <ContactForm />
                  </div>
                </div>
                
                {/* 右側：聯絡資訊 */}
                <div className="parallax-scroll" data-speed="-0.03">
                  <div className="backdrop-blur-md bg-[var(--background)]/60 p-8 md:p-12 rounded-2xl shadow-2xl border border-[var(--border)]/20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-secondary/90 to-primary/90 bg-clip-text text-transparent">
                      {t('contact_info')}
                    </h2>
                    
                    {/* 聯絡方式 */}
                    <div className="space-y-8 mb-12">
                      <div className="flex items-start">
                        <div className="bg-primary/15 rounded-full w-16 h-16 flex items-center justify-center mr-6 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8 text-primary"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">{t('contact_form_email')}</h3>
                          <a
                            href="mailto:b12705058@g.ntu.edu.tw"
                            className="text-lg text-primary hover:underline transition-colors"
                          >
                            b12705058@g.ntu.edu.tw
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/15 rounded-full w-16 h-16 flex items-center justify-center mr-6 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8 text-primary"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">{language === 'en' ? 'Phone' : '電話'}</h3>
                          <a
                            href="tel:+886963779263"
                            className="text-lg text-primary hover:underline transition-colors"
                          >
                            +886 963 779 263
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/15 rounded-full w-16 h-16 flex items-center justify-center mr-6 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8 text-primary"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">{language === 'en' ? 'Location' : '位置'}</h3>
                          <p className="text-lg text-[var(--foreground-muted)]">
                            {language === 'en' ? 'Zhongzheng District, Taipei' : '台北市中正區'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* 社群連結 */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6 text-[var(--foreground)]">{language === 'en' ? 'Social Links' : '社群連結'}</h3>
                      <div className="flex space-x-6">
                        <a
                          href="https://github.com/pierrechen2001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[var(--background-alt)]/60 p-4 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                          aria-label="GitHub"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-[var(--foreground)]"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                        
                        <a
                          href="https://www.linkedin.com/in/guanyu-chen-989117303/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[var(--background-alt)]/60 p-4 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                          aria-label="LinkedIn"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-[var(--foreground)]"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        
                      </div>
                    </div>
                  </div>
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
