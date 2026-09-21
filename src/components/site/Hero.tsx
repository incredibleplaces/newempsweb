import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { waLink } from "./contactInfo";

const LINES = ["ELECTRO", "MECHANICAL", "POWER SOLUTIONS"];
const HERO_IMG = "/images/site/crane-wide.webp";
const MINI_STATS = [
  { v: "18+", l: "Years" },
  { v: "450+", l: "Projects" },
  { v: "120 MW+", l: "Commissioned" },
  { v: "24/7", l: "Response" },
];

export const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="EMPS crane lifting a crated transformer inside a 33kV substation"
          className="h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D12]/60 via-[#0A0D12]/55 to-[#0A0D12]" />
        <div className="blueprint-grid absolute inset-0" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-16 pt-32 sm:px-8"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          data-testid="hero-status-badge"
          className="mb-8 flex w-fit items-center gap-3 border border-zinc-700/70 bg-[#0A0D12]/70 px-4 py-2 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_10px_#FF5500]" />
            <span className="animate-pulse-ring absolute h-2 w-2 rounded-full bg-[#FF5500]" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#9AA3B2] sm:text-xs">
            HQ: Kolkata, West Bengal · ISO 9001:2015 Certified
          </span>
        </motion.div>

        {/* Hero Title */}
        <h1 className="font-display font-black uppercase leading-[0.88] tracking-tight">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.95,
                  delay: 0.25 + i * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`block text-[15vw] sm:text-[11vw] lg:text-[8.5rem] ${
                  i === 2 ? "text-[#FF5500]" : "text-[#F4F6F8]"
                }`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-[#9AA3B2] sm:text-lg"
        >
          Turnkey electrical contracting, custom LT/HT panels, transformers and DG sets —
          engineered, installed and maintained across Eastern India since 2007.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#services"
            data-testid="hero-explore-btn"
            className="group flex items-center gap-3 bg-[#FF5500] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#0A0D12] transition-colors duration-300 hover:bg-[#F4F6F8]"
          >
            <span>Explore Solutions</span>
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href={waLink("Hello EMPS, I would like to request a technical quote.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-quote-btn"
            className="group flex items-center gap-3 border border-zinc-600 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#F4F6F8] transition-colors duration-300 hover:border-[#FF5500] hover:text-[#FF5500]"
          >
            <span>Request Technical Quote</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Mini Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          data-testid="hero-mini-stats"
          className="mt-16 grid max-w-2xl grid-cols-2 gap-px border border-zinc-800/80 bg-zinc-800/80 sm:grid-cols-4"
        >
          {MINI_STATS.map((s) => (
            <div key={s.l} className="bg-[#0A0D12]/80 px-5 py-4 backdrop-blur-sm">
              <div className="font-display text-2xl font-bold text-[#F4F6F8]">{s.v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5B6577]">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
