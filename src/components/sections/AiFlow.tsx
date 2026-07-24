"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/i18n/context";
import { SplitText } from "@/components/ui/SplitText";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { observeOnce } from "@/hooks/useInView";

export function AiFlow() {
  const { dict } = useLocale();
  const ai = dict.ai;
  const flowRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const container = flowRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    const nodes = [...container.querySelectorAll<HTMLElement>("[data-node]")];
    if (prefersReduced) {
      gsap.set(nodes, { autoAlpha: 1, y: 0 });
      line.style.strokeDashoffset = "0";
      return;
    }

    const length = line.getTotalLength?.() ?? 1000;
    gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(nodes, { autoAlpha: 0, y: 20 });

    const disconnect = observeOnce(
      container,
      () => {
        const timeline = gsap.timeline();
        timeline.to(line, { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, 0);
        timeline.to(nodes, { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "power3.out" }, 0.2);
      },
      { threshold: 0.3 },
    );
    return disconnect;
  }, [prefersReduced]);

  return (
    <section className="relative border-t border-offwhite/10 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-grid">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.28em] text-electric">— {ai.kicker}</span>
            <h2 className="font-display text-giant font-medium">
              <SplitText text={ai.line1} as="span" className="block" />
              <SplitText text={ai.line2} as="span" className="block text-electric" />
            </h2>
          </div>
          <p className="max-w-md text-balance leading-relaxed text-gray">{ai.body}</p>
        </div>

        <div ref={flowRef} className="relative mt-24">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden preserveAspectRatio="none">
            <line ref={lineRef} x1="4%" y1="24" x2="96%" y2="24" stroke="#397CFF" strokeWidth="1" />
          </svg>

          <ol className="relative grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
            {ai.steps.map((step, index) => (
              <li key={step} data-node className="flex flex-col items-center gap-4 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-electric bg-obsidian font-display text-sm text-electric">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm uppercase tracking-widest text-offwhite">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
