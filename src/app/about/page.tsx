import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Meiris Intelligent Power Conversion",
  description: "MEIRIS (pronounced 'Mayris') is a full-stack Intelligent Power Conversion platform company.",
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

export default function AboutPage() {
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
                className={`hover:text-white transition-colors ${item.label === "About" ? "text-white" : ""}`}
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

      <main className="mx-auto max-w-[1200px] px-8 pt-24 pb-32">
        {/* Hero Text */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-black mb-5">About Us</h1>
          <p className="text-[17px] text-black/80 leading-relaxed font-medium">
            A unified page with clear segmentation for Blogs, Press Releases and Announcements. All three content types are accessible from this single page via a persistent tab or filter row.
          </p>
        </div>

        {/* Main Content Block */}
        <div className="bg-[#f0fbf5] border-l-[4px] border-[#00E573] p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
          <div className="space-y-6 text-[14px] md:text-[15px] leading-loose text-black/80 font-medium">
            <p>
              Every electrified system — from an EV fleet depot to a grid-scale storage installation — 
              depends on one critical layer: power conversion. As India's energy transition accelerates, the 
              bottleneck is no longer generation. It is power conversion, control, and system integrity.
            </p>
            <p>
              MEIRIS (pronounced "Mayris") is a full-stack Intelligent Power Conversion platform company.
            </p>
            <p>
              MEIRIS controls the critical product stack across power electronics, embedded firmware, 
              adaptive control software and system integration — engineered as scalable building blocks 
              that convert, route, and optimise power across industries and applications.
            </p>
            <p>
              Built natively for Indian operating conditions and manufactured in India, our platform solves 
              what imported solutions typically cannot: local support, grid variability, extreme thermal 
              conditions, and 24/7 reliability.
            </p>
            <p>
              With an initial focus on commercial fleet operations, our partners and clients deploy the 
              MEIRIS platform to achieve measurable outcomes — higher fleet uptime, lower total cost of 
              ownership, and prescriptive intelligence that resolves failures before they occur.
            </p>
          </div>

          {/* Separator Line */}
          <div className="h-px w-full bg-black/10 my-10"></div>

          {/* Bottom Info */}
          <div className="text-[12px] md:text-[13px] leading-relaxed text-black/80">
            <span className="font-bold text-black">Current Portfolio:</span> EV Fleet Charging — AC Systems (3.3-22 kW), DC Fast Chargers (30-360 kW), Charging 
            Management System (CMS). Platform roadmap extends to BESS, Solar Inverters, Railway, and Grid Services.
          </div>
        </div>
      </main>

      {/* Mega Footer */}
      <footer className="bg-black text-white">
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
