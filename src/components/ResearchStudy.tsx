import type { Project } from '@/data/projects';
import ProjectSection from '@/components/ProjectSection';

type Study = NonNullable<Project['research']>;
type Language = 'en' | 'zh';

export function ResearchSummary({ study, language }: { study: Study; language: Language }) {
  const facts = language === 'zh'
    ? [{ value: '273', label: '位受訪者' }, { value: '2 × 4', label: '產品類別 × 資訊重點' }, { value: '1–4', label: '同一受訪者的偏好排序' }]
    : [{ value: '273', label: 'respondents' }, { value: '2 × 4', label: 'categories × information emphases' }, { value: '1–4', label: 'preference ranks, paired by respondent' }];

  return (
    <aside className="research-summary mb-10" aria-label={language === 'zh' ? '研究重點與個人貢獻' : 'Research at a glance and my contribution'}>
      <p className="text-xs font-mono tracking-widest text-primary mb-3">HUMAN–COMPUTER INTERACTION / USER STUDY</p>
      <p className="text-xl md:text-2xl leading-relaxed font-medium text-[var(--foreground)] mb-5">{study.takeaway[language]}</p>
      <div className="mb-6">
        <p className="text-sm text-primary mb-2">{language === 'zh' ? '我的貢獻 · Guan-Yu Chen（Pierre）' : 'My contribution · Guan-Yu Chen (Pierre)'}</p>
        <p className="text-[var(--foreground-muted)] leading-relaxed">{study.contribution[language]}</p>
      </div>
      <dl className="grid gap-5 sm:grid-cols-3 border-t border-[var(--border-color)] pt-5">
        {facts.map(fact => (
          <div key={fact.value}>
            <dt className="text-sm text-[var(--foreground-muted)] mb-1">{fact.label}</dt>
            <dd className="text-2xl font-mono text-[var(--foreground)]">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function ResearchStudySections({ study, skills, language }: { study: Study; skills: Project['skills']; language: Language }) {
  return (
    <>
      <ProjectSection id="technology" title={language === 'zh' ? '我們如何回答研究問題' : 'How We Tested the Question'} eyebrow="RESEARCH DESIGN & ANALYSIS" tone="details">
        <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {study.methods.map(method => (
            <li key={method.title.en} className="border-t border-[var(--border-color)] pt-5">
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">{method.title[language]}</h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">{method.description[language]}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-3 mt-8">
          {skills.map(skill => <span key={skill.name} className="px-3 py-2 rounded-full text-xs border border-[var(--border-color)] text-[var(--foreground-muted)]">{skill.name}</span>)}
        </div>
      </ProjectSection>

      <ProjectSection id="findings" title={language === 'zh' ? '哪些結果改變了我們的想法' : 'Findings That Changed Our Thinking'} eyebrow="FINDINGS / METHODS / EVIDENCE" tone="details">
        <div className="space-y-10">
          {study.insights.map((insight, index) => (
            <article key={insight.title.en} className="research-insight">
              <div className="flex gap-4 items-baseline mb-4">
                <span className="font-mono text-primary text-sm">0{index + 1}</span>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)]">{insight.title[language]}</h3>
              </div>
              <p className="text-lg leading-relaxed text-[var(--foreground)] mb-5">{insight.finding[language]}</p>
              <dl className="space-y-4 text-[var(--foreground-muted)] leading-relaxed">
                <div>
                  <dt className="text-sm font-semibold text-primary mb-1">{language === 'zh' ? '如何得出' : 'How we arrived here'}</dt>
                  <dd>{insight.method[language]}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-primary mb-1">{language === 'zh' ? '研究證據' : 'Evidence'}</dt>
                  <dd>{insight.evidence[language]}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-primary mb-1">{language === 'zh' ? '如何解讀' : 'Interpretation'}</dt>
                  <dd>{insight.implication[language]}</dd>
                </div>
              </dl>
              <a className="inline-flex mt-5 text-sm text-primary underline underline-offset-4 hover:text-[var(--foreground)]" href={`${study.reportUrl}#page=${insight.sourcePage}`} target="_blank" rel="noopener noreferrer">
                {language === 'zh' ? `核對報告：${insight.sourceLabel} · 第 ${insight.sourcePage} 頁 ↗` : `Check the report: ${insight.sourceLabel} · p. ${insight.sourcePage} ↗`}
              </a>
            </article>
          ))}
        </div>
        <details className="mt-10 border-t border-[var(--border-color)] pt-6">
          <summary className="cursor-pointer text-lg font-semibold text-[var(--foreground)]">{language === 'zh' ? '研究限制、報告核對與下一步' : 'Limitations, reporting checks & next steps'}</summary>
          <p className="mt-4 text-[var(--foreground-muted)] leading-relaxed">{study.limitations[language]}</p>
        </details>
      </ProjectSection>
    </>
  );
}
