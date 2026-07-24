"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import { LocaleProvider } from "@/i18n/context";
import { CursorProvider } from "@/components/layout/Cursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export function Providers({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleProvider value={{ locale, dict }}>
      <SmoothScroll />
      <CursorProvider>{children}</CursorProvider>
    </LocaleProvider>
  );
}
