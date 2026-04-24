"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#0F1E16]/90 backdrop-blur-md shadow-sm border-b border-[#E2D9CC] dark:border-[#2A4035]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo + Badge */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                {/* Wood grain SVG icon */}
                <div className="w-9 h-9 rounded-lg bg-[#1C3A2A] flex items-center justify-center shadow-md">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="4" width="22" height="3" rx="1" fill="#C8A87A" />
                    <rect y="9.5" width="22" height="3" rx="1" fill="#C8A87A" />
                    <rect y="15" width="22" height="3" rx="1" fill="#C8A87A" />
                    <rect x="3" y="1" width="2.5" height="20" rx="1" fill="#E8C99A" opacity="0.7" />
                    <rect x="9.5" y="1" width="2.5" height="20" rx="1" fill="#E8C99A" opacity="0.7" />
                    <rect x="16" y="1" width="2.5" height="20" rx="1" fill="#E8C99A" opacity="0.7" />
                  </svg>
                </div>
                <span
                  className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                    scrolled
                      ? "text-[#1C3A2A] dark:text-[#EDE8E0]"
                      : "text-white dark:text-[#EDE8E0]"
                  }`}
                >
                  Šlišurić
                  <span className="text-[#C8A87A] dark:text-[#C8A87A] font-normal ml-0.5 text-sm">
                    {" "}d.o.o.
                  </span>
                </span>
              </Link>
              {/* Experience Badge */}
              <div className="hidden sm:block float-bob">
                <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-widest bg-[#C8A87A] text-[#1C3A2A] shadow-sm border border-[#B8966A]">
                  S vama 50+ godina
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-colors duration-200 pb-0.5 ${
                    pathname === link.href
                      ? "active text-[#C8A87A]"
                      : scrolled
                      ? "text-[#1A1A14] dark:text-[#EDE8E0] hover:text-[#1C3A2A] dark:hover:text-[#C8A87A]"
                      : "text-white/90 dark:text-[#EDE8E0]/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    scrolled
                      ? "text-[#1A1A14] dark:text-[#EDE8E0] hover:bg-[#E2D9CC] dark:hover:bg-[#2A4035]"
                      : "text-white hover:bg-white/10"
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}

              {/* CTA Button */}
              <Link
                href="/kontakt"
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] text-sm font-semibold transition-all duration-200 hover:bg-[#2A5040] dark:hover:bg-[#D4B488] hover:scale-105 shadow-md hover:shadow-lg"
              >
                Zatražite ponudu
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile hamburger */}
              <button
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? "text-[#1A1A14] dark:text-[#EDE8E0] hover:bg-[#E2D9CC] dark:hover:bg-[#2A4035]"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white dark:bg-[#0F1E16] border-t border-[#E2D9CC] dark:border-[#2A4035] px-4 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "bg-[#1C3A2A] text-white dark:bg-[#C8A87A] dark:text-[#1C3A2A]"
                    : "text-[#1A1A14] dark:text-[#EDE8E0] hover:bg-[#F8F5F0] dark:hover:bg-[#162B1E]"
                }`}
              >
                {link.label}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
            <div className="pt-4">
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
    </>
  );
}
