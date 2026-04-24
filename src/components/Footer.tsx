import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C3A2A] dark:bg-[#0A1510] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#C8A87A] flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="4" width="22" height="3" rx="1" fill="#1C3A2A" />
                  <rect y="9.5" width="22" height="3" rx="1" fill="#1C3A2A" />
                  <rect y="15" width="22" height="3" rx="1" fill="#1C3A2A" />
                  <rect x="3" y="1" width="2.5" height="20" rx="1" fill="#2A5040" opacity="0.8" />
                  <rect x="9.5" y="1" width="2.5" height="20" rx="1" fill="#2A5040" opacity="0.8" />
                  <rect x="16" y="1" width="2.5" height="20" rx="1" fill="#2A5040" opacity="0.8" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg text-white">Šlišurić d.o.o.</div>
                <div className="text-xs text-[#C8A87A] tracking-wide">
                  Tradicija od 1970-ih
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
              Vodeći hrvatski proizvođač drvenih paleta i drvene ambalaže. Isporučujemo
              kvalitetu s certifikatom već više od 50 godina.
            </p>

            {/* Contact details */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C8A87A] flex-shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#C8A87A] transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-[#C8A87A] flex-shrink-0" />
                <span>{COMPANY.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#C8A87A] transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-[#C8A87A] flex-shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <Clock className="w-4 h-4 text-[#C8A87A] flex-shrink-0" />
                <span>{COMPANY.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#C8A87A] mb-4">
              Navigacija
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#C8A87A] mb-4">
              Certifikati
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded bg-[#C8A87A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1C3A2A] font-bold text-xs">EP</span>
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">EPAL Certifikat</div>
                  <div className="text-white/50 text-xs">Ovlašteni partner</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded bg-[#C8A87A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1C3A2A] font-bold text-xs">15</span>
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">ISPM-15</div>
                  <div className="text-white/50 text-xs">Termičko tretiranje</div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="text-white/50 text-xs">OIB: {COMPANY.oib}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {year} Šlišurić d.o.o. Sva prava pridržana.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <Link href="/kontakt" className="hover:text-white/80 transition-colors">
              Kontakt
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Pravila privatnosti</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <Link href="/lokacija" className="hover:text-white/80 transition-colors">
              Lokacija
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
