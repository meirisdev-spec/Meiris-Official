import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ctaEngineers from "@/assets/cta-engineers.jpg";

export const metadata: Metadata = {
  title: "Contact Us — Meiris Intelligent Power Conversion",
  description: "Connect with our experts to discuss intelligent charging solutions designed for tomorrow's mobility.",
};

const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-white">
      <svg width={28} height={28} viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="2" fill="white" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          return (
            <line
              key={i}
              x1={20 + Math.cos(a) * 6}
              y1={20 + Math.sin(a) * 6}
              x2={20 + Math.cos(a) * 18}
              y2={20 + Math.sin(a) * 18}
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      <span className="text-xs font-semibold tracking-[0.25em]">MEIRIS</span>
    </Link>
  );
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      {/* Header (Black) */}
      <header className="sticky top-0 z-50 w-full border-b border-[#00E573] bg-black">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-8">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-wide text-white/70">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.to}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact">
            <button className="bg-white px-5 py-2 text-[11px] font-bold tracking-wide text-black transition-colors hover:bg-white/90">
              Get in touch
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-32">
        <div className="mx-auto max-w-[1200px] px-8 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div>
            <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-black pr-8">
              Whether you<br />
              are an EV<br />
              manufacturer,<br />
              fleet operator,<br />
              or business<br />
              exploring EV<br />
              infrastructure,<br />
              we'd love to<br />
              hear from you.
            </h1>
            <p className="mt-8 text-[14px] leading-relaxed text-black/60 max-w-[400px]">
              Connect with our experts to discuss intelligent charging solutions designed for tomorrow's mobility.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
            <Image 
              src={ctaEngineers} 
              alt="Engineers reviewing data" 
              className="absolute inset-0 w-full h-full object-cover" 
              placeholder="blur" 
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#f5f6f8] py-32">
        <div className="mx-auto max-w-[1200px] px-8">
          
          <div className="flex flex-col items-center relative">
            <h2 className="text-[1.75rem] font-bold text-black mb-12 self-start absolute left-0 top-0 hidden lg:block">Contact us</h2>
            <h2 className="text-[1.75rem] font-bold text-black mb-10 self-center lg:hidden">Contact us</h2>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-2xl">
              <button className="bg-[#00E573] text-white px-6 py-2.5 rounded-full text-xs font-semibold shadow-sm transition-transform hover:scale-105">
                Sales & Partnerships
              </button>
              <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-medium shadow-sm hover:shadow transition-shadow">
                Technical Support
              </button>
              <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-medium shadow-sm hover:shadow transition-shadow">
                Product Information
              </button>
              <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-medium shadow-sm hover:shadow transition-shadow">
                General Enquiries
              </button>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-[800px] p-10 md:p-14">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Company</label>
                    <input type="text" placeholder="Organization Name" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Email Address</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Inquiry Type</label>
                  <div className="relative">
                    <select className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all appearance-none text-black/70">
                      <option>Select an option</option>
                      <option>Sales & Partnerships</option>
                      <option>Technical Support</option>
                      <option>Product Information</option>
                      <option>General Enquiries</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/40">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Your Message</label>
                  <textarea rows={5} placeholder="How can we help you?" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all resize-none"></textarea>
                </div>

                <div className="flex justify-center pt-6">
                  <button type="submit" className="bg-[#00E573] text-white px-8 py-3.5 rounded-full text-[12px] font-bold shadow-lg shadow-[#00E573]/20 hover:shadow-[#00E573]/40 transition-all flex items-center gap-2 hover:-translate-y-0.5 tracking-wide">
                    SEND MESSAGE
                    <span>→</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[900px] mt-16">
              {/* Card 1: HQ */}
              <div className="bg-[#114b43] text-white rounded-3xl p-8 flex flex-col items-center text-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="text-[13px] font-bold mb-3">Global Headquarters</h3>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  130 Innovation Drive, Tech District,<br />
                  Singapore 128577
                </p>
              </div>
              
              {/* Card 2: Email */}
              <div className="bg-white text-black rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M2 4l10 8 10-8"></path>
                </svg>
                <h3 className="text-[13px] font-bold mb-3">Email Us</h3>
                <p className="text-[11px] text-black/60 leading-relaxed">
                  info@meiris.com<br />
                  support@meiris.com
                </p>
              </div>

              {/* Card 3: Phone */}
              <div className="bg-white text-black rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <h3 className="text-[13px] font-bold mb-3">Call Experts</h3>
                <p className="text-[11px] text-black/60 leading-relaxed">
                  +65-6789-0123<br />
                  Mon - Fri, 9am - 6pm SGT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="h-[2px] w-full bg-[#00E573]" />
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-8 py-16 md:grid-cols-4">
          <div>
            <Logo small />
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-white/60">
              Precision Engineering for a Sustainable Future. Global headquarters in Zurich,
              manufacturing in Munich.
            </p>
          </div>
          {[
            { title: "PLATFORM", links: ["Technology", "Architecture", "Roadmap"] },
            { title: "RESOURCES", links: ["Whitepapers", "Documentation", "Case Studies"] },
            { title: "CONNECT", links: ["LinkedIn", "Contact Support", "Investor Relations"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] text-white/60">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/85 hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
