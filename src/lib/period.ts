import type { Locale } from "@/i18n/config";

/**
 * Periods are authored once in English ("Aug 2018 — Present") and localized at
 * render time, so the content files stay single-sourced.
 */
const MONTHS_PT: Record<string, string> = {
  Jan: "Jan",
  Feb: "Fev",
  Mar: "Mar",
  Apr: "Abr",
  May: "Mai",
  Jun: "Jun",
  Jul: "Jul",
  Aug: "Ago",
  Sep: "Set",
  Oct: "Out",
  Nov: "Nov",
  Dec: "Dez",
  Present: "Atual",
};

export function formatPeriod(period: string, locale: Locale): string {
  if (locale !== "pt") return period;
  return period.replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Present)\b/g, (token) => MONTHS_PT[token]);
}
