'use client';

import Link from 'next/link';
import { ArrowLeft, FolderOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteBackground from '@/components/SiteBackground';
import { useLanguage } from '@/contexts/LanguageContext';

const copy = {
  en: {
    title: 'Page not found',
    body: "The page you're looking for doesn't exist or has been moved.",
    home: 'Back to Home',
    projects: 'Browse Projects',
  },
  zh: {
    title: '找不到頁面',
    body: '您要找的頁面不存在，或已經被移動。',
    home: '返回首頁',
    projects: '瀏覽作品集',
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <div className="flex flex-col min-h-screen">
      <title>{`404 · ${text.title} | Pierre Chen`}</title>
      <Header />
      <SiteBackground />

      <main className="flex-grow flex items-center justify-center px-4 pt-32 pb-20">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4 font-mono tracking-tight">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)] mb-4">{text.title}</h2>
          <p className="text-[var(--foreground-muted)] mb-10">{text.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary-light)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden />
              {text.home}
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--foreground)] px-6 py-3 rounded-lg font-semibold hover:border-primary/60 hover:bg-[var(--background-alt)] transition-colors"
            >
              <FolderOpen className="w-4 h-4" aria-hidden />
              {text.projects}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
