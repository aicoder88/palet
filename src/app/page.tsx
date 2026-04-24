import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import MarketStrip from "@/components/MarketStrip";
import IconStrip from "@/components/IconStrip";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import {
  PRODUCT_TYPES,
  WHY_SLISURIC,
  CASE_STUDIES,
  COMPANY,
} from "@/lib/constants";
import { icons } from "@/lib/icons";

const WHY_ICON: Record<string, string> = {
  factory: icons.sawBand1,
  shield: icons.palletEpal,
  truck: icons.forklift,
  layers: icons.timberGate,
};

const PROOF_STATS = [
  { number: "1,2 M", label: "paleta godišnje iz vlastite proizvodnje" },
  { number: "52", label: "godine obiteljske pilane u Slavoniji" },
  { number: "13", label: "EU tržišta koja redovito opslužujemo" },
];

const HOW_STEPS = [
  {
    step: "01",
    icon: icons.battenNail,
    title: "Pošaljete upit",
    desc: "Količina, dimenzije, odredište, željeni datum. Obrazac ili telefon.",
  },
  {
    step: "02",
    icon: icons.woodPlank,
    title: "Ponuda u 24 h",
    desc: "Konkretna cijena, rok, kvaliteta razreda i CMR uvjeti. Nema skrivenih stavki.",
  },
  {
    step: "03",
    icon: icons.sawBand1,
    title: "Proizvodnja i ISPM-15",
    desc: "Vlastita pilana, sušenje, slaganje, termički tretman po potrebi.",
  },
  {
    step: "04",
    icon: icons.forklift,
    title: "Isporuka na vaš dock",
    desc: "Redovite rute u 13 zemalja. CMR, dokumentacija, fotografije utovara.",
  },
];

