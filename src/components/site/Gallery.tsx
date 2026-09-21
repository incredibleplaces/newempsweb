import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Maximize2 } from "lucide-react";

const GALLERY_ITEMS = [
  {
    src: "/images/site/crane-lift.webp",
    caption: "33kV Power Transformer Rigging & Placement",
    tag: "HEAVY RIGGING",
  },
  {
    src: "/images/site/relay-test-set.jpg",
    caption: "Secondary Injection Relay Calibration & Testing",
    tag: "DIAGNOSTICS",
  },
  {
    src: "/images/site/team-helmets.webp",
    caption: "Engineering & Safety Crew On-Site Briefing",
    tag: "SAFETY FIRST",
  },
  {
    src: "/images/site/team-panelroom.webp",
    caption: "415V Main LT Panel Suite Pre-Commissioning",
    tag: "COMMISSIONING",
  },
];

export const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative bg-[#0F141C] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF5500]">
              // 04 — On the Ground
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-[#F4F6F8] sm:text-5xl">
              Field Execution & Quality
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#9AA3B2]">
            Our in-house engineers, certified riggers and testing technicians executing in
            strict accordance with safety protocols.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              onClick={() => setSelected(item)}
              data-testid={`gallery-item-${i}`}
              className="group relative h-80 cursor-pointer overflow-hidden border border-zinc-800 bg-[#0A0D12]"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Tag Pill */}
              <div className="absolute top-4 left-4">
                <span className="border border-zinc-700/80 bg-[#0A0D12]/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-[#FF5500] backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>

              {/* Caption & Expand */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-lg font-bold uppercase leading-tight text-[#F4F6F8]">
                  {item.caption}
                </p>
                <div className="mt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#9AA3B2] group-hover:text-[#FF5500]">
                  <Maximize2 className="h-3 w-3" />
                  <span>Click to expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            data-testid="gallery-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setSelected(null)}
              data-testid="gallery-lightbox-close"
              aria-label="Close image modal"
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center border border-zinc-700 bg-zinc-900 text-[#F4F6F8] hover:border-[#FF5500] hover:text-[#FF5500]"
            >
              <X className="h-6 w-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden border border-zinc-800 bg-[#0A0D12]"
            >
              <img
                src={selected.src}
                alt={selected.caption}
                className="max-h-[75vh] w-full object-contain"
              />
              <div className="border-t border-zinc-800 p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF5500]">
                  {selected.tag}
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase text-[#F4F6F8]">
                  {selected.caption}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
