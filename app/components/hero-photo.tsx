"use client";

import Image from "next/image";

type HeroPhotoProps = {
  src: string;
  alt: string;
};

export function HeroPhoto({ src, alt }: HeroPhotoProps) {
  return (
    <div className="group relative h-[250px] w-[250px] max-w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/50 shadow-[0_24px_80px_rgba(2,6,23,0.45)]">
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.28),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.38))]" />
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="250px"
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
        style={{ transform: "scale(1.02)" }}
      />
    </div>
  );
}
