import Hero from "@/components/Hero";
import SocialProofTicker from "@/components/SocialProofTicker";
import ProductCard from "@/components/ProductCard";
import Testimonial from "@/components/Testimonial";
import { CountUpStat } from "@/components/CountUpStat";
import { PRODUCT_TYPES, WHY_SLISURIC, TESTIMONIALS } from "@/lib/constants";
import Link from "next/link";
import {
  Package,
  Layers,
  RefreshCw,
  Grid3X3,
  Leaf,
  Home,
  Truck,
  ShieldCheck,
  Factory,
  Layers2,
  ArrowRight,
  ThumbsUp,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  package: <Package className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  "refresh-cw": <RefreshCw className="w-6 h-6" />,
  grid: <Grid3X3 className="w-6 h-6" />,
  leaf: <Leaf className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
  truck: <Truck className="w-6 h-6" />,
  shield: <ShieldCheck className="w-6 h-6" />,
  factory: <Factory className="w-6 h-6" />,
  layers2: <Layers2 className="w-6 h-6" />,
};

export default function Page() {
  return (
    <>
      <Hero />
      <SocialProofTicker />

      {/* Product Types Grid */}
      <section className="py-24 bg-[#F8F5F0] dark:bg-[#0F1E16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-3">
              Što nudimo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] tracking-tight mb-4">
              Kompletni asortiman drvenih proizvoda
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Od standardnih EPAL paleta do biomase i građevinske građe — sve na jednom
              mjestu, sve s jamstvom kvalitete.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_TYPES.map((product, i) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                icon={iconMap[product.icon]}
                href={product.href}
                index={i}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/proizvodi"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] font-semibold text-sm transition-all duration-200 hover:bg-[#2A5040] dark:hover:bg-[#D4B488] hover:scale-105 shadow-md"
            >
              Svi proizvodi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Šlišurić */}
      <section className="py-24 bg-white dark:bg-[#0A1510]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-3">
              Zašto Šlišurić
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] tracking-tight mb-4">
              Pouzdanost koja se mjeri godinama
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Više od 50 godina opskrbljujemo hrvatska poduzeća paletama koje drže
              korak s njihovim poslovanjem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_SLISURIC.map((item, i) => (
              <CountUpStat
                key={item.stat}
                value={item.stat}
                label={item.label}
                description={item.description}
                icon={iconMap[item.icon] || <ThumbsUp className="w-6 h-6" />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ISPM-15 Strip */}
      <section className="py-16 bg-[#1C3A2A] dark:bg-[#0A1510] relative overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Badge */}
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
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-2">
                Izvozna certifikacija
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Izvozite robu? Bez ISPM-15 vaša pošiljka neće prijeći granicu.
              </h2>
              <p className="text-white/75 text-base leading-relaxed max-w-2xl">
                Mi smo ovlašteni za termičko tretiranje drvenih paleta prema međunarodnom
                standardu ISPM-15. Vaša dokumentacija je uredna, vaš izvoz teče bez
                zapreka.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/usluge"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold text-sm transition-all duration-200 hover:bg-[#D4B488] hover:scale-105 shadow-lg"
              >
                Saznajte više o usluzi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F8F5F0] dark:bg-[#0F1E16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-3">
              Recenzije
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] tracking-tight">
              Što kažu naši klijenti
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Testimonial
                key={t.name}
                name={t.name}
                title={t.title}
                quote={t.quote}
                initials={t.initials}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture CTA */}
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A87A] animate-pulse" />
            Isporuka unutar 24–48h
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
            Trebate paletu već sutra?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Nazovite nas ili pošaljite upit — odgovaramo brzo, isporučujemo brže.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="pulse-green inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold text-base transition-all duration-200 hover:bg-[#D4B488] hover:scale-105 shadow-xl"
            >
              Zatražite ponudu
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+38512345678"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-base transition-all duration-200 hover:bg-white/20"
            >
              +385 1 234 5678
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

