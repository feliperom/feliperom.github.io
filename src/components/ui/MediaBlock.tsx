"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { observeOnce } from "@/hooks/useInView";
import { useBrokenImage } from "@/hooks/useBrokenImage";

interface MediaBlockProps {
  src: string;
  alt: string;
  index: string;
  name: string;
  accent: "lime" | "electric";
}

/**
 * Renders a project image with a scroll-scrubbed scale reveal. If the asset is
 * missing, a designed editorial placeholder is shown instead of a broken image.
 */
export function MediaBlock({ src, alt, index, name, accent }: MediaBlockProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { ref: imgRef, broken, onError } = useBrokenImage();
  const prefersReduced = usePrefersReducedMotion();
  const accentText = accent === "lime" ? "text-lime" : "text-electric";

  useEffect(() => {
    const wrap = wrapRef.current;
    if (prefersReduced || !wrap) return;
    const target = imgRef.current ?? wrap;
    gsap.set(target, { scale: 1.12 });
    const disconnect = observeOnce(wrap, () => {
      gsap.to(target, { scale: 1, duration: 1.2, ease: "power3.out" });
    });
    return disconnect;
  }, [prefersReduced, broken]);

  return (
    <div ref={wrapRef} className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-graphite">
      {!broken ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onError={onError}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="grain relative grid h-full w-full place-items-center bg-graphite">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-[0.06]" aria-hidden>
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-offwhite" />
            ))}
          </div>
          <div className="relative text-center">
            <span className={`font-display text-7xl font-medium ${accentText}`}>{index}</span>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray">{name} — image / video</p>
          </div>
        </div>
      )}
    </div>
  );
}
