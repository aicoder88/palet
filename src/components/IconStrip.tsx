import { icons, ICON_STRIP } from "@/lib/icons";

const LABELS: Record<string, string> = {
  palletEpal: "EPAL",
  sawBand1: "Vlastita pilana",
  forklift: "Logistika",
  oak1: "Hrast",
  beech1: "Bukva",
  poplar1: "Topola",
  timber1: "Rezana građa",
  logPile1: "Trupci",
  nailGun: "Zakivanje",
  workerMale: "Radna ruka",
  reforestation: "Održivo",
  treeCookie: "Sušenje",
  fir: "Jela",
  parquet: "Parket",
  clt: "CLT",
  woodPlank: "Daske",
};

export default function IconStrip() {
  return (
    <section className="section-tight bg-canvas border-y border-divider">
      <div className="container-site text-center">
        <span className="eyebrow">Sve iz vlastite pilane</span>
        <ul className="mt-8 grid grid-cols-4 sm:grid-cols-8 gap-x-2 gap-y-8">
          {ICON_STRIP.map((key) => (
            <li key={key} className="flex flex-col items-center gap-2">
              <span
                className={`${icons[key]} text-[32px] sm:text-[36px] text-sage transition-colors hover:text-ochre-deep`}
                aria-hidden
              />
              <span className="text-[11px] uppercase tracking-[0.08em] text-muted-warm">
                {LABELS[key]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
