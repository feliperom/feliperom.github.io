"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(() => import("./HeroCanvas").then((m) => m.HeroCanvas), { ssr: false });

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(window.WebGLRenderingContext && canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Static monogram fallback — the site is fully usable without WebGL. */
function Monogram() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden>
      <span className="font-display text-[40vw] leading-none text-graphite md:text-[22vw]">FR</span>
    </div>
  );
}

export function HeroVisual() {
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    setWebgl(supportsWebGL());
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      {webgl === false && <Monogram />}
      {webgl === true && <HeroCanvas />}
    </div>
  );
}
