'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

type ProjectStatus = 'completed' | 'in-progress' | 'planned';

interface Skill {
  name: string;
  color: string;
}

interface ProjectCardProps {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  imageUrl: string;
  status: ProjectStatus;
  date: {
    en: string;
    zh: string;
  };
  skills: Skill[];
}

// 技能顏色分類系統 - 根據技術類型使用相似色系
const getSkillColor = (skillName: string): string => {
  const skillColors: { [key: string]: string } = {
    // 前端技術 - 藍色系
    'React': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Vue': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Angular': 'bg-red-500/20 text-red-400 border-red-500/30',
    'Next.js': 'bg-slate-500/20 text-slate-400 border-slate-500/30',
    'TypeScript': 'bg-blue-600/20 text-blue-300 border-blue-600/30',
    'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'HTML': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'CSS': 'bg-blue-400/20 text-blue-300 border-blue-400/30',
    'Tailwind CSS': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    
    // 行動應用開發 - 青色系
    'Flutter': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'Dart': 'bg-cyan-600/20 text-cyan-300 border-cyan-600/30',
    'React Native': 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30',
    
    // 後端技術 - 綠色系
    'Node.js': 'bg-green-600/20 text-green-400 border-green-600/30',
    'FastAPI': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Express': 'bg-green-700/20 text-green-300 border-green-700/30',
    'Django': 'bg-green-800/20 text-green-300 border-green-800/30',
    'Spring Boot': 'bg-green-600/20 text-green-400 border-green-600/30',
    
    // 資料庫 - 紫色系
    'MongoDB': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'MySQL': 'bg-purple-600/20 text-purple-300 border-purple-600/30',
    'PostgreSQL': 'bg-purple-700/20 text-purple-300 border-purple-700/30',
    'Firestore': 'bg-purple-400/20 text-purple-300 border-purple-400/30',
    'Redis': 'bg-purple-800/20 text-purple-300 border-purple-800/30',
    
    // 雲端服務 - 灰色系
    'AWS': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    'GCP': 'bg-gray-600/20 text-gray-300 border-gray-600/30',
    'Azure': 'bg-gray-700/20 text-gray-300 border-gray-700/30',
    'Firebase': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    
    // 程式語言 - 多色系
    'Python': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Java': 'bg-red-600/20 text-red-400 border-red-600/30',
    'C++': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    'C#': 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    'Go': 'bg-teal-600/20 text-teal-400 border-teal-600/30',
    'Rust': 'bg-orange-600/20 text-orange-400 border-orange-600/30',
    
    // 工具與框架 - 橙色系
    'Docker': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    'Kubernetes': 'bg-sky-600/20 text-sky-300 border-sky-600/30',
    'Git': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'SFML': 'bg-orange-600/20 text-orange-300 border-orange-600/30',
    'Webpack': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Vite': 'bg-violet-600/20 text-violet-400 border-violet-600/30',
  };

  return skillColors[skillName] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
};

export default function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  status,
  date,
  skills,
}: ProjectCardProps) {
  const { t, language } = useLanguage();
  
  const statusColor = {
    completed: 'bg-green-500/20 text-green-400 border border-green-500/30',
    'in-progress': 'bg-[#F3C14B]/20 text-[#F3C14B] border border-[#F3C14B]/30',
    planned: 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
  };

  const statusText = {
    completed: '已完成',
    'in-progress': '進行中',
    planned: '計劃中',
  };

  // 專案圖片佔位符顏色
  const gradientColors = {
    'ecommerce-platform': 'from-[#F3C14B] to-[#E9BC45]',
    'fitness-tracker': 'from-[#F3C14B] to-[#E9BC45]',
    'task-management': 'from-[#F3C14B] to-[#E9BC45]',
    'blog-platform': 'from-[#F3C14B] to-[#E9BC45]',
    'dogtor': 'from-[#F3C14B] to-[#E9BC45]',
    'erp-system': 'from-[#F3C14B] to-[#E9BC45]',
    'seven-peach': 'from-[#F3C14B] to-[#E9BC45]',
    'lakycarcar': 'from-[#F3C14B] to-[#E9BC45]',
  };

  // 根據專案ID選擇顏色漸變，如果沒有匹配則使用預設
  const gradientColor = gradientColors[id as keyof typeof gradientColors] || 'from-[#F3C14B] to-[#E9BC45]';

  return (
    <Link href={`/projects/${id}`} className="block group h-full">
      <div className="project-card h-full flex flex-col bg-[var(--background-alt)]/60 backdrop-blur-sm border border-[var(--border-color)]/30 rounded-2xl overflow-hidden hover:border-primary/50 hover:bg-[var(--background-alt)]/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        <div className="relative aspect-video w-full overflow-hidden flex-shrink-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-10`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#F3C14B]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
            </div>
          </div>
          <Image 
            src={imageUrl} 
            alt={title[language]} 
            width={800} 
            height={450} 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start gap-3 mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-[#F3C14B] transition-colors leading-tight flex-grow">{title[language]}</h3>
            <span className={`badge ${statusColor[status]} text-xs px-3 py-1.5 rounded-full font-medium flex-shrink-0 whitespace-nowrap`}>
              {t(status)}
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-4 flex-shrink-0">
            {date[language]}
          </p>
          <div className="flex-grow mb-6">
            <p className="text-gray-300 leading-relaxed">
              {description[language]}
            </p>
          </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium ${skill.color || getSkillColor(skill.name)} transition-all duration-300 hover:scale-105`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
          <div className="mt-auto pt-2">
            <div className="inline-flex items-center text-[#F3C14B] hover:text-[#E9BC45] font-medium group-hover:translate-x-1 transition-all duration-300">
              {t('view_details')}
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
        </div>
      </div>
    </Link>
  );
} 