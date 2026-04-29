import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-bg min-h-screen selection:bg-accent selection:text-bg">
      <Navbar />
      
      {/* Content Section */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 md:mb-32">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tighter leading-[0.8] uppercase">
              Privacy <br /><span className="text-text-secondary/40">Policy</span>
            </h1>
            <div className="flex flex-col gap-2 text-[13px] font-mono uppercase text-text-secondary tracking-widest">
              <span>Last Updated</span>
              <span className="text-text-primary">April 2026</span>
            </div>
          </div>

          {/* Grid Layout for Clauses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            
            {/* Clause 1: Data Collection */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">01. Collection</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">Information I Collect</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                I collect minimal data intended solely to improve your experience and facilitate project inquiries. 
                This includes names and email addresses provided via my <span className="text-text-primary font-medium">Contact Form</span>, as well as technical data like browser type and session length.
              </p>
            </div>

            {/* Clause 2: Tracking */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">02. Analytics</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">Cookies & Tracking</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                This website utilizes tracking and analytics tools (such as <span className="text-text-primary font-medium">Google Analytics</span> or <span className="text-text-primary font-medium">PostHog</span>) to understand visitor behavior. 
                These tools use &quot;cookies&quot; to gather information about your interactions with the site, which helps me optimize the design and content performance.
              </p>
            </div>

            {/* Clause 3: Usage */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">03. Utility</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">How Data is Used</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                Collected information is used for internal analysis and responding to your specific requests. 
                I do not sell, trade, or otherwise transfer your personally identifiable information to outside parties 
                unless required for project fulfillment (e.g., inviting you to a shared project board).
              </p>
            </div>

            {/* Clause 4: Security */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">04. Protection</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">Data Security</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                I implement industry-standard security measures to maintain the safety of your information. 
                However, please note that no method of transmission over the internet or electronic storage is 100% secure. 
              </p>
            </div>

            {/* Clause 5: Contact */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-accent">05. Support</span>
              </div>
              <h2 className="text-2xl font-sans font-bold tracking-tight uppercase">Privacy Inquiries</h2>
              <p className="text-text-secondary leading-relaxed font-sans">
                If you have any questions regarding this Privacy Policy or wish to request the deletion of your data, please contact me directly at <a href="mailto:ayushgokul2207@gmail.com" className="text-text-primary hover:text-accent transition-colors underline underline-offset-4">ayushgokul2207@gmail.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
