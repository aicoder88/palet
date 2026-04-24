// Locale registry. Add a new language in three steps:
//   1. Add its code to `LOCALES` below with a human label.
//   2. Create `dictionaries/<code>.ts` exporting the same keys as `hr.ts`.
//   3. Register it in `dictionaries/index.ts`.
// Everything else (switcher UI, auto-detect, persistence) picks it up automatically.

export const LOCALES = [
  { code: "hr", label: "Hrvatski", short: "HR" },
  { code: "en", label: "English", short: "EN" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

export const DEFAULT_LOCALE: LocaleCode = "hr";
export const STORAGE_KEY = "slisuric.locale";

export function isLocale(value: string | null | undefined): value is LocaleCode {
  return !!value && LOCALES.some((l) => l.code === value);
}

// Pick the best locale from a browser language list (e.g. navigator.languages).
// Matches on primary subtag ("en-US" → "en"). Falls back to DEFAULT_LOCALE.
export function matchLocale(preferred: readonly string[]): LocaleCode {
  for (const raw of preferred) {
    const primary = raw.toLowerCase().split("-")[0];
    if (isLocale(primary)) return primary;
  }
  return DEFAULT_LOCALE;
}
