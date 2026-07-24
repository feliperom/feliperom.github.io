"use client";

import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/context";

/** Always-visible language toggle; swaps the locale segment in the path. */
export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const { locale } = useLocale();
  const pathname = usePathname();

  const pathFor = (next: Locale) => {
    const segments = pathname.split("/");
    segments[1] = next;
    return segments.join("/") || `/${next}`;
  };

  return (
    <div className={`flex items-center gap-1 text-xs uppercase tracking-widest ${className}`}>
      {LOCALES.map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && <span className="text-gray/50">/</span>}
          <a
            href={pathFor(code)}
            onClick={() => window.localStorage.setItem("locale", code)}
            aria-current={code === locale ? "true" : undefined}
            className={code === locale ? "text-offwhite" : "text-gray transition-colors hover:text-offwhite"}
          >
            {code}
          </a>
        </span>
      ))}
    </div>
  );
}
