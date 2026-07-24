"use client";

import { useLocale } from "@/i18n/context";
import type { Project } from "@/content/types";
import { getProject, PROJECTS } from "@/content/projects";
import { formatPeriod } from "@/lib/period";
import { SplitText } from "@/components/ui/SplitText";
import { MediaBlock } from "@/components/ui/MediaBlock";
import { useReveal } from "@/hooks/useReveal";

function Block({ label, index, children }: { label: string; index: string; children: React.ReactNode }) {
  const ref = useReveal<HTMLDivElement>({ y: 30 });
  return (
    <section ref={ref} className="grid gap-8 border-t border-offwhite/10 py-16 md:grid-cols-[220px_1fr] md:gap-16 md:py-24">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-sm tabular-nums text-lime">{index}</span>
        <h2 className="text-xs uppercase tracking-[0.28em] text-gray">{label}</h2>
      </div>
      <div className="max-w-3xl">{children}</div>
    </section>
  );
}

export function CaseStudy({ slug }: { slug: string }) {
  const { locale, dict } = useLocale();
  const cs = dict.caseStudy;
  const project = getProject(slug);
  if (!project) return null;

  const accentText = project.accent === "lime" ? "text-lime" : "text-electric";
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const next: Project = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="px-5 pb-32 pt-28 md:px-10 md:pt-40">
      <div className="mx-auto max-w-grid">
        <a href={`/${locale}/#work`} className="text-xs uppercase tracking-widest text-gray hover:text-offwhite">
          ← {cs.back}
        </a>

        <header className="mt-10 flex flex-col gap-6">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-gray">
            <span className={`font-display text-lg ${accentText}`}>{project.index}</span>
            <span>{project.categories[locale]}</span>
            {project.status === "placeholder" && (
              <span className="rounded-full border border-offwhite/20 px-3 py-1 text-[10px] normal-case tracking-normal text-gray">
                {cs.placeholderNote}
              </span>
            )}
          </div>
          <SplitText text={project.name} as="h1" className="font-display text-mega font-medium leading-none" />
          <p className="max-w-2xl text-balance text-xl leading-relaxed text-gray">{project.summary[locale]}</p>
        </header>

        <div className="mt-16">
          <MediaBlock
            src={project.image}
            alt={project.summary[locale]}
            index={project.index}
            name={project.name}
            accent={project.accent}
          />
        </div>

        {/* 01 Overview */}
        <Block label={cs.overview} index="01">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3">
            {[
              [cs.client, project.overview.client],
              [cs.period, formatPeriod(project.overview.period, locale)],
              [cs.role, project.role[locale]],
              [cs.context, project.overview.context[locale]],
              [cs.team, project.overview.team[locale]],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-widest text-gray">{label}</dt>
                <dd className="mt-2 text-sm text-offwhite/90">{value}</dd>
              </div>
            ))}
            <div className="col-span-2 md:col-span-3">
              <dt className="text-xs uppercase tracking-widest text-gray">{cs.tech}</dt>
              <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-offwhite/90">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </dd>
            </div>
          </dl>
        </Block>

        {/* 02 Challenge */}
        <Block label={cs.challenge} index="02">
          <p className="text-2xl leading-relaxed text-offwhite md:text-3xl">{project.case.challenge[locale]}</p>
        </Block>

        {/* 03 Strategy */}
        <Block label={cs.strategy} index="03">
          <ul className="flex flex-col gap-5">
            {project.case.strategy[locale].map((item) => (
              <li key={item} className="flex gap-4 text-lg leading-relaxed text-offwhite/90">
                <span className={accentText}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </Block>

        {/* 04 Solution */}
        <Block label={cs.solution} index="04">
          <ul className="flex flex-col gap-5">
            {project.case.solution[locale].map((item) => (
              <li key={item} className="flex gap-4 text-lg leading-relaxed text-offwhite/90">
                <span className={accentText}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </Block>

        {/* 05 Impact */}
        <Block label={cs.impact} index="05">
          <ul className="grid gap-6 md:grid-cols-2">
            {project.case.impact[locale].map((item) => (
              <li key={item} className="border-l border-offwhite/10 pl-5 text-lg leading-relaxed text-offwhite/90">
                {item}
              </li>
            ))}
          </ul>
        </Block>

        {/* 06 Learnings */}
        <Block label={cs.learnings} index="06">
          <p className="font-serif text-2xl italic leading-relaxed text-gray md:text-3xl">
            {project.case.learnings[locale]}
          </p>
        </Block>

        <a
          href={`/${locale}/work/${next.slug}/`}
          className="mt-16 flex items-center justify-between border-t border-offwhite/10 pt-10"
        >
          <span className="text-xs uppercase tracking-widest text-gray">{cs.next}</span>
          <span className="font-display text-3xl font-medium hover:text-lime md:text-5xl">{next.name} →</span>
        </a>
      </div>
    </article>
  );
}
