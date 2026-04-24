import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Proizvodi — Šlišurić d.o.o.",
  description:
    "Euro EPAL palete, industrijske palete, polovne palete, drveni elementi, biomasa i građevinska drvena građa. Vlastita proizvodnja, Zagreb.",
};

const productSections = [
  {
    id: "epal",
    title: "Drvene Palete",
    subtitle: "Euro / EPAL · Industrijske · Nestandardne dimenzije",
    description:
      "Vlastita proizvodnja paleta pod nadzorom. Od standardnih EPAL do paleta prema vašim točnim specifikacijama — sve s jamstvom kvalitete i brze isporuke.",
    accentColor: "#1C3A2A",
    products: [
      {
        name: "Euro palete (EPAL)",
        desc: "Standardne 1200×800mm palete prema europskim normama. Svaka paleta nosi EPAL žig i certifikat. Prihvaćene diljem Europe, idealne za sve industrije i logistiku.",
        specs: ["Dimenzije: 1200 × 800 mm", "Nosivost: 1500 kg (statički)", "Certifikat: EPAL / EUR1", "Materijal: jelovina / smrekovica"],
      },
      {
        name: "Industrijske palete na zahtjev (16 tipova)",
        desc: "Širi asortiman od 16 tipova industrijskih paleta za specifične potrebe. Nestandardne dimenzije, pojačana nosivost, posebna obrada.",
        specs: ["16 standardnih tipova", "Dimenzije prema narudžbi", "Nosivost do 5000 kg", "Mogućnost impregancije"],
      },
      {
        name: "Palete do 3000mm (na upit)",
        desc: "Palete velikih dimenzija za nestandardne industrijske primjene. Idealne za strojeve, metalne konstrukcije i tešku robu.",
        specs: ["Duljina do 3000 mm", "Potpuno prilagodljive", "Pojačana konstrukcija", "Rok isporuke na upit"],
      },
      {
        name: "Drveni sanduci, poklopci i okviri",
        desc: "Piljenje i izrada drvene ambalaže prema zahtjevima kupca. Sanduci za strojeve, poklopci za gajbe, okviri za palete.",
        specs: ["Dimenzije po narudžbi", "Različite debljine dasaka", "Mogućnost ISPM-15 tretmana", "Brza izrada"],
      },
    ],
  },
  {
    id: "polovne",
    title: "Prodaja i Otkup Polovnih Paleta",
    subtitle: "Kupnja · Prodaja · Otkup",
    description:
      "Isplativo rješenje za poduzeća kojima treba velik broj paleta bez kompromisa u pouzdanosti. Otkupljujemo i vaše viškove.",
    accentColor: "#C8A87A",
    products: [
      {
        name: "Prodaja polovnih paleta",
        desc: "Razni tipovi ispravnih polovnih paleta po povoljnim cijenama. Pregledane i razvrstane po kvaliteti — A, AB i B klasa.",
        specs: ["Euro palete A klase", "Razne dimenzije", "Razvrstano po kvaliteti", "Mogućnost popravka"],
      },
      {
        name: "Otkup polovnih i novih paleta",
        desc: "Preuzimamo viškove vaših paleta — i polovne i nekorištene. Brzi obračun, preuzimanje na lokaciji, gotovinska ili bankovna uplata.",
        specs: ["Preuzimamo u Vašem skladištu", "Brzi obračun", "Sve tipove paleta", "Transparentno vrednovanje"],
      },
    ],
  },
  {
    id: "elementi",
    title: "Drveni Elementi za Palete",
    subtitle: "Euro elementi · Kocke · Poklopci · Elementi na zahtjev",
    description:
      "Komponente za popravak i izradu paleta. Sve dimenzije, svi materijali, vlastita pilana.",
    accentColor: "#1C3A2A",
    products: [
      {
        name: "Euro elementi za palete",
        desc: "Standardne letvice, noge i daske za popravak EPAL paleta prema propisanim dimenzijama. Suha građa, bez grešaka.",
        specs: ["Prema EPAL specifikacijama", "Suha građa (ispod 20% vlage)", "Jelovina / smrekovica", "Brza isporuka"],
      },
      {
        name: "Elementi na zahtjev kupca",
        desc: "Letvice, daske i noge nestandardnih dimenzija prema vašem nacrtu. Pilamo na mjeru u vlastitoj pilani.",
        specs: ["Dimenzije po narudžbi", "Različite drvenaste vrste", "Rezanje i blanjanje", "Rok prema dogovoru"],
      },
      {
        name: "Drvene kocke za palete",
        desc: "Drvene kocke za izradu blok-paleta. Dostupne u standardnim i nestandardnim dimenzijama.",
        specs: ["Standardne: 78×78×78mm", "Nestandardne dimenzije", "Jelovina / topolovina", "Mogućnost bušenja"],
      },
      {
        name: "Poklopci za gajbe",
        desc: "Drveni poklopci za drvene gajbe i kontejnere. Prilagodljivi po dimenzijama i debljini.",
        specs: ["Dimenzije po narudžbi", "Različite debljine", "Brušena površina", "Mogućnost logotipa"],
      },
    ],
  },
  {
    id: "biomasa",
    title: "Biomasa",
    subtitle: "Piljevina · Kora · Drvni okrajci",
    description:
      "Nusproizvodi vlastite pilane — 100% prirodni, bez kemikalija, prikladno za energetiku i industrijsku upotrebu.",
    accentColor: "#C8A87A",
    products: [
      {
        name: "Piljevina (EA kanadska topola 100%)",
        desc: "Fina piljevina isključivo od EA (Eastern American) kanadske topole. Bez kore, bez otpadaka, bez kemijskih sredstava. Idealna za produkciju briketa i peleta.",
        specs: ["100% EA kanadska topola", "Bez kore i kemikalija", "Suha (vlaga ispod 12%)", "Idealna za briket"],
        highlight: true,
      },
      {
        name: "Kora",
        desc: "Drvna kora kao biomasa za ogrjev ili kompostiranje. Isporučujemo rasuto ili u vrećama.",
        specs: ["Rasuto ili u vrećama", "Različite drvne vrste", "Za ogrjev ili kompost", "Velika količina"],
      },
      {
        name: "Drvni okrajci sitni — za ogrjev / sječku",
        desc: "Sitni drvni okrajci pogodni za direktno loženje ili sječku. Niski trošak, visoka kalorična vrijednost.",
        specs: ["Za direktno loženje", "Za sječku / čips", "Mješane drvne vrste", "Veće količine"],
      },
      {
        name: "Drvni okrajci dugački — za ogrjev",
        desc: "Duži komadi drvnih okrajaka — za peći, kamine i industrijske kotlove.",
        specs: ["Duljina 20–50 cm", "Za kamine i peći", "Suho drvo", "Veleprodaja"],
      },
    ],
  },
  {
    id: "gradjevinska",
    title: "Građevinski Drveni Materijal",
    subtitle: "Krovna građa · Lamperija · Parket · Ograde",
    description:
      "Certificirana hrvatska drvna građa za krovišta, unutarnje uređenje i vanjske površine. Jela, Smreka, Ariš, Hrast — prema narudžbi.",
    accentColor: "#1C3A2A",
    products: [
      {
        name: "Krovna drvena građa (prema narudžbi)",
        desc: "Krovne grede, rafteri, podrožnice i ostala konstruktivna krovišna građa. HR podrijetlo, sušena, certificirana.",
        specs: ["Jela / Smreka / Ariš / Hrast", "HR podrijetlo", "Sušena i certificirana", "Prema projektu"],
      },
      {
        name: "Lamperija i brodski pod",
        desc: "Unutarnja obloga zidova i stropova. Profilirane daske u različitim dimenzijama i drvnim vrstama.",
        specs: ["Jela / Smreka / Hrast", "Profilirani spojevi", "Brušena površina", "Za suhe prostore"],
      },
      {
        name: "Fosna (Hrast / Jela / Ariš / Smreka)",
        desc: "Nebrušena ili blanjana fosna za podove, terase i konstruktivne primjene.",
        specs: ["Debljina 24–50 mm", "Različite širine", "Prema narudžbi", "HR drvne vrste"],
      },
      {
        name: "Krovna letva i štafla",
        desc: "Standardne krovne letvice i štafle za pričvršćivanje crijepa i ploča. Suha, ravna, bez grešaka.",
        specs: ["30×50 / 40×60 / 50×75 mm", "Standardne duljine", "Suha jelovina", "Velika zaliha"],
      },
      {
        name: "Masivni parket 14–21mm",
        desc: "Masivni drvni parket u različitim drvnim vrstama i dimenzijama. Za unutarnje uređenje.",
        specs: ["Debljina 14–21 mm", "Hrast / Jela / Ariš", "Brušen i lakiran", "Na upit"],
      },
      {
        name: "Balkonske ograde",
        desc: "Drvene balkonske ograde i rukohvati prema narudžbi. Tretirano drvo za vanjske uvjete.",
        specs: ["Dimenzije po narudžbi", "Impregnirano drvo", "Hrast / Ariš", "Montaža moguća"],
      },
    ],
  },
];

