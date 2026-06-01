"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-start transition-all duration-300 ${
          scrolled ? "px-8 md:px-12 lg:px-16 py-4 bg-bg/80 backdrop-blur-md border-b border-border/40" : "px-8 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 bg-transparent"
        }`}
      >
        {/* Logo Mark */}
        <Link href="/" aria-label="Home" onClick={() => setMenuOpen(false)}>
          <div className="bg-white text-black font-black text-xl w-10 h-10 flex items-center justify-center leading-none tracking-tighter uppercase hover:scale-105 transition-transform">
            A
          </div>
        </Link>

        {/* Links spanning toward the right */}
        <div className={`hidden md:flex justify-end gap-12 lg:gap-16 w-full text-[12px] font-bold tracking-[0.12em] uppercase mt-3 transition-colors ${scrolled ? "text-white" : "text-white/90"}`}>
          <Link href="/#projects" className="hover:text-[#D4FF00] transition-colors">PROJECTS</Link>
          <Link href="/#contact" className="hover:text-[#D4FF00] transition-colors">LET&apos;S TALK →</Link>
        </div>
        
        {/* Mobile Menu Trigger */}
        <div 
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-[11.5px] font-bold tracking-[0.15em] uppercase mt-3 ${scrolled ? "text-text-primary" : "text-text-primary/90"} cursor-pointer hover:text-accent transition-colors z-50`}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </div>
      </motion.nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-bg/95 backdrop-blur-lg z-40 flex flex-col justify-center px-8 sm:px-12"
          >
            <div className="flex flex-col gap-8 text-left">
              <span className="font-mono text-[10px] text-text-secondary tracking-[0.2em] uppercase mb-4">(navigation)</span>
              
              <Link 
                href="/#projects" 
                onClick={() => setMenuOpen(false)}
                className="text-text-primary hover:text-accent text-5xl font-sans font-bold tracking-tight uppercase"
              >
                PROJECTS
              </Link>
              
              <Link 
                href="/#contact" 
                onClick={() => setMenuOpen(false)}
                className="text-text-primary hover:text-accent text-5xl font-sans font-bold tracking-tight uppercase"
              >
                LET&apos;S TALK →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
