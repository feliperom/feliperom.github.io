"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./en";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  value,
  children,
}: {
  value: LocaleContextValue;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within a LocaleProvider");
  return context;
}
