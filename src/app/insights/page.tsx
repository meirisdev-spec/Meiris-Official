import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Insights — Meiris Intelligent Power Conversion",
  description: "A unified page with clear segmentation for Blogs, Press Releases and Announcements.",
};

const cards = Array(6).fill({
  tag1: "PRESS",
  tag2: "HERO CHARGE PLUS",
  date: "01 JULY 2026",
  title: "Depot Deployment Case Study — Commercial Fleet Electrification",
  details: "PDF | 3.8 MB\nv1.2 - Uploaded 16 Jun 2026",
});

export default function InsightsPage() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      <main className="mx-auto max-w-[1400px] px-6 md:px-12 pt-[120px] pb-32 overflow-hidden">
        {/* Hero Text */}
        <ScrollReveal className="max-w-4xl mb-16 md:mb-20">
          <h1 className="text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-tight text-black mb-5">Insights Page</h1>
          <p className="text-[16px] md:text-[18px] text-black/80 leading-relaxed font-medium">
            A unified page with clear segmentation for Blogs, Press Releases and Announcements. All three content types are accessible from this single page via a persistent tab or filter row.
          </p>
        </ScrollReveal>

        {/* Tab Filters */}
        <ScrollReveal delay={100} className="flex flex-wrap items-center gap-4 md:gap-10 border-b border-black/10 mb-16 px-2">
          <button className="pb-4 text-[13px] md:text-[14px] font-bold text-[#00E573] border-b-2 border-[#00E573] mb-[-1px] uppercase tracking-widest">
            All
          </button>
          <button className="pb-4 text-[13px] md:text-[14px] font-bold text-black/50 hover:text-black/80 transition-colors mb-[-1px] uppercase tracking-widest">
            Press Releases
          </button>
          <button className="pb-4 text-[13px] md:text-[14px] font-bold text-black/50 hover:text-black/80 transition-colors mb-[-1px] uppercase tracking-widest">
            Announcement
          </button>
        </ScrollReveal>

        {/* Card Grid */}
        <ScrollReveal staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {cards.map((card, i) => (
            <div key={i} className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out flex flex-col border border-black/10 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-[#fcfcfc] overflow-hidden">
              {/* Image Area */}
              <div className="aspect-square w-full bg-white relative border-b border-black/10">
                {/* Empty placeholder to match screenshot exactly */}
                <div className="absolute inset-0 bg-black/5 opacity-50" />
              </div>
              
              {/* Content Area */}
              <div className="bg-[#0a0a0a] text-white p-6 md:p-10 flex flex-col flex-grow">
                {/* Top Row: Tags + Date */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 text-[9px] md:text-[10px] font-bold tracking-widest px-2 md:px-3 py-1.5 uppercase rounded-sm">{card.tag1}</span>
                    <span className="bg-white text-black text-[9px] md:text-[10px] font-bold tracking-widest px-2 md:px-3 py-1.5 uppercase rounded-sm">{card.tag2}</span>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-semibold tracking-widest uppercase text-white/50">{card.date}</span>
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
                  READ MORE
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </main>
    </div>
  );
}
