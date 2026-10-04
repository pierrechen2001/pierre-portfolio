'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

// Apple 產品頁常見的 ease-out 曲線：起步快、收尾長
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** 位移距離（px） */
  y?: number;
  as?: 'div' | 'section' | 'li';
}

/** 進入視窗時淡入並上移，只播放一次（不加 blur：大面積 filter 動畫在行動裝置上成本高） */
export function Reveal({ children, className, delay = 0, y = 40, as = 'div' }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    >
      {children}
    </Component>
  );
}

interface CountUpProps {
  /** 例如 "7K+"、"#4"、"8"：數字部分會從 0 滾動到目標值，前後綴保持不變 */
  value: string;
  className?: string;
}

/** 數字在進入視窗時從 0 滾動到目標值 */
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const [display, setDisplay] = useState(match && !reduceMotion ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match || !inView || reduceMotion) {
      setDisplay(value);
      return;
    }
    const [, prefix, digits, suffix] = match;
    const controls = animate(0, Number(digits), {
      duration: 1.4,
      ease: EASE_OUT,
      onUpdate: (n) => setDisplay(`${prefix}${Math.round(n)}${suffix}`),
    });
    return () => controls.stop();
    // match 由 value 推導，不需列為相依
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden className="tabular-nums">{display}</span>
    </span>
  );
}

/** 頁面頂端的閱讀進度條 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-primary via-[#f7c359] to-[#6aa5e0]"
      style={{ scaleX }}
    />
  );
}

interface ScrollZoomProps {
  children: ReactNode;
  className?: string;
}

/**
 * 隨滾動放大到定位的展示框，類似 Apple 產品頁的主視覺登場：
 * 元素從視窗底部進入時略小、略暗，滾到中段時恢復原尺寸。
 */
export function ScrollZoom({ children, className }: ScrollZoomProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 1]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduceMotion ? undefined : { scale, opacity, willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}

/** 進場時依序出現的容器；子元素使用 `staggerItem` variants */
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE_OUT } },
};
