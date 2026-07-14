import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import solDepot from "@/assets/sol-depot.jpg";
import solCharge from "@/assets/sol-charge.jpg";
import solHospitality from "@/assets/sol-hospitality.jpg";
import platformModule from "@/assets/platform-module.jpg";

export const metadata: Metadata = {
  title: "Products — Meiris Intelligent Power Conversion",
  description: "Engineered for harsh operating conditions. Built to deliver every time.",
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

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-[#111111] text-white selection:bg-[#00E573] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-[#00E573] bg-black">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-8">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-wide text-white/70">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.to}
                className={`hover:text-white transition-colors ${
                  item.label === "Products" ? "text-white" : ""
                }`}
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
      <section className="relative flex w-full min-h-[85vh] flex-col justify-center bg-black overflow-hidden pt-16 pb-24">
        {/* Background Images with Slanted Cuts */}
        <div className="absolute inset-0 z-0">
          {/* Base Layer (Right) */}
          <div className="absolute inset-0">
            <Image src={solHospitality} alt="Commercial Charging" className="h-full w-full object-cover object-right" placeholder="blur" />
          </div>
          
          {/* Middle Layer */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: "polygon(0 0, 85% 0, 70% 100%, 0 100%)" }}
          >
            <Image src={solCharge} alt="Highway Charging" className="h-full w-full object-cover object-[70%_center]" placeholder="blur" />
          </div>
          
          {/* Top Layer (Left) */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: "polygon(0 0, 55% 0, 40% 100%, 0 100%)" }}
          >
            <Image src={solDepot} alt="Depot Charging" className="h-full w-full object-cover object-[30%_center] opacity-80" placeholder="blur" />
          </div>

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30"></div>
        </div>
        
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col justify-center px-8 md:px-16 py-12 md:py-24">
          <h1 className="max-w-4xl text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            "Engineered for harsh operating conditions.<br /> Built to deliver every time."
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-white/90">
            AC chargers for residential and workplace dwell-time charging. DC fast chargers for fleets, depots and highway corridors. Dynamic Load Balancing for intelligent multi-charger site management.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="bg-[#00E573] text-white px-6 py-3 text-[13px] font-bold tracking-wide rounded-sm hover:bg-[#00c261] transition-colors">
              Talk to our expert
            </button>
            <button className="border border-white text-white px-6 py-3 text-[13px] font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors rounded-sm">
              See how it works
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AC Chargers */}
            <div className="flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden bg-black border border-white/5">
                <Image src={platformModule} alt="AC Chargers Module" className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-transform duration-700 hover:scale-105" placeholder="blur" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-10 pointer-events-none">
                  <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold tracking-tight">AC Chargers</h2>
                  <div className="mt-4 text-[11px] text-white/80 space-y-1">
                    <p>3.3 · 7.4 · 11 · 22 kW</p>
                    <p>Bidirectional Distributed Dispenser Systems</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#d9d9d9] hover:bg-[#c9c9c9] transition-colors text-black py-5 flex items-center justify-center gap-3 text-[13px] font-medium border border-black/10">
                See how it works
                <span className="font-light">→</span>
              </button>
            </div>

            {/* DC Fast Chargers */}
            <div className="flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden bg-black border border-white/5">
                <Image src={platformModule} alt="DC Fast Chargers Module" className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-transform duration-700 hover:scale-105" placeholder="blur" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-10 pointer-events-none">
                  <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold tracking-tight leading-[1.1]">DC Fast<br />Chargers</h2>
                  <div className="mt-4 text-[11px] text-white/80 space-y-1">
                    <p>30 · 60 · 120 · 180 · 240 · 360 kW</p>
                    <p>Bidirectional Distributed Dispenser Systems</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#d9d9d9] hover:bg-[#c9c9c9] transition-colors text-black py-5 flex items-center justify-center gap-3 text-[13px] font-medium border border-black/10">
                See how it works
                <span className="font-light">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Everything After Delivery (Services Grid) */}
      <section className="bg-[#111111] pb-32">
        <div className="mx-auto max-w-[1400px] px-8 md:px-16">
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-tight text-white mb-8">
            Everything after delivery.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 1 */}
            <div className="bg-white text-black p-8 flex flex-col h-[280px]">
              <h3 className="text-[13px] font-bold leading-tight">Installation & Commissioning</h3>
              <p className="mt-4 text-[11px] leading-relaxed text-black/70">
                End-to-end site assessment and certified deployment across India.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white text-black p-8 flex flex-col h-[280px]">
              <h3 className="text-[13px] font-bold leading-tight">Preventive Maintenance</h3>
              <p className="mt-4 text-[11px] leading-relaxed text-black/70">
                Bi-annual hardware inspections, remote diagnostics, OTA firmware updates, and certified technician dispatch included across all SLA tiers. Proactive alerts reduce unplanned downtime by over 60%.
              </p>
              <div className="mt-auto">
                <span className="inline-block bg-[#e6fcf0] text-[#00E573] text-[9px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide">
                  Up to 98% uptime
                </span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white text-black p-8 flex flex-col h-[280px]">
              <h3 className="text-[13px] font-bold leading-tight">24/7 Remote Monitoring</h3>
              <p className="mt-4 text-[11px] leading-relaxed text-black/70">
                Real-time SCADA visibility across your entire charging estate.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white text-black p-8 flex flex-col h-[280px]">
              <h3 className="text-[13px] font-bold leading-tight">Lifecycle Expansion</h3>
              <p className="mt-4 text-[11px] leading-relaxed text-black/70">
                Component upgrades and hardware expansion path ensuring your infrastructure scales with your needs.
              </p>
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
