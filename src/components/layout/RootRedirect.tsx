"use client";

import { useEffect } from "react";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/i18n/config";

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem("locale");
  if (stored && (LOCALES as readonly string[]).includes(stored)) return stored as Locale;
  const preferred = navigator.language.toLowerCase();
  return preferred.startsWith("pt") ? "pt" : DEFAULT_LOCALE;
}

export function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${detectLocale()}/`);
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-obsidian">
      <span className="font-display text-sm uppercase tracking-[0.3em] text-gray">Felipe Romero</span>
    </main>
  );
}
