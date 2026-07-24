"use client";

import { useLocale } from "@/i18n/context";
import { CAPABILITIES } from "@/content/capabilities";
import { SplitText } from "@/components/ui/SplitText";
import { useReveal } from "@/hooks/useReveal";

export function Capabilities() {
  const { dict } = useLocale();
  const ref = useReveal<HTMLDivElement>({ childSelector: "[data-group]", stagger: 0.1, y: 24 });

  return (
    <section className="relative border-t border-offwhite/10 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-grid">
        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.28em] text-gray">— {dict.capabilities.kicker}</span>
          <h2 className="font-display text-giant font-medium">
            <SplitText text={dict.capabilities.line1} as="span" className="block" />
            <SplitText text={dict.capabilities.line2} as="span" className="block text-gray" />
          </h2>
          <p className="max-w-lg text-balance text-lg italic text-gray">
            <span className="font-serif">{dict.capabilities.body}</span>
          </p>
        </div>

        <div ref={ref} className="mt-20 flex flex-col">
          {CAPABILITIES.map((group) => (
            <div
              key={group.id}
              data-group
              className="grid gap-4 border-t border-offwhite/10 py-8 md:grid-cols-[280px_1fr] md:gap-10"
            >
              <h3
                className={`font-display text-2xl font-medium ${group.accent === "lime" ? "text-lime" : "text-electric"}`}
              >
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 self-center">
                {group.items.map((item) => (
                  <li key={item} className="text-lg text-offwhite/90 md:text-xl">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
