"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CountUpStatProps {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

export function CountUpStat({ value, label, description, icon }: CountUpStatProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Extract number from value string like "24h", "EPAL", "100%", "16+"
  const numMatch = value.match(/^(\d+)/);
  const numValue = numMatch ? parseInt(numMatch[1]) : 0;
  const suffix = numMatch ? value.slice(numMatch[0].length) : value;
  const count = useCountUp(numValue, 1800, inView);

  const displayValue = numMatch
    ? `${count}${suffix}`
    : value;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-12 h-12 rounded-xl bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center mb-4 text-[#1C3A2A] dark:text-[#C8A87A]">
        {icon}
      </div>
      <div className="text-4xl font-bold text-[#1C3A2A] dark:text-[#C8A87A] mb-1 tabular-nums leading-none">
        {displayValue}
      </div>
      <div className="text-sm font-semibold text-[#1A1A14] dark:text-[#EDE8E0] uppercase tracking-wide mb-2">
        {label}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
