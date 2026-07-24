"use client";

import { useLocale } from "@/i18n/context";
import { SITE } from "@/content/site";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { SplitText } from "@/components/ui/SplitText";
import { LocalTime } from "@/components/ui/LocalTime";

export function Hero() {
  const { dict } = useLocale();
  const h = dict.hero;

  return (
    <section className="relative grid min-h-svh grid-rows-[1fr_auto] overflow-hidden">
      <HeroVisual />

      <div className="relative z-10 flex flex-col justify-center px-5 pt-28 md:px-10">
        <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-gray">
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
          {h.status}
        </p>

        <h1 className="font-display font-medium">
          <SplitText text={h.line1} as="span" className="block text-mega" delay={0.1} />
          <SplitText text={h.line2} as="span" className="block text-mega" delay={0.2} />
          <SplitText
            text={h.line3}
            as="span"
            className="block text-mega font-serif italic text-lime"
            delay={0.3}
          />
        </h1>
      </div>

      <div className="relative z-10 border-t border-offwhite/10 bg-obsidian/40 px-5 py-6 backdrop-blur-sm md:px-10">
        <div className="mx-auto flex max-w-grid flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-balance text-sm leading-relaxed text-gray md:text-base">{h.intro}</p>

          <dl className="grid grid-cols-2 gap-x-10 gap-y-3 text-xs md:grid-cols-4 md:text-sm">
            <div>
              <dt className="text-gray">{h.name}</dt>
              <dd className="text-offwhite">{h.role}</dd>
            </div>
            <div>
              <dt className="text-gray">{dict.nav.location}</dt>
              <dd className="text-offwhite">
                <LocalTime />
              </dd>
            </div>
            <div className="col-span-2 flex items-end gap-5 md:col-span-2 md:justify-end">
              <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-lime">
                LinkedIn
              </a>
              <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-lime">
                GitHub
              </a>
              <a href={`mailto:${SITE.email}`} className="hover:text-lime">
                Email
              </a>
            </div>
          </dl>
        </div>

        <div className="pointer-events-none mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray">
          <span className="inline-block animate-bounce">↓</span> {h.scroll}
        </div>
      </div>
    </section>
  );
}
