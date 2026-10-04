'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteBackground from '@/components/SiteBackground';
import MediaCarousel from '@/components/MediaCarousel';
import { motion } from 'framer-motion';
import { EASE_OUT, Reveal, ScrollZoom } from '@/components/motion';
import InteractiveIcon, { type IconName } from '@/components/InteractiveIcon';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

interface Skill {
  name: string;
  color: string;
}

interface Milestone {
  title: string;
  description: string;
  type: 'achievement' | 'skill' | 'learning';
  icon?: IconName;
}

interface ProjectProps {
  id: string;
  project: {
    id: string;
    title: {
      en: string;
      zh: string;
    };
    description: {
      en: string;
      zh: string;
    };
    fullDescription: {
      en: string;
      zh: string;
    };
    imageUrl: string;
    status: 'completed' | 'in-progress' | 'planned';
    date: {
      en: string;
      zh: string;
    };
    skills: Skill[];
    features?: {
      en: string[];
      zh: string[];
    };
    milestones?: {
      en: Milestone[];
      zh: Milestone[];
    };
    githubUrl?: string;
    demoUrl?: string;
    appStoreUrl?: string;
    youtubeVideoId?: string;
    youtubeIsShort?: boolean;
    galleryImages?: string[];
  };
}

export default function ProjectDetailClient({ project, id }: ProjectProps) {
  const { t, language } = useLanguage();
  
  const statusText = {
    completed: { zh: '已完成', en: 'Completed' },
    'in-progress': { zh: '進行中', en: 'In Progress' },
    planned: { zh: '計劃中', en: 'Planned' },
  };

  // 生成專案的結構化數據
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title[language],
    "description": project.description[language],
    "creator": {
      "@type": "Person",
      "name": "Pierre Chen",
      "url": "https://www.pierre-chen.com"
    },
    "programmingLanguage": project.skills.filter(skill => 
      ['JavaScript', 'TypeScript', 'Python', 'Swift', 'Dart', 'Java'].includes(skill.name)
    ).map(skill => skill.name),
    "url": `https://www.pierre-chen.com/projects/${id}`,
    "image": project.imageUrl,
    "keywords": project.skills.map(skill => skill.name).join(", "),
    ...(project.githubUrl && { "codeRepository": project.githubUrl })
  };

  // 渲染 Markdown 格式的函數
  const renderMarkdown = (text: string) => {
    // 處理粗體 **text**
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts = text.split(boldRegex);
    
    return parts.map((part, index) => {
      // 奇數索引的部分是粗體內容
      if (index % 2 === 1) {
        return <strong key={index} className="font-bold text-[var(--foreground)]">{part}</strong>;
      }
      return part;
    });
  };
  
  // 使用 useEffect 設置頁面標題和描述
  useEffect(() => {
    document.title = `${project.title[language]} | Pierre's Portfolio`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', project.description[language]);
    }
  }, [project.title, project.description, language]);
  
  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        {/* 添加結構化數據 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }}
        />
        <Header />
        
        <SiteBackground />

        <main className="flex-grow bg-transparent">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
            
            {/* 返回按鈕 */}
            <Link
              href="/projects"
              className="inline-flex items-center text-primary hover:text-primary/80 hover:underline mb-12 transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {language === 'en' ? 'Back to Projects' : '返回專案列表'}
            </Link>
            
            {/* 主要內容 */}
            <div className="backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 p-8 md:p-12">
              
              {/* 專案圖片 */}
              <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: EASE_OUT }} className="mb-8 md:mb-12 rounded-2xl overflow-hidden shadow-lg border border-[var(--border-color)]/10">
                <Image
                  src={project.imageUrl}
                  alt={project.title[language]}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>

              {/* 標題區域 */}
              <Reveal delay={0.15} className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 leading-normal">
                  {project.title[language]}
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-6 text-[var(--foreground-muted)]">
                  <span className="text-lg">{project.date[language]}</span>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    project.status === 'completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : project.status === 'in-progress'
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {statusText[project.status][language]}
                  </span>
                </div>
              </Reveal>
              
              {/* 專案概述 */}
              <Reveal className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--foreground)]">
                  {language === 'en' ? 'Project Overview' : '專案概述'}
                </h2>
                <div className="text-[var(--foreground-muted)] leading-relaxed space-y-4">
                  {project.fullDescription[language].split('\n').map((paragraph, i) => (
                    <p key={i} className="text-lg">
                      {renderMarkdown(paragraph.trim())}
                    </p>
                  ))}
                </div>
              </Reveal>

              {/* 專案媒體展示 */}
              {(project.youtubeVideoId || (project.galleryImages && project.galleryImages.length > 0)) && (
                <Reveal className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--foreground)]">
                    {language === 'en' ? 'Project Media' : '專案展示'}
                  </h2>
                  <ScrollZoom>
                  <MediaCarousel
                    youtubeVideoId={project.youtubeVideoId}
                    youtubeIsShort={project.youtubeIsShort}
                    galleryImages={project.galleryImages}
                    projectTitle={project.title[language]}
                  />
                  </ScrollZoom>
                </Reveal>
              )}
              
              {/* 主要功能 */}
              {project.features && (
                <Reveal className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--foreground)]">
                    {language === 'en' ? 'Key Features' : '主要功能'}
                  </h2>
                  <ul className="space-y-4">
                    {project.features[language].map((feature, index) => (
                      <li key={index} className="flex items-start group">
                        <span className="inline-flex items-center justify-center w-8 h-8 mr-4 rounded-full bg-primary/20 text-primary border border-primary/30 font-semibold flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                          {index + 1}
                        </span>
                        <span className="text-[var(--foreground-muted)] text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
              
              {/* 使用技術 */}
              <Reveal className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--foreground)]">
                  {t('technologies_used')}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--background-alt)]/80 border border-[var(--border-color)] text-[var(--foreground)] hover:border-primary/50 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Reveal>
              
              {/* 專案里程碑 */}
              {project.milestones && (
                <Reveal className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">
                    {language === 'en' ? 'Project Milestones' : '專案里程碑'}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {project.milestones[language].map((milestone, index) => {
                      const typeColors = {
                        achievement: 'bg-primary/10 border-primary/30 text-primary',
                        skill: 'bg-secondary/10 border-secondary/30 text-secondary',
                        learning: 'bg-green-500/10 border-green-500/30 text-green-400'
                      };
                      
                      const typeLabels = {
                        achievement: language === 'en' ? 'Achievement' : '成就',
                        skill: language === 'en' ? 'Skill' : '技能',
                        learning: language === 'en' ? 'Learning' : '學習'
                      };
                      
                      return (
                        <div
                          key={index}
                          className={`group p-6 rounded-xl border-2 bg-[var(--background-alt)]/40 backdrop-blur-sm ${typeColors[milestone.type]} transition-all duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1 hover:bg-[var(--background-alt)]/60`}
                        >
                          <div className="flex items-start space-x-4">
                            <InteractiveIcon name={milestone.icon ?? 'target'} />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                                  {milestone.title}
                                </h3>
                                <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${typeColors[milestone.type]}`}>
                                  {typeLabels[milestone.type]}
                                </span>
                              </div>
                              <p className="text-[var(--foreground-muted)] leading-relaxed">
                                {milestone.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Reveal>
              )}
              
              {/* 連結按鈕 */}
              <Reveal className="flex flex-wrap gap-4 justify-center md:justify-start">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[var(--background-alt)] border border-[var(--border-color)] text-[var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300 group"
                  >
                    <svg 
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {t('view_code')}
                  </a>
                )}
                
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {t('view_live')}
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 border border-gray-600 group"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    {language === 'en' ? 'App Store' : 'App Store 下載'}
                  </a>
                )}
              </Reveal>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
