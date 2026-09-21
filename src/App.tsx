import React, { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { Marquee } from "./components/site/Marquee";
import { Manifesto } from "./components/site/Manifesto";
import { Services } from "./components/site/Services";
import { Projects } from "./components/site/Projects";
import { Gallery } from "./components/site/Gallery";
import { Contact } from "./components/site/Contact";
import { WhatsAppWidget } from "./components/site/WhatsAppWidget";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      anchors: true,
    });
    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0D12] text-[#F4F6F8]">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <WhatsAppWidget />
    </div>
  );
}

