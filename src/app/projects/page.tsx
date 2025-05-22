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
        <section className="page-header bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>
          
          <div className="container page-header-content">
            <h1 className="page-title bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">我的專案</h1>
            <p className="page-description">
              這裡展示了我開發的所有專案。每個專案都代表了我在不同領域的技能和經驗。
            </p>
          </div>
          
          <div className="decoration-blob -bottom-16 -left-16 w-64 h-64 bg-blue-500/20"></div>
          <div className="decoration-blob -top-16 -right-16 w-64 h-64 bg-purple-500/20"></div>
        </section>
        
        <section className="bg-[var(--background-alt)] py-16">
          <div className="container">
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 bg-[var(--card-bg)] rounded-xl p-4 shadow-md">
                <span className="badge badge-primary cursor-pointer">全部</span>
                <span className="badge cursor-pointer hover:bg-[var(--background)]">前端</span>
                <span className="badge cursor-pointer hover:bg-[var(--background)]">後端</span>
                <span className="badge cursor-pointer hover:bg-[var(--background)]">移動應用</span>
                <span className="badge cursor-pointer hover:bg-[var(--background)]">全端</span>
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