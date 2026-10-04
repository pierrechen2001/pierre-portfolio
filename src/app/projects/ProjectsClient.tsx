'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteBackground from '@/components/SiteBackground';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Reveal } from '@/components/motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectsClient() {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        
        <SiteBackground />

        <main className="flex-grow bg-transparent">
          <div className="container mx-auto py-16 px-4 md:px-6">
            {/* Hero Section - 與首頁風格一致 */}
            <Reveal className="mb-20 pt-6 md:pt-14 md:pb-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                {t('projects_page_title')}
              </h1>
              <div className="backdrop-blur-sm bg-[var(--background)]/50 p-6 rounded-xl shadow-sm max-w-3xl mx-auto mb-16">
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t('projects_page_description')}
                </p>
              </div>
            </Reveal>

            {/* Projects Grid - 統一的卡片設計 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Reveal key={project.id} delay={(index % 3) * 0.1}>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    status={project.status}
                    date={project.date}
                    skills={project.skills}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
