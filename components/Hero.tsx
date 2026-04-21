"use client";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center selection:bg-white selection:text-black">
      {/* Blue Glow Frame */}
      <div className="absolute inset-0 z-50 pointer-events-none border border-cyan-500/20 shadow-[inset_0_0_100px_rgba(6,182,212,0.05)]" />

      {/* Background/Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Typography */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start"
          >
            <h1 className="font-black text-[22vw] leading-[0.8] tracking-[-0.05em] uppercase text-text-primary select-none">
              AYUSH
            </h1>
            <span className="text-[3vw] font-bold tracking-normal mt-[3vw] ml-2 text-text-primary/50">™</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom indicator or subtle detail */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary/50">Scroll to explore</span>
      </motion.div>
    </section>
  );
};
