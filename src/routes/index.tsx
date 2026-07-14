import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-power.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meiris — The power conversion platform for global electrification" },
      {
        name: "description",
        content:
          "From fleet depots to residential grids, our vertically integrated architecture delivers precision control and unmatched efficiency across every electrification touchpoint.",
      },
      { property: "og:title", content: "Meiris — Power conversion platform" },
      {
        property: "og:description",
        content:
          "Vertically integrated power conversion architecture for global electrification.",
      },
    ],
  }),
  component: Index,
});

const navItems = ["Platform", "Products", "Solutions", "Insights", "About"];

function Logo() {
  return (
    <div className="flex items-center gap-2 text-white">
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="2" fill="white" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          const x1 = 20 + Math.cos(angle) * 6;
          const y1 = 20 + Math.sin(angle) * 6;
          const x2 = 20 + Math.cos(angle) * 18;
          const y2 = 20 + Math.sin(angle) * 18;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      <span className="text-sm font-semibold tracking-[0.25em]">MEIRIS</span>
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
          <Logo />
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/85 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="rounded-sm bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Get in touch
          </a>
        </div>
        <div className="h-[2px] w-full bg-[oklch(0.78_0.19_155)]" />
      </header>

      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Industrial power conversion hardware close-up"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center px-6 pt-24 text-center">
          <h1 className="max-w-5xl text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white">
            The power conversion platform{" "}
            <span className="text-[oklch(0.78_0.19_155)]">
              global electrification
            </span>{" "}
            needs
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            From fleet depots to residential grids, our vertically integrated
            architecture delivers precision control and unmatched efficiency
            across every electrification touchpoint.
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
    </div>
  );
}
