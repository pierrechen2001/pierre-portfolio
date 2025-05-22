'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center text-gray-400 hover:text-white transition-colors"
        aria-label="切換語言"
      >
        <span
          className={`cursor-pointer mx-1 ${language === 'en' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => setLanguage('en')}
        >
          EN
        </span>
        <span className="text-gray-500 mx-1">/</span>
        <span
          className={`cursor-pointer mx-1 ${language === 'zh' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => setLanguage('zh')}
        >
          中
        </span>
      </button>
    </div>
  );
} 