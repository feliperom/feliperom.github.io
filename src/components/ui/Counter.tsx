"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { observeOnce } from "@/hooks/useInView";

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
}

/**
 * Counts up once the number is properly in view.
 *
 * The final value is what renders on the server, so it is present without
 * JavaScript and readable by crawlers. On the client the tween writes straight
 * to the DOM node instead of through state — a per-frame setState here means a
 * React re-render every frame for every counter on screen, which stutters
 * against the WebGL hero.
 */
export function Counter({ to, suffix = "", className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReduced) return;

    const render = (n: number) => {
      element.textContent = `${Math.round(n)}${suffix}`;
    };

    render(0);
    const counter = { n: 0 };

    const disconnect = observeOnce(
      element,
      () => {
        gsap.to(counter, {
          n: to,
          duration: 1,
          ease: "power2.out",
          onUpdate: () => render(counter.n),
          onComplete: () => render(to),
        });
      },
      // Wait until the number has cleared the bottom quarter of the viewport,
      // otherwise the count runs while the section is still scrolling past.
      { threshold: 0, rootMargin: "0px 0px -25% 0px" },
    );

    return () => {
      disconnect();
      gsap.killTweensOf(counter);
    };
  }, [to, suffix, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {to}
      {suffix}
    </span>
  );
}
