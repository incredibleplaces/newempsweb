import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { waLink } from "./contactInfo";

const CATEGORIES = ["ALL", "SUBSTATIONS", "PANELS", "DG SETS", "COMMERCIAL"];

const PROJECTS = [
  {
    title: "33/11kV 10 MVA Substation Erection",
    client: "Heavy Engineering & Foundry Unit",
    location: "Durgapur Industrial Belt, WB",
    category: "SUBSTATIONS",
    scope:
      "Complete 33kV switchyard, 10 MVA power transformer, outdoor isolators, 11kV VCB switchboard and CEIG energisation approval in 90 days.",
    metric: "10 MVA",
    year: "2023",
    img: "/images/site/substation-work.jpg",
  },
  {
    title: "5000A Main PCC & Intelligent MCC Suite",
    client: "Automated FMCG Packaging Facility",
    location: "Howrah, WB",
    category: "PANELS",
    scope:
      "Form 4b type-tested 5000A busbar system, air circuit breakers with microprocessor trip units, integrated energy management system and harmonic filters.",
    metric: "5000A / 65kA",
    year: "2024",
    img: "/images/site/panel-room.jpg",
  },
  {
    title: "2 × 1000 kVA Synchronized DG Power Plant",
    client: "IT Park & Tier-3 Data Center Annex",
    location: "Rajarhat, New Town, Kolkata",
    category: "DG SETS",
    scope:
      "Two 1000 kVA CPCB-compliant silent DG sets with PLC-based auto-synchronizing AMF panel, fuel day tanks and terrace exhaust stacks.",
    metric: "2000 kVA",
    year: "2023",
    img: "/images/site/site-equipment.jpg",
  },
  {
    title: "Comprehensive 11kV Substation & Distribution",
    client: "Multi-Storey Commercial & Retail Complex",
    location: "Salt Lake Sector V, Kolkata",
    category: "COMMERCIAL",
    scope:
      "11kV compact substation with dry-type resin cast transformers, rising mains busducts, floor distribution boards and intelligent metering.",
    metric: "2.5 MVA",
    year: "2022",
    img: "/images/site/team-panelroom.jpg",
  },
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative bg-[#0A0D12] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF5500]">
              // 03 — Commissioned Works
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-[#F4F6F8] sm:text-5xl">
              Engineered & Delivered
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#9AA3B2]">
            Representative contracts highlighting our capability across industrial,
            infrastructure and commercial installations in Eastern India.
          </p>
        </div>

        {/* Category Filters */}
        <div
          data-testid="project-filters"
          className="mt-12 flex flex-wrap gap-2 border-b border-zinc-800 pb-6"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-testid={`project-filter-${cat.toLowerCase().replace(" ", "-")}`}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#FF5500] text-[#0A0D12]"
                  : "border border-zinc-800 bg-[#111620] text-[#9AA3B2] hover:border-zinc-700 hover:text-[#F4F6F8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                data-testid={`project-card-${p.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className="group flex flex-col border border-zinc-800 bg-[#111620] overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-zinc-900 sm:h-72">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111620] via-transparent to-black/30" />
                  <div className="absolute top-4 right-4 bg-[#FF5500] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0A0D12]">
                    {p.metric}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9AA3B2]">
                      <span className="flex items-center gap-1.5 text-[#FF5500]">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{p.location}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{p.year}</span>
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-[#F4F6F8]">
                      {p.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#9AA3B2]">
                      Client: {p.client}
                    </p>

                    <p className="mt-4 text-xs leading-relaxed text-[#9AA3B2]">
                      {p.scope}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-zinc-800/80 pt-5">
                    <a
                      href={waLink(`Inquiry regarding project reference: ${p.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#FF5500] transition-colors hover:text-[#F4F6F8]"
                    >
                      <span>Discuss Similar Requirements</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
