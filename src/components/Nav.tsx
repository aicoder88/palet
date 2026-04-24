"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-divider"
      style={{
        backgroundColor: "color-mix(in srgb, var(--canvas) 78%, transparent)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-[68px]">
          {/* Brand — ochre circular mark + serif wordmark */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Šlišurić — naslovnica">
            <div className="w-9 h-9 rounded-full bg-ochre flex items-center justify-center text-paper font-serif font-semibold text-[18px] transition-colors group-hover:bg-ochre-deep">
              Š
            </div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif font-semibold text-[20px] tracking-[0.04em] text-ink">
                Šlišurić
              </span>
              <span className="hidden sm:inline text-[11px] font-medium uppercase tracking-[0.16em] text-muted-warm">
                pilana
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 pb-0.5 ${
                  pathname === link.href
                    ? "active text-ochre-deep"
                    : "text-ink-soft hover:text-ochre-deep"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-ink-soft hover:text-ochre-deep transition-colors"
                aria-label="Promjena teme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}

            <Link
              href="/kontakt"
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-ink text-paper text-[13px] font-medium tracking-[-0.005em] hover:bg-sage-deep transition-colors"
            >
              Zatražite ponudu
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              className="lg:hidden p-2 rounded-full text-ink hover:text-ochre-deep transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Otvori izbornik"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-paper border-t border-divider px-6 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                pathname === link.href
                  ? "bg-ochre text-paper"
                  : "text-ink hover:bg-canvas"
              }`}
            >
              {link.label}
              <ArrowRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/kontakt"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-ink text-paper text-sm font-medium"
            >
              Zatražite ponudu
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
