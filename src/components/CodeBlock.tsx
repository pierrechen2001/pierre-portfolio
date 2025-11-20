'use client';

import { useState } from 'react';

interface CodeBlockProps {
  title: string;
  children: React.ReactNode;
  language?: string;
}

export default function CodeBlock({ title, children, language = 'markdown' }: CodeBlockProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--background-alt)]/50 backdrop-blur-sm shadow-lg">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--background)]/80 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs font-mono text-gray-500">{title}</div>
        <div className="w-12"></div> {/* Spacer for alignment */}
      </div>
      
      {/* Editor Content */}
      <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
        <div className="flex">
          {/* Line Numbers */}
          <div className="flex flex-col text-right pr-4 select-none text-gray-600 border-r border-[var(--border-color)]/30 mr-4 font-mono text-xs md:text-sm leading-relaxed py-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="block">{i + 1}</span>
            ))}
          </div>
          
          {/* Code Content */}
          <div className="flex-1 text-[var(--foreground)] leading-relaxed whitespace-pre-wrap">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

