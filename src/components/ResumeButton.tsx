import { FileDown } from 'lucide-react';
import clsx from 'clsx';

export const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || '';

interface ResumeButtonProps {
  label: string;
  className?: string;
}

/** 下載履歷按鈕；public/resume.pdf 不存在時不渲染 */
export default function ResumeButton({ label, className }: ResumeButtonProps) {
  if (!RESUME_URL) return null;

  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('inline-flex items-center justify-center gap-2 transition-colors', className)}
    >
      <FileDown className="w-4 h-4" aria-hidden />
      {label}
    </a>
  );
}
