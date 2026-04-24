"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import type { LocaleCode } from "@/lib/i18n/config";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, locales, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = locales.find((l) => l.code === locale) ?? locales[0];
  const activeShort = mounted ? current.short : locales[0].short;

  function choose(code: LocaleCode) {
    setLocale(code);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-full text-ink-soft hover:text-ochre-deep transition-colors text-[13px] font-medium"
        aria-label={t.language.switcherLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4" aria-hidden />
        <span className="tabular-nums">{activeShort}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.language.switcherLabel}
          className="absolute right-0 mt-2 min-w-[160px] rounded-xl border border-divider bg-paper shadow-lg py-1 z-50"
        >
          {locales.map((l) => {
            const active = l.code === locale;
            return (
              <li key={l.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => choose(l.code)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors ${
                    active
                      ? "text-ochre-deep"
                      : "text-ink hover:bg-paper-2 hover:text-ochre-deep"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold tracking-wider text-ink-soft w-6">
                      {l.short}
                    </span>
                    <span>{l.label}</span>
                  </span>
                  {active && <Check className="w-4 h-4" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
