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

const jobs = [
  {
    category: "ENGINEERING",
    pillColor: "bg-[#e0fbf7] text-[#0a8270]",
    type: "Full-time",
    title: "Senior Battery Systems Engineer",
    location: "Berlin, Germany",
    description: "",
  },
  {
    category: "SOFTWARE",
    pillColor: "bg-[#00E573] text-black",
    type: "Full-time",
    title: "Lead Cloud Architect (Smart Grid Solutions)",
    location: "Remote / London",
    description: "Lead the design of high-availability cloud infrastructures for global EV charging networks.",
  },
  {
    category: "DESIGN",
    pillColor: "bg-[#fff1e6] text-[#e8701a]",
    type: "Full-time",
    title: "Industrial Designer",
    location: "London, UK",
    description: "",
  },
  {
    category: "PRODUCT",
    pillColor: "bg-[#e6f4ff] text-[#0070e0]",
    type: "Full-time",
    title: "Growth Product Manager",
    location: "Berlin, Germany",
    description: "",
  },
  {
    category: "DATA",
    pillColor: "bg-[#e8f7f1] text-[#12a16d]",
    type: "Full-time",
    title: "Energy Optimization Analyst",
    location: "London, UK",
    description: "",
  },
];

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

      {/* Jobs List Section */}
      <section className="bg-white py-24 border-t border-black/5">
        <div className="mx-auto max-w-[1400px] px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-[2rem] font-bold text-black tracking-tight">Explore Opportunities</h2>
              <p className="text-[13px] text-black/60 mt-2">Filter by department or location to find your next challenge.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 bg-[#f9f9f9] border border-black/10 px-5 py-2.5 rounded-full text-[11px] font-semibold text-black/80 hover:bg-[#f0f0f0] transition-colors">
                All Departments
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <button className="flex items-center gap-2 bg-[#f9f9f9] border border-black/10 px-5 py-2.5 rounded-full text-[11px] font-semibold text-black/80 hover:bg-[#f0f0f0] transition-colors">
                All Locations
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </button>
            </div>
          </div>

          {/* Job Grid - Masonry style layout representation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {jobs.map((job, i) => (
              <div 
                key={i} 
                className={`bg-[#f0f1f3] rounded-2xl p-8 flex flex-col min-h-[220px] ${job.category === "SOFTWARE" ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${job.pillColor}`}>
                    {job.category}
                  </span>
                  <span className="text-[11px] text-black/50 font-medium">
                    {job.type}
                  </span>
                </div>
                
                <h3 className="text-[1.35rem] font-bold text-black mb-3 leading-tight max-w-[90%]">{job.title}</h3>
                
                {job.description && (
                  <p className="text-[12px] text-black/60 leading-relaxed mb-4 max-w-lg">
                    {job.description}
                  </p>
                )}
                
                <div className="mt-auto pt-4 flex flex-col gap-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-black/60 font-medium">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {job.location}
                  </div>
                  <button className="text-[#00E573] text-[11px] font-bold tracking-wide uppercase flex items-center gap-1.5 self-start hover:gap-2.5 transition-all">
                    APPLY
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                </div>
              </div>
            ))}
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
