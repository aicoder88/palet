import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Download } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const CERTS = [
  {
    code: "EPAL",
    title: "EPAL licenca",
    description: "UIC 435-2",
    file: "/certs/epal-certifikat.pdf",
  },
  {
    code: "ISPM",
    title: "ISPM-15",
    description: "HT žig za izvoz",
    file: "/certs/ispm15-certifikat.pdf",
  },
  {
    code: "REG",
    title: "Sudski upis",
    description: "Izvadak iz registra",
    file: "/certs/sudski-registar.pdf",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C3A2A] dark:bg-[#0A1510] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="relative h-10 w-[180px] mb-5">
              <Image
                src="/logo-slisuric.svg"
                alt="Šlišurić d.o.o."
                fill
                className="object-contain object-left"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md mb-6">
              Licencirani proizvođač drvenih paleta i drvene ambalaže.
              Isporuka EPAL i industrijskih paleta u cijelu Europsku uniju.
              Vlastita pilana, ISPM-15 tretman, tradicija od 1970-ih.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C8A87A] flex-shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#C8A87A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C8A87A]" />
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#C8A87A] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C8A87A]" />
                {COMPANY.email}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <Clock className="w-4 h-4 text-[#C8A87A]" />
                {COMPANY.workingHours}
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#C8A87A] mb-4">
              Navigacija
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/uvjeti-poslovanja"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Uvjeti poslovanja
                </Link>
              </li>
              <li>
                <Link
                  href="/lokacija"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Lokacija
                </Link>
              </li>
            </ul>
          </div>

          {/* Certs — downloadable PDFs */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#C8A87A] mb-4">
              Certifikati (PDF)
            </h3>
            <ul className="space-y-2">
              {CERTS.map((c) => (
                <li key={c.code}>
                  <a
                    href={c.file}
                    className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#C8A87A]/50 hover:bg-white/10 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-9 h-9 rounded bg-[#C8A87A] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#1C3A2A] font-black text-[11px]">
                        {c.code}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-semibold">
                        {c.title}
                      </div>
                      <div className="text-white/50 text-[11px]">
                        {c.description}
                      </div>
                    </div>
                    <Download className="w-3.5 h-3.5 text-white/40 group-hover:text-[#C8A87A] transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-white/50 text-xs">
              OIB: {COMPANY.oib} · MBS: {COMPANY.mbs}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} {COMPANY.legalName}. Sva prava pridržana.</p>
          <div className="flex items-center gap-3">
            <Link href="/uvjeti-poslovanja" className="hover:text-white/80">
              Uvjeti poslovanja
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Pravila privatnosti</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <Link href="/lokacija" className="hover:text-white/80">
              Lokacija
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
