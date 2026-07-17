import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ctaEngineers from "@/assets/cta-engineers.jpg";

export const metadata: Metadata = {
  title: "Careers — Meiris Intelligent Power Conversion",
  description: "Join a culture defined by technical precision, environmental consciousness, and the drive to disrupt the energy landscape.",
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


export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-32">
        <div className="mx-auto max-w-[1400px] px-8 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#00E573] uppercase mb-6">
              WORK WITH US
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-black">
              Powering the Future of Mobility
            </h1>
            <p className="mt-8 text-[14px] leading-relaxed text-black/60">
              At MEIRIS, we aren't just building chargers; we're architecting the backbone of sustainable transportation. Join a culture defined by technical precision, environmental consciousness, and the drive to disrupt the energy landscape.
            </p>
            <button className="mt-10 bg-[#00E573] text-white px-8 py-3.5 rounded-full text-[11px] font-bold tracking-wide shadow-lg shadow-[#00E573]/20 hover:shadow-[#00E573]/40 transition-all flex items-center gap-2 hover:-translate-y-0.5">
              VIEW OPENINGS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </button>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src={ctaEngineers} 
              alt="Engineers reviewing data" 
              className="absolute inset-0 w-full h-full object-cover" 
              placeholder="blur" 
            />
          </div>
        </div>
      </section>



      {/* CV Upload Section */}
      <section className="bg-[#2e3032] py-32 text-white">
        <div className="mx-auto max-w-[1200px] px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
              Don't see a fit?
            </h2>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#00E573]">
              Send us your CV
            </h2>
            <p className="mt-6 text-[12px] leading-relaxed text-white/70 max-w-md">
              We're always looking for visionary talent. Submit your details and our talent acquisition team will contact you when a suitable role opens up.
            </p>
            <div className="mt-12 flex items-center gap-3 text-white/90">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M2 4l10 8 10-8"></path>
              </svg>
              <span className="text-[12px] font-medium tracking-wide">careers@meiris.energy</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-10 md:p-12 shadow-2xl text-black">
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent border border-black/20 rounded-md px-4 py-3.5 text-[13px] outline-none focus:border-[#00E573] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-transparent border border-black/20 rounded-md px-4 py-3.5 text-[13px] outline-none focus:border-[#00E573] transition-colors" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Attach CV/Resume</label>
                <div className="w-full border-[1.5px] border-dashed border-black/40 rounded-xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#f9f9f9] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                  <span className="text-[13px] font-medium text-black">Drop file or click to browse</span>
                  <span className="text-[9px] text-black/40 font-medium">PDF, DOCX (Max 10MB)</span>
                </div>
              </div>

              <button type="button" className="w-full bg-[#00E573] text-white py-3.5 rounded-full text-[12px] font-bold shadow-lg shadow-[#00E573]/20 hover:shadow-[#00E573]/40 transition-all flex items-center justify-center gap-2 tracking-wide mt-2">
                SUBMIT APPLICATION
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      </section>


    </div>
  );
}
