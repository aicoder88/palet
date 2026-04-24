import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Kontakt i upit za ponudu — EPAL palete, ISPM-15, izvoz EU",
  description:
    "Pošaljite RFQ s volumenom, dimenzijama i odredištem — odgovor s konkretnom cijenom i rokom u roku 24 h. Isporuka u cijelu EU i regiju.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
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
            Zatražite ponudu
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 tracking-tight">
            Kontakt
          </h1>
          <p className="text-white/75 text-xl max-w-xl leading-relaxed">
            Pošaljite upit i odgovaramo unutar 24 radnih sati. Brzo, konkretno, bez
            nespotrebnih procesa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <PlaceholderImage
          variant="office"
          label="Pogon Zagreb — fotografija uskoro"
          aspect="aspect-[16/5]"
          className="shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact details sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]">
              <h2 className="font-bold text-base text-[#1A1A14] dark:text-[#EDE8E0] mb-5">
                Kontakt informacije
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#1C3A2A] dark:text-[#C8A87A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                      Adresa
                    </div>
                    <div className="text-sm text-[#1A1A14] dark:text-[#EDE8E0]">
                      {COMPANY.address}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#1C3A2A] dark:text-[#C8A87A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                      Telefon
                    </div>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-sm text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#1C3A2A] dark:text-[#C8A87A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                      Email
                    </div>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-sm text-[#1C3A2A] dark:text-[#C8A87A] font-semibold hover:underline"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1C3A2A]/10 dark:bg-[#C8A87A]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#1C3A2A] dark:text-[#C8A87A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                      Radno vrijeme
                    </div>
                    <div className="text-sm text-[#1A1A14] dark:text-[#EDE8E0]">
                      {COMPANY.workingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick phone CTA */}
            <div className="p-6 rounded-2xl bg-[#1C3A2A] dark:bg-[#162B1E] border border-[#2A4035]">
              <div className="text-white font-bold text-base mb-2">
                Trebate odmah odgovor?
              </div>
              <p className="text-white/70 text-sm mb-4">
                Nazovite nas direktno — dostupni smo svakim radnim danom.
              </p>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold text-sm transition-all duration-200 hover:bg-[#D4B488]"
              >
                <Phone className="w-4 h-4" />
                Nazovite nas
              </a>
            </div>

            {/* What to expect */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035]">
              <h3 className="font-bold text-sm text-[#1A1A14] dark:text-[#EDE8E0] mb-4">
                Što vas čeka nakon upita
              </h3>
              <div className="space-y-3">
                {[
                  { step: "01", text: "Primamo vaš upit" },
                  { step: "02", text: "Kontaktiramo vas u 24h" },
                  { step: "03", text: "Šaljemo konkretnu ponudu" },
                  { step: "04", text: "Dogovaramo isporuku" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#C8A87A] w-6 flex-shrink-0">
                      {item.step}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#162B1E] border border-[#E2D9CC] dark:border-[#2A4035] shadow-sm">
              <h2 className="font-bold text-xl text-[#1A1A14] dark:text-[#EDE8E0] mb-1">
                Upit za ponudu
              </h2>
              <p className="text-muted-foreground text-sm mb-7">
                Ispunite formu i kontaktiramo vas s konkretnom ponudom.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
