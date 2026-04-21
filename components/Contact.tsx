"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-start md:items-end mb-12 lg:mb-20 border-b border-border/50 pb-8 md:pb-12">
          <h2 className="font-semibold text-[clamp(44px,7vw,110px)] leading-[0.85] tracking-tighter uppercase text-text-primary max-w-2xl">
            LET'S TALK<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-32 w-full">
        {/* Left Col - Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/4"
        >
          <span className="font-mono text-[11px] text-text-primary uppercase tracking-[0.15em]">
            (GET STARTED)
          </span>
        </motion.div>

        {/* Right Col - Form */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-3/4 max-w-2xl flex flex-col"
        >
          <h2 className="font-semibold text-[clamp(28px,3vw,44px)] leading-[1.15] tracking-tight mb-20">
            <span className="text-text-secondary">We are eager to build a cohesive digital world for your ideas. </span>
            <span className="text-text-primary">Drop your details below and watch your vision takes shape.</span>
          </h2>

          {status === "success" ? (
            <div className="flex flex-col items-start pt-8 border-t border-[#333]">
              <div className="w-12 h-12 rounded-full bg-accent text-bg flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[24px] mb-2">Done.</h3>
              <p className="text-text-secondary text-[18px]">
                Check your inbox — I&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              <div className="flex flex-col gap-3 border-b border-[#333] pb-4 group hover:border-[#666] transition-colors focus-within:border-accent">
                <label htmlFor="name" className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.1em]">Your name</label>
                <input required type="text" id="name" name="name" className="bg-transparent border-none px-0 py-1 text-[20px] md:text-[24px] text-text-primary placeholder-text-secondary/30 focus:outline-none focus:ring-0 w-full" placeholder="Full name" />
              </div>
              
              <div className="flex flex-col gap-3 border-b border-[#333] pb-4 group hover:border-[#666] transition-colors focus-within:border-accent">
                <label htmlFor="email" className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.1em]">Your email</label>
                <input required type="email" id="email" name="email" className="bg-transparent border-none px-0 py-1 text-[20px] md:text-[24px] text-text-primary placeholder-text-secondary/30 focus:outline-none focus:ring-0 w-full" placeholder="Email address" />
              </div>

              <div className="flex flex-col gap-3 border-b border-[#333] pb-4 group hover:border-[#666] transition-colors focus-within:border-accent">
                <label htmlFor="company" className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.1em]">Your company name</label>
                <input required type="text" id="company" name="company" className="bg-transparent border-none px-0 py-1 text-[20px] md:text-[24px] text-text-primary placeholder-text-secondary/30 focus:outline-none focus:ring-0 w-full" placeholder="Company name" />
              </div>

              {/* Keep the service hidden input mapped to "Not sure yet" since the visual doesn't have a select, we simplify the visual UI */}
              <input type="hidden" name="service" value="Not sure yet" />

              {status === "error" && (
                <p className="text-red-400 text-[14px]">
                  Something broke. Please email me directly: <a href="mailto:hello@ayushgokul.com" className="underline">hello@ayushgokul.com</a>
                </p>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="mt-8 flex items-center gap-4 text-text-primary hover:text-accent transition-colors duration-300 disabled:opacity-50 self-start group"
              >
                <span className="font-semibold text-[20px]">{loading ? "Sending..." : "Submit request"}</span>
                {!loading && <span className="transform transition-transform group-hover:translate-x-2">→</span>}
              </button>
            </form>
          )}
        </motion.div>
        </div>
      </div>
    </section>
  );
};
