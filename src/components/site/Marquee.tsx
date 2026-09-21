import React from "react";

const ITEMS = [
  "LT & HT Panels",
  "Substation Erection",
  "33kV / 11kV Lines",
  "DG Sets 10–2000 kVA",
  "Capacitor Banks & APFC",
  "Industrial Electrification",
  "Energy Audits",
  "Transformer Overhauling",
];

export const Marquee: React.FC = () => {
  return (
    <div
      data-testid="marquee-bar"
      className="relative overflow-hidden border-y border-zinc-800 bg-[#111620] py-4"
    >
      <div className="flex w-max animate-marquee items-center gap-8 will-change-transform">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-xl font-bold uppercase tracking-wider text-[#F4F6F8]/90 sm:text-2xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5500]" />
          </div>
        ))}
      </div>
    </div>
  );
};
