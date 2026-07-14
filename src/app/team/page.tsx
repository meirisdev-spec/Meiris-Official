import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Core Team — Meiris Intelligent Power Conversion",
  description: "Meet the core team behind MEIRIS.",
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

export default function TeamPage() {
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
                className={`hover:text-white transition-colors`}
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
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase mb-20">
          CORE TEAM
        </h1>

        <div className="flex flex-col gap-32">
          {/* Member 1: Satish Shenoy */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-center">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/5] bg-[#e5e5e5] shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-black/30 font-semibold tracking-widest text-sm uppercase">
                Image Placeholder
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#00E573] mb-3">
                Founder & MD
              </h3>
              <h2 className="text-4xl md:text-[2.75rem] font-bold text-black mb-6 tracking-tight">
                Satish Shenoy
              </h2>
              <p className="text-[15px] md:text-[17px] text-black/80 leading-relaxed font-medium">
                3+ decades of leadership in consulting & financial services at Kotak & IL&FS. NIT & IIM-A Alumnus.
              </p>
            </div>
          </div>

          {/* Member 2: Sanath Kumar */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-center">
            {/* Text Content (Left on desktop) */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-bold text-[#00E573] mb-3 leading-tight">
                Co-founder & Director –<br />Technical
              </h3>
              <h2 className="text-4xl md:text-[2.75rem] font-bold text-black mb-6 tracking-tight">
                Sanath Kumar
              </h2>
              <p className="text-[15px] md:text-[17px] text-black/80 leading-relaxed font-medium">
                2+ decades in product development across sectors including EV chargers, power & energy, at IRIS Energy & Pantheon Technologies. VIT Alumnus.
              </p>
            </div>

            {/* Image Placeholder (Right on desktop) */}
            <div className="w-full aspect-[4/5] bg-[#e5e5e5] shadow-lg relative overflow-hidden order-1 md:order-2">
              <div className="absolute inset-0 flex items-center justify-center text-black/30 font-semibold tracking-widest text-sm uppercase">
                Image Placeholder
              </div>
            </div>
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
