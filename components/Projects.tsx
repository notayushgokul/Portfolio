"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SubItem {
  name: string;
  tag: string;
  link: string;
}

interface Project {
  id: string;
  title: string;
  tag: string;
  desc: string;
  link?: string;
  subItems?: SubItem[];
}

const projects: Project[] = [
  {
    id: "0.0.1",
    title: "HappyFeet",
    tag: "CASE STUDY",
    desc: "Built from a real problem on college campuses, HappyFeet is a peer to peer campus delivery app.",
    link: "/pdfs/HappyFeet.pdf"
  },
  {
    id: "0.0.2",
    title: "WebFront Outreach and AI Lead Gen",
    tag: "CASE STUDY",
    desc: "Everyone's selling websites to local businesses. I built the tool to make the sales part not suck — auto-scrapes Google Maps, pulls contact info, tracks calls, and tells you who needs a site.",
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
    title: "OEM Complaint Portal",
    tag: "CASE STUDY",
    desc: "Built to replace a WhatsApp-based complaint workflow. Covers product decisions, role architecture, and real-time ticketing.",
    link: "https://gaudy-mimosa-452.notion.site/OEM-Complaint-Management-Portal-372768b79b8e8044a030f1b462ca823e?pvs=143"
  },
  {
    id: "0.0.5",
    title: "Other Artifacts",
    tag: "RESOURCE HUB",
    desc: "A compiled collection of UX and product audits, research notes, design files, and other digital resources.",
    subItems: [
      {
        name: "Fyn Wellness Audit",
        tag: "PRODUCT AUDIT",
        link: "/pdfs/Fyn_Wellness_Audit.pdf"
      },
      {
        name: "FlatX Product Audit",
        tag: "PRODUCT AUDIT",
        link: "/pdfs/FlatX_Product_Audit.pdf"
      }
    ]
  }
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
        {projects.map((proj, i) => {
          const isOpen = hoveredIndex === i || expandedIndex === i;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className={`group relative border-b border-border/30 last:border-b-0 cursor-pointer overflow-hidden py-10 lg:py-16 px-6 lg:px-12 transition-colors duration-500 ${isOpen ? 'bg-[#080808]' : 'hover:bg-[#080808]'}`}
            >
              <div className="max-w-7xl mx-auto flex items-center justify-between w-full relative z-10">
                
                <h3 
                  className={`font-semibold text-[clamp(28px,5vw,90px)] leading-[0.85] tracking-tighter transition-colors duration-500 uppercase ${
                    isOpen 
                      ? 'text-text-primary' 
                      : (isAnyHovered ? 'text-[#1a1a1a]' : 'text-[#333]')
                  }`}
                >
                  {proj.title}
                </h3>

                <div className={`flex items-center gap-4 md:gap-12 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-40'}`}>
                  <span className="font-mono text-[10px] md:text-[12px] text-text-secondary tracking-[0.1em]">({proj.id})</span>
                  <span className={`text-[20px] md:text-[28px] transform transition-transform duration-500 ${isOpen ? 'translate-x-4 md:translate-x-8 text-text-primary rotate-90 md:rotate-0' : 'text-[#333]'}`}>→</span>
                </div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-7xl mx-auto pt-8 pb-2 relative z-10 flex flex-col md:flex-row gap-6 md:gap-16 justify-between items-start md:items-end mt-4 md:mt-8"
                    onClick={(e) => {
                      // Prevent row click when clicking on the expanded area
                      e.stopPropagation();
                    }}
                  >
                    <p className="text-[16px] md:text-[20px] text-text-secondary max-w-xl leading-[1.6]">
                      {proj.desc}
                    </p>
                    
                    {proj.subItems ? (
                      <div className="flex flex-col gap-3 w-full md:w-auto items-start md:items-end">
                        <span className="font-mono text-[9px] text-text-secondary tracking-[0.1em] uppercase">Artifacts:</span>
                        <div className="flex flex-col sm:flex-row gap-3">
                          {proj.subItems.map((sub, idx) => (
                            <a
                              key={idx}
                              href={sub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 bg-white/5 border border-border/40 hover:border-accent hover:bg-accent/10 px-4 py-2.5 rounded-full transition-all duration-300 group/sub whitespace-nowrap"
                            >
                              <span className="font-sans text-[14px] font-semibold text-text-primary group-hover/sub:text-accent transition-colors">
                                {sub.name}
                              </span>
                              <span className="font-mono text-[9px] text-accent tracking-[0.1em] border border-accent/20 px-2 py-0.5 rounded-full uppercase">
                                {sub.tag}
                              </span>
                              <span className="text-[12px] text-text-secondary group-hover/sub:text-accent group-hover/sub:translate-x-0.5 transition-all">
                                ↗
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-4 items-center">
                        <span className="font-mono text-[10px] md:text-[11px] text-accent uppercase tracking-[0.1em] border border-border px-4 py-2 rounded-full whitespace-nowrap">
                          {proj.tag}
                        </span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (proj.link) window.open(proj.link, '_blank');
                          }}
                          className="font-mono text-[10px] md:text-[11px] text-white uppercase tracking-[0.1em] bg-accent/10 border border-accent/30 px-4 py-2 rounded-full whitespace-nowrap hover:bg-accent hover:text-black transition-colors"
                        >
                          {proj.link?.startsWith('http') ? "READ CASE STUDY ↗" : "VIEW PDF ↗"}
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Ambient Background Light on Hover */}
              <div 
                className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,241,91,0.02)_0%,transparent_50%)] transition-opacity duration-700 pointer-events-none z-0 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
