"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Što je EPAL paleta i zašto je važna?",
    a: "EPAL je međunarodno licencirana paleta 1200 × 800 mm prema UIC 435-2, prihvaćena u otvorenom EPAL poolu diljem Europe. Svaka naša EPAL paleta nosi propisane žigove i dokumentaciju — možete je slobodno razmjenjivati s drugim EPAL članovima.",
  },
  {
    q: "Koji je minimalan volumen narudžbe?",
    a: "Za EPAL i standardne industrijske tipove — puni kamion (FTL) ili pola kamiona (LTL) u kombinaciji s drugim kupcem iz regije. Za palete po nacrtu dogovaramo minimum po projektu. Javite volumen pa ćemo predložiti optimalnu logistiku.",
  },
  {
    q: "Koliko traje od narudžbe do isporuke?",
    a: "Za standardne EPAL i industrijske palete: 24–48 sati unutar Hrvatske, 3–5 radnih dana unutar EU. Za palete po nacrtu 5–10 radnih dana ovisno o složenosti i količini. ISPM-15 tretman dodaje 24 sata.",
  },
  {
    q: "Kako funkcionira ISPM-15 i trebam li ga?",
    a: "ISPM-15 je međunarodni fitosanitarni standard za drvenu ambalažu u međunarodnom transportu. Palete se termički tretiraju na 56 °C tijekom 30 minuta i označavaju propisanim HT žigom. Imamo vlastito ovlaštenje — certifikat stiže uz svaku pošiljku. Unutar EU-a tretman nije obavezan.",
  },
  {
    q: "Kako formirate cijenu?",
    a: "Cijena ovisi o: (1) tipu i dimenziji palete, (2) volumenu, (3) kvaliteti razreda drva, (4) ISPM-15 tretmanu, (5) udaljenosti isporuke. Konkretnu ponudu s rokom šaljemo u 24 sata od upita — bez skrivenih stavki i doplata.",
  },
  {
    q: "Isporučujete li van Hrvatske?",
    a: "Da — redovite rute u 13 zemalja: HR, SI, AT, DE, IT, HU, CZ, SK, PL, NL, FR, BA, RS. Za ostale destinacije u EU dogovaramo ad-hoc. Za izvoz van EU palete isporučujemo s ispravnom ISPM-15 dokumentacijom.",
  },
  {
    q: "Kako radite s novim kupcima po pitanju plaćanja?",
    a: "Prva narudžba: avansno. Nakon 2–3 uspješne isporuke: podjela plaćanja (50/50). Za stalne partnere (10+ narudžbi): net-30 ili net-60 kreditne odgode prema ugovoru. Transparentno, bez iznenađenja.",
  },
  {
    q: "Otkupljujete li polovne palete?",
    a: "Da — otkupljujemo klasu A/B/C EUR paleta u regiji. Cjenik dogovaramo po volumenu i lokaciji. Za proizvođače koji generiraju palete kao nusproizvod — zatvoreni ciklus: novo + otkup + dostava na jedan OIB.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  return (
    <section className="section bg-paper-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-narrow text-center">
        <span className="eyebrow">Česta pitanja</span>
        <h2 className="mt-4 font-serif font-medium text-ink display-h2 text-balance">
          Odgovori prije nego što <em className="italic-accent">pošaljete</em> upit.
        </h2>
        <p className="lede mt-6 max-w-[58ch] mx-auto">
          Osam najčešćih pitanja koja nam stižu — od minimalne narudžbe do
          ISPM-15 dokumentacije.
        </p>
      </div>

      <div className="container-narrow mt-14 text-left">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-divider">
              <AccordionTrigger className="text-left font-serif text-[18px] sm:text-[20px] text-ink hover:text-ochre-deep hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-ink-soft pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
