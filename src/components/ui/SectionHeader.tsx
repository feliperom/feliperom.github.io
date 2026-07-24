import { SplitText } from "./SplitText";

interface SectionHeaderProps {
  kicker: string;
  index?: string;
  title: string;
  accent?: string;
  titleClassName?: string;
}

/** Reusable editorial section header: kicker + index rule + large split title. */
export function SectionHeader({
  kicker,
  index,
  title,
  accent = "",
  titleClassName = "text-giant font-display font-medium",
}: SectionHeaderProps) {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-gray">
        <span className="h-px w-10 bg-gray/40" aria-hidden />
        <span>{kicker}</span>
        {index && <span className="ml-auto tabular-nums">{index}</span>}
      </div>
      <SplitText text={title} as="h2" className={`${titleClassName} ${accent}`} />
    </header>
  );
}
