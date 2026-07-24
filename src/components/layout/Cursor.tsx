"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

type CursorVariant = "default" | "hover" | "view";

interface CursorState {
  variant: CursorVariant;
  label: string;
}

interface CursorApi {
  set: (state: Partial<CursorState>) => void;
  reset: () => void;
}

const DEFAULT_STATE: CursorState = { variant: "default", label: "" };
const CursorContext = createContext<CursorApi | null>(null);

export function useCursor(): CursorApi {
  return useContext(CursorContext) ?? { set: () => {}, reset: () => {} };
}

/** Handlers to spread onto an interactive element to drive the custom cursor. */
export function cursorProps(api: CursorApi, state: Partial<CursorState>) {
  return {
    onMouseEnter: () => api.set(state),
    onMouseLeave: () => api.reset(),
  };
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>(DEFAULT_STATE);
  const [enabled, setEnabled] = useState(false);

  const set = useCallback((next: Partial<CursorState>) => {
    setState((prev) => ({ ...prev, ...next }));
  }, []);
  const reset = useCallback(() => setState(DEFAULT_STATE), []);
  const api = useMemo<CursorApi>(() => ({ set, reset }), [set, reset]);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.dataset.customCursor = "on";

    const move = (event: PointerEvent) => {
      gsap.to(dotRef.current, { x: event.clientX, y: event.clientY, duration: 0.35, ease: "power3.out" });
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      delete document.body.dataset.customCursor;
    };
  }, []);

  return (
    <CursorContext.Provider value={api}>
      {enabled && (
        <div
          ref={dotRef}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className={`grid place-items-center rounded-full text-[10px] font-medium uppercase tracking-widest transition-[width,height,background-color] duration-300 ease-power3 ${
              state.variant === "view"
                ? "h-24 w-24 bg-lime text-obsidian"
                : state.variant === "hover"
                  ? "h-12 w-12 bg-offwhite/90 text-obsidian"
                  : "h-2.5 w-2.5 bg-offwhite"
            }`}
          >
            {state.variant === "view" ? state.label : ""}
          </div>
        </div>
      )}
      {children}
    </CursorContext.Provider>
  );
}
