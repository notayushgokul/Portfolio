"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata',
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-bg text-text-primary selection:bg-accent selection:text-bg font-sans">
      
      {/* ── Subtle Top Border Line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      {/* ── Grid/Layout Container ── */}
      <div className="relative h-full w-full px-8 md:px-12 lg:px-16 py-24 flex flex-col justify-center">
        
        {/* ── Middle Layer: Content ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full z-20 gap-16 md:gap-0 mt-[-5vh]">
          
          {/* Left: Service List */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1.5"
          >
            {["BESPOKE WEBSITES", "DIGITAL EXPERIENCES", "WEB APPLICATIONS", "VISUAL IDENTITY"].map((service) => (
              <div key={service} className="flex items-center gap-2.5">
                <div className="w-[7px] h-[7px] bg-accent flex-shrink-0" />
                <span className="text-[11px] md:text-[12px] font-bold tracking-[0.08em] uppercase text-text-primary/90 font-mono">
                  {service}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Right: Decorative + Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end md:items-start gap-12"
          >
            {/* Decorative Symbol Row */}
            <div className="flex items-start gap-3">
              <span className="text-[64px] md:text-[72px] text-accent leading-[0.5] font-medium mt-3">*</span>
              <div className="flex items-center gap-1">
                <span className="text-[72px] md:text-[84px] text-border font-extralight leading-none mt-[-10px] inline-block transform scale-y-[1.4] scale-x-[0.6]">(</span>
                <div className="w-[48px] h-[48px] border border-border z-10" />
                <span className="text-[72px] md:text-[84px] text-border font-extralight leading-none mt-[-10px] inline-block transform scale-y-[1.4] scale-x-[0.6]">)</span>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-[12px] md:text-[14px] font-mono uppercase tracking-[0.1em] leading-[2] text-text-secondary text-right md:text-left max-w-[420px]">
              I design and build high-performance
              <br />
              websites for <span className="text-text-primary">ambitious founders, bespoke</span>
              <br />
              <span className="text-text-primary">brands, and digital products.</span>
            </p>
          </motion.div>
        </div>

        {/* ── Bottom Right: AYUSH ── */}
        <div className="absolute bottom-[-3vh] right-0 z-10 pointer-events-none pr-8 md:pr-12 lg:pr-16 overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-black text-[20vw] leading-[0.82] tracking-[-0.04em] uppercase text-text-primary select-none whitespace-nowrap text-right font-sans"
          >
            AYUSH
          </motion.h1>
        </div>

        {/* ── Bottom Left: GLOBAL + Clock ── */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 md:bottom-10 left-8 md:left-12 lg:left-16 z-30 flex flex-col gap-0.5"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-text-primary/90 font-mono">
            GLOBAL
          </span>
          <span className="text-[11px] font-mono tracking-[0.02em] text-text-secondary">
            {time}
          </span>
        </motion.div>
      </div>

      {/* ── Bottom Border Line (matches section dividers) ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
    </section>
  );
};
