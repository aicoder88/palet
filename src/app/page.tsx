import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import MarketStrip from "@/components/MarketStrip";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Truck,
  ShieldCheck,
  Factory,
  ArrowRight,
  Clock,
  FileCheck,
} from "lucide-react";
import {
  PRODUCT_TYPES,
  WHY_SLISURIC,
  CASE_STUDIES,
  COMPANY,
} from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers className="w-6 h-6" />,
  truck: <Truck className="w-6 h-6" />,
  shield: <ShieldCheck className="w-6 h-6" />,
  factory: <Factory className="w-6 h-6" />,
};

export default function Page() {
  return (
    <>
      <Hero />
      <MarketStrip />

      {/* Product Types Grid — structured for SEO with H2 + descriptive H3s */}
      <section
        id="proizvodi"
        className="py-20 sm:py-24 bg-[#F8F5F0] dark:bg-[#0F1E16]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-3">
              Asortiman
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] tracking-tight mb-4 text-balance">
              Drvene palete i drvena ambalaža — sve iz vlastite proizvodnje
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              EPAL palete po UIC 435-2, industrijske palete po nacrtu kupca do
              3.000 mm, polovne EUR palete, ISPM-15 termički tretman za izvoz te
              biomasa i građevinska građa iz vlastite pilane. Jedan ugovor
              pokriva cijeli lanac — od trupca do palete na vašem skladištu.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCT_TYPES.map((product, i) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                icon={
                  <span
                    className={`sl-icon ${product.icon} text-3xl leading-none`}
                    aria-hidden="true"
                  />
                }
                href={product.href}
                index={i}
              />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/proizvodi"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-md"
            >
              Cijeli asortiman paleta i ambalaže
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Šlišurić — four pillar grid with production image */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#0A1510]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/production_sawmill.png"
                alt="Proizvodnja drvenih paleta u vlastitoj pilani Šlišurić d.o.o."
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-3">
                Zašto Šlišurić
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] tracking-tight mb-4 text-balance">
                Jedan dobavljač. Cijeli lanac. Tradicija od 1970-ih.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Režemo, sušimo, slažemo, tretiramo i dostavljamo — sve pod
                jednim OIB-om. Bez podizvođača, bez nepotrebne administracije.
                Vaš ured za nabavu komunicira s jednim kontaktom od trupca do
                potpisanog CMR-a.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_SLISURIC.map((item) => (
                  <li
                    key={item.stat}
                    className="p-5 rounded-xl bg-[#F8F5F0] dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] flex items-center justify-center flex-shrink-0">
                        {iconMap[item.icon] ?? <ShieldCheck className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#1C3A2A] dark:text-[#C8A87A]">
                          {item.stat}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-[#1A1A14]/80 dark:text-[#EDE8E0]/80 mb-1">
                          {item.label}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISPM-15 export strip */}
      <section
        id="ispm-15"
        className="py-16 bg-[#1C3A2A] dark:bg-[#0A1510] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-[#C8A87A] flex flex-col items-center justify-center shadow-xl">
                <span className="text-[#1C3A2A] font-black text-xl leading-none">
                  ISPM
                </span>
                <span className="text-[#1C3A2A] font-black text-3xl leading-none">
                  15
                </span>
              </div>
            </div>
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-2">
                Izvoz van EU
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-balance">
                ISPM-15 termičko tretiranje — za uvoz u UK, Švicarsku, SAD, Kinu,
                Rusiju i ostale treće zemlje
              </h2>
              <p className="text-white/75 text-base leading-relaxed max-w-2xl">
                Imamo vlastito ovlaštenje za termičko tretiranje drvenih paleta
                prema standardu{" "}
                <strong className="text-white">ISPM-15</strong>. Svaka paleta je
                označena propisanim žigom, uz PDF certifikat za cariniku. Unutar
                EU-a tretman nije obavezan, ali je preporučen za prehrambenu i
                farmaceutsku industriju.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/usluge#ispm15"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold text-sm transition-all duration-200 hover:bg-[#D4B488] hover:scale-[1.02] shadow-lg"
              >
                Saznajte više o usluzi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies / "Vjeruju nam" preview — links out to /reference-kupci */}
      <section className="py-20 sm:py-24 bg-[#F8F5F0] dark:bg-[#0F1E16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-3">
                Reference
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] tracking-tight mb-4 text-balance">
                Studije slučaja — kako opskrbljujemo proizvođače i distributere
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Volumen, trajanje suradnje, konkretan problem i rješenje. Za
                procurement urede koji traže dobavljača na kojeg se mogu pozvati
                u internoj odluci.
              </p>
            </div>
            <Link
              href="/reference-kupci"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C3A2A] dark:text-[#C8A87A] hover:underline"
            >
              Sve studije slučaja
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyCard key={cs.slug} {...cs} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Payment-terms teaser — quiet, links to /uvjeti-poslovanja */}
      <section className="py-16 bg-white dark:bg-[#0A1510] border-y border-[#E2D9CC] dark:border-[#2A4035]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/15 text-[#1C3A2A] dark:text-[#C8A87A] flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-1">
                Kako radimo s novim kupcima
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prva narudžba avansno → nakon nekoliko narudžbi uvodimo podjelu
                plaćanja → za stalne partnere otvaramo net-30 i net-60 kreditne
                odgode. Jasno i bez iznenađenja.
              </p>
            </div>
            <Link
              href="/uvjeti-poslovanja"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C3A2A] dark:text-[#C8A87A] hover:underline"
            >
              Uvjeti poslovanja
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* RFQ CTA */}
      <section className="py-24 bg-[#1C3A2A] dark:bg-[#0A1510] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(200,168,122,0.4) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C8A87A] text-xs font-semibold uppercase tracking-widest mb-6">
            <Clock className="w-3.5 h-3.5" />
            Odgovor u 24 h · Isporuka u cijelu EU
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight text-balance">
            Trebate ponudu za palete ili drvenu ambalažu?
          </h2>
          <p className="text-white/75 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Ispunite upit s volumenom, dimenzijama i odredištem — odgovaramo s
            konkretnom cijenom i rokom u roku 24 sata.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold text-base transition-all duration-200 hover:bg-[#D4B488] hover:scale-[1.02] shadow-xl"
            >
              Zatražite ponudu
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-base transition-all duration-200 hover:bg-white/20"
            >
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
