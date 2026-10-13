import type { ReactNode } from 'react';

export default function ProjectSection({ id, title, eyebrow, tone = 'plain', children }: {
  id: string;
  title: string;
  eyebrow: string;
  tone?: 'plain' | 'showcase' | 'flow' | 'gallery' | 'details';
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`project-detail-section project-section-${tone}`}>
      <header className="project-section-heading">
        <p className="project-section-eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
      </header>
      {children}
    </section>
  );
}
