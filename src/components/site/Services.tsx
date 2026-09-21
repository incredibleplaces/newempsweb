import React from "react";
import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import { waLink } from "./contactInfo";

const SERVICES = [
  {
    id: "panels",
    num: "01",
    title: "LT & HT Panel Manufacturing",
    spec: "Up to 33kV · IEC 61439 compliant · Form 4b",
    desc: "Custom PCC, MCC, APFC, AMF and busduct systems built to withstand harsh industrial environments. Powder-coated, CNC-punched CRCA sheet steel enclosures with type-tested busbar arrangements.",
    bullets: [
      "Power Control Centers (PCC) up to 6300A",
      "Motor Control Centers (MCC) — Fixed & Drawout",
      "Automatic Power Factor Correction (APFC) panels",
      "AMF & DG synchronizing panels",
      "33kV / 11kV HT VCB switchboards",
    ],
  },
  {
    id: "substations",
    num: "02",
    title: "Turnkey Substation Erection",
    spec: "33kV / 11kV / 0.433kV · Indoor & Outdoor",
    desc: "End-to-end design, civil plinth coordination, structural fabrication, equipment positioning, cable trenching, termination, earthing grid layout and statutory CEA/CEIG inspection clearances.",
    bullets: [
      "Distribution & Power Transformer installation",
      "Outdoor yard gantry, isolators, DO fuses & LA",
      "Indoor GIS / AIS switchgear integration",
      "Chemical & pipe earthing grids to IS:3043",
      "Liaisoning for CEIG approval & energisation",
    ],
  },
  {
    id: "dg",
    num: "03",
    title: "DG Sets & Backup Power Systems",
    spec: "10 kVA to 2000 kVA · Prime & Standby",
    desc: "Supply, installation, acoustic enclosure design, exhaust chimney erection, fuel piping and automatic changeover infrastructure for mission-critical commercial and industrial facilities.",
    bullets: [
      "Authorized supply of leading engine makes",
      "CPCB-IV+ compliant acoustic enclosures",
      "Auto-mains failure (AMF) automation",
      "Exhaust ducting up to terrace levels",
      "Annual maintenance contracts (AMC) & round-the-clock support",
    ],
  },
  {
    id: "maintenance",
    num: "04",
    title: "Testing, Commissioning & Retrofit",
    spec: "Diagnostic relay testing · Transformer oil filtration",
    desc: "Specialist testing crews equipped with calibrated secondary injection test sets, earth testers, megohmmeters and oil breakdown voltage (BDV) testing kits to keep your plant online.",
    bullets: [
      "Numerical & electromechanical relay testing",
      "Transformer filtration, BDV test & dehydrating breather service",
      "ACB & VCB retrofitting, servicing & contact alignment",
      "Thermography scans & electrical safety audits",
      "24/7 breakdown callout service across Kolkata",
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-[#0F141C] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF5500]">
              // 02 — Capabilities
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-[#F4F6F8] sm:text-5xl">
              Core Engineering Services
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#9AA3B2]">
            Complete lifecycle electrical solutions from engineering design and panel
            fabrication to erection, CEIG clearance and 24/7 preventative maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              data-testid={`service-card-${s.id}`}
              className="group flex flex-col justify-between border border-zinc-800 bg-[#0A0D12] p-8 transition-colors duration-300 hover:border-[#FF5500]/60"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-2xl font-bold text-[#FF5500]">
                    {s.num}
                  </span>
                  <span className="rounded border border-zinc-800 bg-zinc-900/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#9AA3B2]">
                    {s.spec}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-[#F4F6F8] sm:text-3xl">
                  {s.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#9AA3B2]">{s.desc}</p>

                <ul className="mt-6 space-y-2.5 border-t border-zinc-800/80 pt-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-xs text-[#9AA3B2]">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF5500]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-zinc-800/80 pt-6">
                <a
                  href={waLink(`Hello EMPS, I need an inquiry regarding: ${s.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`service-inquire-${s.id}`}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#FF5500] transition-colors hover:text-[#F4F6F8]"
                >
                  <span>Request Engineering Specs</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
