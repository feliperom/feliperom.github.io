"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/i18n/context";
import { LAB_ITEMS } from "@/content/lab";
import type { LabTag } from "@/content/types";
import { SplitText } from "@/components/ui/SplitText";
import { cursorProps, useCursor } from "@/components/layout/Cursor";

export function Lab() {
  const { locale, dict } = useLocale();
  const cursor = useCursor();
  const filters = dict.lab.filters;
  const [active, setActive] = useState(0);

  const visible = useMemo(() => {
    if (active === 0) return LAB_ITEMS;
    const tag = filters[active] as LabTag;
    return LAB_ITEMS.filter((item) => item.tags.includes(tag));
  }, [active, filters]);

  return (
    <section className="px-5 pb-32 pt-28 md:px-10 md:pt-40">
      <div className="mx-auto max-w-grid">
        <span className="mb-8 block text-xs uppercase tracking-[0.28em] text-electric">— {dict.lab.kicker}</span>
        <SplitText
          text={`${dict.lab.line1}\n${dict.lab.line2}`}
          as="h1"
          className="font-display text-giant font-medium"
          lineClassName="first:text-electric"
        />
        <p className="mt-8 max-w-xl text-balance text-lg text-gray">{dict.lab.body}</p>

        <div className="mt-14 flex flex-wrap gap-2" role="tablist" aria-label="Filter experiments">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                active === index
                  ? "border-electric bg-electric text-obsidian"
                  : "border-offwhite/20 text-gray hover:border-offwhite/50 hover:text-offwhite"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-20 text-gray">{dict.lab.empty}</p>
        ) : (
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-offwhite/10 bg-offwhite/10 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => {
              const inner = (
                <>
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-gray">
                    <span>{item.tags.join(" · ")}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray">{item.description[locale]}</p>
                </>
              );
              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...cursorProps(cursor, { variant: "hover" })}
                  className="flex flex-col bg-obsidian p-8 transition-colors hover:bg-graphite"
                >
                  {inner}
                </a>
              ) : (
                <div key={item.title} className="flex flex-col bg-obsidian p-8">
                  {inner}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
