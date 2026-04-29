"use client";
import { motion } from "framer-motion";

const process = [
  {
    num: "01",
    tag: "MOCKUP",
    title: "FREE HERO SECTION MOCKUP",
    points: [
      { label: "Discovery Call", desc: "15-minute sync on your product's core value" },
      { label: "Visual Direction", desc: "High-fidelity Figma mockup delivered in 24 hours" }
    ]
  },
  {
    num: "02",
    tag: "BUILD",
    title: "FULL DEVELOPMENT & ITERATION",
    points: [
      { label: "Production Build", desc: "If approved, the full site is coded in 48 hours" },
      { label: "Async Revisions", desc: "Two rounds of rapid visual polish" }
    ]
  },
  {
    num: "03",
    tag: "LAUNCH",
    title: "HANDOFF & DEPLOYMENT",
    points: [
      { label: "Asset Transfer", desc: "Clean Next.js repository or Framer instance" },
      { label: "Live Optimization", desc: "Fast, accessible, and conversion-ready out of the box" }
    ]
  }
];

export const HowItWorks = () => {
  return (
    <section id="process" className="py-24 lg:py-40 w-full bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-border/50 pb-8 md:pb-12">
          <h2 className="font-semibold text-[clamp(44px,7vw,110px)] leading-[0.85] tracking-tighter uppercase text-text-primary max-w-2xl">
            HOW IT WORKS<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Rows */}
        <div className="flex flex-col border-border/50 border-t">
          {process.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row py-16 lg:py-24 border-b border-border/50 last:border-b-0"
            >
              
              {/* Left Column - Number Block */}
              <div className="w-full md:w-[35%] flex items-center justify-start md:justify-center relative mb-12 md:mb-0">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-[clamp(80px,10vw,200px)] leading-[0.8] tracking-tighter text-text-primary group-hover:text-white transition-colors duration-500">
                    {step.num}
                  </span>
                  <span className="font-mono text-[14px] md:text-[18px] tracking-[0.3em] text-text-secondary mt-6 md:mt-10 uppercase">
                    {step.tag}
                  </span>
                </div>
                {/* Vertical Accent Line */}
                <div className="absolute left-[160px] md:left-auto md:right-[20%] top-1/2 -translate-y-1/2 w-[2px] h-[80px] md:h-[120px] bg-accent/40 group-hover:bg-accent transition-colors duration-500" />
              </div>

              {/* Right Column - Content */}
              <div className="w-full md:w-[65%] flex flex-col justify-center">
                <h3 className="font-semibold text-[clamp(28px,3.5vw,56px)] leading-[1] tracking-tighter text-text-primary mb-10 md:mb-16 uppercase">
                  {step.title}
                </h3>
                <ul className="flex flex-col gap-8 md:gap-10">
                  {step.points.map((pt, j) => (
                    <li key={j} className="flex flex-col group/item">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-[8px] h-[8px] rounded-full bg-border group-hover/item:bg-accent transition-colors duration-300" />
                        <span className="font-semibold text-[18px] md:text-[24px] text-text-primary tracking-tight">
                          {pt.label}
                        </span>
                      </div>
                      <span className="text-[15px] md:text-[18px] text-text-secondary pl-[24px] leading-relaxed max-w-xl">
                        • {pt.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
