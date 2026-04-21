import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-bg text-text-primary pt-16 md:pt-24 pb-8 border-t border-border mt-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-24 md:mb-32">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-24 font-sans text-[15px]">
            <span className="font-bold tracking-tight">AYUSH ™</span>
            <span className="text-text-secondary">Bengaluru, KA, India</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-text-secondary text-[15px]">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <Link href="/#work" className="hover:text-text-primary transition-colors">Work</Link>
            <Link href="/#services" className="hover:text-text-primary transition-colors">Services</Link>
            <Link href="/#contact" className="hover:text-text-primary transition-colors">Contact</Link>
          </div>
        </div>

        {/* Big Work with us Text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-24 px-2">
          <h2 className="text-4xl sm:text-5xl md:text-[4vw] lg:text-[60px] font-sans font-medium tracking-tight mb-4 md:mb-0">
            Work with me
          </h2>
          <a href="mailto:hello@ayushgokul.com" className="text-4xl sm:text-5xl md:text-[4vw] lg:text-[60px] font-sans font-medium tracking-tight hover:text-accent transition-colors">
            hello@ayushgokul.com
          </a>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-border/50 mb-16 md:mb-24"></div>

        {/* Links section */}
        <div className="flex gap-16 md:gap-32 mb-16 md:mb-24 px-2">
          <div className="flex flex-col gap-4 text-[15px]">
            <h3 className="font-sans text-text-primary mb-2">Sitemap</h3>
            <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors">Home</Link>
            <Link href="/#work" className="text-text-secondary hover:text-text-primary transition-colors">Work</Link>
            <Link href="/#services" className="text-text-secondary hover:text-text-primary transition-colors">Services</Link>
            <Link href="/#process" className="text-text-secondary hover:text-text-primary transition-colors">Process</Link>
            <Link href="/#contact" className="text-text-secondary hover:text-text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-4 text-[15px]">
            <h3 className="font-sans text-text-primary mb-2">Socials</h3>
            <Link href="https://instagram.com/ayushgokul" className="text-text-secondary hover:text-text-primary transition-colors">Instagram</Link>
            <Link href="https://twitter.com/ayushgokul" className="text-text-secondary hover:text-text-primary transition-colors">X</Link>
            <Link href="https://linkedin.com/in/ayushgokul" className="text-text-secondary hover:text-text-primary transition-colors">Linkedin</Link>
          </div>
        </div>

        {/* Bottom Giant Typography & Copyright */}
        <div className="flex flex-col w-full relative">
          <div className="w-full flex pointer-events-none select-none">
             <h1 className="w-full text-[22vw] lg:text-[230px] xl:text-[280px] leading-[0.75] font-sans font-bold tracking-tighter text-left -ml-[0.5vw]">
               AYUSH<span className="text-[6vw] lg:text-[60px] xl:text-[70px] align-super tracking-normal font-medium leading-[0] ml-2">™</span>
             </h1>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full mt-10 md:mt-16 text-[14px] text-text-secondary font-sans border-none relative z-10">
            <div className="flex gap-8 w-full md:w-auto mb-4 md:mb-0 justify-between md:justify-start">
              <Link href="/terms" className="hover:text-text-primary transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</Link>
            </div>
            <div className="w-full md:w-auto text-left md:text-right">
              © 2026 Ayush Gokul. All rights reserved
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