export default function ProizvodiPage() {
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
            Asortiman
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 tracking-tight">
            Naši Proizvodi
          </h1>
          <p className="text-white/75 text-xl max-w-2xl leading-relaxed">
            Kompletna ponuda drvenih paleta, biomase i građevinske građe — sve iz
            vlastite proizvodnje, sve s jamstvom.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {productSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium hover:bg-[#C8A87A] hover:text-[#1C3A2A] hover:border-[#C8A87A] transition-all duration-200"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Product sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {productSections.map((section, si) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-2 block">
                  {section.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A14] dark:text-[#EDE8E0] tracking-tight mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
                  {section.description}
                </p>
              </div>
              <Link
                href="/kontakt"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1C3A2A] dark:bg-[#C8A87A] text-white dark:text-[#1C3A2A] text-sm font-semibold hover:bg-[#2A5040] dark:hover:bg-[#D4B488] transition-all duration-200 hover:scale-105 shadow-md"
              >
                Zatražite ponudu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {section.products.map((product, pi) => (
                <div
                  key={product.name}
                  className={`p-6 rounded-2xl bg-white dark:bg-[#162B1E] border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                    (product as any).highlight
                      ? "border-[#C8A87A] ring-1 ring-[#C8A87A]/30"
                      : "border-[#E2D9CC] dark:border-[#2A4035]"
                  }`}
                >
                  {(product as any).highlight && (
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#C8A87A] text-[#1C3A2A] text-xs font-bold uppercase tracking-wide mb-3">
                      ★ Najpopularnije
                    </span>
                  )}
                  <h3 className="text-base font-bold text-[#1A1A14] dark:text-[#EDE8E0] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {product.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2 text-xs text-[#1A1A14] dark:text-[#EDE8E0]/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1C3A2A] dark:text-[#C8A87A] flex-shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1C3A2A] dark:bg-[#0A1510] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ne pronalazite što tražite?
          </h2>
          <p className="text-white/75 text-base mb-8">
            Kontaktirajte nas s vašim zahtjevom — pravimo i nestandardne dimenzije i
            rješenja na mjeru.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C8A87A] text-[#1C3A2A] font-bold transition-all duration-200 hover:bg-[#D4B488] hover:scale-105 shadow-xl"
          >
            Pošalji upit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
