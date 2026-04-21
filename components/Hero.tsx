"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black text-text-primary selection:bg-white selection:text-black flex flex-col justify-between p-6 md:p-8 lg:p-10">
      {/* Blue Glow Frame */}
      <div className="absolute inset-0 z-50 pointer-events-none border border-cyan-500/20 shadow-[inset_0_0_40px_rgba(6,182,212,0.1)]" />

      {/* Top Section: Nav Columns */}
      <div className="relative z-20 flex gap-20 md:gap-32 lg:gap-40 mt-20 md:mt-24">
        {/* Sitemap */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] font-bold tracking-widest uppercase text-white">Sitemap</h3>
          <div className="flex flex-col gap-2 text-[11px] font-medium tracking-wide uppercase text-white/40">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/#process" className="hover:text-white transition-colors">Process</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[11px] font-bold tracking-widest uppercase text-white">Socials</h3>
          <div className="flex flex-col gap-2 text-[11px] font-medium tracking-wide uppercase text-white/40">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linkedin</a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Massive Typography */}
      <div className="relative z-20 w-full flex flex-col items-end">
        <div className="relative inline-block overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-black text-[28vw] leading-[0.75] tracking-[-0.04em] uppercase text-text-primary select-none flex items-start"
            style={{ transform: "scaleX(1.1)", transformOrigin: "bottom right" }}
          >
            AYUSH
            <span className="text-[3vw] font-bold tracking-normal ml-2 mt-[2vw]">™</span>
          </motion.h1>
        </div>

        {/* Legal/Copyright Bottom Row */}
        <div className="w-full flex justify-between items-end text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-white/30 mt-4 md:mt-8">
          <div className="flex gap-8">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          <div>
            © 2025 Ayush Gokul. All rights reserved
          </div>
        </div>
      </div>
    </section>
  );
};
