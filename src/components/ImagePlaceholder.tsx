type Tone = "ochre" | "sage" | "paper";
type Aspect = "square" | "landscape" | "wide";

type Props = {
  icon?: string;
  tone?: Tone;
  aspect?: Aspect;
  className?: string;
};

const ASPECT: Record<Aspect, string> = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

const TONE: Record<
  Tone,
  {
    bg: string;
    fg: string;
    grainStyle: React.CSSProperties;
    glowStyle: React.CSSProperties;
  }
> = {
  ochre: {
    bg: "bg-ochre-tint",
    fg: "text-ochre-deep",
    grainStyle: {
      backgroundImage:
        "repeating-linear-gradient(92deg, rgba(143, 106, 48, 0.18) 0px, rgba(143, 106, 48, 0.18) 1px, transparent 1px, transparent 14px)",
    },
    glowStyle: {
      background: "radial-gradient(circle, var(--ochre) 0%, transparent 70%)",
      opacity: 0.18,
    },
  },
  sage: {
    bg: "bg-sage/10",
    fg: "text-sage-deep",
    grainStyle: {
      backgroundImage:
        "repeating-linear-gradient(92deg, rgba(67, 77, 57, 0.16) 0px, rgba(67, 77, 57, 0.16) 1px, transparent 1px, transparent 14px)",
    },
    glowStyle: {
      background:
        "radial-gradient(circle, var(--sage-deep) 0%, transparent 70%)",
      opacity: 0.18,
    },
  },
  paper: {
    bg: "bg-paper",
    fg: "text-ink-soft",
    grainStyle: {
      backgroundImage:
        "repeating-linear-gradient(92deg, rgba(43, 36, 24, 0.1) 0px, rgba(43, 36, 24, 0.1) 1px, transparent 1px, transparent 14px)",
    },
    glowStyle: {
      background: "radial-gradient(circle, var(--ochre) 0%, transparent 70%)",
      opacity: 0.14,
    },
  },
};

export default function ImagePlaceholder({
  icon = "sl-icon-lumber",
  tone = "ochre",
  aspect = "landscape",
  className = "",
}: Props) {
  const t = TONE[tone];
  return (
    <div
      aria-hidden
      className={`relative ${ASPECT[aspect]} rounded-xl overflow-hidden border border-divider ${t.bg} flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 opacity-60" style={t.grainStyle} />
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full"
        style={t.glowStyle}
      />
      <span
        className={`relative z-10 sl-icon ${icon} text-5xl sm:text-6xl ${t.fg}`}
      />
    </div>
  );
}
