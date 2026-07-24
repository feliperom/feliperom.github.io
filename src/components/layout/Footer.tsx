"use client";

import { useLocale } from "@/i18n/context";
import { SITE } from "@/content/site";

export function Footer() {
  const { locale, dict } = useLocale();
  const year = new Date().getFullYear();
  const base = `/${locale}`;

  return (
    <footer className="relative border-t border-offwhite/10 bg-obsidian px-5 py-12 md:px-10">
      <div className="mx-auto flex max-w-grid flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <a href={`${base}/`} className="font-display text-6xl font-medium tracking-tight md:text-8xl">
            FR<span className="text-lime">.</span>
          </a>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray">
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-offwhite">
              LinkedIn
            </a>
            <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-offwhite">
              GitHub
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-offwhite">
              {SITE.email}
            </a>
            <a href={`${base}/contact/`} className="hover:text-offwhite">
              {dict.nav.contact}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-offwhite/10 pt-6 text-xs uppercase tracking-widest text-gray md:flex-row md:items-center md:justify-between">
          <span>© {year} {dict.footer.credit}</span>
          <span>
            {SITE.location.city}, {dict.nav.country} · {SITE.location.lat}, {SITE.location.lng}
          </span>
          <span>{dict.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
