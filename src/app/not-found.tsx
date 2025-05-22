import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '找不到頁面 | Pierre\'s Portfolio',
  description: '抱歉，您請求的頁面不存在',
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">找不到頁面</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              抱歉，您請求的頁面不存在或已被移除。
            </p>
            <Link
              href="/"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
            >
              返回首頁
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 