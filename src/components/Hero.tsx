"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import { icons } from "@/lib/icons";

const TRUST_BADGES = [
  { icon: icons.palletEpal, label: "EPAL 1200 × 800" },
  { icon: icons.reforestation, label: "ISPM-15 za izvoz" },
  { icon: icons.forklift, label: "Otprema u 24 h" },
  { icon: icons.tree3, label: "Od 1972." },
];

export default function Hero() {
  return (
    <section
      className="relative bg-paper-2 overflow-hidden"
      aria-label="Šlišurić — drvene palete za proizvođače i distributere"
    >
      <div className="relative container-site pt-36 pb-20 sm:pt-40 sm:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-[860px]"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-ochre" aria-hidden />
            <span className="eyebrow">
              EPAL licencirani proizvođač · Od 1972.
            </span>
            <span className="w-8 h-px bg-ochre" aria-hidden />
          </div>

          <h1 className="font-serif font-medium text-ink display-h1 text-balance">
            Posvećeni prirodi s prirodnim drvenim proizvodima. To{" "}
            <em className="italic-accent">je važno</em>.
          </h1>

          <p className="lede mx-auto mt-8 max-w-[60ch]">
            Vlastita pilana. 1,2 milijuna paleta godišnje. ISPM-15 za 13 EU
            tržišta. Od ponude do tovara u 24 sata — bez posrednika, bez
            iznenađenja.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ochre text-paper font-medium text-[15px] tracking-[-0.005em] transition-all duration-200 hover:bg-ochre-deep shadow-[0_10px_30px_-10px_rgba(143,106,48,0.5)]"
            >
              Zatražite ponudu — odgovor &lt; 24 h
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-divider text-ink font-medium text-[15px] hover:border-ochre hover:text-ochre-deep transition-colors"
            >
              <Phone className="w-4 h-4 text-ochre-deep" />
              {COMPANY.phoneDisplay}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] text-ink-soft">
            {TRUST_BADGES.map((b) => (
              <li key={b.label} className="inline-flex items-center gap-2">
                <span className={`${b.icon} text-[18px] text-ochre-deep`} aria-hidden />
                <span className="font-medium tabular">{b.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Full-bleed product band — Apple rhythm */}
        <motion.div
          className="mt-20 sm:mt-24 relative"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative aspect-[21/9] rounded-[28px] overflow-hidden border border-divider bg-paper">
            <Image
              src="/images/hero_warehouse.png"
              alt="Skladište s drvenim EPAL paletama — proizvodnja Šlišurić d.o.o."
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1120px"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent pointer-events-none" />

            <div className="absolute top-5 left-5 sm:top-7 sm:left-7 inline-flex items-center gap-3 bg-paper px-4 py-2.5 rounded-full shadow-[0_12px_30px_-12px_rgba(43,36,24,0.35)]">
              <span className={`${icons.palletEpal} text-[20px] text-ochre-deep`} aria-hidden />
              <span className="font-serif font-medium text-[15px] tabular tracking-[-0.01em] text-ink">
                EUR-1 · 1200 × 800
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
