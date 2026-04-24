import { Quote, MapPin, Package } from "lucide-react";

type Props = {
  slug: string;
  companyLabel: string;
  industry: string;
  region: string;
  volumePerMonth: string;
  tenureYears: number;
  palletType: string;
  challenge?: string;
  solution?: string;
  quote: string;
  quoteAuthor: string;
  permissionPending?: boolean;
  compact?: boolean;
};

export default function CaseStudyCard(p: Props) {
  return (
    <article className="group relative h-full flex flex-col p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm hover:shadow-lg transition-all duration-200">
      {p.permissionPending && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-[#C8A87A]/20 text-[#8B6A35] dark:text-[#C8A87A] border border-[#C8A87A]/30">
          Anonimizirano
        </span>
      )}

      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#C8A87A] mb-3">
        <span>{p.industry}</span>
        <span className="w-1 h-1 rounded-full bg-[#C8A87A]" />
        <span className="inline-flex items-center gap-1">
          <MapPin className="w-3 h-3" /> {p.region}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-3 leading-tight">
        {p.companyLabel}
      </h3>

      <dl className="grid grid-cols-2 gap-3 mb-4 text-xs">
        <div className="p-2.5 rounded-lg bg-[#F8F5F0] dark:bg-[#0F1E16]">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Volumen / mj
          </dt>
          <dd className="text-sm font-bold text-[#1C3A2A] dark:text-[#C8A87A]">
            {p.volumePerMonth} paleta
          </dd>
        </div>
        <div className="p-2.5 rounded-lg bg-[#F8F5F0] dark:bg-[#0F1E16]">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Trajanje
          </dt>
          <dd className="text-sm font-bold text-[#1C3A2A] dark:text-[#C8A87A]">
            {p.tenureYears} god.
          </dd>
        </div>
      </dl>

      <div className="text-xs text-muted-foreground mb-4 flex items-start gap-1.5">
        <Package className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#C8A87A]" />
        <span>{p.palletType}</span>
      </div>

      {!p.compact && p.challenge && (
        <div className="mb-4">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#1C3A2A]/70 dark:text-[#C8A87A]/70 mb-1">
            Izazov
          </div>
          <p className="text-sm text-[#1A1A14]/80 dark:text-[#EDE8E0]/80 leading-relaxed">
            {p.challenge}
          </p>
        </div>
      )}
      {!p.compact && p.solution && (
        <div className="mb-4">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#1C3A2A]/70 dark:text-[#C8A87A]/70 mb-1">
            Rješenje
          </div>
          <p className="text-sm text-[#1A1A14]/80 dark:text-[#EDE8E0]/80 leading-relaxed">
            {p.solution}
          </p>
        </div>
      )}

      <blockquote className="mt-auto pt-4 border-t border-[#E2D9CC] dark:border-[#2A4035]">
        <Quote className="w-5 h-5 text-[#C8A87A] mb-2" />
        <p className="text-sm italic text-[#1A1A14] dark:text-[#EDE8E0] leading-relaxed mb-2">
          „{p.quote}"
        </p>
        <footer className="text-xs text-muted-foreground">
          — {p.quoteAuthor}
        </footer>
      </blockquote>
    </article>
  );
}
