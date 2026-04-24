"use client";

import { SOCIAL_PROOF_ITEMS } from "@/lib/constants";
import { Star } from "lucide-react";

export default function SocialProofTicker() {
  const items = [...SOCIAL_PROOF_ITEMS, ...SOCIAL_PROOF_ITEMS];

  return (
    <div className="bg-[#1C3A2A] dark:bg-[#0A1510] py-4 overflow-hidden border-y border-[#2A4035]">
      <div className="flex">
        <div className="ticker-track flex items-center gap-0 shrink-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-6 whitespace-nowrap"
            >
              <span className="text-[#C8A87A] text-sm font-semibold tracking-wide">
                {item}
              </span>
              <Star className="w-3 h-3 text-[#C8A87A]/50 fill-[#C8A87A]/50 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
