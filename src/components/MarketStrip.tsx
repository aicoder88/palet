import { Globe2 } from "lucide-react";
import { SOCIAL_PROOF_ITEMS } from "@/lib/constants";

export default function MarketStrip() {
  return (
    <section
      className="bg-[#0A1510] dark:bg-black border-y border-white/10 py-3 overflow-hidden"
      aria-label="Tržišta i certifikati"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 flex items-center gap-2 text-[#C8A87A] text-[11px] font-semibold uppercase tracking-widest">
            <Globe2 className="w-3.5 h-3.5" />
            Isporuka u cijelu EU
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="flex gap-8 whitespace-nowrap ticker-track">
              {[...SOCIAL_PROOF_ITEMS, ...SOCIAL_PROOF_ITEMS].map((item, i) => (
                <span
                  key={i}
                  className="text-xs sm:text-sm text-white/70 inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C8A87A]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
