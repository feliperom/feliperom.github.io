"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/context";
import { SITE } from "@/content/site";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { LocalTime } from "@/components/ui/LocalTime";

export function Nav() {
  const { locale, dict } = useLocale();
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  const items = [
    { n: "01", label: dict.nav.index, href: `${base}/` },
    { n: "02", label: dict.nav.work, href: `${base}/#work` },
    { n: "03", label: dict.nav.about, href: `${base}/about/` },
    { n: "04", label: dict.nav.experience, href: `${base}/#experience` },
    { n: "05", label: dict.nav.lab, href: `${base}/lab/` },
    { n: "06", label: dict.nav.contact, href: `${base}/contact/` },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <nav className="mx-auto flex max-w-grid items-center justify-between px-5 py-5 md:px-10">
          <a href={`${base}/`} className="font-display text-lg font-medium tracking-tight text-offwhite">
            FR<span className="text-lime">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <li key={item.n}>
                <a
                  href={item.href}
                  className="group flex items-baseline gap-1.5 text-sm text-offwhite transition-opacity hover:opacity-60"
                >
                  <span className="text-[10px] tabular-nums text-lime">{item.n}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 md:flex">
            <LocaleSwitcher />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-6 w-8 flex-col justify-center gap-1.5 md:hidden"
            aria-label={open ? dict.common.close : dict.common.menu}
            aria-expanded={open}
          >
            <span className={`h-px w-full bg-offwhite transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-offwhite transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-obsidian px-6 pb-10 pt-24 transition-[clip-path] duration-700 ease-power3 md:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <ul className="flex flex-1 flex-col justify-center gap-2">
          {items.map((item, index) => (
            <li key={item.n}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 font-display text-4xl font-medium text-offwhite"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <span className="text-sm text-lime">{item.n}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 border-t border-offwhite/10 pt-6 text-sm text-gray">
          <div className="flex items-center justify-between">
            <span>{dict.nav.location}</span>
            <LocalTime />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
            {dict.nav.availability}
          </div>
          <div className="flex items-center gap-5">
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`mailto:${SITE.email}`}>Email</a>
          </div>
          <LocaleSwitcher className="pt-2" />
        </div>
      </div>
    </>
  );
}
