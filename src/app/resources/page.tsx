import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resources — Meiris Intelligent Power Conversion",
  description: "A single section containing all downloadable collaterals — brochures, operating manuals, technical specifications, and any other documents.",
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

const cards = Array(6).fill({
  tag1: "CASE STUDY",
  tag2: "MEIRIS CHARGE PLUS",
  title: "Depot Deployment Case Study — Commercial Fleet Electrification",
  details: "PDF  |  3.8 MB\nv1.2 - Uploaded 16 Jun 2026",
});

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      

      <main className="mx-auto max-w-[1200px] px-8 pt-24 pb-32">
        {/* Hero Text */}
        <div className="max-w-4xl mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-black mb-5">Resources</h1>
          <p className="text-[15px] md:text-[17px] text-black/70 leading-relaxed font-medium max-w-3xl">
            A single section containing all downloadable collaterals — brochures, operating manuals, technical specifications, and any other documents MEIRIS makes available to visitors. Each collateral is presented as a card.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-8 border-b border-black/10 mb-16 px-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button className="pb-4 text-[11px] font-semibold text-[#00E573] border-b-2 border-[#00E573] mb-[-1px]">
            All
          </button>
          <button className="pb-4 text-[11px] font-medium text-black/50 hover:text-black/80 transition-colors mb-[-1px]">
            Brochures
          </button>
          <button className="pb-4 text-[11px] font-medium text-black/50 hover:text-black/80 transition-colors mb-[-1px]">
            Specifications
          </button>
          <button className="pb-4 text-[11px] font-medium text-black/50 hover:text-black/80 transition-colors mb-[-1px]">
            Manuals
          </button>
          <button className="pb-4 text-[11px] font-medium text-black/50 hover:text-black/80 transition-colors mb-[-1px]">
            Case Studies
          </button>
          <button className="pb-4 text-[11px] font-medium text-black/50 hover:text-black/80 transition-colors mb-[-1px]">
            Corporate
          </button>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col border border-black/10 shadow-sm hover:shadow-lg transition-shadow bg-[#fcfcfc] overflow-hidden">
              {/* Image Area */}
              <div className="aspect-[4/3] w-full bg-[#131b22] relative flex flex-col items-center justify-center">
                {/* Glowing Car Graphic Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00E573]/10 opacity-50" />
                <div className="relative w-48 h-24 border-2 border-[#00E573]/40 rounded-t-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,229,115,0.2)]">
                  <div className="text-[#00E573]/60 text-xs font-mono font-bold tracking-widest">EV SCHEMATIC</div>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="bg-[#0a0a0a] text-white p-7 flex flex-col flex-grow">
                {/* Top Row: Tags */}
                <div className="flex gap-1.5 mb-5">
                  <span className="bg-white/20 text-[7.5px] font-bold tracking-widest px-2 py-1 uppercase rounded-sm">{card.tag1}</span>
                  <span className="bg-white text-black text-[7.5px] font-bold tracking-widest px-2 py-1 uppercase rounded-sm">{card.tag2}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-[13px] font-bold leading-relaxed mb-6">{card.title}</h3>
                
                {/* Subtitles (PDF Info) */}
                <div className="mt-auto flex flex-col gap-1 mb-8">
                  {card.details.split('\n').map((line: string, idx: number) => (
                    <p key={idx} className="text-[9.5px] text-white/50 font-medium">{line}</p>
                  ))}
                </div>
                
                {/* Button */}
                <button className="w-full bg-white text-black py-3 text-[10px] font-bold tracking-widest uppercase flex justify-center items-center hover:bg-white/90 transition-colors rounded-sm">
                  ACCESS DOCUMENT
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
}
