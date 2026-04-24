import type { LocaleCode } from "../config";
import hr, { type Dictionary } from "./hr";
import en from "./en";

// Register new locale dictionaries here.
export const dictionaries: Record<LocaleCode, Dictionary> = {
  hr,
  en,
};

export type { Dictionary };
