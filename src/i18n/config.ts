export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** A value authored once per language. */
export type Localized<T> = Record<Locale, T>;

export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
