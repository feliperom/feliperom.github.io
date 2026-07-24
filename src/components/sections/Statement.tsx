"use client";

import { useLocale } from "@/i18n/context";
import { YEARS_OF_EXPERIENCE } from "@/content/site";
import { SplitText } from "@/components/ui/SplitText";
import { Counter } from "@/components/ui/Counter";
import { useReveal } from "@/hooks/useReveal";

export function Statement() {
  const { dict } = useLocale();
  const s = dict.statement;
  const ref = useReveal<HTMLDivElement>({ childSelector: "[data-stat]", stagger: 0.12 });

  return (
    <section className="relative border-t border-offwhite/10 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="mb-8 block text-xs uppercase tracking-[0.28em] text-gray">— 001 / Statement</span>
          <h2 className="font-display text-giant font-medium">
            <SplitText text={s.line1} as="span" className="block" />
            <SplitText text={s.line2} as="span" className="block text-gray" />
          </h2>
        </div>

        <div className="flex flex-col justify-end gap-10">
          <p className="max-w-md text-balance text-lg leading-relaxed text-gray">{s.body}</p>

          <div ref={ref} className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-offwhite/10 pt-8">
            <div data-stat>
              <div className="font-display text-5xl font-medium text-lime">
                <Counter to={YEARS_OF_EXPERIENCE} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-gray">{s.stats.years}</p>
            </div>
            <div data-stat>
              <div className="font-display text-5xl font-medium">
                <Counter to={1} suffix="M+" />
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-gray">{s.stats.users}</p>
            </div>
            <div data-stat>
              <div className="font-display text-5xl font-medium">
                <Counter to={4} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-gray">{s.stats.sectors}</p>
            </div>
            <div data-stat>
              <div className="font-display text-3xl font-medium text-electric">{s.aiValue}</div>
              <p className="mt-2 text-xs uppercase tracking-widest text-gray">{s.stats.ai}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
