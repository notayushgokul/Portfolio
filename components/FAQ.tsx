"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What kind of websites do you build?",
    answer: "I build high-performance landing pages, portfolio sites, and web applications — primarily for founders, local businesses, and bespoke brands who need a strong digital presence that actually converts.",
  },
  {
    question: "How long does a project take?",
    answer: "Most landing pages are delivered within 48–72 hours. More complex web applications or multi-page sites typically take 1–2 weeks depending on scope. I'll give you a clear timeline before we start.",
  },
  {
    question: "What's included in the free mockup?",
    answer: "You get a full-fidelity design mockup of your homepage — no strings attached. If you love it, we move forward. If not, you keep the design. Zero risk.",
  },
  {
    question: "What tech stack do you use?",
    answer: "I primarily work with Next.js, React, TypeScript, and Tailwind CSS. Every site is custom-coded — no templates, no WordPress, no page builders. This means faster load times, better SEO, and a site that's truly yours.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes. Every project includes two rounds of revisions. I work closely with you throughout the process so we usually nail it in the first round.",
  },
  {
    question: "Can you help with branding and design?",
    answer: "Absolutely. I can help define your visual identity — color palettes, typography, layout direction — as part of the design process. If you already have brand guidelines, I'll work within them.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="w-full bg-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-start md:items-end mb-16 md:mb-20 border-b border-border/50 pb-8 md:pb-12">
          <h2 className="font-semibold text-[clamp(44px,7vw,110px)] leading-[0.85] tracking-tighter uppercase text-text-primary max-w-2xl">
            FAQ<span className="text-accent">.</span>
          </h2>
          <span className="hidden md:block font-mono text-[11px] text-text-secondary uppercase tracking-[0.15em] mt-2">
            ({faqs.length}) Questions
          </span>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-b border-border/40"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-7 md:py-8 group text-left cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <div className="flex items-baseline gap-4 md:gap-6 pr-8">
                  <span className="font-mono text-[11px] text-text-secondary/50 tracking-wider tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-[18px] md:text-[22px] lg:text-[24px] tracking-tight text-text-primary group-hover:text-accent transition-colors duration-300">
                    {faq.question}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-border/50 flex items-center justify-center transition-all duration-300 group-hover:border-accent/50 ${openIndex === i ? "bg-accent border-accent rotate-45" : ""}`}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`transition-colors duration-300 ${openIndex === i ? "text-bg" : "text-text-primary/60 group-hover:text-accent"}`}
                  >
                    <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pb-10 pl-[calc(11px+1rem)] md:pl-[calc(11px+1.5rem)] pr-12 md:pr-24">
                      <p className="text-[15px] md:text-[17px] leading-[1.7] text-text-secondary max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
