import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">關於我</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              嗨，我是 Pierre，一名充滿熱情的全端開發者，專注於創建高品質的網站和應用程式。
              我擁有多年的開發經驗，熟悉多種前後端技術。
            </p>
            <p>
              我相信好的設計不僅僅是美觀，還應該是功能性和用戶友好的。我的目標是創建不僅好看，還能解決實際問題的產品。
            </p>
            <p>
              除了編程，我還喜歡攝影、旅行和學習新技術。我總是保持好奇心，並尋找新的方式來提升我的技能和知識。
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">專業技能</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">前端開發</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML / CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">後端開發</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative h-96 w-full md:h-auto">
          <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/profile.png"
              alt="Pierre 的照片"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              unoptimized={true}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 h-32 w-32 bg-primary rounded-lg z-[-1]"></div>
          <div className="absolute -top-4 -left-4 h-32 w-32 bg-secondary rounded-lg z-[-1]"></div>
        </div>
      </div>
    </section>
  );
} 