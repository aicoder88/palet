"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  index?: number;
}

export default function ProductCard({
  title,
  description,
  icon,
  href,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
    >
      <Link href={href} className="group block h-full">
        <div className="h-full p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm transition-all duration-200 hover:-translate-y-2 hover:shadow-xl hover:border-[#C8A87A]/50 dark:hover:border-[#C8A87A]/40">
          <div className="w-12 h-12 rounded-xl bg-[#1C3A2A]/8 dark:bg-[#C8A87A]/10 flex items-center justify-center mb-5 text-[#1C3A2A] dark:text-[#C8A87A] transition-all duration-200 group-hover:bg-[#1C3A2A] group-hover:text-white dark:group-hover:bg-[#C8A87A] dark:group-hover:text-[#1C3A2A] leading-none">
            {icon}
          </div>
          <h3 className="text-base font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-2 group-hover:text-[#1C3A2A] dark:group-hover:text-[#C8A87A] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1C3A2A] dark:text-[#C8A87A] uppercase tracking-wide">
            <span>Saznajte više</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
