import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="bg-bg min-h-screen selection:bg-accent selection:text-bg">
      <Navbar />
      
      {/* Content Section */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 md:mb-32">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tighter leading-[0.8] uppercase">
              Terms of <br /><span className="text-text-secondary/40">Service</span>
            </h1>
            <div className="flex flex-col gap-2 text-[13px] font-mono uppercase text-text-secondary tracking-widest">
              <span>Last Updated</span>
              <span className="text-text-primary">April 2026</span>
            </div>
          </div>

          {/* Grid Layout for Clauses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            
            {/* Clause 1: Services */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">01. Service Scope</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">Professional Services</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                Ayush Gokul provides professional UI/UX design, web development, and digital product creation. 
                All projects are delivered based on the specific brief agreed upon during the intake phase. 
                Any work outside the original scope will be treated as an add-on and quoted separately.
              </p>
            </div>

            {/* Clause 2: Payment */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">02. Financials</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">Payment & Refunds</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                A non-refundable <span className="text-text-primary font-medium">50% advance payment</span> is required to secure your project in my calendar. 
                The remaining 50% is due upon completion and before final handover. 
                Due to the custom nature of design work, payments are <span className="text-text-primary font-medium">non-refundable</span> once work has commenced.
              </p>
            </div>

            {/* Clause 3: Revisions */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">03. Refinement</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">Revisions & Redesigns</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                Standard project quotes include <span className="text-text-primary font-medium">2 rounds of revisions</span> based on the initial direction. 
                Any conceptual changes or significant redesigns requested after these rounds will incur an additional fee. 
                Full redesigns are treated as new projects.
              </p>
            </div>

            {/* Clause 4: Support */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">04. Continuity</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">Post-Handover Support</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                Every project includes <span className="text-text-primary font-medium">2 weeks of complimentary support</span> after handover to fix bugs or technical errors. 
                Ongoing maintenance, hosting management, or content updates are available as a monthly <span className="text-text-primary font-medium">Add-on Retainer</span>.
              </p>
            </div>

            {/* Clause 5: Liability */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">05. Legal</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">Governing Law</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                These terms are governed by the laws of <span className="text-text-primary font-medium">Bengaluru, Karnataka, India</span>. 
                Any disputes arising from my services will be subject to the exclusive jurisdiction of the courts in Bengaluru.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
