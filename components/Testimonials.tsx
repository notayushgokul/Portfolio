"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Ayush completely transformed how we present our product. Our previous site was costing us the trust of high-ticket leads. Within a week of launching the new design, our conversion rate doubled.",
    name: "Placeholder Founder",
    title: "CEO at Stealth SaaS",
  },
  {
    quote: "We were stuck in 'launch soon' mode for months because our site looked like a cheap template. Ayush stepped in and delivered a world-class landing page in 48 hours. The speed and quality are unmatched.",
    name: "Placeholder Founder",
    title: "Founder at Another SaaS",
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start md:items-end mb-12 border-b border-border/50 pb-8 md:pb-12">
          <h2 className="font-semibold text-[clamp(44px,7vw,110px)] leading-[0.85] tracking-tighter uppercase text-text-primary max-w-2xl">
            WHAT THEY SAY<span className="text-accent">.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group flex flex-col justify-between p-10 md:p-14 bg-surface/30 border border-border/50 rounded-[2rem] hover:bg-surface/60 transition-colors duration-500"
          >
            <p className="font-semibold text-[clamp(24px,2.5vw,36px)] leading-[1.25] tracking-tight text-text-primary mb-24 md:mb-32">
              "{t.quote}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface overflow-hidden border border-border/50 flex-shrink-0 flex items-center justify-center">
                {/* Placeholder Image element. Drop your avatar here */}
                <span className="font-mono text-accent text-xs">PFP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[16px] md:text-[18px] text-text-primary">{t.name}</span>
                <span className="text-[14px] md:text-[16px] text-text-secondary">{t.title}</span>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};
