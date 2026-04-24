"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { HERO, COMPANY, PEER_LOGOS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 overflow-hidden bg-[#0F2318]"
      aria-label="Šlišurić — drvene palete za proizvođače i distributere"
    >
      {/* Hero photo — production / warehouse with stacked EPAL pallets. */}
      <Image
        src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2000&q=70"
        alt="Skladište s drvenim EPAL paletama — proizvodnja Šlišurić d.o.o."
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-25"
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2318]/95 via-[#1C3A2A]/85 to-[#0A1510]/95" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C8A87A] text-[11px] font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A87A]" />
            {HERO.eyebrow}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 text-balance">
            {HERO.h1}
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed mb-9 text-balance">
            {HERO.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold text-sm sm:text-base transition-all duration-200 hover:bg-[#D4B488] hover:scale-[1.02] shadow-xl"
            >
              {HERO.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-white/15"
            >
              <Phone className="w-4 h-4" /> {HERO.secondaryCta}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/60 mt-4">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A87A]" /> ISPM-15 ovlašteni
            </span>
            <span>•</span>
            <span>EPAL licencirani partner</span>
            <span>•</span>
            <span>Isporuka u cijelu EU</span>
          </div>
        </motion.div>

        {/* Peer logo row — "Vjeruju nam" */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 border-t border-white/10 pt-8">
            <div className="flex-shrink-0">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#C8A87A] mb-1">
                Vjeruju nam
              </div>
              <Link
                href="/reference-kupci"
                className="text-xs text-white/60 hover:text-white/90 underline-offset-4 hover:underline inline-flex items-center gap-1"
              >
                Pogledajte studije slučaja →
              </Link>
            </div>
            <ul className="flex flex-wrap items-center gap-3 sm:gap-4 flex-1">
              {PEER_LOGOS.map((logo, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-dashed border-white/15"
                >
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-[#C8A87A] font-bold text-[10px]">
                    {logo.placeholder ? "LOGO" : logo.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs text-white/85 font-semibold">
                      {logo.name}
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wide">
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
