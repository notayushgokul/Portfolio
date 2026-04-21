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
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black text-text-primary selection:bg-white selection:text-black flex flex-col justify-between px-6 md:px-10 lg:px-12 pt-32 md:pt-40 pb-6 md:pb-10">

      {/* Middle Content Area */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between gap-16 md:gap-20 flex-1">
        
        {/* Left Column: Service List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3 self-center"
        >
          {["BESPOKE WEBSITES", "DIGITAL EXPERIENCES", "WEB APPLICATIONS", "VISUAL IDENTITY"].map((service) => (
            <div key={service} className="flex items-center gap-3">
              <span className="w-[10px] h-[10px] bg-white/50 inline-block flex-shrink-0" />
              <span className="text-[12px] md:text-[13px] font-bold tracking-[0.08em] uppercase text-text-primary">
                {service}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Right Column: Decorative Element + Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 max-w-md self-center"
        >
          {/* Decorative Symbol Row */}
          <div className="flex items-center gap-2">
            <span className="text-[32px] md:text-[40px] text-[#c8d84c] leading-none">*</span>
            <span className="text-[28px] md:text-[36px] text-text-secondary/40 font-light leading-none">(</span>
            <span className="w-[36px] h-[28px] md:w-[44px] md:h-[34px] border border-text-secondary/30 bg-text-secondary/10 inline-block" />
            <span className="text-[28px] md:text-[36px] text-text-secondary/40 font-light leading-none">)</span>
          </div>

          {/* Mission Statement */}
          <p className="text-[12px] md:text-[13px] font-mono uppercase tracking-[0.05em] leading-[1.8] text-text-primary/80">
            I design and build high-performance websites for{" "}
            <span className="text-text-primary font-bold">ambitious founders</span>, bespoke brands,{" "}
            <span className="text-text-secondary/50">and</span> digital products.
          </p>
        </motion.div>
      </div>

      {/* Bottom Section: Massive Typography + Clock */}
      <div className="relative z-20 w-full">
        {/* AYUSH Typography - bleeds off bottom */}
        <div className="relative overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-black text-[25vw] md:text-[22vw] leading-[0.82] tracking-[-0.04em] uppercase text-text-primary select-none translate-y-[15%]"
          >
            AYUSH
          </motion.h1>
        </div>

        {/* Bottom Row: GLOBAL + Clock */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-0 left-0 flex flex-col gap-0 z-30"
        >
          <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] uppercase text-text-primary">
            GLOBAL
          </span>
          <span className="text-[11px] md:text-[12px] font-mono tracking-[0.05em] text-accent">
            {time}
          </span>
        </motion.div>
      </div>
    </section>
  );
};
