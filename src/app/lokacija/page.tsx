import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, Navigation, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lokacija — Šlišurić d.o.o.",
  description:
    "Pronađite nas: stari pogon i novi pogon Šlišurić d.o.o. Zagreb, Hrvatska. Radimo pon–pet 07:00–16:00.",
};

export default function LokacijaPage() {
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
            Gdje nas naći
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 tracking-tight">
            Naša Lokacija
          </h1>
          <p className="text-white/75 text-xl max-w-xl leading-relaxed">
            Poslujemo iz dva pogona u Zagrebu. Dobro nas poznaju svi u logistici i
            građevini.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Two facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Stari pogon */}
          <div className="group">
            <div className="rounded-2xl overflow-hidden border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm hover:shadow-md transition-all duration-200">
              {/* Drone image placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-[#1C3A2A] to-[#2A5040] flex items-center justify-center overflow-hidden">
                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(200,168,122,0.6) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative flex flex-col items-center text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-[#C8A87A]/20 border-2 border-[#C8A87A]/40 flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-[#C8A87A]" />
                  </div>
                  <span className="text-white/60 text-sm">Drone snimka — uskoro</span>
                  <span className="text-white/40 text-xs mt-1">
                    Stari pogon — Zagreb
                  </span>
                </div>
                {/* Label */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C8A87A] text-[#1C3A2A] text-xs font-bold uppercase tracking-wide">
                  Stari pogon
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-[#162B1E]">
                <h2 className="text-xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-1">
                  Stari pogon
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Naš originalni pogon u kojemu je sve počelo 1970-ih. Pilana, skladište
                  paleta i administracija.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-[#C8A87A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A1A14] dark:text-[#EDE8E0]">
                      Ulica Vladimira Nazora 12, Zagreb
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-[#C8A87A] flex-shrink-0" />
                    <span className="text-[#1A1A14] dark:text-[#EDE8E0]">
                      Pon–Pet: 07:00–16:00
                    </span>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Zagreb,+Croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C3A2A] dark:text-[#C8A87A] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Navigiraj do nas
                </a>
              </div>
            </div>
          </div>

          {/* Novi pogon */}
          <div className="group">
            <div className="rounded-2xl overflow-hidden border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm hover:shadow-md transition-all duration-200">
              {/* Drone image placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-[#0A1510] to-[#1C3A2A] flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(200,168,122,0.6) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative flex flex-col items-center text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-[#C8A87A]/20 border-2 border-[#C8A87A]/40 flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-[#C8A87A]" />
                  </div>
                  <span className="text-white/60 text-sm">Drone snimka — uskoro</span>
                  <span className="text-white/40 text-xs mt-1">
                    Novi pogon — Zagreb
                  </span>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wide">
                  Novi pogon
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#C8A87A] text-[#1C3A2A] text-xs font-bold uppercase tracking-wide">
                  NOVO
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-[#162B1E]">
                <h2 className="text-xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-1">
                  Novi pogon
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Moderni prošireni pogon s kapacitetom od 10.000 paleta. Termička
                  komora za ISPM-15 tretman, automatizirana linija za palete.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-[#C8A87A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A1A14] dark:text-[#EDE8E0]">
                      Savska cesta 44, Zagreb (Industrija)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-[#C8A87A] flex-shrink-0" />
                    <span className="text-[#1A1A14] dark:text-[#EDE8E0]">
                      Pon–Pet: 06:00–18:00
                    </span>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Savska+cesta+44,+Zagreb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C3A2A] dark:text-[#C8A87A] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Navigiraj do nas
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-[#1A1A14] dark:text-[#EDE8E0]">
              Karta lokacije
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm h-80 relative bg-[#E2D9CC] dark:bg-[#162B1E]">
            {/* Map placeholder - in production use a real Google Maps iframe */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[#1C3A2A] dark:text-[#C8A87A]" />
              </div>
              <div className="text-sm font-semibold text-[#1A1A14] dark:text-[#EDE8E0] mb-1">
                Google Maps
              </div>
              <div className="text-xs text-muted-foreground mb-4">
                Zagreb, Hrvatska
              </div>
              <a
                href="https://maps.google.com/?q=Zagreb,+Croatia"
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

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]">
            <div className="w-10 h-10 rounded-xl bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-[#1C3A2A] dark:text-[#C8A87A]" />
            </div>
            <h3 className="font-bold text-sm text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
              Radno vrijeme
            </h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>Ponedjeljak – Petak</div>
              <div className="text-[#1C3A2A] dark:text-[#C8A87A] font-semibold">07:00 – 16:00</div>
              <div className="text-xs mt-2">Vikend: zatvoreno</div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]">
            <div className="w-10 h-10 rounded-xl bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-[#1C3A2A] dark:text-[#C8A87A]" />
            </div>
            <h3 className="font-bold text-sm text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
              Kontakt
            </h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <a href={`tel:${COMPANY.phone}`} className="text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline block">
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="hover:underline text-xs">
                {COMPANY.email}
              </a>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]">
            <div className="w-10 h-10 rounded-xl bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center mb-4">
              <Navigation className="w-5 h-5 text-[#1C3A2A] dark:text-[#C8A87A]" />
            </div>
            <h3 className="font-bold text-sm text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
              Kako doći
            </h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>Zagreb — lako dostupno</div>
              <div className="text-xs">Vlastiti parking</div>
              <div className="text-xs">Kamionski pristup</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1C3A2A] dark:bg-[#0A1510] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Dolazite na preuzimanje?
          </h2>
          <p className="text-white/70 text-sm mb-6">
            Javite se unaprijed da bismo vam pripremili robu i osigurali brz protok.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold text-sm hover:bg-[#D4B488] transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Nazovite nas
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all"
            >
              Pošaljite upit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
