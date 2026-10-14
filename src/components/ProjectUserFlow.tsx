import type { CSSProperties } from 'react';

export default function ProjectUserFlow({ steps, language }: {
  steps: string[];
  language: 'zh' | 'en';
}) {
  return (
    <ol
      className="project-flow-list"
      style={{ '--flow-count': steps.length } as CSSProperties}
      aria-label={language === 'zh' ? '產品使用流程' : 'Product use flow'}
    >
      {steps.map((step, index) => (
        <li key={`${index}-${step}`} className="project-flow-item">
          <span className="project-flow-marker" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="project-flow-label">{step}</p>
        </li>
      ))}
    </ol>
  );
}
