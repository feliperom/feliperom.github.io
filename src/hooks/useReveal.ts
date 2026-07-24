"use client";

import { useEffect, useRef } from "react";
import { EASE, gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import { observeOnce } from "./useInView";

interface RevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  /** Selector for children to stagger; when omitted, the container animates. */
  childSelector?: string;
}

/**
 * Reveals an element (or its children) as it enters the viewport, driven by
 * IntersectionObserver. With reduced motion the content shows immediately.
 */
export function useReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = options.childSelector
      ? Array.from(element.querySelectorAll<HTMLElement>(options.childSelector))
      : [element];
    if (targets.length === 0) return;

    if (prefersReduced) {
      gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.set(targets, { autoAlpha: 0, y: options.y ?? 40 });
    const disconnect = observeOnce(element, () => {
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: options.duration ?? 0.9,
        ease: EASE,
        stagger: options.stagger ?? 0.08,
      });
    });

    return disconnect;
  }, [prefersReduced, options.y, options.duration, options.stagger, options.childSelector]);

  return ref;
}
