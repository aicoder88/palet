import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  image: { src: string; alt: string };
  width?: "wide" | "narrow";
  titleSize?: "lg" | "xl";
  headerPadding?: "lg" | "md";
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  width = "wide",
  titleSize = "xl",
  headerPadding = "lg",
  children,
}: Props) {
  const container = width === "wide" ? "max-w-7xl" : "max-w-5xl";
  const headerPb = headerPadding === "lg" ? "pb-20" : "pb-16";
  const stripMt = headerPadding === "lg" ? "-mt-10" : "-mt-8";
  const h1 =
    titleSize === "xl"
      ? "text-5xl sm:text-6xl"
      : "text-4xl sm:text-5xl lg:text-6xl";

  return (
    <>
      <div
        className={`bg-gradient-to-br from-[#1C3A2A] via-[#1C3A2A] to-[#132820] dark:bg-[#0A1510] pt-32 ${headerPb} relative overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(200,168,122,0.3) 0%, transparent 100%)",
          }}
        />
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#C8A87A]/12 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[380px] h-[380px] rounded-full bg-[#2A5040]/40 blur-3xl pointer-events-none" />
        <div className={`relative ${container} mx-auto px-4 sm:px-6 lg:px-8`}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8A87A] mb-4">
            {eyebrow}
          </span>
          <h1
            className={`${h1} font-bold text-white mb-5 tracking-tight text-balance`}
          >
            {title}
          </h1>
          <p className="text-white/75 text-lg sm:text-xl max-w-2xl leading-relaxed">
            {lede}
          </p>
          {children}
        </div>
      </div>

      <div
        className={`${container} mx-auto px-4 sm:px-6 lg:px-8 ${stripMt} relative z-10`}
      >
        <div className="relative aspect-[16/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2318]/30 via-transparent to-transparent" />
        </div>
      </div>
    </>
  );
}
