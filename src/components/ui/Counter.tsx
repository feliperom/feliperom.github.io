"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { observeOnce } from "@/hooks/useInView";

interface CounterProps {
  to: number;
  suffix?: string;
  className?: string;
}

/**
 * Counts up when it first enters the viewport. The final value is what renders
 * server-side, so the number is present without JavaScript and readable by
 * crawlers; the count-up only starts once the client takes over.
 */
export function Counter({ to, suffix = "", className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReduced) return;

    setValue(0);
    const counter = { n: 0 };
    const disconnect = observeOnce(element, () => {
      gsap.to(counter, {
        n: to,
        duration: 1.4,
        ease: "power3.out",
        onUpdate: () => setValue(Math.round(counter.n)),
      });
    });
    return disconnect;
  }, [to, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
