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
      
      {/* Hero Section - 現代深色風格 */}
      <section className="relative overflow-hidden bg-[#1A1A1F] text-white pt-32 pb-20 md:py-32">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <p className="text-xl text-[#F3C14B] mb-2 font-medium">{t('iam')}</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                {t('fullname')}
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                {t('description')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/projects"
                  className="bg-[#F3C14B] hover:bg-[#E9BC45] text-[#1A1A1F] px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {t('view_portfolio')}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#333340] hover:border-[#F3C14B] text-gray-300 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
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
                className="rounded-full bg-[#252530] p-1 border border-[#333340]"
              />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[#F3C14B] to-[#E9BC45] opacity-20 blur-md"></div>
            </div>
          </div>
        </div>
        
        {/* 裝飾元素 */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#F3C14B]/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#E9BC45]/10 rounded-full blur-3xl"></div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-[#1A1A1F] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('my_portfolio')}</h2>
            <p className="text-gray-400 max-w-2xl text-lg">
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
              className="inline-flex items-center px-8 py-4 rounded-lg bg-[#252530] text-white hover:bg-[#333340] font-medium transition-colors duration-300"
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
