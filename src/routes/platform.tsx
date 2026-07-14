import { createFileRoute, Link } from "@tanstack/react-router";
import platformModule from "@/assets/platform-module.jpg";
import platformFirmware from "@/assets/platform-firmware.jpg";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Meiris Intelligent Power Conversion" },
      {
        name: "description",
        content:
          "From grid input to precision output — a vertically integrated power conversion architecture built on Silicon Carbide devices and proprietary firmware.",
      },
      { property: "og:title", content: "Meiris Platform — Intelligent Power Conversion" },
      {
        property: "og:description",
        content:
          "Vertically integrated SiC power conversion platform engineered to convert, manage and orchestrate energy at 96% system efficiency.",
      },
    ],
  }),
  component: PlatformPage,
});

const GREEN = "oklch(0.78 0.19 155)";
const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Products", to: "/" },
  { label: "Solutions", to: "/" },
  { label: "Insights", to: "/" },
  { label: "About", to: "/" },
];

function Logo({ small = false }: { small?: boolean }) {
  const size = small ? 24 : 28;
  return (
    <Link to="/" className="flex items-center gap-2 text-white">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
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

function ChipGraphic() {
  return (
    <svg viewBox="0 0 400 320" className="h-auto w-full max-w-[420px]" aria-hidden>
      <g stroke={GREEN} strokeWidth="1.5" fill="none">
        {/* pins */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`t${i}`} x1={110 + i * 22} y1={60} x2={110 + i * 22} y2={90} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`b${i}`} x1={110 + i * 22} y1={230} x2={110 + i * 22} y2={260} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`l${i}`} x1={80} y1={100 + i * 16} x2={110} y2={100 + i * 16} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`r${i}`} x1={290} y1={100 + i * 16} x2={320} y2={100 + i * 16} />
        ))}
        <rect x="110" y="90" width="180" height="140" rx="4" />
        <rect x="150" y="120" width="100" height="80" rx="2" />
        <circle cx="200" cy="160" r="18" strokeWidth="2" />
        <circle cx="200" cy="160" r="6" fill={GREEN} stroke="none" />
      </g>
    </svg>
  );
}

function NetworkGraphic() {
  const nodes = [
    [40, 60], [140, 40], [240, 80], [340, 40], [420, 100],
    [80, 180], [180, 220], [300, 200], [400, 240],
    [60, 320], [200, 340], [340, 320],
  ];
  const edges = [
    [0, 5], [0, 1], [1, 6], [2, 6], [2, 7], [3, 4], [3, 7], [4, 8],
    [5, 9], [6, 10], [7, 10], [7, 11], [8, 11], [1, 2], [2, 3], [5, 6],
    [6, 7], [7, 8], [9, 10], [10, 11],
  ];
  return (
    <svg viewBox="0 0 460 380" className="h-auto w-full max-w-[520px]" aria-hidden>
      <g stroke={GREEN} strokeWidth="1" fill="none" opacity="0.8">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="black" stroke={GREEN} strokeWidth="1.5" />
          <circle cx={x} cy={y} r="3" fill={GREEN} />
        </g>
      ))}
    </svg>
  );
}

function ThreeLayers() {
  return (
    <svg viewBox="0 0 260 220" className="h-auto w-full max-w-[280px]" aria-hidden>
      <g fontFamily="system-ui" fontSize="9" fill="white">
        {/* Layer 1 - green */}
        <polygon points="130,10 230,55 130,100 30,55" fill="oklch(0.5 0.15 155)" stroke={GREEN} />
        <text x="240" y="58" fill="white">Firmware Intelligence</text>
        {/* Layer 2 - blue */}
        <polygon points="130,60 230,105 130,150 30,105" fill="oklch(0.4 0.12 240)" stroke="oklch(0.7 0.15 240)" />
        <text x="240" y="108" fill="white">Control Architecture</text>
        {/* Layer 3 - dark */}
        <polygon points="130,110 230,155 130,200 30,155" fill="oklch(0.25 0.02 265)" stroke="oklch(0.6 0.02 265)" />
        <text x="240" y="158" fill="white">Silicon Foundation</text>
      </g>
    </svg>
  );
}

