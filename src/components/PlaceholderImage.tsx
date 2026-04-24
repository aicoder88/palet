type Variant =
  | "warehouse"
  | "production"
  | "customers"
  | "ispm"
  | "office"
  | "pallets"
  | "biomass"
  | "delivery"
  | "aerial";

interface PlaceholderImageProps {
  variant: Variant;
  label?: string;
  className?: string;
  aspect?: string;
}

const ICONS: Record<Variant, string> = {
  warehouse: "sl-icon-forklift",
  production: "sl-icon-saw",
  customers: "sl-icon-epal",
  ispm: "sl-icon-ispm",
  office: "sl-icon-plank",
  pallets: "sl-icon-pallet-custom",
  biomass: "sl-icon-biomasa",
  delivery: "sl-icon-forklift",
  aerial: "sl-icon-log-pile",
};

const GRADIENTS: Record<Variant, string> = {
  warehouse: "from-[#1C3A2A] via-[#2A5040] to-[#0F1E16]",
  production: "from-[#0A1510] via-[#1C3A2A] to-[#2A5040]",
  customers: "from-[#1C3A2A] to-[#0F1E16]",
  ispm: "from-[#C8A87A] via-[#B09366] to-[#8A6F47]",
  office: "from-[#2A5040] to-[#1C3A2A]",
  pallets: "from-[#1C3A2A] to-[#2A4035]",
  biomass: "from-[#2A5040] to-[#0F1E16]",
  delivery: "from-[#1C3A2A] to-[#0A1510]",
  aerial: "from-[#0F1E16] via-[#1C3A2A] to-[#2A5040]",
};

export default function PlaceholderImage({
  variant,
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: PlaceholderImageProps) {
  const iconClass = ICONS[variant];
  const gradient = GRADIENTS[variant];
  const isLight = variant === "ispm";

  return (
    <div
      className={`relative ${aspect} rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(200,168,122,0.8) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(135deg, transparent 45%, ${
            isLight ? "rgba(28,58,42,0.25)" : "rgba(200,168,122,0.35)"
          } 50%, transparent 55%)`,
          backgroundSize: "220px 220px",
        }}
      />
      <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-6">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center mb-5 border-2 ${
            isLight
              ? "bg-[#1C3A2A]/10 border-[#1C3A2A]/30 text-[#1C3A2A]"
              : "bg-[#C8A87A]/15 border-[#C8A87A]/40 text-[#C8A87A]"
          }`}
        >
          <span
            className={`sl-icon ${iconClass} text-4xl leading-none`}
            aria-hidden="true"
          />
        </div>
        {label && (
          <span
            className={`text-xs font-semibold uppercase tracking-widest ${
              isLight ? "text-[#1C3A2A]/70" : "text-white/60"
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
