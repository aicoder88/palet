import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Navigation, ArrowRight, Award, TrendingUp, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "O nama — 50 godina tradicije | Šlišurić, Rešetari",
  description:
    "Tvrtka Slišurić iz Rešetara osnovana 1977. — obiteljska pilana i proizvođač drvene ambalaže s tradicijom od gotovo 50 godina. Top 12 proizvođač u Hrvatskoj.",
  alternates: { canonical: "/o-nama" },
};

const GROWTH_MILESTONES = [
  {
    label: "Početak",
    value: "16 m²",
    desc: "Prvotni proizvodni prostor kad je Matija Slišurić 1. siječnja 1977. osnovao obrt",
  },
  {
    label: "Danas — proizvodnja",
    value: "2 × 1.200 m²",
    desc: "Dvije moderne proizvodne hale u Rešetarima",
  },
  {
    label: "Skladišni prostor",
    value: "5.000 m²",
    desc: "Kapacitet za brzu pripremu i isporuku narudžbi",
  },
  {
    label: "Oprema",
    value: "Sušara + IPPC 15",
    desc: "Suvremena sušara i komora za termičku obradu paleta",
  },
];

const PRODUCTS = [
  "Drvena ambalaža — palete svih vrsta, elementi i EUR palete po narudžbi",
  "Parket",
  "Lamperija",
  "Drvena ograda",
  "Drvena građa",
  "Drvene lajsne",
  "Ogrjevno drvo",
  "Piljevina",
];

const PRODUCTION_BREAKDOWN = [
  { label: "Proizvodnja paleta", pct: 70 },
  { label: "Građevinski materijal", pct: 20 },
  { label: "Parket", pct: 10 },
  { label: "Drvena ograda", pct: 5 },
  { label: "Ogrjevno drvo", pct: 5 },
];

