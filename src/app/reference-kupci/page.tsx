import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import { CASE_STUDIES, COMPANY } from "@/lib/constants";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Reference i studije slučaja — kupci Šlišurić paleta",
  description:
    "Kako opskrbljujemo proizvođače i distributere u cijeloj EU — volumen, trajanje suradnje, rješenja za EPAL, industrijske i ISPM-15 tretirane palete. Studije slučaja peer tvrtki.",
  alternates: { canonical: "/reference-kupci" },
  openGraph: {
    title: "Reference kupaca — Šlišurić d.o.o.",
    description:
      "Studije slučaja proizvođača i distributera koji koriste naše EPAL i industrijske palete širom EU.",
    url: `${COMPANY.siteUrl}/reference-kupci`,
  },
};

export default function ReferenceKupciPage() {
  return (
    <div className="bg-[#F8F5F0] dark:bg-[#0F1E16] min-h-screen">
      {/* Hero */}
      <header className="bg-[#1C3A2A] dark:bg-[#0A1510] pt-32 pb-20 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=70"
          alt="Skladište s paletama spremnima za distribuciju"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2318]/90 to-[#1C3A2A]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-4">
            Reference i studije slučaja
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight text-balance max-w-3xl">
            Kako opskrbljujemo proizvođače i distributere u EU
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Konkretno: koji su nam kupci, koliki volumen rješavamo, koliko dugo
            surađujemo. Svi citati su objavljeni uz pismenu suglasnost kupca;
            tvrtke čije su reference u pripremi prikazane su anonimno.
          </p>
        </div>
      </header>

      {/* Case studies grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust note */}
      <section className="py-12 bg-white dark:bg-[#0A1510] border-y border-[#E2D9CC] dark:border-[#2A4035]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/15 text-[#1C3A2A] dark:text-[#C8A87A] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
                Transparentnost referenci
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nećemo objaviti ime kupca bez pismene suglasnosti voditelja
                nabave. Volumeni, dimenzije i trajanje suradnje su stvarni — ako
                vam je za internu odluku potreban direktan kontakt peer tvrtke,
                organiziramo poziv uz njihov pristanak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C3A2A] dark:bg-[#0A1510]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
            Želite biti sljedeća studija slučaja?
          </h2>
          <p className="text-white/75 mb-8">
            Pošaljite upit s volumenom i dimenzijama — odgovor u 24 h.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold text-sm hover:bg-[#D4B488] hover:scale-[1.02] shadow-xl transition-all"
          >
            Zatražite ponudu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
