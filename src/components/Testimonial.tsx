"use client";

import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
  initials: string;
  index?: number;
}

export default function Testimonial({
  name,
  title,
  quote,
  initials,
  index = 0,
}: TestimonialProps) {
  return (
    <motion.div
      className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
    >
      {/* Quote marks */}
      <div className="text-4xl font-bold text-[#C8A87A] leading-none mb-4 font-serif">
        "
      </div>
      <p className="text-[#1A1A14] dark:text-[#EDE8E0] text-base leading-relaxed mb-6 italic">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1C3A2A] dark:bg-[#C8A87A] flex items-center justify-center flex-shrink-0">
          <span className="text-white dark:text-[#1C3A2A] font-bold text-xs">
            {initials}
          </span>
        </div>
        <div>
          <div className="font-semibold text-sm text-[#1A1A14] dark:text-[#EDE8E0]">
            {name}
          </div>
          <div className="text-xs text-muted-foreground">{title}</div>
        </div>
      </div>
    </motion.div>
  );
}
