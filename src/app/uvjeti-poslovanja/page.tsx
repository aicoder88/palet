import type { Metadata } from "next";
import Link from "next/link";
import { PAYMENT_LADDER, COMPANY } from "@/lib/constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Uvjeti poslovanja — plaćanje, narudžbe, isporuka",
  description:
    "Kako radimo s novim i stalnim kupcima: avansno plaćanje za prvu narudžbu, podjela plaćanja nakon nekoliko narudžbi, net-30 / net-60 kreditne odgode za ugovorne partnere. Isporuka u cijelu EU.",
  alternates: { canonical: "/uvjeti-poslovanja" },
};

export default function UvjetiPoslovanjaPage() {
  return (
    <div className="bg-[#F8F5F0] dark:bg-[#0F1E16] min-h-screen">
      <PageHero
        eyebrow="Uvjeti poslovanja"
        title="Kako radimo s novim i stalnim kupcima"
        lede="Transparentno. Bez iznenađenja na računu. Plaćanje se mijenja kako raste povjerenje — od avansa prve narudžbe do net-60 kreditnih odgoda za ugovorne partnere."
        image={{
          src: "/images/logistics_distribution.png",
          alt: "Isporuka paleta kupcima u cijeloj EU",
        }}
        icon="icon-noun-batten-nail-4517683"
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="space-y-6">
            {PAYMENT_LADDER.map((item, i) => (
              <li
                key={item.step}
                className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-5 sm:gap-8 items-start">
                  <div className="flex sm:flex-col items-center sm:items-start gap-3">
                    <div className="w-14 h-14 rounded-xl bg-[#1C3A2A] text-[#C8A87A] flex items-center justify-center text-xl font-black shadow-md">
                      {item.step}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-[#C8A87A]">
                      Korak {i + 1} / {PAYMENT_LADDER.length}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
                      {item.title}
                    </h2>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/15 text-[#1C3A2A] dark:text-[#C8A87A] text-sm font-semibold mb-4">
                      <CheckCircle2 className="w-4 h-4" />
                      {item.terms}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Standard clauses */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]">
              <h3 className="text-base font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
                Isporuka
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                EXW Zagreb, DAP ili FCA na dogovoreno odredište. Tranzit vremena
                ovise o zemlji odredišta — rute za cijelu EU (AT, DE, IT, HU,
                SI, CZ, SK, PL, NL, FR) i regiju (BA, RS). Dokumenti (otpremnica,
                CMR, EUR.1 po potrebi) uz svaku pošiljku.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]">
              <h3 className="text-base font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
                Reklamacije
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vizualna kontrola pri preuzimanju. Reklamacije kvalitete unutar
                7 dana od isporuke uz fotodokumentaciju. Zamjena ili odobrenje u
                roku 5 radnih dana.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]">
              <h3 className="text-base font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
                Valuta i cijene
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cijene u EUR. PDV obračunat prema hrvatskom zakonu — za
                isporuke u EU s valjanim VAT ID-om primjenjuje se reverse
                charge. Cijena vrijedi 14 dana od izdavanja ponude.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]">
              <h3 className="text-base font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
                Ugovorni partneri
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Za mjesečne volumene iznad 1.000 paleta sklapamo okvirni
                godišnji ugovor s fiksnim cijenama, prioritetom isporuke i
                individualnim kreditnim limitom. Kontaktirajte{" "}
                <a
                  href={`mailto:${COMPANY.rfqEmail}`}
                  className="text-[#1C3A2A] dark:text-[#C8A87A] font-semibold underline underline-offset-4"
                >
                  {COMPANY.rfqEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1C3A2A] dark:bg-[#0A1510]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
            Sve jasno? Pošaljite upit i krećemo.
          </h2>
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
