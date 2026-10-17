'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteBackground from '@/components/SiteBackground';
import MediaCarousel from '@/components/MediaCarousel';
import { motion } from 'framer-motion';
import { EASE_OUT, Reveal } from '@/components/motion';
import InteractiveIcon from '@/components/InteractiveIcon';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';
import type { Project } from '@/data/projects';
import ProjectFeatureCards from '@/components/ProjectFeatureCards';
import ProjectSection from '@/components/ProjectSection';
import ProjectUserFlow from '@/components/ProjectUserFlow';
import { ResearchSummary, ResearchStudySections } from '@/components/ResearchStudy';

interface ProjectProps {
  id: string;
  project: Project;
}

export default function ProjectDetailClient({ project, id }: ProjectProps) {
  const { t, language } = useLanguage();
  const userFlow = project.userFlow?.[language];
  const hasImages = Boolean(project.galleryImages?.length);
  const navigation = [
    { id: 'overview', title: language === 'zh' ? '概述' : 'Overview' },
    ...(project.research ? [
      { id: 'technology', title: language === 'zh' ? '研究方法' : 'Methods' },
      { id: 'findings', title: language === 'zh' ? '研究洞察' : 'Findings' },
      { id: 'report', title: language === 'zh' ? '團隊與報告' : 'Team & report' }
    ] : []),
    ...(project.youtubeVideoId ? [{ id: 'demo', title: language === 'zh' ? '影片' : 'Video' }] : []),
    ...(!project.youtubeVideoId && hasImages ? [{ id: 'gallery', title: language === 'zh' ? '圖片' : 'Images' }] : []),
    ...(project.features?.length ? [{ id: 'design', title: language === 'zh' ? '功能與設計' : 'Features & design' }] : []),
    ...(userFlow?.length ? [{ id: 'flow', title: language === 'zh' ? '使用流程' : 'User flow' }] : []),
    ...(project.youtubeVideoId && hasImages ? [{ id: 'gallery', title: language === 'zh' ? '圖片' : 'Images' }] : []),
    ...(!project.research ? [{ id: 'technology', title: language === 'zh' ? '技術與成果' : 'Technology & outcomes' }] : []),
  ];
  
  const statusText = {
    completed: { zh: '已完成', en: 'Completed' },
    live: { zh: '已上線，持續迭代優化', en: 'Live · Continuously improving' },
    'in-progress': { zh: '進行中', en: 'In Progress' },
    planned: { zh: '計劃中', en: 'Planned' },
  };

  // 生成專案的結構化數據
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": project.research ? "Report" : "SoftwareApplication",
    "name": project.title[language],
    "description": project.description[language],
    ...(project.research ? {
      "author": project.research.members.map(name => ({ "@type": "Person", name })),
      "contributor": { "@type": "Person", "name": "Guan-Yu Chen", "alternateName": "Pierre Chen", "url": "https://www.pierre-chen.com" },
      "associatedMedia": { "@type": "MediaObject", "contentUrl": `https://www.pierre-chen.com${project.research.reportUrl}`, "encodingFormat": "application/pdf" }
    } : { "creator": {
      "@type": "Person",
      "name": "Pierre Chen",
      "url": "https://www.pierre-chen.com"
    } }),
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

  // Re-align deep links after the saved language changes the section heights.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const sectionId = window.location.hash.slice(1);
      const section = document.getElementById(sectionId);
      if (section?.classList.contains('project-detail-section')) {
        section.scrollIntoView({ block: 'start' });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [language, id]);
  
  return (
    <>
      <div className="project-detail-page flex flex-col min-h-screen relative">
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
            <div className="project-detail-content">
              
              {/* 專案圖片 */}
              {!project.research && <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: EASE_OUT }} className="mb-8 md:mb-12 rounded-2xl overflow-hidden shadow-lg border border-[var(--border-color)]/10">
                <Image
                  src={project.imageUrl}
                  alt={project.title[language]}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>}

              {/* 標題區域 */}
              <Reveal delay={0.15} className={project.research ? 'mb-8' : 'text-center mb-12'}>
                {project.research && <p className="text-sm text-primary mb-4">{project.research.course}</p>}
                <h1 className={`${project.research ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'} font-bold text-[var(--foreground)] mb-6 leading-normal`}>
                  {project.title[language]}
                </h1>
                <div className={`flex flex-wrap ${project.research ? '' : 'justify-center'} items-center gap-6 text-[var(--foreground-muted)]`}>
                  <span className="text-lg">{project.date[language]}</span>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    (project.status === 'completed' || project.status === 'live')
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : project.status === 'in-progress'
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {statusText[project.status][language]}
                  </span>
                </div>
              </Reveal>

              {project.research && <ResearchSummary study={project.research} language={language} />}

              <nav className="project-section-nav" aria-label={language === 'zh' ? '專案頁面目錄' : 'Project sections'}>
                {navigation.map(section => (
                  <a key={section.id} href={`#${section.id}`}>{section.title}</a>
                ))}
              </nav>

              <div className="project-introduction">
                {/* 先交代產品要解決的問題與設計想法 */}
                {project.productStory && (
                  <Reveal className="project-context mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--foreground)]">
                      {language === 'en' ? 'Why this project exists' : '為什麼做這個專案'}
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="project-context-item">
                        <h3 className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
                          {language === 'en' ? 'The problem' : '遇到的問題'}
                        </h3>
                        <p className="text-lg leading-relaxed text-[var(--foreground-muted)]">
                          {project.productStory[language].problem}
                        </p>
                      </div>
                      <div className="project-context-item">
                        <h3 className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
                          {language === 'en' ? 'The product idea' : '產品想法'}
                        </h3>
                        <p className="text-lg leading-relaxed text-[var(--foreground-muted)]">
                          {project.productStory[language].approach}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )}

                {/* 專案概述 */}
                <ProjectSection id="overview" title={project.research ? (language === 'zh' ? '從理論到研究問題' : 'From Theory to a Research Question') : (language === 'en' ? 'Project Overview' : '專案概述')} eyebrow="OVERVIEW">
                  <div className="project-overview-copy text-[var(--foreground-muted)] leading-relaxed space-y-4">
                    {project.fullDescription[language].split('\n').map(paragraph => paragraph.trim()).filter(Boolean).map((paragraph, i) => (
                      <p key={i} className="text-lg">
                        {renderMarkdown(paragraph)}
                      </p>
                    ))}
                  </div>
                </ProjectSection>

              </div>

              {project.research && <ResearchStudySections study={project.research} skills={project.skills} language={language} />}

              {project.research && (
                <ProjectSection id="report" title={language === 'zh' ? '課程與研究報告' : 'Course & Research Report'} eyebrow="COURSE FINAL PROJECT" tone="details">
                  <dl className="grid gap-6 md:grid-cols-3 mb-8">
                    <div className="md:col-span-2">
                      <dt className="text-sm text-primary mb-2">{language === 'zh' ? '課程名稱' : 'Course'}</dt>
                      <dd className="text-lg text-[var(--foreground)]">{project.research.course}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-primary mb-2">{project.research.team}</dt>
                      <dd className="text-lg text-[var(--foreground)]">{project.research.role[language]}</dd>
                    </div>
                  </dl>
                  <div className="mb-8">
                    <p className="text-sm text-primary mb-3">{language === 'zh' ? '研究團隊' : 'Research team'}</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[var(--foreground)]">
                      {project.research.members.map(name => <li key={name}>{name}</li>)}
                    </ul>
                  </div>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed mb-4">{project.research.reportTitle}</p>
                  <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">{project.research.attributionNote[language]}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={project.research.reportUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      {language === 'zh' ? '閱讀完整報告（PDF）' : 'Read full report (PDF)'}
                    </a>
                    <a href={project.research.reportUrl} download className="inline-flex items-center border border-[var(--border-color)] text-[var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:border-primary transition-colors">
                      {language === 'zh' ? '下載研究報告 PDF' : 'Download report PDF'}
                    </a>
                  </div>
                </ProjectSection>
              )}

              {project.youtubeVideoId && (
                <ProjectSection id="demo" title={language === 'zh' ? '影片展示' : 'Video Showcase'} eyebrow="WATCH IT IN ACTION" tone="showcase">
                  <MediaCarousel youtubeVideoId={project.youtubeVideoId} youtubeIsShort={project.youtubeIsShort} projectTitle={project.title[language]} />
                </ProjectSection>
              )}

              {!project.youtubeVideoId && hasImages && (
                <ProjectSection id="gallery" title={language === 'zh' ? '圖片展示' : 'Image Showcase'} eyebrow="PRODUCT GALLERY" tone="gallery">
                  <MediaCarousel galleryImages={project.galleryImages} projectTitle={project.title[language]} />
                </ProjectSection>
              )}

              {project.features && project.features.length > 0 && (
                <ProjectFeatureCards features={project.features} language={language} />
              )}

              {userFlow && (
                <ProjectSection id="flow" title={language === 'en' ? 'How it works' : '使用流程'} eyebrow="THE USER JOURNEY" tone="flow">
                  <ProjectUserFlow steps={userFlow} language={language} />
                </ProjectSection>
              )}
              
              {project.youtubeVideoId && hasImages && (
                <ProjectSection id="gallery" title={language === 'zh' ? '介面與產品畫面' : 'Interface & Product Screens'} eyebrow="A CLOSER LOOK" tone="gallery">
                  <MediaCarousel galleryImages={project.galleryImages} projectTitle={project.title[language]} />
                </ProjectSection>
              )}

              {/* 使用技術 */}
              {!project.research && <ProjectSection id="technology" title={t('technologies_used')} eyebrow="BUILT WITH" tone="details">
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
              </ProjectSection>}
              
              {/* 專案里程碑 */}
              {project.milestones && (
                <ProjectSection id="milestones" title={project.research ? (language === 'zh' ? '研究方法與發現' : 'Methods & Findings') : (language === 'en' ? 'Project Milestones' : '專案里程碑')} eyebrow="EXPERIENCE & OUTCOMES" tone="details">
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
                          className={`project-milestone p-5 ${typeColors[milestone.type]}`}
                        >
                          <div className="flex items-start space-x-4">
                            <InteractiveIcon name={milestone.icon ?? 'target'} />
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
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
                </ProjectSection>
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
