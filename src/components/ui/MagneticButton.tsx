"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cursorProps, useCursor } from "@/components/layout/Cursor";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

/** A button/link that eases toward the cursor within a small radius. */
export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  external,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const cursor = useCursor();

  const onMove = (event: React.MouseEvent) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    gsap.to(ref.current, { x: x * 0.3, y: y * 0.3, duration: 0.6, ease: "power3.out" });
  };

  const onLeave = () => {
    cursor.reset();
    if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
  };

  const shared = {
    ref,
    className: `inline-flex items-center justify-center ${className}`,
    onMouseMove: onMove,
    onMouseEnter: () => cursorProps(cursor, { variant: "hover" }).onMouseEnter(),
    onMouseLeave: onLeave,
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...shared}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} {...shared}>
      {children}
    </button>
  );
}
