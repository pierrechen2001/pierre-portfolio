'use client';

import Image from "next/image";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  // 只顯示前3個專案
  const featuredProjects = projects.slice(0, 3);
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="page-header bg-[#1A1A1F] text-white pt-32 pb-20 md:py-32">
        <div className="container page-header-content">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <p className="text-xl text-[var(--primary)] mb-2 font-medium">{t('iam')}</p>
              <h1 className="page-title text-white leading-tight">
                {t('fullname')}
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                {t('description')}
              </p>
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
            
            <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
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
        
        {/* 裝飾元素 */}
        <div className="decoration-blob -bottom-16 -left-16 w-64 h-64"></div>
        <div className="decoration-blob -top-16 -right-16 w-64 h-64"></div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-[var(--background)] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('my_portfolio')}</h2>
            <p className="text-[var(--text-muted)] max-w-2xl text-lg">
              {t('portfolio_description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
          
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="btn btn-secondary"
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
      </section>
      
      <Footer />
    </div>
  );
}
