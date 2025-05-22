import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = {
  title: '專案 | Pierre\'s Portfolio',
  description: '查看我所有的開發專案，包括網站、移動應用和其他軟件解決方案',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>
          
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">我的專案</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              這裡展示了我開發的所有專案。每個專案都代表了我在不同領域的技能和經驗。
            </p>
          </div>
          
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        </section>
        
        <section className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container">
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                <span className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 transition-colors">全部</span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">前端</span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">後端</span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">移動應用</span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">全端</span>
              </div>
            </div>
            
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