export default function ONamaPage() {
  return (
    <div className="bg-[#F8F5F0] dark:bg-[#0F1E16] min-h-screen">
      <PageHero
        eyebrow="50 GODINA POVIJESTI"
        title="O nama"
        lede="Tvrtka Slišurić iz Rešetara u Brodsko-posavskoj županiji — obiteljska priča o drvu koja traje od 1977."
        image={{
          src: "/images/drone_new_facility.png",
          alt: "Pogon Šlišurić — Rešetari, Brodsko-posavska",
        }}
        icon="icon-noun-wooden-beam-2871921"
      />

      {/* Company story */}
      <section className="section bg-[#F8F5F0] dark:bg-[#0F1E16]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-5">
              <span className="eyebrow">Naša priča</span>
              <h2 className="display-h2 font-serif font-medium text-ink">
                Obrt osnovan 1977.,{" "}
                <em className="italic-accent">tradicija</em> koja traje
              </h2>
              <p className="text-[17px] leading-relaxed text-ink-soft">
                Tvrtka PROIZVODNJA DRVNE AMBALAŽE I DRVOTOKARIJA, SLIŠURIĆ iz
                Rešetara u Brodsko-posavskoj županiji osnovana je 1. siječnja
                1977. godine kao obrt kojeg je tada osnovao Matija Slišurić.
              </p>
              <p className="text-[17px] leading-relaxed text-ink-soft">
                Kao takva, tvrtka egzistira do danas, s vlasnikom Brankom
                Slišurićem koji s novom vizijom nastavlja ovu uspješnu obiteljsku
                priču i tradiciju.
              </p>
              <p className="text-[17px] leading-relaxed text-ink-soft">
                Od svog osnutka s proizvodnim prostorom od svega 16 m², danas
                raspolaže s dvije proizvodne hale površine 1.200 m², skladišnim
                prostorom od 5.000 m², suvremeno opremljenom sušarom te komorom
                za termičku obradu paleta (IPPC 15).
              </p>
              <p className="text-[17px] leading-relaxed text-ink-soft">
                Tvrtka je tehnološki opremljena najsuvremenijim strojevima i
                opremom potrebnom za izradu drvene ambalaže — kako gotovih paleta
                svih vrsta tako i elemenata za palete po narudžbi kupaca te EUR
                paleta — a uključuje i izradu parketa, lamperije, drvene ograde,
                drvene građe te raznih drvenih lajsni.
              </p>
            </div>

            {/* Key facts */}
            <div className="space-y-4">
              {[
                { label: "Godina osnutka", value: "1977." },
                { label: "Osnivač", value: "Matija Slišurić" },
                { label: "Vlasnik", value: "Branko Slišurić" },
                { label: "Lokacija", value: "Rešetari, Brodsko-posavska" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]"
                >
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-1">
                    {item.label}
                  </div>
                  <div className="text-xl font-bold text-[#1A1A14] dark:text-[#EDE8E0]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth milestones */}
      <section className="section bg-white dark:bg-[#162B1E]">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="eyebrow">Rast tvrtke</span>
            <h2 className="display-h2 font-serif font-medium text-ink mt-2">
              Od 16 m² do 6.200 m² —{" "}
              <em className="italic-accent">gotovo</em> 50 godina rasta
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GROWTH_MILESTONES.map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-2xl border border-[#E2D9CC] dark:border-[#2A4035] bg-[#F8F5F0] dark:bg-[#0F1E16]"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-2">
                  {m.label}
                </div>
                <div className="text-3xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-3 leading-tight">
                  {m.value}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-[#F8F5F0] dark:bg-[#0F1E16]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="eyebrow">Asortiman</span>
              <h2 className="display-h2 font-serif font-medium text-ink mt-2 mb-8">
                Što <em className="italic-accent">proizvodimo</em>
              </h2>
              <ul className="space-y-3">
                {PRODUCTS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#C8A87A] flex-shrink-0" />
                    <span className="text-[16px] text-ink-soft leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/proizvodi"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C3A2A] text-white font-semibold text-sm hover:bg-[#2A5040] transition-colors"
                >
                  Pogledajte sve proizvode
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Production breakdown */}
            <div>
              <span className="eyebrow">Struktura proizvodnje</span>
              <div className="mt-6 space-y-5">
                {PRODUCTION_BREAKDOWN.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-[#1A1A14] dark:text-[#EDE8E0]">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-[#C8A87A] tabular">
                        {item.pct}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-[#E2D9CC] dark:bg-[#2A4035] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#C8A87A]"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section bg-[#1C3A2A] dark:bg-[#0A1510]">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-3">
              Dugogodišnje uspješno poslovanje
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Prepoznati kao{" "}
              <span className="text-[#C8A87A]">jedan od najboljih</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">
              <Award className="w-8 h-8 text-[#C8A87A] mb-4" />
              <div className="text-2xl font-bold text-white mb-2">Top 12</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Među 12 najznačajnijih proizvođača drvene ambalaže u Hrvatskoj
                prema podatcima Šumarskog fakulteta u Zagrebu.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">
              <TrendingUp className="w-8 h-8 text-[#C8A87A] mb-4" />
              <div className="text-2xl font-bold text-white mb-2">Top 25</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Među top 25 najuspješnijih poduzeća u proizvodnji proizvoda od
                drva, pluta, slame i pletarskih materijala prema CompanyWall —
                više od 45 godina pozitivnih poslovnih prihoda.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">
              <Star className="w-8 h-8 text-[#C8A87A] mb-4" />
              <div className="text-2xl font-bold text-white mb-2">AAA — 2023.</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Kreditni rejting za 2023. označen je s AAA bonitetnom ocjenom
                prema bonitetnoj kući CompanyWall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / How to find us */}
      <section className="section bg-[#F8F5F0] dark:bg-[#0F1E16]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow">Kako do nas?</span>
              <h2 className="display-h2 font-serif font-medium text-ink mt-2 mb-8">
                Posjetite nas u{" "}
                <em className="italic-accent">Rešetarima</em>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1C3A2A] dark:text-[#C8A87A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      Adresa
                    </div>
                    <div className="text-[15px] text-ink leading-relaxed">
                      Kralja Tomislava 29<br />
                      35403 Rešetari, Hrvatska
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1C3A2A] dark:text-[#C8A87A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      Telefon
                    </div>
                    <div className="space-y-1">
                      <a href={`tel:${COMPANY.phone}`} className="block text-[15px] text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline">
                        {COMPANY.phoneDisplay}
                      </a>
                      <a href={`tel:${COMPANY.phone2}`} className="block text-[15px] text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline">
                        {COMPANY.phone2Display}
                      </a>
                      <a href={`tel:${COMPANY.phone3}`} className="block text-[15px] text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline">
                        {COMPANY.phone3Display}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1C3A2A] dark:text-[#C8A87A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      Email
                    </div>
                    <a href={`mailto:${COMPANY.email}`} className="text-[15px] text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Kralja+Tomislava+29,+35403+Re%C5%A1etari,+Hrvatska"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1C3A2A] text-white font-semibold text-sm hover:bg-[#2A5040] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Pokreni navigaciju
                </a>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#1C3A2A] dark:border-[#C8A87A] text-[#1C3A2A] dark:text-[#C8A87A] font-semibold text-sm hover:bg-[#1C3A2A]/5 transition-colors"
                >
                  Pošaljite upit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#E2D9CC] dark:border-[#2A4035] h-80 relative bg-[#E2D9CC] dark:bg-[#162B1E]">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-[#1C3A2A] dark:text-[#C8A87A]" />
                </div>
                <div className="text-sm font-semibold text-[#1A1A14] dark:text-[#EDE8E0] mb-1">
                  Google Maps
                </div>
                <div className="text-xs text-muted-foreground mb-4">
                  Rešetari, Brodsko-posavska
                </div>
                <a
                  href="https://maps.google.com/?q=Kralja+Tomislava+29,+35403+Re%C5%A1etari,+Hrvatska"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] text-xs font-semibold hover:bg-[#2A5040] dark:hover:bg-[#D4B488] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Otvori Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