function FlowDiagram() {
  return (
    <svg viewBox="0 0 700 220" className="h-auto w-full max-w-[720px]" aria-hidden>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={GREEN} />
        </marker>
      </defs>
      {/* boxes */}
      {[
        { x: 20, label: "IN" },
        { x: 300, label: "" },
        { x: 580, label: "OUT" },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={70} width={100} height={80} rx="4" fill="oklch(0.2 0.01 265)" stroke="white" strokeOpacity="0.4" />
          {b.label && <text x={b.x + 50} y={115} textAnchor="middle" fill="white" fontSize="14">{b.label}</text>}
          {!b.label && (
            <>
              <circle cx={b.x + 50} cy={110} r="18" fill="none" stroke={GREEN} strokeWidth="2" />
              <path d={`M${b.x + 44} 102 L${b.x + 56} 110 L${b.x + 44} 118 Z`} fill={GREEN} />
            </>
          )}
        </g>
      ))}
      {/* arrows */}
      <line x1={125} y1={110} x2={295} y2={110} stroke={GREEN} strokeWidth="1.5" markerEnd="url(#arrow)" />
      <line x1={405} y1={110} x2={575} y2={110} stroke={GREEN} strokeWidth="1.5" markerEnd="url(#arrow)" />
      <text x={350} y={185} textAnchor="middle" fill="white" fontSize="10" opacity="0.7">MEIRIS Platform</text>
    </svg>
  );
}

function PlatformPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-black">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
          <Logo />
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="text-sm text-white/85 transition-colors hover:text-white"
                activeProps={{ className: "text-sm text-white" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="#"
            className="rounded-sm bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Get in touch
          </a>
        </div>
        <div className="h-[2px] w-full" style={{ backgroundColor: GREEN }} />
      </header>

      {/* Section 1 — Intelligent Power Conversion */}
      <section className="bg-black py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-16 px-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight">
              Intelligent
              <br />
              Power
              <br />
              Conversion.
            </h1>
            <p className="mt-8 max-w-lg text-base font-semibold leading-snug text-white">
              From grid input to precision output — a single vertically integrated architecture.
            </p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/65">
              The MEIRIS Platform is a vertically integrated power conversion platform built using
              Silicon Carbide (SiC) devices &amp; proprietary firmware, engineered to convert, manage, and
              orchestrate energy with precision at 96% system efficiency.
            </p>
          </div>
          <div className="flex items-start justify-center md:justify-end">
            <ChipGraphic />
          </div>
        </div>
      </section>

      {/* Section 2 — Energy is everywhere */}
      <section className="bg-black py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-16 px-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight">
              Energy is everywhere.
              <br />
              Intelligence is not.
            </h2>
            <p className="mt-6 max-w-lg text-sm font-semibold text-white">
              The Energy Transition is not a hardware problem.
              <br />
              It is a conversion problem.
            </p>
            <p className="mt-5 max-w-lg text-xs leading-relaxed text-white/60">
              Every megawatt of renewable generation, every EV, every battery system requires
              conversion. Every aspect of electricity generation and consumption involves an element
              of conversion. Raw electrical energy from the grid must be transformed, regulated, and
              delivered with precision to every load, every 10ms. With variable sources and changing
              load profiles the conversion problem has become more complex. The efficiency of that
              conversion determines the efficiency of the entire energy system. Conversion
              efficiency can no longer be ignored.
            </p>
            <p className="mt-5 text-sm text-white">MEIRIS was built to solve it efficiently.</p>
            <div className="mt-10 border-l-2 pl-5" style={{ borderColor: GREEN }}>
              <p className="max-w-md text-xs italic leading-relaxed text-white/70">
                "The gap between raw electrical energy and intelligent, precise power delivery is
                where the next generation of energy infrastructure is built."
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-widest" style={{ color: GREEN }}>
                — MEIRIS Engineering
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <NetworkGraphic />
          </div>
        </div>
      </section>

      {/* Section 3 — Three Layers, One Architecture */}
      <section className="bg-black">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-8 py-16 md:grid-cols-[1.1fr_1fr]">
          <div className="bg-white p-10 text-black md:p-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/60">
              Architecture
            </p>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight">
              Three Layers.
              <br />
              One Architecture.
            </h2>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-black/70">
              The silicon foundation of wide-bandgap SiC power module devices, the precision of a
              proprietary control architecture, the intelligence of parented firmware algorithms
              that command energy conversion in real time. Every layer of the MEIRIS Platform — from
              the switching topology in the silicon device, to the energy routing logic in the
              firmware — is designed, developed and owned by MEIRIS.
            </p>
          </div>
          <div className="flex items-center justify-center py-6">
            <ThreeLayers />
          </div>
        </div>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 px-8 pb-20 md:grid-cols-3">
          {[
            {
              title: "Silicon Foundation",
              body:
                "Wide-bandgap SiC MOSFET devices deliver higher switching frequency, lower losses and thermal performance to unlock power density gains.",
            },
            {
              title: "Control Architecture",
              body:
                "Real-time digital control loops with sub-microsecond response coordinate every module across the stack.",
            },
            {
              title: "Firmware Intelligence",
              body:
                "Patented in-house MEIRIS firmware energy routing and delivery sequence, 96% MPPT/PPP, and predictive load-adaptive management.",
            },
          ].map((c) => (
            <div key={c.title} className="bg-[#1c1f24] p-8">
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <p className="mt-4 text-xs leading-relaxed text-white/55">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Power conversion, rethought at the silicon level */}
      <section className="bg-white py-24 text-black">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-16 px-8 md:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.05]">
              Power
              <br />
              conversion,
              <br />
              rethought at
              <br />
              the silicon level
            </h2>
            <p className="mt-8 max-w-md text-xs leading-relaxed text-black/70">
              The platform's core is built around Silicon Carbide — a wide-bandgap semiconductor
              that operates at higher voltages, higher switching frequencies, and higher junction
              temperatures than conventional Silicon devices. This massive choice is not incidental.
              It is the foundation of every performance advantage that follows.
            </p>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-black/70">
              Each module integrates a defined focal active rectifier built on SiC MOSFETs in a
              three-phase active bridge configuration with Active Power Factor Correction that
              renders a power stage approaching unity. The result:{" "}
              <span className="font-semibold text-black">
                grid-clean conversion, minimal harmonic distortion, maximum energy utilization, and
                zero reactive power waste
              </span>{" "}
              at the conversion stage.
            </p>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-black/70">
              Modules combine in parallel. Each 30kW building block scales total system output from
              30kW to 300kW within a single system, and delivers next-generation 100kW modules under
              active development. Scaling up of power ratings no longer means replacement or major
              modifications.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <img
              src={platformModule}
              alt="Exploded diagram of a stacked MEIRIS power module with SiC MOSFETs and liquid cooling"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full max-w-[560px]"
            />
          </div>
        </div>
      </section>

      {/* Section 5 — The firmware makes the platform (three columns) */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <h2 className="max-w-4xl text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-tight">
            The firmware makes the platform
            <br />
            what it is.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              "Software optimization is essential in the topology of a conversion platform. The MEIRIS firmware layer manages routing across topologies of switching arrays. Every micro-cycle of switching is a control decision.",
              "Each module integrates a deterministic real-time SoC built on SiC MOSFETs in a three-phase active bridge configuration with Active Power Factor Correction, delivering unity power factor and near-zero harmonic distortion at every load.",
              "The result: every MEIRIS-powered system is simultaneously a power delivery interface, a real-time energy manager and an optimization engine. It is the foundation of every performance advantage that follows.",
            ].map((p, i) => (
              <p key={i} className="text-xs leading-relaxed text-white/60">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-16 max-w-4xl text-xs italic leading-relaxed text-white/50">
            "The architecture that shapes a memory in the same architecture that dispatches its energy
            to the grid. That is not a capability addition. That is a different way of thinking about
            power conversion."
          </p>
        </div>
      </section>

      {/* Section 6 — Gradient flow diagram */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.35 0.14 155) 0%, oklch(0.22 0.06 220) 55%, oklch(0.14 0 0) 100%)",
        }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center px-8">
          <FlowDiagram />
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/70">
            MEIRIS Platform Flow
          </p>
        </div>
      </section>

      {/* Section 7 — Firmware close (dark + firmware image) */}
      <section className="bg-black py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05]">
              The firmware
              <br />
              makes the
              <br />
              platform
              <br />
              what it is.
            </h2>
            <p className="mt-8 max-w-md text-xs leading-relaxed text-white/60">
              To reach the potential of a graphene stackframe hardware requires it as an
              incremental change of MEIRIS platform enterprises. In-house control loops, custom
              switching primitives, and adaptive energy routing engineered to squeeze every joule
              out of the silicon.
            </p>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-white/60">
              Hardware defines the trajectory of what is possible. Firmware defines what actually
              happens. MEIRIS owns both.
            </p>
          </div>
          <div className="relative">
            <img
              src={platformFirmware}
              alt="Glowing SiC MOSFET representing MEIRIS firmware intelligence core"
              loading="lazy"
              width={1280}
              height={900}
              className="w-full"
            />
            <p className="mt-4 text-right text-[10px] uppercase tracking-[0.3em]" style={{ color: GREEN }}>
              MEIRIS Intelligence Core
            </p>
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
