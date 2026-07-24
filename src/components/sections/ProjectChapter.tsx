"use client";

import { useLocale } from "@/i18n/context";
import type { Project } from "@/content/types";
import { formatPeriod } from "@/lib/period";
import { MediaBlock } from "@/components/ui/MediaBlock";
import { useReveal } from "@/hooks/useReveal";
import { cursorProps, useCursor } from "@/components/layout/Cursor";

export function ProjectChapter({ project }: { project: Project }) {
  const { locale, dict } = useLocale();
  const cursor = useCursor();
  const ref = useReveal<HTMLDivElement>({ childSelector: "[data-reveal]", stagger: 0.1 });
  const accentText = project.accent === "lime" ? "text-lime" : "text-electric";
  const href = `/${locale}/work/${project.slug}/`;

  return (
    <article className="border-t border-offwhite/10 px-5 py-16 md:px-10 md:py-24">
      <div ref={ref} className="mx-auto grid max-w-grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div className="order-2 flex flex-col gap-8 lg:order-1">
          <div data-reveal className="flex items-baseline gap-4">
            <span className={`font-display text-2xl font-medium tabular-nums ${accentText}`}>{project.index}</span>
            <span className="text-xs uppercase tracking-[0.28em] text-gray">{project.categories[locale]}</span>
          </div>

          <a
            data-reveal
            href={href}
            {...cursorProps(cursor, { variant: "view", label: dict.work.viewCase })}
            className="group"
          >
            <h3 className="font-display text-huge font-medium leading-none transition-colors group-hover:text-gray">
              {project.name}
            </h3>
          </a>

          <p data-reveal className="max-w-md text-balance leading-relaxed text-gray">
            {project.summary[locale]}
          </p>

          <dl data-reveal className="grid grid-cols-3 gap-4 border-t border-offwhite/10 pt-6 text-xs">
            <div>
              <dt className="text-gray">{dict.work.year}</dt>
              <dd className="mt-1 text-offwhite">{formatPeriod(project.year, locale)}</dd>
            </div>
            <div>
              <dt className="text-gray">{dict.work.role}</dt>
              <dd className="mt-1 text-offwhite">{project.role[locale]}</dd>
            </div>
            <div>
              <dt className="text-gray">{dict.work.stack}</dt>
              <dd className="mt-1 text-offwhite">{project.stack.slice(0, 3).join(", ")}</dd>
            </div>
          </dl>

          <a
            data-reveal
            href={href}
            {...cursorProps(cursor, { variant: "view", label: dict.work.viewCase })}
            className={`inline-flex w-fit items-center gap-2 border-b border-current pb-1 text-sm ${accentText}`}
          >
            {dict.work.viewCase} →
          </a>
        </div>

        <a
          href={href}
          {...cursorProps(cursor, { variant: "view", label: dict.work.viewCase })}
          className="order-1 block lg:order-2"
          aria-label={`${dict.work.viewCase}: ${project.name}`}
        >
          <MediaBlock
            src={project.image}
            alt={project.summary[locale]}
            index={project.index}
            name={project.name}
            accent={project.accent}
          />
        </a>
      </div>
    </article>
  );
}
