'use client';

import Link from 'next/link';
import type { PointerEvent, ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, BrainCircuit, Mail, ServerCog, Smartphone, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { notes } from '@/data/notes';
import { Reveal } from '@/components/motion';
import ResumeButton from '@/components/ResumeButton';

type Lang = 'en' | 'zh';
type Localized = Record<Lang, string>;

/** 讓卡片的聚光燈跟隨游標（搭配 --mx / --my CSS 變數） */
function trackPointer(e: PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

function Spotlight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{ background: 'radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(243,178,55,0.10), transparent 45%)' }}
    />
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-primary mb-3">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-3">{title}</h2>
        {description && <p className="text-[var(--foreground-muted)] text-lg leading-relaxed">{description}</p>}
      </div>
      {action}
    </Reveal>
  );
}

export function SectionLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-primary font-medium whitespace-nowrap hover:text-[var(--primary-light)] transition-colors"
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

/* ---------- 技術棧跑馬燈 ---------- */

const TECH_STACK = [
  'Flutter', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'Python', 'PostgreSQL',
  'Cloud Run', 'Cloud SQL', 'Firebase', 'OpenAI API', 'Gemini API', 'Mapbox', 'Swift',
];

export function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];
  return (
    <div className="marquee relative overflow-hidden border-y border-[var(--border-color)]/60 py-5" aria-label="Tech stack">
      <ul className="marquee-track flex w-max gap-10 font-mono text-sm text-[var(--text-muted)]">
        {items.map((name, i) => (
          <li key={i} aria-hidden={i >= TECH_STACK.length} className="flex items-center gap-10 whitespace-nowrap hover:text-primary transition-colors">
            {name}
            <span className="text-[var(--border-color)]">/</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- 能力 ---------- */

interface Capability {
  icon: LucideIcon;
  title: Localized;
  description: Localized;
  proof: { label: string; href: string }[];
}

const CAPABILITIES: Capability[] = [
  {
    icon: BrainCircuit,
    title: { en: 'AI-Powered Products', zh: 'AI 應用產品' },
    description: {
      en: 'LLM features that ship to real users — knowledge-point models, LLM orchestration, and AI-generated learning analytics.',
      zh: '把 LLM 做成真正上線的功能：知識點模型、LLM 編排，到 AI 生成的學習分析報告。',
    },
    proof: [
      { label: 'Dogtor', href: '/projects/dogtor' },
      { label: 'MapIt', href: '/projects/mapit' },
    ],
  },
  {
    icon: Smartphone,
    title: { en: 'Mobile Apps', zh: '行動應用' },
    description: {
      en: 'Flutter apps from the first screen to App Store release, plus native iOS development with Swift.',
      zh: '以 Flutter 從第一個畫面做到 App Store 上架，也能用 Swift 開發原生 iOS。',
    },
    proof: [
      { label: 'Dogtor', href: '/projects/dogtor' },
      { label: 'MapIt', href: '/projects/mapit' },
      { label: 'aiPlanner', href: '/projects/aiplanner' },
    ],
  },
  {
    icon: ServerCog,
    title: { en: 'Backend & Data', zh: '後端與資料' },
    description: {
      en: 'FastAPI services, event collection, and Cloud Run / Cloud SQL deployments that keep products running.',
      zh: 'FastAPI 服務、事件蒐集與 Cloud Run／Cloud SQL 部署，讓產品穩定運作。',
    },
    proof: [
      { label: 'Dogtor', href: '/projects/dogtor' },
      { label: '200OK', href: '/projects/200ok' },
    ],
  },
];

export function Capabilities() {
  const { language } = useLanguage();
  return (
    <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
      <SectionHeading
        eyebrow="// what-i-build"
        title={language === 'en' ? 'What I Build' : '我擅長打造的東西'}
        description={
          language === 'en'
            ? 'Three areas I work across, each backed by shipped projects.'
            : '我主要投入的三個領域，每一項都有實際上線的專案佐證。'
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        {CAPABILITIES.map(({ icon: Icon, title, description, proof }, index) => (
          <Reveal key={title.en} delay={index * 0.1}>
            <div
              onPointerMove={trackPointer}
              className="group relative h-full p-8 rounded-2xl bg-[var(--background-alt)]/50 border border-[var(--border-color)]/60 hover:border-primary/40 transition-colors"
            >
              <Spotlight />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary mb-6 transition-transform duration-300 motion-safe:group-hover:-translate-y-1">
                  <Icon className="w-6 h-6" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">{title[language]}</h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">{description[language]}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-[var(--text-muted)] mr-1">{language === 'en' ? 'see:' : '見：'}</span>
                  {proof.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="relative z-10 inline-flex items-center gap-1 font-mono text-xs px-2.5 py-1 rounded-md border border-[var(--border-color)] text-[var(--foreground)] hover:border-primary/60 hover:text-primary transition-colors"
                    >
                      {p.label}
                      <ArrowUpRight className="w-3 h-3" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- 經歷概覽 ---------- */

const EXPERIENCE = [
  { key: 'aiii', highlight: 'aiii_summary' },
  { key: 'dogtor', highlight: 'dogtor_achievement_1' },
  { key: 'akira', highlight: 'akira_achievement_1' },
  { key: 'superb', highlight: 'superb_achievement_2' },
];

export function ExperienceSnapshot() {
  const { t, language } = useLanguage();
  return (
    <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
      <SectionHeading
        eyebrow="// experience"
        title={language === 'en' ? 'Experience' : '經歷'}
        action={<SectionLink href="/about">{language === 'en' ? 'Full experience' : '完整經歷'}</SectionLink>}
      />
      <ol className="relative border-l border-[var(--border-color)] ml-2">
        {EXPERIENCE.map(({ key, highlight }, index) => (
          <Reveal as="li" key={key} delay={index * 0.08} y={24} className="group relative pl-8 pb-10 last:pb-0">
            <span
              aria-hidden
              className={`absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                index === 0 ? 'border-primary bg-primary shadow-[0_0_12px_rgba(243,178,55,0.6)]' : 'border-[var(--border-color)] bg-[var(--background)] group-hover:border-primary'
              }`}
            />
            <div className="grid md:grid-cols-[200px_1fr] gap-x-8 gap-y-1">
              <p className="font-mono text-sm text-[var(--text-muted)] pt-0.5">{t(`${key}_period`)}</p>
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {t(`${key}_company`)}
                  <span className="text-[var(--text-muted)] font-normal"> · {t(`${key}_position`)}</span>
                </h3>
                <p className="text-[var(--foreground-muted)] mt-1 leading-relaxed">{t(highlight)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ---------- 最新文章 ---------- */

function formatDate(iso: string, language: Lang) {
  const [year, month] = iso.split('-').map(Number);
  return language === 'en'
    ? new Date(year, month - 1).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    : `${year}年${month}月`;
}

export function LatestNotes() {
  const { language } = useLanguage();
  const latest = [...notes].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 3);

  return (
    <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
      <SectionHeading
        eyebrow="// writing"
        title={language === 'en' ? 'Latest Writing' : '最新文章'}
        description={
          language === 'en'
            ? 'Notes on building products, AI, and what I learn along the way.'
            : '關於產品開發、AI，以及一路上學到的事。'
        }
        action={<SectionLink href="/notes">{language === 'en' ? 'All notes' : '所有筆記'}</SectionLink>}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {latest.map((note, index) => (
          <Reveal key={note.id} delay={index * 0.1}>
            <Link
              href={`/notes/${note.id}`}
              onPointerMove={trackPointer}
              className="group relative flex h-full flex-col p-7 rounded-2xl bg-[var(--background-alt)]/50 border border-[var(--border-color)]/60 hover:border-primary/40 transition-colors"
            >
              <Spotlight />
              <div className="relative flex items-center justify-between font-mono text-xs text-[var(--text-muted)] mb-4">
                <span className="text-primary">{note.category[language]}</span>
                <time dateTime={note.publishedAt}>{formatDate(note.publishedAt, language)}</time>
              </div>
              <h3 className="relative text-lg font-semibold text-[var(--foreground)] mb-3 leading-snug group-hover:text-primary transition-colors">
                {note.title[language]}
              </h3>
              <p className="relative text-sm text-[var(--foreground-muted)] leading-relaxed line-clamp-3 mb-6">
                {note.description[language]}
              </p>
              <span className="relative mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                {language === 'en' ? 'Read' : '閱讀'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- 結尾 CTA ---------- */

export function ContactCTA() {
  const { t, language } = useLanguage();
  return (
    <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl border border-[var(--border-color)]/60 bg-[var(--background-alt)]/50 px-8 py-16 md:px-16 md:py-20 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 120%, rgba(243,178,55,0.16), transparent 70%)' }}
        />
        <p className="relative font-mono text-sm text-primary mb-4">$ ./contact --now</p>
        <h2 className="relative text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-5 leading-tight">
          {language === 'en' ? "Have something to build? Let's talk." : '有想打造的產品嗎？聊聊吧。'}
        </h2>
        <p className="relative text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-10">
          {language === 'en'
            ? "Reach out about roles, collaborations, or an idea you'd like to bring to life."
            : '無論是職缺、合作，或是想一起實現的點子，都歡迎與我聯絡。'}
        </p>
        <div className="relative flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:b12705058@g.ntu.edu.tw"
            className="inline-flex items-center justify-center gap-2 bg-primary text-dark px-7 py-4 rounded-lg font-semibold whitespace-nowrap hover:bg-[var(--primary-light)] transition-colors hover:shadow-lg hover:shadow-primary/25"
          >
            <Mail className="w-5 h-5" aria-hidden />
            {language === 'en' ? 'Email Me' : '寄信給我'}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--foreground)] px-7 py-4 rounded-lg font-semibold whitespace-nowrap hover:border-primary/50 hover:bg-[var(--background-alt)] transition-colors"
          >
            {t('contact_me')}
          </Link>
          <ResumeButton
            label={t('resume')}
            className="border border-[var(--border-color)] text-[var(--foreground)] px-7 py-4 rounded-lg font-semibold whitespace-nowrap hover:border-primary/50 hover:bg-[var(--background-alt)]"
          />
        </div>
      </Reveal>
    </section>
  );
}
