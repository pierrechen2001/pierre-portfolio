'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  
  // 使用 useEffect 設置頁面標題和描述
  useEffect(() => {
    document.title = `${t('projects_page_title')} | Pierre's Portfolio`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('projects_page_description'));
    }
  }, [t, language]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="page-header bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>
          
          <div className="container mx-auto px-4 page-header-content">
            <h1 className="page-title bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{t('projects_page_title')}</h1>
            <p className="page-description">
              {t('projects_page_description')}
            </p>
          </div>
          
          <div className="decoration-blob -bottom-16 -left-16 w-64 h-64 bg-blue-500/20"></div>
          <div className="decoration-blob -top-16 -right-16 w-64 h-64 bg-purple-500/20"></div>
        </section>
        
        <section className="bg-[var(--background-alt)] py-16">
          <div className="container mx-auto px-4">
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  status={project.status}
                  date={project.date}
                  skills={project.skills}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 