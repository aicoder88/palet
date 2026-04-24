import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Wrench, Settings } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Usluge — Šlišurić d.o.o.",
  description:
    "Termičko tretiranje paleta ISPM-15, brušenje alata (kružnih i tračnih pila), izrada drvene ambalaže po narudžbi. Zagreb, Hrvatska.",
};

export default function UslugePage() {
  return (
    <div className="bg-[#F8F5F0] dark:bg-[#0F1E16] min-h-screen">
      {/* Header */}
      <div className="bg-[#1C3A2A] dark:bg-[#0A1510] pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(200,168,122,0.3) 0%, transparent 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-4">
            Što nudimo
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 tracking-tight">
            Naše Usluge
          </h1>
          <p className="text-white/75 text-xl max-w-2xl leading-relaxed">
            Više od samih paleta — nudimo i certificirano termičko tretiranje,
            brušenje alata i izradu ambalaže po narudžbi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <PlaceholderImage
          variant="ispm"
          label="ISPM-15 komora — fotografija uskoro"
          aspect="aspect-[16/5]"
          className="shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* ISPM-15 */}
        <section id="ispm15" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#1C3A2A] flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#C8A87A]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A87A]">
                    Izvozna certifikacija
                  </span>
                  <h2 className="text-2xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] leading-tight">
                    Termičko tretiranje ISPM-15
                  </h2>
                </div>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                <strong className="text-[#1A1A14] dark:text-[#EDE8E0]">
                  Izvozite robu?
                </strong>{" "}
                Bez ISPM-15 certifikata, vaša pošiljka neće prijeći granicu. Međunarodni
                standard ISPM-15 (International Standards for Phytosanitary Measures No. 15)
                obavezuje da sve drvene palete i ambalaža koja prelazi međunarodne granice
                moraju biti termički obrađene kako bi se spriječilo širenje štetočina.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Šlišurić je <strong className="text-[#1A1A14] dark:text-[#EDE8E0]">ovlašteni pružatelj usluge termičkog tretiranja</strong>{" "}
                prema ISPM-15 standardu. Sve palete prolaze kroz certificiranu komoru na
                minimalnoj temperaturi od 56°C kroz minimalno 30 minuta. Po završetku
                tretmana svaka paleta dobiva odgovarajući žig i prateću dokumentaciju.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Ovlašteni tretman prema ISPM-15 standardu",
                  "Temperatura tretiranja: min. 56°C / 30 min",
                  "Certificirani žig na svakoj paleti",
                  "Potpuna prateća dokumentacija",
                  "Prihvaćeno u svim zemljama koje zahtijevaju ISPM-15",
                  "Brz rok obrade — dogovor prema vašim potrebama",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1C3A2A] dark:text-[#C8A87A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1A1A14] dark:text-[#EDE8E0]">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] font-semibold text-sm transition-all duration-200 hover:bg-[#2A5040] dark:hover:bg-[#D4B488] hover:scale-105 shadow-md"
              >
                Zatražite tretiranje
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Certificate visual */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="rounded-2xl bg-[#1C3A2A] p-8 text-center shadow-2xl border border-[#2A4035]">
                  <div className="w-20 h-20 rounded-2xl bg-[#C8A87A] flex flex-col items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-[#1C3A2A] font-black text-lg leading-none">
                      ISPM
                    </span>
                    <span className="text-[#1C3A2A] font-black text-4xl leading-none">
                      15
                    </span>
                  </div>
                  <div className="text-white font-bold text-lg mb-2">
                    Ovlašteni tretman
                  </div>
                  <div className="text-white/60 text-sm mb-6">
                    International Standards for Phytosanitary Measures
                  </div>
                  <div className="space-y-2 text-left">
                    {["HT – Heat Treatment", "Temp: 56°C / 30 min", "Certifikat: HR-XX-XXX"].map((line) => (
                      <div key={line} className="flex items-center gap-2 text-xs text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A87A] flex-shrink-0" />
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="text-white/50 text-xs">
                      Šlišurić d.o.o. — Ovlašteni pružatelj usluge
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#E2D9CC] dark:via-[#2A4035] to-transparent" />

        {/* Tool sharpening */}
        <section id="brusenje" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#C8A87A]/10 dark:bg-[#C8A87A]/10 border border-[#C8A87A]/30 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-[#C8A87A]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A87A]">
                    Usluga
                  </span>
                  <h2 className="text-2xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] leading-tight">
                    Brušenje alata
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Nudimo profesionalnu uslugu brušenja kružnih i tračnih pila, kao i
                popravljanje pneumatskih pištolja koji se koriste u proizvodnji paleta.
                Brza usluga, precizno brušenje, dulji vijek trajanja vaših alata.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Kružne pile", desc: "Precizno oštrenje svih promjera" },
                  { title: "Tračne pile", desc: "Sve širine i tračnice" },
                  { title: "Pneumatski pištolji", desc: "Popravak i servis" },
                  { title: "Ostali alati", desc: "Na upit" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]"
                  >
                    <div className="font-semibold text-sm text-[#1A1A14] dark:text-[#EDE8E0] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-[#162B1E] border border-[#2A4035] p-8">
                <div className="text-center mb-6">
                  <Wrench className="w-16 h-16 text-[#C8A87A] mx-auto mb-3" />
                  <div className="text-white font-bold text-lg">Brušenje alata</div>
                  <div className="text-white/60 text-sm">Precizno, brzo, povoljno</div>
                </div>
                <div className="space-y-3">
                  {["Brza turnaround — 1-2 radna dana", "Prijevoz alata — moguće", "Garantiramo preciznost", "Dugogodišnje iskustvo"].map((line) => (
                    <div key={line} className="flex items-center gap-2.5 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A87A] flex-shrink-0" />
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#E2D9CC] dark:via-[#2A4035] to-transparent" />

        {/* Custom orders */}
        <section id="narudzba" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 border border-[#1C3A2A]/20 dark:border-[#C8A87A]/30 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-[#1C3A2A] dark:text-[#C8A87A]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A87A]">
                    Po mjeri
                  </span>
                  <h2 className="text-2xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] leading-tight">
                    Izrada po narudžbi
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                Svaka industrija ima specifične zahtjeve. Naša pilana i proizvodnja paleta
                prilagodljiva je vašim dimenzijama, nosivostima i materijalima. Donosite
                nacrt, mi donosimo rješenje.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Nestandardne dimenzije",
                    desc: "Palete i ambalaža do 3000mm duljine, prilagođene širine i visine.",
                  },
                  {
                    title: "Posebni materijali",
                    desc: "Hrast, ariš, topolovina ili mješane vrste prema zahtjevu.",
                  },
                  {
                    title: "Posebne obrade",
                    desc: "Impregnacija, ISPM-15 tretman, lakiranje, brušenje.",
                  },
                  {
                    title: "Serijska i maloserijska izrada",
                    desc: "Od jednog prototipa do stalne serijske narudžbe.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]"
                  >
                    <div className="font-semibold text-sm text-[#1A1A14] dark:text-[#EDE8E0] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] font-semibold text-sm transition-all duration-200 hover:bg-[#2A5040] dark:hover:bg-[#D4B488] hover:scale-105 shadow-md"
              >
                Pošaljite upit za narudžbu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-[#1C3A2A] dark:bg-[#162B1E] p-8 border border-[#2A4035]">
              <h3 className="text-white font-bold text-lg mb-6">
                Kako funkcionira narudžba po mjeri
              </h3>
              <div className="space-y-5">
                {[
                  { step: "1", title: "Pošaljite upit", desc: "Opišite dimenzije, materijal i količinu u kontakt formi ili nazovite." },
                  { step: "2", title: "Primite ponudu", desc: "U roku 2 sata dobivate okvirnu cijenu i rok isporuke." },
                  { step: "3", title: "Potvrda narudžbe", desc: "Potvrdite narudžbu — kreće produkcija u vlastitoj pilani." },
                  { step: "4", title: "Isporuka", desc: "Dostava na vašu adresu unutar dogovorenog roka, s dokumentacijom." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C8A87A] flex items-center justify-center flex-shrink-0 font-bold text-[#1C3A2A] text-sm">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{item.title}</div>
                      <div className="text-white/60 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1C3A2A] dark:bg-[#0A1510] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Imate pitanje o usluzi?
          </h2>
          <p className="text-white/75 text-base mb-8">
            Slobodno nas kontaktirajte — odgovaramo brzo i bez obveza.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold transition-all duration-200 hover:bg-[#D4B488] hover:scale-105 shadow-xl"
          >
            Kontaktirajte nas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
