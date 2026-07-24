"use client";

import { useLocale } from "@/i18n/context";
import { LAB_ITEMS } from "@/content/lab";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReveal } from "@/hooks/useReveal";

export function LabTeaser() {
  const { locale, dict } = useLocale();
  const ref = useReveal<HTMLDivElement>({ childSelector: "[data-card]", stagger: 0.08, y: 24 });

  return (
    <section className="relative border-t border-offwhite/10 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-grid">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-giant font-medium">
            <SplitText text={dict.lab.line1} as="span" className="block text-electric" />
            <SplitText text={dict.lab.line2} as="span" className="block" />
          </h2>
          <p className="max-w-sm text-balance text-gray">{dict.lab.body}</p>
        </div>

        <div ref={ref} className="mt-16 grid gap-px overflow-hidden rounded-sm border border-offwhite/10 bg-offwhite/10 sm:grid-cols-2 lg:grid-cols-3">
          {LAB_ITEMS.slice(0, 3).map((item) => (
            <div key={item.title} data-card className="flex flex-col gap-4 bg-obsidian p-8">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-gray">
                <span>{item.tags.join(" · ")}</span>
                <span>{item.year}</span>
              </div>
              <h3 className="font-display text-2xl font-medium">{item.title}</h3>
              <p className="text-sm text-gray">{item.description[locale]}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <MagneticButton
            href={`/${locale}/lab/`}
            className="border border-offwhite/20 px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:border-electric hover:text-electric"
          >
            {dict.lab.enter} →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
