import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, Navigation, ArrowRight, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lokacija — Šlišurić, Rešetari",
  description:
    "Pronađite nas: Kralja Tomislava 29, 35403 Rešetari, Brodsko-posavska županija. Radimo pon–pet 07:00–16:00.",
  alternates: { canonical: "/lokacija" },
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
            Nalazimo se u Rešetarima u Brodsko-posavskoj županiji — s kamionskim pristupom i
            dovoljno prostora za brzo ukrcavanje.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Facility card */}
        <div className="mb-16">
          <div className="rounded-2xl overflow-hidden border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm">
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src="/images/drone_new_facility.png"
                alt="Pogon Šlišurić — Rešetari, Brodsko-posavska"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C8A87A] text-[#1C3A2A] text-xs font-bold uppercase tracking-wide">
                Pogon Rešetari
              </div>
            </div>
            <div className="p-8 bg-white dark:bg-[#162B1E]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
                    Šlišurić — pogon u Rešetarima
                  </h2>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    Dvije proizvodne hale ukupne površine 1.200 m², skladišni prostor od 5.000 m²,
                    sušara i komora za termičku obradu paleta (IPPC 15). Sve na jednoj lokaciji od 1977.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#C8A87A] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#1A1A14] dark:text-[#EDE8E0]">
                        {COMPANY.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#C8A87A] flex-shrink-0" />
                      <span className="text-sm text-[#1A1A14] dark:text-[#EDE8E0]">
                        {COMPANY.workingHours}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#C8A87A] flex-shrink-0" />
                      <div className="flex flex-col gap-0.5">
                        <a href={`tel:${COMPANY.phone}`} className="text-sm text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline">
                          {COMPANY.phoneDisplay}
                        </a>
                        <a href={`tel:${COMPANY.phone2}`} className="text-sm text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline">
                          {COMPANY.phone2Display}
                        </a>
                        <a href={`tel:${COMPANY.phone3}`} className="text-sm text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline">
                          {COMPANY.phone3Display}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#C8A87A] flex-shrink-0" />
                      <a href={`mailto:${COMPANY.email}`} className="text-sm text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline">
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://maps.google.com/?q=Kralja+Tomislava+29,+35403+Re%C5%A1etari,+Hrvatska`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] font-bold text-sm hover:bg-[#2A5040] dark:hover:bg-[#D4B488] transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Pokreni navigaciju
                  </a>
                  <div className="p-4 rounded-xl bg-[#F8F5F0] dark:bg-[#0F1E16] border border-[#E2D9CC] dark:border-[#2A4035] space-y-1.5 text-xs text-muted-foreground">
                    <div className="font-semibold text-[#1A1A14] dark:text-[#EDE8E0] text-sm mb-2">Informacije</div>
                    <div>Kamionski pristup — bez ograničenja</div>
                    <div>Vlastiti parking za osobna vozila</div>
                    <div>Brzo ukrcavanje, bez čekanja</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-6">
            Karta lokacije
          </h2>
          <div className="rounded-2xl overflow-hidden border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm h-80 relative bg-[#E2D9CC] dark:bg-[#162B1E]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[#1C3A2A] dark:text-[#C8A87A]" />
              </div>
              <div className="text-sm font-semibold text-[#1A1A14] dark:text-[#EDE8E0] mb-1">
                Google Maps
              </div>
              <div className="text-xs text-muted-foreground mb-4">
                Rešetari, Brodsko-posavska županija
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
                {COMPANY.phoneDisplay}
              </a>
              <a href={`tel:${COMPANY.phone2}`} className="text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline block">
                {COMPANY.phone2Display}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="hover:underline text-xs block mt-1">
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
              <div>Rešetari — Brodsko-posavska</div>
              <div className="text-xs">Kamionski pristup</div>
              <div className="text-xs">Vlastiti parking</div>
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
