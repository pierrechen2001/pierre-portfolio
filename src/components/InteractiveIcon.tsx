import { Fragment, type ReactNode } from 'react';
import {
  Bot,
  Briefcase,
  ChartColumn,
  Cloud,
  Coins,
  Crown,
  Database,
  Flame,
  Gamepad2,
  Handshake,
  Heart,
  Image as ImageIcon,
  KeyRound,
  Laptop,
  Link,
  Lock,
  Map as MapIcon,
  MessageCircle,
  NotebookPen,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Speech,
  Target,
  Trophy,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import clsx from 'clsx';

// 取代 emoji 的圖示對照表（lucide-react）
export const icons = {
  bot: Bot,
  briefcase: Briefcase,
  chart: ChartColumn,
  cloud: Cloud,
  coins: Coins,
  crown: Crown,
  database: Database,
  flame: Flame,
  gamepad: Gamepad2,
  handshake: Handshake,
  heart: Heart,
  image: ImageIcon,
  key: KeyRound,
  laptop: Laptop,
  link: Link,
  lock: Lock,
  map: MapIcon,
  message: MessageCircle,
  notebook: NotebookPen,
  palette: Palette,
  rocket: Rocket,
  settings: Settings,
  smartphone: Smartphone,
  speech: Speech,
  target: Target,
  trophy: Trophy,
  wrench: Wrench,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

const isIconName = (name: string): name is IconName => name in icons;

type Size = 'inline' | 'lg';

const sizeStyles: Record<Size, { wrapper: string; icon: string }> = {
  inline: {
    wrapper: 'mx-0.5 p-1 align-[-0.3em] rounded-md',
    icon: 'w-4 h-4',
  },
  lg: {
    wrapper: 'p-3 rounded-xl',
    icon: 'w-7 h-7',
  },
};

interface InteractiveIconProps {
  name: IconName;
  size?: Size;
  label?: string;
  className?: string;
}

/**
 * 可與滑鼠互動的圖示：hover 時放大、微旋轉並提亮顏色。
 * 放在帶有 `group` class 的父層內時，hover 父層也會觸發效果。
 */
export default function InteractiveIcon({ name, size = 'lg', label, className }: InteractiveIconProps) {
  const Icon = icons[name];
  const styles = sizeStyles[size];

  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      title={label}
      className={clsx(
        'inline-flex items-center justify-center flex-shrink-0 cursor-default',
        'bg-[var(--background-alt)]/60 border border-[var(--border-color)] text-current',
        'transition-all duration-300 ease-out',
        'group-hover:border-current',
        'hover:!bg-primary/15 hover:!border-primary/60 hover:!text-primary hover:shadow-[0_0_16px_rgba(243,178,55,0.35)]',
        'motion-safe:hover:scale-110 motion-safe:hover:-rotate-6',
        'motion-safe:active:scale-95',
        styles.wrapper,
        className
      )}
    >
      <Icon
        className={clsx(
          styles.icon,
          'transition-transform duration-300 ease-out',
          'motion-safe:group-hover:scale-110'
        )}
        strokeWidth={2}
      />
    </span>
  );
}

/**
 * 將文字中的 `:icon-name:` 短碼轉為 InteractiveIcon，供 Markdown 段落使用。
 */
export function renderIconShortcodes(children: ReactNode): ReactNode {
  const transform = (child: ReactNode, key: number): ReactNode => {
    if (typeof child !== 'string') return child;
    const parts = child.split(/:([a-z]+):/g);
    if (parts.length === 1) return child;
    return (
      <Fragment key={key}>
        {parts.map((part, i) =>
          i % 2 === 1 && isIconName(part) ? (
            <InteractiveIcon key={i} name={part} size="inline" />
          ) : i % 2 === 1 ? (
            `:${part}:`
          ) : (
            part
          )
        )}
      </Fragment>
    );
  };

  return Array.isArray(children) ? children.map(transform) : transform(children, 0);
}
