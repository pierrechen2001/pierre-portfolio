'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { notes } from '@/data/notes';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
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

interface NoteDetailPageProps {
  params: {
    id: string;
  };
}

export default function NoteDetailPage({ params }: NoteDetailPageProps) {
  const { language } = useLanguage();
  const note = notes.find(n => n.id === params.id);

  useEffect(() => {
    if (note) {
      document.title = `${note.title[language]} | Pierre's Portfolio`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', note.description[language]);
      }
    }
  }, [note, language]);

  if (!note) {
    notFound();
  }

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
            
            {/* 返回按鈕 */}
            <div className="mb-8">
              <Link
                href="/notes"
                className="inline-flex items-center text-[var(--foreground-muted)] hover:text-primary transition-colors duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {language === 'en' ? 'Back to Notes' : '返回筆記庫'}
              </Link>
            </div>

            {/* 文章頭部 */}
            <div className="max-w-4xl mx-auto">
              <div className="backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 p-8 md:p-12 mb-8">
                
                {/* 標題 */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-8 leading-tight">
                  {note.title[language]}
                </h1>

                {/* 元數據 */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-[var(--foreground-muted)]">
                  
                  {/* 發布日期 */}
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm md:text-base">{note.publishedAt}</span>
                  </div>

                  {/* 分類 */}
                  <span className="px-4 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full font-medium text-sm md:text-base">
                    {note.category[language]}
                  </span>

                  {/* 精選標識 */}
                  {note.featured && (
                    <span className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full font-medium text-sm md:text-base">
                      {language === 'en' ? 'Featured' : '精選'}
                    </span>
                  )}
                </div>

                {/* 描述 */}
                <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed mb-8 border-l-4 border-primary/30 pl-6 bg-primary/5 py-4 rounded-r-lg">
                  {note.description[language]}
                </p>

                {/* 標籤 */}
                <div className="flex flex-wrap gap-3">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-[var(--background-alt)]/80 border border-[var(--border-color)] text-[var(--foreground)] rounded-full font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 文章內容 */}
              <div className="backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 overflow-hidden">
                
                {/* 閱讀進度條 */}
                <div className="h-1 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
                
                <article className="p-8 md:p-12 prose prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-6 mt-12 first:mt-0 leading-tight border-b-2 border-primary/20 pb-3">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-4 mt-10 leading-tight relative">
                          <span className="absolute -left-4 top-0 w-1 h-full bg-primary/60 rounded-full"></span>
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] mb-3 mt-8 leading-tight">
                          {children}
                        </h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-3 mt-6 leading-tight">
                          {children}
                        </h4>
                      ),
                      p: ({ children }) => (
                        <p className="text-[var(--foreground-muted)] mb-4 leading-relaxed text-sm md:text-base font-normal">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="text-[var(--foreground-muted)] mb-6 pl-6 space-y-2 text-sm md:text-base font-normal">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="text-[var(--foreground-muted)] mb-6 pl-6 space-y-2 text-sm md:text-base font-normal">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-[var(--foreground-muted)] leading-relaxed relative font-normal">
                          <span className="absolute -left-3 top-2 w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                          {children}
                        </li>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg italic text-[var(--foreground-muted)] text-sm md:text-base leading-relaxed relative font-normal">
                          <svg className="absolute top-3 left-2 w-5 h-5 text-primary/40" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          {children}
                        </blockquote>
                      ),
                      code: ({ children, className }) => {
                        const isInlineCode = !className;
                        if (isInlineCode) {
                          return (
                            <code className="bg-[var(--background-alt)] border border-[var(--border-color)] text-primary px-2 py-1 rounded font-mono text-xs md:text-sm font-medium">
                              {children}
                            </code>
                          );
                        }
                        return <code className={className}>{children}</code>;
                      },
                      pre: ({ children }) => (
                        <div className="relative my-6">
                          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-slate-800 to-transparent rounded-t-lg"></div>
                          <pre className="bg-[#0d1117] border border-[var(--border-color)] rounded-lg p-4 overflow-x-auto text-xs md:text-sm">
                            {children}
                          </pre>
                        </div>
                      ),
                      table: ({ children }) => (
                        <div className="overflow-x-auto mb-8 rounded-lg border border-[var(--border-color)]">
                          <table className="w-full border-collapse">
                            {children}
                          </table>
                        </div>
                      ),
                      th: ({ children }) => (
                        <th className="bg-[var(--background-alt)] border-b border-[var(--border-color)] px-4 py-3 text-left font-semibold text-[var(--foreground)] text-xs md:text-sm">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="border-b border-[var(--border-color)] px-4 py-3 text-[var(--foreground-muted)] text-xs md:text-sm font-normal">
                          {children}
                        </td>
                      ),
                      a: ({ children, href }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-300 font-medium"
                        >
                          {children}
                          <svg className="inline w-3 h-3 ml-1 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ),
                      hr: () => (
                        <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
                      ),
                      strong: ({ children }) => (
                        <strong className="font-bold text-[var(--foreground)] bg-gradient-to-r from-primary/10 to-secondary/10 px-1 rounded">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-[var(--foreground)] font-medium">
                          {children}
                        </em>
                      ),
                    }}
                  >
                    {note.content[language]}
                  </ReactMarkdown>
                </article>
              </div>

              {/* 底部導航 */}
              <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-6">
                <Link
                  href="/notes"
                  className="inline-flex items-center bg-[var(--background-alt)] border border-[var(--border-color)] text-[var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-[var(--dark)] hover:border-primary transition-all duration-300 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {language === 'en' ? 'All Notes' : '所有筆記'}
                </Link>

                <div className="text-center sm:text-right">
                  <p className="text-sm text-[var(--foreground-muted)] mb-3">
                    {language === 'en' ? 'Share this note:' : '分享這篇筆記：'}
                  </p>
                  <div className="flex gap-3 justify-center sm:justify-end">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        // 這裡可以添加成功提示
                      }}
                      className="p-3 bg-[var(--background-alt)] border border-[var(--border-color)] text-[var(--foreground)] rounded-lg hover:bg-primary hover:text-[var(--dark)] hover:border-primary transition-all duration-300 group"
                      title={language === 'en' ? 'Copy link' : '複製連結'}
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="p-3 bg-[var(--background-alt)] border border-[var(--border-color)] text-[var(--foreground)] rounded-lg hover:bg-secondary hover:text-[var(--dark)] hover:border-secondary transition-all duration-300 group"
                      title={language === 'en' ? 'Back to top' : '返回頂部'}
                    >
                      <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </button>
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