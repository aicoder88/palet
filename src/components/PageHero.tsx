import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  image: { src: string; alt: string };
  icon?: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  icon,
  children,
}: Props) {
  return (
    <>
      <div className="bg-canvas pt-36 pb-20 sm:pt-40 sm:pb-24 relative overflow-hidden">
        <div className="container-narrow text-center">
          {icon && (
            <span
              className={`${icon} text-[44px] text-ochre-deep inline-block mb-6`}
              aria-hidden
            />
          )}
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 font-serif font-medium text-ink display-h1 text-balance">
            {title}
          </h1>
          <p className="lede mt-6 max-w-[60ch] mx-auto">{lede}</p>
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>

      <div className="container-site">
        <div className="relative aspect-[16/5] rounded-[28px] overflow-hidden border border-divider">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        </div>
      </div>
    </>
  );
}
