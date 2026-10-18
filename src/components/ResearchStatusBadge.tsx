export default function ResearchStatusBadge({ language }: { language: 'en' | 'zh' }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
      {language === 'zh' ? 'HCI 研究進行中' : 'HCI research in progress'}
    </span>
  );
}
