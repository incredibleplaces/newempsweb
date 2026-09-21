import React from "react";
import { motion } from "motion/react";

const POINTS = [
  {
    n: "01",
    t: "No Cut Corners",
    d: "Every busbar sized for fault current, every relay calibrated, every cable lug crimped with calibrated hydraulic dies.",
  },
  {
    n: "02",
    t: "Engineer on Site",
    d: "Direct access to electrical engineers with 15+ years of substation & panel experience, not a call center.",
  },
  {
    n: "03",
    t: "Eastern India Focus",
    d: "Deep local knowledge of WBSEDCL, CESC and regional utility requirements, permits and inspection workflows.",
  },
];

export const Manifesto: React.FC = () => {
  return (
    <section
      id="about"
      data-testid="manifesto-section"
      className="relative bg-[#0A0D12]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF5500]"
        >
          // 01 — Philosophy
        </motion.p>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-4xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#F4F6F8] sm:text-5xl lg:text-6xl"
        >
          We don't sell boxes.
          <span className="text-outline block">We engineer uptime.</span>
        </motion.h2>

        {/* Story & Content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-base leading-relaxed text-[#9AA3B2] lg:col-span-7 lg:text-lg"
          >
            <p>
              Electro Mechanical Power Solutions was founded in Kolkata in 2007 with a
              single premise: high-voltage and industrial power infrastructure requires
              engineering rigor, not generic contracting.
            </p>
            <p>
              From 33kV outdoor switchyards to custom compartmentalized motor control
              centers, we design, fabricate, erect and maintain the electrical backbone of
              factories, commercial towers and infrastructure projects across West Bengal,
              Odisha, Jharkhand and Bihar.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF5500]">
              Direct engineer access on every project · No middle management · No excuses.
            </p>
          </motion.div>

          {/* Key Value Points */}
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:flex lg:flex-col">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                data-testid={`manifesto-point-${p.n}`}
                className="border border-zinc-800/80 bg-[#111620] p-6"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-[#FF5500]">
                  {p.n}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-[#F4F6F8]">
                  {p.t}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#9AA3B2]">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
