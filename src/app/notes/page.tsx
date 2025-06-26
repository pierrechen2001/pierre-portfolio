'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { notes, categories } from '@/data/notes';
import Link from 'next/link';

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
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#e9a42e]/10 rounded-full blur-[50px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[15%] right-[-20%] w-[40%] h-[40%] bg-indigo-300/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-[15%] left-[10%] w-[60%] h-[60%] bg-slate-800/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-[-15%] right-[30%] w-[30%] h-[30%] bg-blue-700/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '9s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[45%] h-[45%] bg-slate-700/20 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '11s' }}></div>
      </div>
    </div>
  );
}

export default function NotesPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // 使用 useEffect 設置頁面標題
  useEffect(() => {
    document.title = `${language === 'en' ? 'Notes' : '筆記庫'} | Pierre's Portfolio`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en' ? 'My development notes and insights' : '我的開發筆記與見解');
    }
  }, [language]);

  // 過濾筆記
  const filteredNotes = notes.filter(note => {
    const matchesCategory = selectedCategory === 'All' || selectedCategory === '全部' || note.category[language] === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      note.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // 精選筆記（用於首頁顯示）
  const featuredNotes = notes.filter(note => note.featured);

  return (
    <ParallaxProvider>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        
        {/* 添加視差背景 */}
        <ParallaxBackground />
        
        {/* 覆蓋一層半透明背景以確保內容可讀性 */}
        <div className="fixed inset-0 z-[-1] bg-[var(--background)]/90 backdrop-blur-sm"></div>
        
        <main className="flex-grow bg-transparent">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
            
            {/* 標題區域 */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 leading-tight">
                {language === 'en' ? 'My Notes' : '我的筆記庫'}
              </h1>
              <p className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed">
                {language === 'en' 
                  ? 'Development insights, tutorials, and thoughts on web technologies' 
                  : '開發見解、教程和對網頁技術的思考'}
              </p>
            </div>

            {/* 搜尋和過濾區域 */}
            <div className="mb-12">
              <div className="backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 p-6 md:p-8">
                
                {/* 搜尋框 */}
                <div className="mb-6">
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--foreground-muted)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder={language === 'en' ? 'Search notes...' : '搜尋筆記...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* 分類過濾 */}
                <div className="flex flex-wrap gap-2">
                  {[{ en: 'All', zh: '全部' }, ...categories].map((category) => (
                    <button
                      key={category.en}
                      onClick={() => setSelectedCategory(category[language])}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category[language]
                          ? 'bg-primary text-[var(--dark)] shadow-lg shadow-primary/25'
                          : 'bg-[var(--background-alt)] border border-[var(--border-color)] text-[var(--foreground)] hover:border-primary/50'
                      }`}
                    >
                      {category[language]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 筆記列表 */}
            {filteredNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNotes.map((note, index) => (
                  <div key={note.id} className="group">
                    <Link href={`/notes/${note.id}`}>
                      <div className="h-full backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 p-6 hover:border-primary/50 hover:bg-[var(--background-alt)]/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                        
                        {/* 標題和精選標識 */}
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-primary transition-colors leading-tight flex-grow">
                            {note.title[language]}
                          </h3>
                          {note.featured && (
                            <span className="ml-2 px-2 py-1 bg-primary/20 text-primary border border-primary/30 text-xs rounded-full font-medium flex-shrink-0">
                              {language === 'en' ? 'Featured' : '精選'}
                            </span>
                          )}
                        </div>

                        {/* 發布日期和分類 */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-[var(--foreground-muted)]">
                          <span>{note.publishedAt}</span>
                          <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                            {note.category[language]}
                          </span>
                        </div>

                        {/* 描述 */}
                        <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                          {note.description[language]}
                        </p>

                        {/* 標籤 */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {note.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-[var(--background-alt)]/80 border border-[var(--border-color)] text-[var(--foreground)] rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          {note.tags.length > 3 && (
                            <span className="px-3 py-1 bg-[var(--background-alt)]/80 border border-[var(--border-color)] text-[var(--foreground-muted)] rounded-full text-xs">
                              +{note.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* 閱讀更多 */}
                        <div className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-all duration-300">
                          {language === 'en' ? 'Read More' : '閱讀更多'}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 p-12">
                  <svg
                    className="mx-auto w-16 h-16 text-[var(--foreground-muted)] mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    {language === 'en' ? 'No Notes Found' : '找不到筆記'}
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    {language === 'en' 
                      ? 'Try adjusting your search terms or category filter.' 
                      : '試著調整您的搜尋關鍵字或分類篩選。'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </ParallaxProvider>
  );
} 