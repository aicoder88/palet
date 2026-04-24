"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0F1E16]/90 backdrop-blur-md shadow-sm border-b border-[#E2D9CC] dark:border-[#2A4035]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Šlišurić — naslovnica">
            <div
              className={`relative h-9 sm:h-10 w-[160px] sm:w-[180px] transition-opacity ${
                scrolled ? "opacity-100" : "opacity-0 lg:opacity-100"
              }`}
            >
              {/* Dark logo on light nav */}
              <Image
                src="/logo-slisuric.svg"
                alt="Šlišurić d.o.o. logo"
                fill
                priority
                className={`object-contain object-left ${scrolled ? "block dark:hidden" : "hidden"}`}
              />
              {/* Inverted logo on dark hero / dark mode */}
              <Image
                src="/logo-slisuric.svg"
                alt=""
                aria-hidden="true"
                fill
                priority
                className={`object-contain object-left ${
                  scrolled ? "hidden dark:block" : "hidden lg:block"
                }`}
                style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
              />
            </div>
            {/* Compact mark when hero-dark and mobile */}
            <div
              className={`flex items-center gap-2 ${
                scrolled ? "hidden" : "flex lg:hidden"
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-[#C8A87A] flex items-center justify-center shadow-md">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect y="4" width="22" height="3" rx="1" fill="#1C3A2A" />
                  <rect y="9.5" width="22" height="3" rx="1" fill="#1C3A2A" />
                  <rect y="15" width="22" height="3" rx="1" fill="#1C3A2A" />
                  <rect x="3" y="1" width="2.5" height="20" rx="1" fill="#2A5040" opacity="0.85" />
                  <rect x="9.5" y="1" width="2.5" height="20" rx="1" fill="#2A5040" opacity="0.85" />
                  <rect x="16" y="1" width="2.5" height="20" rx="1" fill="#2A5040" opacity="0.85" />
                </svg>
              </div>
              <span className="font-bold text-white text-base">Šlišurić</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 pb-0.5 ${
                  pathname === link.href
                    ? "active text-[#C8A87A]"
                    : scrolled
                    ? "text-[#1A1A14] dark:text-[#EDE8E0] hover:text-[#1C3A2A] dark:hover:text-[#C8A87A]"
                    : "text-white/90 hover:text-white"
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
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? "text-[#1A1A14] dark:text-[#EDE8E0] hover:bg-[#E2D9CC] dark:hover:bg-[#2A4035]"
                    : "text-white hover:bg-white/10"
                }`}
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
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] text-sm font-semibold hover:scale-[1.03] shadow-md transition-all"
            >
              Zatražite ponudu
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "text-[#1A1A14] dark:text-[#EDE8E0] hover:bg-[#E2D9CC] dark:hover:bg-[#2A4035]"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Otvori izbornik"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-[#0F1E16] border-t border-[#E2D9CC] dark:border-[#2A4035] px-4 py-5 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium ${
                pathname === link.href
                  ? "bg-[#1C3A2A] text-white dark:bg-[#C8A87A] dark:text-[#1C3A2A]"
                  : "text-[#1A1A14] dark:text-[#EDE8E0] hover:bg-[#F8F5F0] dark:hover:bg-[#162B1E]"
              }`}
            >
              {link.label}
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/kontakt"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] text-sm font-semibold"
            >
              Zatražite ponudu
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
