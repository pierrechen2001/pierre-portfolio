import Image from 'next/image';
import Link from 'next/link';

type ProjectStatus = 'completed' | 'in-progress' | 'planned';

interface Skill {
  name: string;
  color: string;
}

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: ProjectStatus;
  date: string;
  skills: Skill[];
}

export default function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  status,
  date,
  skills,
}: ProjectCardProps) {
  const statusColor = {
    completed: 'bg-green-900/30 text-green-400',
    'in-progress': 'bg-[#F3C14B]/20 text-[#F3C14B]',
    planned: 'bg-gray-800 text-gray-300',
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
  };

  // 根據專案ID選擇顏色漸變，如果沒有匹配則使用預設
  const gradientColor = gradientColors[id as keyof typeof gradientColors] || 'from-[#F3C14B] to-[#E9BC45]';

  return (
    <div className="project-card group">
      <div className="relative aspect-video w-full overflow-hidden">
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
          alt={title} 
          width={800} 
          height={450} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-[#F3C14B] transition-colors">{title}</h3>
          <span className={`badge ${statusColor[status]} text-xs px-2.5 py-1 rounded-full font-medium`}>
            {statusText[status]}
          </span>
        </div>
        <p className="text-sm text-gray-400 mb-2">
          {date}
        </p>
        <p className="text-gray-300 mb-5 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`text-xs px-2.5 py-1 rounded-full bg-[#333340] text-gray-300 font-medium`}
            >
              {skill.name}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center text-[#F3C14B] hover:text-[#E9BC45] font-medium group-hover:translate-x-1 transition-transform"
        >
          查看詳情
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 ml-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 