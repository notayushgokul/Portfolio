"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "0.0.1",
    title: "HappyFeet",
    tag: "PDF REPORT",
    desc: "A detailed product teardown and UX audit focusing on improving user retention, conversion funnels, and interactive interfaces for the HappyFeet mobile application.",
    link: "/pdfs/HappyFeet.pdf"
  },
  {
    id: "0.0.2",
    title: "Webfront Outreach & AI Gen",
    tag: "SYSTEM DESIGN",
    desc: "Building a scalable AI-driven cold outreach and automated lead generation pipeline that dynamically finds, qualifies, and drafts personalized copy for prospective clients.",
    link: "/pdfs/Webfront_Outreach_AI_Lead_Gen.pdf"
  },
  {
    id: "0.0.3",
    title: "BluSmart Failure Teardown",
    tag: "PRODUCT ANALYSIS",
    desc: "A deep dive teardown of BluSmart's operational model, analyzing system failures, reliability issues, and design bottlenecks with suggested UX and structural solutions.",
    link: "/pdfs/BluSmart_Failure_Teardown.pdf"
  },
  {
    id: "0.0.4",
    title: "Other Artifacts",
    tag: "RESOURCE HUB",
    desc: "A compiled collection of research notes, product teardowns, design sketches, and various other technical and design artifacts.",
    link: "/pdfs/Other_Artifacts.pdf"
  }
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-bg w-full">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex justify-between items-start md:items-end border-b border-border/50 pb-8 md:pb-12">
          <h2 className="font-semibold text-[clamp(44px,7vw,110px)] leading-[0.85] tracking-tighter uppercase text-text-primary max-w-2xl">
            PROJECTS<span className="text-accent">.</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col border-y border-border/50">
        {projects.map((proj, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => window.open(proj.link, '_blank')}
            className="group relative border-b border-border/30 last:border-b-0 cursor-pointer overflow-hidden py-10 lg:py-16 px-6 lg:px-12 transition-colors duration-500 hover:bg-[#080808]"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between w-full relative z-10">
              
              <h3 
                className={`font-semibold text-[clamp(40px,6vw,100px)] leading-[0.85] tracking-tighter transition-colors duration-500 uppercase ${
                  hoveredIndex === i 
                    ? 'text-text-primary' 
                    : (hoveredIndex !== null ? 'text-[#1a1a1a]' : 'text-[#333]')
                }`}
              >
                {proj.title}
              </h3>

              <div className={`flex items-center gap-4 md:gap-12 transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-40'}`}>
                <span className="font-mono text-[10px] md:text-[12px] text-text-secondary tracking-[0.1em]">({proj.id})</span>
                <span className={`text-[20px] md:text-[28px] transform transition-transform duration-500 ${hoveredIndex === i ? 'translate-x-4 md:translate-x-8 text-text-primary' : 'text-[#333]'}`}>→</span>
              </div>
            </div>

            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-7xl mx-auto pt-8 pb-2 relative z-10 flex flex-col md:flex-row gap-6 md:gap-16 justify-between items-start md:items-end mt-4 md:mt-8"
                >
                  <p className="text-[16px] md:text-[20px] text-text-secondary max-w-xl leading-[1.6]">
                    {proj.desc}
                  </p>
                  <div className="flex gap-4 items-center">
                    <span className="font-mono text-[10px] md:text-[11px] text-accent uppercase tracking-[0.1em] border border-border px-4 py-2 rounded-full whitespace-nowrap">
                      {proj.tag}
                    </span>
                    <span className="font-mono text-[10px] md:text-[11px] text-white uppercase tracking-[0.1em] bg-accent/10 border border-accent/30 px-4 py-2 rounded-full whitespace-nowrap hover:bg-accent hover:text-black transition-colors">
                      VIEW PDF ↗
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Ambient Background Light on Hover */}
            <div 
              className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,241,91,0.02)_0%,transparent_50%)] transition-opacity duration-700 pointer-events-none z-0 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
