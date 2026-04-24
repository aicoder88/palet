"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { HERO, COMPANY, PEER_LOGOS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative bg-canvas"
      aria-label="Šlišurić — drvene palete za proizvođače i distributere"
    >
      <div className="relative max-w-[1240px] mx-auto px-6 sm:px-10 pt-32 pb-16 sm:pt-36 sm:pb-20">
        {/* Asymmetric hero: headline left (7), sub+CTA right (5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-8 sm:mb-10">
              <span className="w-8 h-px bg-ochre" aria-hidden />
              <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-ochre-deep">
                {HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-serif font-medium text-ink text-5xl sm:text-6xl lg:text-[104px] leading-[0.96] tracking-[-0.035em] text-balance">
              Palete koje{" "}
              <em className="italic-accent">stižu</em>{" "}
              <br className="hidden sm:block" />
              kad ste <em className="italic-accent">obećali</em>.
            </h1>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex flex-col gap-7 pb-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-lg sm:text-xl text-ink-soft leading-[1.5] max-w-[440px]">
              <span className="font-semibold text-ink">Šlišurić pilana</span>{" "}
              — licencirani proizvođač EPAL i industrijskih drvenih paleta.
              Vlastita pilana u Slavoniji, ISPM-15 tretman, isporuka diljem EU.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-start sm:items-center">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 px-6 py-[14px] rounded-full bg-ochre text-paper font-medium text-[15px] tracking-[-0.005em] transition-all duration-200 hover:bg-ochre-deep"
              >
                {HERO.primaryCta}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-[14px] text-ink-soft font-medium text-[15px] hover:text-ink transition-colors"
              >
                <Phone className="w-4 h-4 text-ochre-deep" />
                {HERO.secondaryCta}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual slab — 21:9 warehouse photo with floating spec badge */}
        <motion.div
          className="mt-16 sm:mt-20 relative"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-divider">
            <Image
              src="/images/hero_warehouse.png"
              alt="Skladište s drvenim EPAL paletama — proizvodnja Šlišurić d.o.o."
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-center"
            />
            {/* Reading gradient — bottom only, never obscures product */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent pointer-events-none" />

            {/* Floating serial badge — top-left */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 inline-flex items-center gap-3 bg-paper px-4 py-3 rounded-lg shadow-[0_8px_24px_rgba(43,36,24,0.18)]">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-warm">
                Serija
              </span>
              <span className="font-serif font-medium text-base sm:text-[17px] tabular tracking-[-0.01em] text-ink">
                EUR-1 · 1200 × 800
              </span>
            </div>

            {/* Caption row — bottom */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-end justify-between gap-6 text-paper">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] opacity-85">
                Pogon · Slavonija
              </span>
              <div className="font-serif font-medium text-right text-2xl sm:text-4xl leading-[1.05] tracking-[-0.02em] max-w-[480px]">
                Isporuka u <em className="italic-accent-soft">48 sati</em>.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Peer logo row — "Vjeruju nam" */}
        <motion.div
          className="mt-14 sm:mt-16 pt-8 border-t border-divider"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
            <div className="shrink-0">
              <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ochre-deep mb-1">
                Vjeruju nam
              </div>
              <Link
                href="/reference-kupci"
                className="text-sm text-muted-warm hover:text-ink underline-offset-4 hover:underline transition-colors"
              >
                Pogledajte studije slučaja →
              </Link>
            </div>
            <ul className="flex flex-wrap items-center gap-2 sm:gap-3 flex-1">
              {PEER_LOGOS.map((logo, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-paper border border-divider"
                >
                  <div className="w-8 h-8 rounded-full bg-ochre-tint flex items-center justify-center text-ochre-deep font-serif font-semibold text-[11px]">
                    {logo.placeholder ? "•" : logo.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="leading-tight">
                    <div className="text-[13px] text-ink font-medium">
                      {logo.name}
                    </div>
                    <div className="text-[10px] text-muted-warm uppercase tracking-wider">
                      {logo.industry}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
