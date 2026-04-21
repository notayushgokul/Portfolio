"use client";
import { motion } from "framer-motion";

export const SocialProof = () => {
  return (
    <section className="w-full bg-bg">
      {/* Infinite Scrolling Logo Banner */}
      <div className="w-full flex overflow-hidden border-t border-border/40 py-6 md:py-8 bg-surface/10 mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
        <div className="w-full flex overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <motion.div
            className="flex whitespace-nowrap min-w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
                <span className="font-semibold text-[20px] md:text-[28px] uppercase tracking-tight text-text-primary/50 hover:text-text-primary transition-colors cursor-default">SAAS CRM REDESIGN</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                <span className="font-semibold text-[20px] md:text-[28px] uppercase tracking-tight text-text-primary/50 hover:text-text-primary transition-colors cursor-default">ANALYTICS PLATFORM</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                <span className="font-semibold text-[20px] md:text-[28px] uppercase tracking-tight text-text-primary/50 hover:text-text-primary transition-colors cursor-default">FINTECH DASHBOARD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
