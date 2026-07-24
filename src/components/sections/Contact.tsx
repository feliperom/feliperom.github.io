"use client";

import { useRef, useState } from "react";
import { useLocale } from "@/i18n/context";
import { SITE } from "@/content/site";
import { SplitText } from "@/components/ui/SplitText";
import { LocalTime } from "@/components/ui/LocalTime";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Contact() {
  const { dict } = useLocale();
  const c = dict.contact;
  const glowRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  const onMove = (event: React.MouseEvent) => {
    if (prefersReduced || !glowRef.current) return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    gsap.to(glowRef.current, {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  const channels = [
    { label: c.email, value: SITE.email, href: `mailto:${SITE.email}` },
    { label: c.linkedin, value: "in/feliperom", href: SITE.socials.linkedin, external: true },
    { label: c.github, value: "feliperom", href: SITE.socials.github, external: true },
    { label: c.whatsapp, value: SITE.whatsapp, href: SITE.whatsappHref, external: true },
  ];

  return (
    <section
      id="contact"
      onMouseMove={onMove}
      className="relative overflow-hidden border-t border-offwhite/10 px-5 py-32 scroll-mt-20 md:px-10 md:py-48"
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-grid">
        <span className="mb-8 block text-xs uppercase tracking-[0.28em] text-gray">— {c.kicker}</span>

        <h2 className="font-display text-mega font-medium leading-[0.85]">
          <SplitText text={c.line1} as="span" className="block" />
          <SplitText text={c.line2} as="span" className="block text-gray" />
          <SplitText text={c.line3} as="span" className="block font-serif italic text-lime" />
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-8">
            <p className="max-w-md text-balance text-lg leading-relaxed text-gray">{c.body}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="border border-offwhite/20 px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:border-lime hover:text-lime"
              >
                {SITE.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="border border-offwhite/20 px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:border-lime hover:text-lime"
              >
                {copied ? c.copied : c.copy}
              </button>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
              {c.status} · {dict.nav.location} · <LocalTime />
            </div>
          </div>

          <ul className="flex flex-col divide-y divide-offwhite/10 self-end border-t border-offwhite/10">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between py-5 transition-colors hover:text-lime"
                >
                  <span className="text-xs uppercase tracking-widest text-gray group-hover:text-lime">
                    {channel.label}
                  </span>
                  <span className="font-display text-lg">{channel.value} ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
