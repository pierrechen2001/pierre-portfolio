import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutMe from '@/components/AboutMe';

export const metadata = {
  title: '關於我 | Pierre\'s Portfolio',
  description: '了解更多關於我的背景、技能和經驗',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
          <div className="container py-16">
            <h1 className="text-4xl font-bold mb-6">關於我</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              了解更多關於我的背景、技能和經驗，以及我對軟件開發的熱情。
            </p>
          </div>
        </section>
        
        <AboutMe />
        
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">我的工作經歷</h2>
            
            <div className="space-y-12">
              <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">高級全端開發者</h3>
                  <span className="text-gray-500 dark:text-gray-400">2021年至今</span>
                </div>
                <p className="text-primary font-medium mb-4">未來科技有限公司</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  負責設計和開發公司的核心產品，包括Web應用和移動應用。與團隊協作，使用敏捷開發方法，確保高質量的代碼和用戶體驗。
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>領導了三個主要項目的前端開發工作</li>
                  <li>重構了後端API架構，提高了性能和可維護性</li>
                  <li>引入了自動化測試流程，減少了產品的bug率</li>
                  <li>指導初級開發人員，提供技術指導和支持</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">前端開發者</h3>
                  <span className="text-gray-500 dark:text-gray-400">2019年 - 2021年</span>
                </div>
                <p className="text-primary font-medium mb-4">創新網絡公司</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  專注於使用React和TypeScript開發web應用程式，改善用戶界面和用戶體驗。參與了多個客戶項目，從需求分析到最終實施。
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>開發了五個客戶項目的前端界面</li>
                  <li>將舊有的jQuery代碼庫遷移到現代React架構</li>
                  <li>優化了網站性能，提高了頁面加載速度</li>
                  <li>與設計師密切合作，確保設計的準確實現</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">初級Web開發者</h3>
                  <span className="text-gray-500 dark:text-gray-400">2017年 - 2019年</span>
                </div>
                <p className="text-primary font-medium mb-4">數位解決方案公司</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  負責維護和更新公司網站和客戶網站。使用HTML、CSS和JavaScript開發網頁界面，並學習了基本的後端開發。
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>維護和更新多個客戶網站</li>
                  <li>使用WordPress開發定製主題和插件</li>
                  <li>學習並應用響應式設計原則</li>
                  <li>參與小型項目的全週期開發</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">教育背景</h2>
            
            <div className="max-w-3xl mx-auto bg-white dark:bg-dark p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-xl font-bold">計算機科學學士</h3>
                <span className="text-gray-500 dark:text-gray-400">2013年 - 2017年</span>
              </div>
              <p className="text-primary font-medium mb-4">國立台灣大學</p>
              <p className="text-gray-700 dark:text-gray-300">
                主修計算機科學，專注於軟件開發和Web技術。參與了多個學術項目，並在畢業專題中開發了一個社交媒體分析工具。
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 