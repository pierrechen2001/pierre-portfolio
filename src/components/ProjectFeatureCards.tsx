'use client';

import type { ProjectFeature } from '@/data/projectFeatures';

export default function ProjectFeatureCards({ features, language }: {
  features: ProjectFeature[];
  language: 'zh' | 'en';
}) {
  return (
    <section className="mb-14" aria-labelledby="project-features-title">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <h2 id="project-features-title" className="text-2xl font-bold text-[var(--foreground)] md:text-3xl">
          {language === 'zh' ? '主要功能與設計' : 'Key Features & Design'}
        </h2>
        <p className="text-sm text-[var(--foreground-muted)]">
          {language === 'zh' ? '從功能出發，看見背後的考量' : 'The thinking behind the features'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        {features.map((feature, index) => {
          const primary = feature.size === 'primary';
          const supporting = feature.size === 'supporting';
          return (
            <article key={feature.title.en} className={`relative overflow-hidden rounded-2xl border p-6 md:p-8 ${
              primary
                ? 'border-primary/35 bg-gradient-to-br from-primary/10 via-[var(--background-alt)]/60 to-[var(--background-alt)]/40 md:col-span-12'
                : supporting
                  ? 'border-[var(--border-color)]/35 bg-[var(--background-alt)]/30 md:col-span-6'
                  : 'border-[var(--border-color)]/50 bg-[var(--background-alt)]/50 md:col-span-6'
            }`}>
              {primary && <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-primary/70" />}
              <div className={primary ? 'relative grid gap-8 lg:grid-cols-2 lg:gap-12' : 'relative'}>
                <div>
                  <span aria-hidden="true" className={`mb-5 block font-mono text-xs tracking-[0.2em] ${primary ? 'text-primary' : 'text-[var(--foreground-muted)]'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`mb-4 font-semibold leading-snug text-[var(--foreground)] ${primary ? 'text-2xl md:text-3xl' : supporting ? 'text-xl' : 'text-xl md:text-2xl'}`}>
                    {feature.title[language]}
                  </h3>
                  <p className={`leading-relaxed text-[var(--foreground-muted)] ${primary ? 'text-base md:text-lg' : 'text-base'}`}>
                    {feature.summary[language]}
                  </p>
                </div>

                {(feature.why || feature.thinking) && (
                  <div className={`space-y-5 ${primary ? 'border-t border-primary/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0' : 'mt-6 border-t border-[var(--border-color)]/40 pt-5'}`}>
                    {feature.why && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-primary">
                          {language === 'zh' ? '為什麼需要' : 'Why it matters'}
                        </h4>
                        <p className="text-sm leading-7 text-[var(--foreground-muted)]">{feature.why[language]}</p>
                      </div>
                    )}
                    {feature.thinking && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-[var(--foreground)]">
                          {language === 'zh' ? '設計考量' : 'Design considerations'}
                        </h4>
                        <p className="text-sm leading-7 text-[var(--foreground-muted)]">{feature.thinking[language]}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
