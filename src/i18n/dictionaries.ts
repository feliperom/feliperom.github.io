import type { Locale } from "./config";
import { en, type Dictionary } from "./en";
import { pt } from "./pt";

const DICTIONARIES: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
