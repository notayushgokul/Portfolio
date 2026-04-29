"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-start transition-all duration-300 ${
        scrolled ? "px-8 md:px-12 lg:px-16 py-4 bg-bg/80 backdrop-blur-md border-b border-border/40" : "px-8 md:px-12 lg:px-16 pt-8 md:pt-10 lg:pt-12 bg-transparent"
      }`}
    >
      {/* Logo Mark */}
      <Link href="/" aria-label="Home">
        <div className="bg-white text-black font-black text-xl w-10 h-10 flex items-center justify-center leading-none tracking-tighter uppercase hover:scale-105 transition-transform">
          A
        </div>
      </Link>

      {/* Links spanning toward the right */}
      <div className={`hidden md:flex justify-end gap-12 lg:gap-16 w-full text-[12px] font-bold tracking-[0.12em] uppercase mt-3 transition-colors ${scrolled ? "text-white" : "text-white/90"}`}>
        <Link href="/#work" className="hover:text-[#D4FF00] transition-colors">WORK</Link>
        <Link href="/#services" className="hover:text-[#D4FF00] transition-colors">SERVICES</Link>
        <Link href="/#process" className="hover:text-[#D4FF00] transition-colors">PROCESS</Link>
        <Link href="/#contact" className="hover:text-[#D4FF00] transition-colors">BOOK A CALL →</Link>
      </div>
      
      {/* Mobile Menu Trigger */}
      <div className={`md:hidden text-[11.5px] font-bold tracking-[0.1em] uppercase mt-1 ${scrolled ? "text-text-primary" : "text-text-primary/90"} cursor-pointer hover:text-accent transition-colors`}>
        MENU
      </div>
    </motion.nav>
  );
};
