"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Sharada Opticals",
    subtitle: "View Case",
  },
  {
    id: "02",
    title: "CRM Outreach + Lead Generator",
    subtitle: "View Case",
  },
  {
    id: "03",
    title: "Noir Grillz",
    subtitle: "View Case",
  }
];

export const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section id="work" className="relative w-full bg-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex justify-between items-start md:items-end border-b border-border/50 pb-8 md:pb-12">
          <h2 className="font-semibold text-[clamp(44px,7vw,110px)] leading-[0.85] tracking-tighter uppercase text-text-primary max-w-2xl">
            SELECTED WORK<span className="text-accent">.</span>
          </h2>
        </div>
      </div>
      <div className="relative w-full h-[80vh] min-h-[600px] lg:min-h-[800px] overflow-hidden flex items-center justify-center border-y border-border/30">

      {/* Massive Background Ghost Number */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[5%] md:top-[10%] left-[-5%] md:left-[10%] text-[50vw] md:text-[35vw] font-bold text-white/[0.02] tracking-tighter leading-none"
          >
            {projects[currentIndex].id}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-[1440px] w-full h-full relative px-6 md:px-24 mx-auto flex items-center">
        
        {/* Main Image Slider Node */}
        <div className="relative w-full md:w-[55%] h-[45%] md:h-[60%] z-10 mx-auto md:mr-0 md:ml-auto md:translate-x-[-15%] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ x: -100, opacity: 0, filter: "blur(5px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -80) paginate(1);
                else if (offset.x > 80) paginate(-1);
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing w-full h-full group"
            >
              <div className="w-full h-full relative overflow-hidden bg-surface shadow-2xl">
                {/* 
                  Drop your real next/image here!
                  <Image src={projects[currentIndex].img} fill className="object-cover" alt="project" /> 
                */}
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                  <span className="font-mono text-border text-sm">Image Proxy: {projects[currentIndex].title}</span>
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Peek of Next Image (Creates illusion of a track flowing to the right) */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-[15%] md:-right-[10%] w-[35%] md:w-[25%] h-[35%] md:h-[45%] z-0 opacity-20 overflow-hidden pointer-events-none">
             <div className="w-full h-full bg-surface border border-white/5" />
        </div>

        {/* Floating Huge Typography (Overlapping the left side of image) */}
        <div className="absolute left-6 md:left-24 top-[40%] md:top-1/2 -translate-y-1/2 z-30 pointer-events-none w-full md:w-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <h2 className="text-[clamp(44px,8vw,120px)] font-bold text-text-primary leading-[1] tracking-tighter max-w-[80vw] md:max-w-[700px] drop-shadow-2xl mix-blend-difference pointer-events-auto uppercase whitespace-pre-line">
                {/* Splitting the title creates that stacked aesthetic from the screenshot */}
                <span className="block">{projects[currentIndex].title.split(" ")[0]}</span>
                <span className="block">{projects[currentIndex].title.split(" ").slice(1).join(" ")}</span>
              </h2>
              <button 
                className="mt-8 md:mt-12 self-start font-mono text-[11px] md:text-[13px] text-text-secondary uppercase tracking-[0.2em] border-b border-border hover:text-accent hover:border-accent transition-colors duration-300 pointer-events-auto pb-1"
              >
                {projects[currentIndex].subtitle}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dash Indicators (Bottom Left) */}
        <div className="absolute bottom-8 md:bottom-16 left-6 md:left-24 z-30 flex gap-3 md:gap-5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="py-4 hover:opacity-100 transition-opacity"
            >
              <div 
                className={`w-10 md:w-16 h-[2px] transition-all duration-500 ease-[0.16,1,0.3,1] ${
                  currentIndex === i 
                    ? 'bg-accent scale-y-[1.5]' 
                    : 'bg-border hover:bg-border/80'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Ghost Navigation Arrows (Bottom Right) */}
        <div className="absolute bottom-6 md:bottom-12 right-6 md:right-24 z-40 flex gap-3 md:gap-4 pointer-events-auto">
          <button 
            onClick={() => paginate(-1)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border/30 flex items-center justify-center text-text-primary/40 hover:text-text-primary hover:border-text-primary/50 hover:bg-surface/40 backdrop-blur-sm transition-all duration-300 group"
            aria-label="Previous Project"
          >
            <span className="text-[16px] transform transition-transform duration-300 group-hover:-translate-x-1">←</span>
          </button>
          <button 
            onClick={() => paginate(1)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border/30 flex items-center justify-center text-text-primary/40 hover:text-text-primary hover:border-text-primary/50 hover:bg-surface/40 backdrop-blur-sm transition-all duration-300 group"
            aria-label="Next Project"
          >
            <span className="text-[16px] transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
      </div>
    </section>
  );
};