export default function Page() {
  return (
    <>
      <Hero />
      <MarketStrip />

      {/* 1 — Proof strip */}
      <section className="section-tight bg-paper-2">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-divider text-center">
            {PROOF_STATS.map((s) => (
              <div key={s.label} className="px-6 py-8 sm:py-4">
                <div className="font-serif text-ochre-deep display-h2">
                  {s.number}
                </div>
                <p className="mt-2 text-ink-soft text-sm sm:text-[15px] max-w-[28ch] mx-auto">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — Made-here icon strip */}
      <IconStrip />

      {/* 3 — The offer (value stack, centered) */}
      <section className="section bg-paper-2">
        <div className="container-site text-center">
          <span className="eyebrow">Što dobivate od Šlišurića</span>
          <h2 className="mt-4 font-serif font-medium text-ink display-h2 text-balance max-w-[18ch] mx-auto">
            Jedan ugovor. <em className="italic-accent">Cijeli</em> lanac.
          </h2>
          <p className="lede mt-6 max-w-[60ch] mx-auto">
            Režemo, sušimo, tretiramo i dostavljamo — sve pod jednim OIB-om.
            Bez posrednika, bez mailova u tri smjera, bez iznenađenja na
            tovarnici.
          </p>

          <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
            {WHY_SLISURIC.map((item) => (
              <li
                key={item.stat}
                className="p-8 rounded-2xl bg-paper border border-divider hover:border-ochre transition-colors"
              >
                <span
                  className={`${WHY_ICON[item.icon] ?? icons.palletEpal} text-4xl text-ochre-deep`}
                  aria-hidden
                />
                <div className="mt-5 font-serif text-ink display-h3">
                  {item.stat}
                </div>
                <div className="mt-1 eyebrow">{item.label}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-ink text-[15px] font-medium">
            Sve iz vlastite proizvodnje. Jedan kontakt. Jedna isporuka.
          </p>
        </div>
      </section>

      {/* 4 — Products grid */}
      <section id="proizvodi" className="section bg-paper-2">
        <div className="container-site text-center">
          <span className="eyebrow">Asortiman</span>
          <h2 className="mt-4 font-serif font-medium text-ink display-h2 text-balance max-w-[22ch] mx-auto">
            Drvene palete i ambalaža — <em className="italic-accent">iz</em> vlastite pilane.
          </h2>
          <p className="lede mt-6 max-w-[60ch] mx-auto">
            EPAL, industrijske, polovne, ISPM-15 tretirane, elementi i biomasa.
            Jedan ugovor pokriva cijeli lanac — od trupca do palete na vašem skladištu.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 text-left">
            {PRODUCT_TYPES.map((product, i) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                icon={
                  <span
                    className={`${product.icon} text-[28px] leading-none inline-flex items-center justify-center`}
                    aria-hidden="true"
                  />
                }
                href={product.href}
                index={i}
              />
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/proizvodi"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-paper font-medium text-[14px] hover:bg-sage-deep transition-colors"
            >
              Cijeli asortiman
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5 — How it works (4 steps) */}
      <section className="section bg-paper">
        <div className="container-site text-center">
          <span className="eyebrow">Kako radimo</span>
          <h2 className="mt-4 font-serif font-medium text-ink display-h2 text-balance max-w-[20ch] mx-auto">
            Od upita do <em className="italic-accent">tovara</em> u četiri koraka.
          </h2>

          <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {HOW_STEPS.map((s) => (
              <li
                key={s.step}
                className="relative p-8 rounded-2xl bg-paper-2 border border-divider"
              >
                <span className="font-serif text-ochre-soft text-[44px] leading-none tabular">
                  {s.step}
                </span>
                <span
                  className={`${s.icon} text-[32px] text-ochre-deep block mt-5`}
                  aria-hidden
                />
                <h3 className="mt-4 font-serif text-ink display-h3 text-[22px]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 — ISPM-15 export band */}
      <section id="ispm-15" className="section bg-sage-deep relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative container-narrow text-center">
          <span
            className={`${icons.reforestation} text-[56px] text-ochre-soft`}
            aria-hidden
          />
          <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ochre-soft">
            Certifikacija za međunarodni transport
          </div>
          <h2 className="mt-5 font-serif font-medium text-paper display-h2 text-balance">
            ISPM-15 termičko tretiranje —{" "}
            <em className="italic-accent-soft">uz svaku pošiljku</em>.
          </h2>
          <p className="lede mt-6 max-w-[60ch] mx-auto" style={{ color: "rgba(245,237,216,0.92)" }}>
            Vlastito ovlaštenje za termičko tretiranje prema ISPM-15. Svaka
            paleta označena propisanim HT žigom. PDF certifikat uz svaku
            pošiljku — spreman za carinsku dokumentaciju.
          </p>
          <Link
            href="/usluge#ispm15"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ochre text-paper font-medium text-[14px] hover:bg-ochre-deep transition-colors"
          >
            Saznajte više
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7 — Case studies */}
      <section className="section bg-paper-2">
        <div className="container-site text-center">
          <span className="eyebrow">Reference</span>
          <h2 className="mt-4 font-serif font-medium text-ink display-h2 text-balance max-w-[22ch] mx-auto">
            Kako opskrbljujemo <em className="italic-accent">proizvođače</em> u EU.
          </h2>
          <p className="lede mt-6 max-w-[60ch] mx-auto">
            Volumen, trajanje suradnje, konkretan problem i rješenje — za
            procurement urede koji traže dobavljača na kojeg se mogu pozvati u
            internoj odluci.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} compact />
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/reference-kupci"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-ochre-deep hover:underline underline-offset-4"
            >
              Sve studije slučaja
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8 — FAQ */}
      <FAQ />

      {/* 9 — Risk-reversal + final CTA */}
      <section className="section bg-sage-deep relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(216,184,120,0.4) 0%, transparent 50%)",
          }}
        />
        <div className="relative container-narrow text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-ochre-soft text-[11px] font-medium uppercase tracking-[0.18em]">
            <Clock className="w-3.5 h-3.5" />
            Odgovor u 24 h · Jamstvo roka
          </span>
          <h2 className="mt-6 font-serif font-medium text-paper display-h2 text-balance max-w-[22ch] mx-auto">
            Ako palete ne stignu na dogovoreni datum,{" "}
            <em className="italic-accent-soft">plaćamo transport</em> sljedeće isporuke.
          </h2>
          <p className="lede mt-6 max-w-[56ch] mx-auto" style={{ color: "rgba(245,237,216,0.92)" }}>
            Bez sitnih slova. Potpisujemo u ugovoru. Tako smo sigurni u vlastitu
            pilanu i tjedno planiranje ruta.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ochre text-paper font-medium text-[15px] transition-colors hover:bg-ochre-deep shadow-[0_12px_40px_-12px_rgba(184,138,67,0.6)]"
            >
              Zatražite ponudu
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-paper font-medium text-[15px] hover:bg-white/20 transition-colors"
            >
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
