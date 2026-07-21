import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getLocalizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return getLocalizedMetadata({
    locale,
    path: '/resources',
    title: "Resources — Meiris Intelligent Power Conversion",
    description: "Brochures, datasheets, and technical specifications for Meiris products and solutions.",
  });
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
      <main className="mx-auto max-w-[1400px] px-6 md:px-12 pt-[120px] pb-32 overflow-hidden">
        {/* Hero Text */}
        <ScrollReveal className="max-w-4xl mb-16 md:mb-20">
          <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight text-black mb-5">Resources</h1>
          <p className="text-[16px] md:text-[18px] text-black/70 leading-relaxed font-medium max-w-3xl">
            A single section containing all downloadable collaterals — brochures, operating manuals, technical specifications, and any other documents MEIRIS makes available to visitors. Each collateral is presented as a card.
          </p>
        </ScrollReveal>

        {/* Tab Filters */}
        <ScrollReveal delay={100} className="flex flex-wrap items-center gap-4 md:gap-10 border-b border-black/10 mb-16 px-2">
          <button className="pb-4 text-[13px] md:text-[14px] font-bold text-[#00E573] border-b-2 border-[#00E573] mb-[-1px] uppercase tracking-widest">
            All
          </button>
          <button className="pb-4 text-[13px] md:text-[14px] font-bold text-black/50 hover:text-black/80 transition-colors mb-[-1px] uppercase tracking-widest">
            Brochures
          </button>
          <button className="pb-4 text-[13px] md:text-[14px] font-bold text-black/50 hover:text-black/80 transition-colors mb-[-1px] uppercase tracking-widest">
            Specifications
          </button>
          <button className="pb-4 text-[13px] md:text-[14px] font-bold text-black/50 hover:text-black/80 transition-colors mb-[-1px] uppercase tracking-widest">
            Manuals
          </button>
          <button className="pb-4 text-[13px] md:text-[14px] font-bold text-black/50 hover:text-black/80 transition-colors mb-[-1px] uppercase tracking-widest">
            Case Studies
          </button>
          <button className="pb-4 text-[13px] md:text-[14px] font-bold text-black/50 hover:text-black/80 transition-colors mb-[-1px] uppercase tracking-widest">
            Corporate
          </button>
        </ScrollReveal>

        {/* Card Grid */}
        <ScrollReveal staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {cards.map((card, i) => (
            <div key={i} className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out flex flex-col border border-black/10 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-[#fcfcfc] overflow-hidden">
              {/* Image Area */}
              <div className="aspect-[4/3] w-full bg-[#131b22] relative flex flex-col items-center justify-center">
                {/* Glowing Car Graphic Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00E573]/10 opacity-50" />
                <div className="relative w-48 h-24 border-2 border-[#00E573]/40 rounded-t-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,229,115,0.2)]">
                  <div className="text-[#00E573]/60 text-xs font-mono font-bold tracking-widest">EV SCHEMATIC</div>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="bg-[#0a0a0a] text-white p-6 md:p-10 flex flex-col flex-grow">
                {/* Top Row: Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/20 text-[9px] md:text-[10px] font-bold tracking-widest px-2 md:px-3 py-1.5 uppercase rounded-sm">{card.tag1}</span>
                  <span className="bg-white text-black text-[9px] md:text-[10px] font-bold tracking-widest px-2 md:px-3 py-1.5 uppercase rounded-sm">{card.tag2}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-[18px] md:text-[22px] font-bold leading-relaxed mb-8">{card.title}</h3>
                
                {/* Subtitles (PDF Info) */}
                <div className="mt-auto flex flex-col gap-1.5 mb-10">
                  {card.details.split('\n').map((line: string, idx: number) => (
                    <p key={idx} className="text-[12px] md:text-[13px] text-white/50 font-medium">{line}</p>
                  ))}
                </div>
                
                {/* Button */}
                <button className="w-full bg-white text-black py-4 text-[11px] md:text-[12px] font-bold tracking-widest uppercase flex justify-center items-center gap-2 hover:bg-white/90 transition-colors rounded-sm">
                  ACCESS DOCUMENT
                </button>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </main>
    </div>
  );
}
