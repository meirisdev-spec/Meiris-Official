import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import solDepot from "@/assets/sol-depot.jpg";

export const metadata: Metadata = {
  title: "Solutions — Meiris Intelligent Power Conversion",
  description: "Charging infrastructure built around your fleet's schedule.",
};

const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
];

function Logo({ small = false }: { small?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 text-white">
      <svg width={small ? 20 : 28} height={small ? 20 : 28} viewBox="0 0 40 40" fill="none" aria-hidden>
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
      <span className={`${small ? "text-[10px]" : "text-xs"} font-semibold tracking-[0.25em]`}>MEIRIS</span>
    </Link>
  );
}

function Marker({ num, top, left, labelOnTop = true }: { num: number; top: string; left: string; labelOnTop?: boolean }) {
  return (
    <div 
      className="absolute flex flex-col items-center gap-2 group cursor-pointer z-10"
      style={{ top, left, transform: 'translate(-50%, -50%)' }}
    >
      {labelOnTop && (
        <div className="bg-[#e6ebf0] text-black/60 text-[7px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
          MEIRIS CONVERSION STAGE
        </div>
      )}
      <div className="w-6 h-6 bg-[#00E573] rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-[0_0_15px_rgba(0,229,115,0.3)] group-hover:scale-110 transition-transform">
        {num}
      </div>
      {!labelOnTop && (
        <div className="bg-[#e6ebf0] text-black/60 text-[7px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
          MEIRIS CONVERSION STAGE
        </div>
      )}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#00E573] selection:text-black overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-[3px] border-[#00E573] bg-black">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-8">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-wide text-white/70">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.to}
                className={`hover:text-white transition-colors ${item.label === "Solutions" ? "text-white" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact">
            <button className="bg-white px-5 py-2 text-[11px] font-bold tracking-wide text-black transition-colors hover:bg-white/90 rounded-sm">
              Get in touch
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row min-h-[85vh] bg-[#0c0c0c] w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 pl-8 md:pl-20 pr-8 md:pr-12 pt-24 pb-20 z-10 flex flex-col justify-center">
          <h1 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-10 max-w-xl">
            Charging infrastructure built around your fleet's schedule.
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#00E573] text-black px-6 py-3.5 text-[11px] font-bold tracking-wide transition-transform hover:-translate-y-0.5 rounded-sm">
              Talk to our expert
            </button>
            <button className="border border-white/20 text-white px-6 py-3.5 text-[11px] font-bold tracking-wide flex items-center gap-2 hover:bg-white/5 transition-all rounded-sm hover:-translate-y-0.5">
              See how it works 
              <span className="text-sm leading-none font-normal">→</span>
            </button>
          </div>
        </div>
        
        {/* Right Massive Gray Block */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] bg-[#e6e6e6] rounded-l-[4rem] shadow-2xl z-0">
          {/* Green FAB */}
          <div className="absolute bottom-12 right-12 w-12 h-12 bg-[#00E573] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="bg-black py-32 px-8 md:px-20 border-t border-white/10 relative">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-white mb-16 max-w-4xl leading-[1.1] tracking-tight">
            Running a fleet depot has its own set of challenges.<br />
            Tap a marker to see where things typically go wrong.
          </h2>
          
          <div className="w-full bg-white rounded-3xl relative aspect-[4/3] md:aspect-[16/9] max-h-[700px] overflow-hidden mb-10 shadow-2xl p-8">
            {/* SVG Lines Connecting Markers */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="20%" y1="35%" x2="40%" y2="50%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="20%" y1="35%" x2="30%" y2="60%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="40%" y1="50%" x2="55%" y2="25%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="40%" y1="50%" x2="70%" y2="50%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="40%" y1="50%" x2="30%" y2="60%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="55%" y1="25%" x2="70%" y2="50%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="70%" y1="50%" x2="85%" y2="35%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="70%" y1="50%" x2="90%" y2="60%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="85%" y1="35%" x2="90%" y2="60%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
            </svg>
            
            {/* Markers */}
            <Marker num={1} top="35%" left="20%" />
            <Marker num={2} top="50%" left="40%" />
            <Marker num={3} top="25%" left="55%" labelOnTop={false} />
            <Marker num={4} top="50%" left="70%" />
            <Marker num={5} top="35%" left="85%" />
            <Marker num={6} top="60%" left="90%" />
            <Marker num={7} top="60%" left="30%" labelOnTop={false} />
            
            {/* Bottom text */}
            <div className="absolute bottom-8 right-10 text-[#00E573] text-[10px] font-medium tracking-wide">
              Select a marker to explore
            </div>
          </div>
          
          {/* Dark placeholder box below map */}
          <div className="w-full h-32 md:h-40 bg-[#141414] rounded-2xl border border-white/5"></div>
        </div>
      </section>

      {/* "One partner" Section */}
      <section className="bg-[#171717] py-32 px-8 md:px-20 relative border-t border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-bold text-white mb-16 max-w-4xl leading-[1.05] tracking-tight">
            One partner for the charger, the site and everything that connects them.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Sustained performance, extreme conditions",
                desc: "SiC-based bidrectional power modules. Patented switching topology. 100% full rating operation in parallel."
              },
              {
                title: "Lower total cost of ownership",
                desc: "97-98% conversion efficiency vs. a typical 93-95% for legacy chargers means lower energy losses over the fleet's working life."
              },
              {
                title: "Quality through in-house manufacturing",
                desc: "The SiC-based power stage and other core components are designed and manufactured in-house for consistent quality and traceability."
              },
              {
                title: "Servicing backed by in-house IP",
                desc: "Turnkey EPC execution means faults are diagnosed and resolved faster, with local access to spares and expertise."
              },
              {
                title: "Built for what's next",
                desc: "Modular and upgradable, resilient to weak grids and harmonics. Interoperable with all EV types and bidirectional ready for V2X."
              },
              {
                title: "Cybersecurity built in",
                desc: "Every charger ships with a hardware-level security chip as standard."
              }
            ].map((feature, i) => (
              <div key={i} className="border border-white/20 rounded-2xl p-8 flex flex-col gap-4 hover:bg-white/5 transition-colors">
                <div className="w-3.5 h-3.5 rounded-full bg-white/90 shadow-sm"></div>
                <h3 className="text-white font-bold text-lg mt-3 pr-4 leading-tight">{feature.title}</h3>
                <p className="text-white/50 text-[11px] leading-relaxed pr-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Green Button inside section */}
        <div className="absolute bottom-12 right-12 w-12 h-12 bg-[#00E573] rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(0,229,115,0.3)] hover:scale-105 transition-transform z-10 hidden md:flex">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="bg-white py-32 overflow-hidden relative">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center">
          <h2 className="text-[clamp(2rem,3.5vw,2.5rem)] font-bold text-black mb-10 text-center tracking-tight">
            Recommended for your setup
          </h2>
          
          <div className="flex items-center gap-6 mb-20 text-[9.5px] font-bold uppercase tracking-widest">
            <button className="text-black/50 hover:text-black transition-colors px-4 py-2">Ash aggregation hub</button>
            <button className="bg-[#00E573] text-white px-6 py-2.5 rounded-full shadow-sm">Bus Fleet</button>
            <button className="text-black/50 hover:text-black transition-colors px-4 py-2">Truck Fleet</button>
          </div>
          
          {/* Horizontal Scroller */}
          <div className="w-full flex gap-8 md:gap-12 overflow-x-auto snap-x snap-mandatory px-8 md:px-[50vw] md:-mx-[50vw] pb-8 scrollbar-hide" style={{ scrollPaddingLeft: 'calc(50vw - 400px)' }}>
            
            {/* Item 1 */}
            <div className="min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] flex-shrink-0 snap-center flex flex-col gap-6">
              <div className="w-full aspect-[16/9] bg-[#d1d5db] rounded-2xl overflow-hidden relative">
                 {/* Image Placeholder */}
              </div>
              <p className="text-[11px] text-black/80 text-center max-w-[400px] mx-auto leading-relaxed">
                AC Charger, 30-60 kW, suited for daily use.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-[12px] font-bold underline decoration-2 underline-offset-4 hover:text-[#00E573] transition-colors">Explore Charger</a>
              </div>
            </div>

            {/* Item 2 */}
            <div className="min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] flex-shrink-0 snap-center flex flex-col gap-6">
              <div className="w-full aspect-[16/9] bg-gray-200 rounded-2xl overflow-hidden relative">
                <Image src={solDepot} alt="Bus Depot" className="w-full h-full object-cover" placeholder="blur" />
              </div>
              <p className="text-[11px] text-black/80 text-center max-w-[500px] mx-auto leading-relaxed">
                MEIRIS CHARGE PLUS – SiC-based DC fast/ultra-fast charger, 120-240 kW, for high-power overnight bulk charging of buses.
              </p>
              <div className="flex justify-center gap-8">
                <a href="#" className="text-[12px] font-bold underline decoration-2 underline-offset-4 hover:text-[#00E573] transition-colors">Explore Charger</a>
                <a href="#" className="text-[12px] font-bold underline decoration-2 underline-offset-4 hover:text-[#00E573] transition-colors">Explore Charger</a>
              </div>
            </div>

            {/* Item 3 */}
            <div className="min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] flex-shrink-0 snap-center flex flex-col gap-6">
              <div className="w-full aspect-[16/9] bg-[#e5e7eb] rounded-2xl overflow-hidden relative">
                 {/* Image Placeholder */}
              </div>
              <p className="text-[11px] text-black/80 text-center max-w-[450px] mx-auto leading-relaxed">
                Platform agnostic storage type, thermally regulated interiors inspired by nature.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-[12px] font-bold underline decoration-2 underline-offset-4 hover:text-[#00E573] transition-colors">Explore BESS</a>
              </div>
            </div>

          </div>
        </div>
        
        {/* Floating Green Button inside section */}
        <div className="absolute bottom-12 right-12 w-12 h-12 bg-[#00E573] rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(0,229,115,0.3)] hover:scale-105 transition-transform z-10 hidden md:flex">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </div>
      </section>

      {/* Uptime Section */}
      <section className="bg-white py-32 px-8 md:px-20 relative border-t border-black/5">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-black mb-16 text-center tracking-tight leading-tight">
            More uptime, more sessions, more revenue per charger.
          </h2>
          
          <div className="flex flex-col gap-4">
            {Array(8).fill(null).map((_, i) => (
              <div key={i} className="bg-[#f0f1f3] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 hover:bg-[#e6e8eb] transition-colors">
                <div className="w-6 h-6 rounded-full bg-[#00E573] flex-shrink-0 mt-1 md:mt-0 shadow-[0_0_15px_rgba(0,229,115,0.4)]"></div>
                <div className="flex flex-col gap-1.5 flex-grow">
                  <h3 className="text-black font-bold text-[17px]">Charging that performs when it matters most</h3>
                  <p className="text-black/60 text-[11px] leading-relaxed max-w-2xl font-medium">
                    Rated output delivered night after night without the de-rating that slows down conventional chargers under sustained load
                  </p>
                </div>
                <div className="bg-[#00E573] text-white text-[10px] font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-sm tracking-wide mt-2 md:mt-0 self-start md:self-auto">
                  Up to 98% uptime
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <footer className="bg-black text-white pt-24">
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
                    <a href="#" className="text-sm text-white/85 hover:text-white transition-colors">
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
