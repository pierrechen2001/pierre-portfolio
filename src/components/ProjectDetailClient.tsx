'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

interface Skill {
  name: string;
  color: string;
}

interface ProjectProps {
  id: string;
  project: {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    imageUrl: string;
    status: 'completed' | 'in-progress' | 'planned';
    date: string;
    skills: Skill[];
    features?: string[];
    githubUrl?: string;
    demoUrl?: string;
  };
}

export default function ProjectDetailClient({ project, id }: ProjectProps) {
  const { t, language } = useLanguage();
  
  // 使用 useEffect 設置頁面標題和描述
  useEffect(() => {
    document.title = `${project.title} | Pierre's Portfolio`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', project.description);
    }
  }, [project.title, project.description]);

  // 專案圖片佔位符顏色
  const gradientColors = {
    'ecommerce-platform': 'from-blue-500 to-purple-600',
    'fitness-tracker': 'from-green-500 to-teal-600',
    'task-management': 'from-purple-500 to-pink-600',
    'blog-platform': 'from-orange-500 to-red-600',
  };

  const gradientColor = gradientColors[id as keyof typeof gradientColors] || 'from-blue-500 to-purple-600';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* 頂部橫幅 */}
        <div className={`w-full bg-gradient-to-r ${gradientColor} h-64 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">{project.title}</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 hover:underline mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
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
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10">
            <div className="flex flex-wrap justify-between items-start mb-6">
              <div>
                <p className="text-gray-500 dark:text-gray-400">
                  {project.date}
                </p>
              </div>
              <span className={`badge ${
                project.status === 'completed'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
                  : project.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300'
              } px-3 py-1 text-sm font-medium`}>
                {t(project.status)}
              </span>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {language === 'en' ? 'Project Overview' : '專案概述'}
              </h2>
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.fullDescription.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
            
            {project.features && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  {language === 'en' ? 'Key Features' : '主要功能'}
                </h2>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 flex-shrink-0">
                        {index + 1}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {t('technologies_used')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-700 transition-all hover:shadow-lg"
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
                  className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg"
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
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 