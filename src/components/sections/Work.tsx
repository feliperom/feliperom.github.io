"use client";

import { useLocale } from "@/i18n/context";
import { PROJECTS } from "@/content/projects";
import { SplitText } from "@/components/ui/SplitText";
import { ProjectChapter } from "./ProjectChapter";

export function Work() {
  const { dict } = useLocale();

  return (
    <section id="work" className="relative border-t border-offwhite/10 scroll-mt-20">
      <div className="mx-auto max-w-grid px-5 pt-28 md:px-10 md:pt-40">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-giant font-medium">
            <SplitText text={dict.work.title} as="span" className="block" />
            <SplitText text={dict.work.titleAccent} as="span" className="block text-lime" />
          </h2>
          <span className="hidden text-xs uppercase tracking-[0.28em] text-gray md:block">
            {dict.work.kicker} — {String(PROJECTS.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="mt-16">
        {PROJECTS.map((project) => (
          <ProjectChapter key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
