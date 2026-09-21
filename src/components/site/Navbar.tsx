import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Menu, X, MessageCircle } from "lucide-react";
import { waLink } from "./contactInfo";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-[#0A0D12]/90 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a
          href="#top"
          data-testid="nav-logo"
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center bg-[#FF5500] transition-transform duration-300 group-hover:scale-105">
            <Zap className="h-5 w-5 text-[#0A0D12]" strokeWidth={2.5} fill="currentColor" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-black uppercase tracking-wider text-[#F4F6F8]">
                EMPS
              </span>
              <span className="hidden rounded bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#9AA3B2] sm:inline-block">
                EST. 2007
              </span>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-[#9AA3B2]">
              ELECTRO MECHANICAL POWER SOLUTIONS
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-testid={`nav-link-${link.name.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-[0.18em] text-[#9AA3B2] transition-colors duration-200 hover:text-[#FF5500]"
            >
              {link.name}
            </a>
          ))}
          <a
            href={waLink("Hello EMPS, I would like to discuss an electrical engineering project.")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-whatsapp-cta"
            className="flex items-center gap-2 border border-[#FF5500] bg-[#FF5500] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0A0D12] transition-all duration-300 hover:bg-transparent hover:text-[#FF5500]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp Us</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle mobile menu"
          className="flex h-10 w-10 items-center justify-center border border-zinc-800 bg-[#111620] text-[#F4F6F8] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-zinc-800 bg-[#0A0D12] px-5 py-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                  className="border-b border-zinc-800/60 pb-3 font-mono text-sm uppercase tracking-[0.18em] text-[#9AA3B2] transition-colors hover:text-[#FF5500]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={waLink("Hello EMPS, I would like to discuss an electrical engineering project.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                data-testid="mobile-whatsapp-cta"
                className="mt-2 flex items-center justify-center gap-2 bg-[#FF5500] py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0A0D12]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
