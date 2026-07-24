"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/context";
import { EXPERIENCE } from "@/content/experience";
import { formatPeriod } from "@/lib/period";
import { SplitText } from "@/components/ui/SplitText";
import { useReveal } from "@/hooks/useReveal";

export function Experience() {
  const { locale, dict } = useLocale();
  const e = dict.experience;
  const ref = useReveal<HTMLDivElement>({ childSelector: "[data-row]", stagger: 0.08, y: 24 });
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="experience" className="relative border-t border-offwhite/10 px-5 py-28 scroll-mt-20 md:px-10 md:py-40">
      <div className="mx-auto max-w-grid">
        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.28em] text-gray">— {e.kicker}</span>
          <h2 className="font-display text-giant font-medium">
            <SplitText text={e.line1} as="span" className="block text-lime" />
            <SplitText text={e.line2} as="span" className="block" />
          </h2>
        </div>

        <div ref={ref} className="mt-16 flex flex-col">
          {EXPERIENCE.map((job, index) => {
            const open = active === index;
            return (
              <div key={job.company} data-row className="border-t border-offwhite/10">
                <button
                  type="button"
                  onClick={() => setActive(open ? null : index)}
                  aria-expanded={open}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left md:grid-cols-[120px_1fr_1fr_auto]"
                >
                  <span className="font-display text-sm tabular-nums text-gray">
                    {formatPeriod(job.period, locale)}
                  </span>
                  <span className="font-display text-xl font-medium text-offwhite md:text-2xl">{job.company}</span>
                  <span className="hidden text-sm text-gray md:block">{job.role[locale]}</span>
                  <span
                    className={`justify-self-end text-lime transition-transform ${open ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-power3 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-6 pb-8 md:grid-cols-[120px_1fr_1fr] md:gap-10">
                      <span className="hidden md:block" />
                      <div className="flex flex-col gap-4">
                        <p className="text-gray">{job.context[locale]}</p>
                        <ul className="flex flex-col gap-2">
                          {job.highlights[locale].map((item) => (
                            <li key={item} className="flex gap-3 text-sm text-offwhite/90">
                              <span className="text-lime">—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-xs uppercase tracking-widest text-gray">{e.stack}</span>
                        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-offwhite/80">
                          {job.stack.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Résumé download — re-add the `SITE` and `MagneticButton` imports to restore.
        <div className="mt-12 border-t border-offwhite/10 pt-10">
          <MagneticButton
            href={SITE.resumePath}
            external
            className="border border-offwhite/20 px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:border-lime hover:text-lime"
          >
            {e.resume} →
          </MagneticButton>
        </div> */}
      </div>
    </section>
  );
}
