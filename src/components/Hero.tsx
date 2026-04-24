"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2318] via-[#1C3A2A] to-[#0A1A10]" />

      {/* Wood grain SVG overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <filter id="wood">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02 0.8"
              numOctaves="4"
              seed="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#wood)" />
        </svg>
      </div>

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: "radial-gradient(ellipse at 30% 40%, rgba(200,168,122,0.08) 0%, transparent 60%)"
      }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C8A87A] text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A87A] animate-pulse" />
            Vodeći proizvođač paleta u Hrvatskoj
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Paleti koji stižu
          <br />
          <span className="text-[#C8A87A]">na vrijeme.</span>
          <br />
          Svaki put.
        </motion.h1>

        <motion.p
          className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          Kasne isporuke, trula daska, dobavljač koji ne diže telefon — znamo zašto ste ovdje. Šlišurić isporučuje{" "}
          <strong className="text-white font-semibold">
            kvalitetne drvene palete u roku 24-48h
          </strong>
          , s certifikatom i bez izgovora.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            href="/kontakt"
            className="pulse-green inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold text-base transition-all duration-200 hover:bg-[#D4B488] hover:scale-105 shadow-xl"
          >
            Zatražite ponudu
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/proizvodi"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-base transition-all duration-200 hover:bg-white/20 group"
          >
            Pogledajte proizvode
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
        >
          {[
            { num: "500.000+", label: "Paleta isporučeno" },
            { num: "98.7%", label: "Isporuka na vrijeme" },
            { num: "50+", label: "Godina iskustva" },
            { num: "16", label: "Tipova paleta" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#C8A87A] leading-none mb-1">
                {stat.num}
              </div>
              <div className="text-white/60 text-xs font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-1 text-white/40">
          <span className="text-xs font-medium uppercase tracking-widest">
            Skrolajte
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
