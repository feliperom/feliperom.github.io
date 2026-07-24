"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const frRef = useRef<SVGSVGElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem("preloaded") === "1") {
      setDone(true);
      return;
    }

    const finish = () => {
      window.sessionStorage.setItem("preloaded", "1");
      setDone(true);
      document.body.style.overflow = "";
    };

    if (prefersReduced) {
      finish();
      return;
    }

    document.body.style.overflow = "hidden";
    const counter = { n: 0 };
    const strokes = frRef.current?.querySelectorAll("path");

    const timeline = gsap.timeline({ onComplete: finish });
    timeline
      .to(counter, {
        n: 100,
        duration: 1,
        ease: "power2.out",
        onUpdate: () => {
          if (countRef.current) countRef.current.textContent = String(Math.round(counter.n)).padStart(3, "0");
        },
      })
      .fromTo(strokes ?? [], { opacity: 0 }, { opacity: 1, stagger: 0.06, duration: 0.4 }, 0.1)
      .to(frRef.current, { scale: 0.9, opacity: 0, duration: 0.35, ease: "power3.in" }, 1.1)
      .fromTo(
        gridRef.current?.children ?? [],
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, stagger: 0.01, duration: 0.4, ease: "power2.out" },
        1.15,
      )
      .to(rootRef.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, 1.7);

    return () => {
      timeline.kill();
      document.body.style.overflow = "";
    };
  }, [prefersReduced]);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-obsidian"
      role="status"
      aria-label="Loading"
    >
      <div ref={gridRef} className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-0" aria-hidden>
        {Array.from({ length: 64 }).map((_, index) => (
          <div key={index} className="border-[0.5px] border-offwhite/5" />
        ))}
      </div>

      <svg ref={frRef} viewBox="0 0 200 120" className="relative w-40 md:w-56" aria-hidden>
        <g stroke="#B6FF4A" strokeWidth="4" fill="none" strokeLinecap="square">
          <path d="M20 100 L20 20 L70 20" opacity="0" />
          <path d="M20 60 L60 60" opacity="0" />
          <path d="M110 100 L110 20 L150 20 Q175 20 175 45 Q175 65 150 65 L110 65" opacity="0" />
          <path d="M145 65 L178 100" opacity="0" />
        </g>
      </svg>

      <span
        ref={countRef}
        className="absolute bottom-8 right-8 font-display text-sm tabular-nums text-gray"
      >
        000
      </span>
    </div>
  );
}
