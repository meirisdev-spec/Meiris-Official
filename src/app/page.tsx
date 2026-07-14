import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/hero-power.jpg";
import solDepot from "@/assets/sol-depot.jpg";
import solCharge from "@/assets/sol-charge.jpg";
import solHospitality from "@/assets/sol-hospitality.jpg";
import solResidential from "@/assets/sol-residential.jpg";
import solCustom from "@/assets/sol-custom.jpg";
import newsWind from "@/assets/news-wind.jpg";
import newsSic from "@/assets/news-sic.jpg";
import newsSchematic from "@/assets/news-schematic.jpg";
import ctaEngineers from "@/assets/cta-engineers.jpg";

export const metadata: Metadata = {
  title: "Meiris — The power conversion platform for global electrification",
  description: "From fleet depots to residential grids, our vertically integrated architecture delivers precision control and unmatched efficiency across every electrification touchpoint.",
  openGraph: {
    title: "Meiris — Power conversion platform",
    description: "Vertically integrated power conversion architecture for global electrification.",
  },
};

const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
];
const GREEN = "oklch(0.78 0.19 155)";

function Logo({ small = false }: { small?: boolean }) {
  const size = small ? 24 : 28;
  return (
    <div className="flex items-center gap-2 text-white">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="2" fill="white" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          const x1 = 20 + Math.cos(angle) * 6;
          const y1 = 20 + Math.sin(angle) * 6;
          const x2 = 20 + Math.cos(angle) * 18;
          const y2 = 20 + Math.sin(angle) * 18;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          );
        })}
      </svg>
      <span className="text-xs font-semibold tracking-[0.25em]">MEIRIS</span>
    </div>
  );
}

const solutions = [
  { title: "Depot Infrastructure", img: solDepot },
  { title: "Charge Point Operators", img: solCharge },
  { title: "Hospitality & Workplace", img: solHospitality },
  { title: "Residential", img: solResidential },
  { title: "Custom Solutions", img: solCustom },
];

const news = [
  {
    date: "12 June 2026",
    title: "MEIRIS Secures Series A to Scale Depot-Grade Charging Infrastructure Across India",
    img: newsWind,
  },
  {
    date: "4 June 2026",
    title: "How SiC-Based Power Conversion Is Redefining Fleet Electrification Economics",
    img: newsSic,
  },
  {
    date: "28 May 2026",
    title: "MEIRIS Joins National EV Mission as Technology Partner for Public Infrastructure Rollout",
    img: newsSchematic,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-black">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
          <Logo />
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.to}
                className="text-sm text-white/85 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-sm bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Get in touch
          </Link>
        </div>
        <div className="h-[2px] w-full" style={{ backgroundColor: GREEN }} />
      </header>

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "calc(100vh - 74px)" }}>
        <Image
          src={heroImage}
          alt="Industrial power conversion hardware close-up"
          className="absolute inset-0 h-full w-full object-cover"
          placeholder="blur"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-center px-6 py-32 text-center" style={{ minHeight: "calc(100vh - 74px)" }}>
          <h1 className="max-w-5xl text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white">
            The power conversion<br />
            platform <span style={{ color: GREEN }}>global</span><br />
            <span style={{ color: GREEN }}>electrification</span> needs
          </h1>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            From fleet depots to residential grids, our vertically integrated architecture delivers
            precision control and unmatched efficiency across every electrification touchpoint.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-sm bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:bg-white/90"
            >
              Explore architecture
            </a>
            <a
              href="#"
              className="rounded-sm border border-white/40 bg-black/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors hover:bg-black/50"
            >
              View solutions
            </a>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <h2 className="text-3xl font-bold text-white">Our Solutions</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {solutions.map((s) => (
              <div key={s.title} className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-medium text-white">{s.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2">
            <span className="h-[2px] w-10 bg-white" />
            <span className="h-[2px] w-10 bg-white/30" />
            <span className="h-[2px] w-10 bg-white/30" />
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-white py-20 text-black">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <a href="#" className="text-sm text-black/70 hover:text-black">
              All news →
            </a>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {news.map((n) => (
              <article key={n.title}>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image src={n.img} alt={n.title} className="h-full w-full object-cover" placeholder="blur" />
                </div>
                <h3 className="mt-5 text-sm font-semibold leading-snug">{n.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs text-black/50">
                  <span>{n.date}</span>
                  <a href="#" className="font-medium" style={{ color: GREEN }}>
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-10 text-black md:p-14">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">
              Ready to Engineer the Transition?
            </h2>
            <p className="mt-4 text-sm text-black/70">
              Whether you are building the next generation of chargers or scaling industrial storage,
              our platform provides the precision you need.
            </p>
            <form className="mt-8 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#eef1f4] px-4 py-3 text-sm outline-none placeholder:text-black/50"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full bg-[#eef1f4] px-4 py-3 text-sm outline-none placeholder:text-black/50"
                />
              </div>
              <textarea
                placeholder="Project Details"
                rows={4}
                className="w-full resize-none bg-[#eef1f4] px-4 py-3 text-sm outline-none placeholder:text-black/50"
              />
              <button
                type="submit"
                className="w-full bg-black py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-black/85"
              >
                Initialize Consultation
              </button>
            </form>
          </div>
          <div className="relative min-h-[400px]">
            <Image
              src={ctaEngineers}
              alt="Engineers reviewing plans"
              className="absolute inset-0 h-full w-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="h-[2px] w-full" style={{ backgroundColor: GREEN }} />
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
