'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';
import { ScrollProgress } from './motion';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {/* reducedMotion="user"：系統開啟「減少動態」時自動停用位移與縮放動畫 */}
      <MotionConfig reducedMotion="user">
        <ScrollProgress />
        {children}
      </MotionConfig>
    </LanguageProvider>
  );
}
