"use client";

import { createElement, useEffect, useRef } from "react";
import { EASE, gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { observeOnce } from "@/hooks/useInView";

interface SplitTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  lineClassName?: string;
  delay?: number;
}

/**
 * Reveals text line-by-line behind a mask. The full string stays readable to
 * assistive tech via aria-label; the animated spans are aria-hidden.
 */
export function SplitText({
  text,
  as = "span",
  className = "",
  lineClassName = "",
  delay = 0,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const lines = text.split("\n");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const inner = Array.from(element.querySelectorAll<HTMLElement>("[data-line-inner]"));
    if (inner.length === 0) return;

    if (prefersReduced) {
      gsap.set(inner, { yPercent: 0 });
      return;
    }

    gsap.set(inner, { yPercent: 110 });
    const disconnect = observeOnce(element, () => {
      gsap.to(inner, { yPercent: 0, duration: 1, ease: EASE, stagger: 0.09, delay });
    });
    return disconnect;
  }, [prefersReduced, delay]);

  return createElement(
    as,
    { ref, className, "aria-label": text.replace(/\n/g, " ") },
    lines.map((line, index) => (
      <span key={index} aria-hidden className="block overflow-hidden">
        <span data-line-inner className={`block ${lineClassName}`}>
          {line}
        </span>
      </span>
    )),
  );
}
