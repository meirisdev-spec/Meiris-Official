import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import platformModule from "@/assets/platform-module.jpg";
import platformFirmware from "@/assets/platform-firmware.jpg";

export const metadata: Metadata = {
  title: "Platform — Meiris Intelligent Power Conversion",
  description: "From grid input to precision output — a vertically integrated power conversion architecture built on Silicon Carbide devices and proprietary firmware.",
  openGraph: {
    title: "Meiris Platform — Intelligent Power Conversion",
    description: "Vertically integrated SiC power conversion platform engineered to convert, manage and orchestrate energy at 96% system efficiency.",
  },
};

const GREEN = "oklch(0.78 0.19 155)";
const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
];

function Logo({ small = false }: { small?: boolean }) {
  const size = small ? 24 : 28;
  return (
    <Link href="/" className="flex items-center gap-2 text-white">
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
    <svg viewBox="0 0 400 400" className="h-auto w-full max-w-[420px]" aria-hidden>
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.8" />
          <stop offset="40%" stopColor={GREEN} stopOpacity="0.3" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Background Grid */}
      <g stroke={GREEN} strokeWidth="1" opacity="0.2">
        <line x1="50" y1="50" x2="350" y2="50" />
        <line x1="50" y1="350" x2="350" y2="350" />
        <line x1="50" y1="50" x2="50" y2="350" />
        <line x1="350" y1="50" x2="350" y2="350" />
      </g>
      {/* Glow */}
      <rect x="150" y="150" width="100" height="100" fill="url(#glow)" />
      {/* Central Square Box */}
      <rect x="110" y="110" width="180" height="180" fill="none" stroke={GREEN} strokeWidth="2" />
      {/* Corner dots */}
      <circle cx="110" cy="110" r="5" fill={GREEN} />
      <circle cx="290" cy="110" r="5" fill={GREEN} />
      <circle cx="110" cy="290" r="5" fill={GREEN} />
      <circle cx="290" cy="290" r="5" fill={GREEN} />
      {/* Pins - Top */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`t${i}`} x1={135 + i * 26} y1={50} x2={135 + i * 26} y2={110} stroke={GREEN} strokeWidth="2" />
      ))}
      {/* Pins - Bottom */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`b${i}`} x1={135 + i * 26} y1={290} x2={135 + i * 26} y2={350} stroke={GREEN} strokeWidth="2" />
      ))}
      {/* Pins - Left */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`l${i}`} x1={50} y1={135 + i * 26} x2={110} y2={135 + i * 26} stroke={GREEN} strokeWidth="2" />
      ))}
      {/* Pins - Right */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`r${i}`} x1={290} y1={135 + i * 26} x2={350} y2={135 + i * 26} stroke={GREEN} strokeWidth="2" />
      ))}
      {/* Text */}
      <text x="200" y="200" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">SiC MOSFET</text>
      <text x="200" y="240" textAnchor="middle" fill={GREEN} fontSize="12">30 kW : 650 V</text>
    </svg>
  );
}

function NetworkGraphic() {
  const nodes = [
    [70, 70], [190, 90], [310, 60], [360, 140],
    [110, 190], [240, 170], [320, 260],
    [50, 280], [160, 270], [250, 350],
  ];
  const edges = [
    [0, 1], [0, 4], [1, 2], [1, 5], [2, 3], [3, 6],
    [4, 5], [4, 7], [5, 6], [5, 8], [6, 9], [7, 8], [8, 9]
  ];
  return (
    <svg viewBox="0 0 400 400" className="h-auto w-full max-w-[520px]" aria-hidden>
      <g stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          {i === 5 ? (
            <>
              <circle cx={x} cy={y} r="22" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <circle cx={x} cy={y} r="14" fill="none" stroke={GREEN} strokeWidth="1.5" />
            </>
          ) : (
             <circle cx={x} cy={y} r="14" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          )}
          <circle cx={x} cy={y} r="5" fill={GREEN} />
        </g>
      ))}
    </svg>
  );
}

function ThreeLayers() {
  return (
    <svg viewBox="0 0 400 300" className="h-auto w-full max-w-[360px]" aria-hidden>
      <defs>
        <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.2" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <line x1="200" y1="50" x2="200" y2="250" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
      <g fontFamily="system-ui" textAnchor="middle">
        <g transform="translate(0, 40)">
          <polygon points="200,0 320,40 200,80 80,40" fill="url(#greenGlow)" stroke={GREEN} strokeWidth="1.5" />
          <polygon points="200,0 320,40 200,80 80,40" fill="rgba(0,0,0,0.6)" />
          <text x="200" y="38" fill="white" fontSize="12" fontWeight="bold">Firmware Intelligence</text>
          <text x="200" y="54" fill={GREEN} fontSize="9">AI Scheduling - DCPP</text>
        </g>
        <g transform="translate(0, 110)">
          <polygon points="200,0 320,40 200,80 80,40" fill="url(#blueGlow)" stroke="#3b82f6" strokeWidth="1.5" />
          <polygon points="200,0 320,40 200,80 80,40" fill="rgba(0,0,0,0.6)" />
          <text x="200" y="38" fill="white" fontSize="12" fontWeight="bold">Control Architecture</text>
          <text x="200" y="54" fill="#3b82f6" fontSize="9">Real-Time DSP</text>
        </g>
        <g transform="translate(0, 180)">
          <polygon points="200,0 320,40 200,80 80,40" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <polygon points="200,0 320,40 200,80 80,40" fill="rgba(0,0,0,0.6)" />
          <text x="200" y="38" fill="white" fontSize="12" fontWeight="bold">Silicon Foundation</text>
          <text x="200" y="54" fill="rgba(255,255,255,0.5)" fontSize="9">SiC MOSFET - 850V</text>
        </g>
      </g>
    </svg>
  );
}

function FlowDiagram() {
  return (
    <div className="relative w-full max-w-[900px] h-[280px] flex items-center justify-between px-8 md:px-16">
      {/* Horizontal Line */}
      <div className="absolute left-[15%] right-[15%] top-1/2 h-[1px] bg-white/30 -translate-y-1/2 z-0"></div>
      
      {/* Box 1: INPUT */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white shadow-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
            <path d="M4 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
            <path d="M4 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
            <path d="M4 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
          </svg>
        </div>
        <span className="text-[9px] font-bold tracking-widest text-black uppercase bg-white px-3 py-1.5 rounded-sm">INPUT</span>
      </div>

      {/* Box 2: CONVERSION */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-2xl bg-white shadow-2xl">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <span className="text-[9px] font-bold tracking-widest text-white uppercase text-center mt-[-8px]">
          MEIRIS CONVERSION STAGE
        </span>
      </div>

      {/* Box 3: STORAGE */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white shadow-xl">
          <svg width="20" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M16 4h-2V2h-4v2H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
        <span className="text-[9px] font-bold tracking-widest text-black uppercase bg-white px-3 py-1.5 rounded-sm">STORAGE</span>
      </div>
      
      {/* Bottom Bracket */}
      <div className="absolute left-[15%] right-[15%] top-[190px] h-12 border-b border-l border-r border-white/40 z-0"></div>
      <div className="absolute left-1/2 top-[230px] -translate-x-1/2 z-10">
        <span className="text-[9px] font-bold tracking-widest text-black uppercase bg-white px-4 py-1.5 rounded-sm whitespace-nowrap">
          MEIRIS CONVERSION STAGE
        </span>
      </div>
    </div>
  );
}

export default function PlatformPage() {
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
                href={n.to}
                className={`text-sm transition-colors hover:text-white ${n.label === "Platform" ? "text-white" : "text-white/85"}`}
              >
                {n.label}
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
      <section className="bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="relative">
            {/* The White Shape Background */}
            <div className="absolute top-0 bottom-0 left-0 w-full md:w-[calc(33.333%+1rem)] bg-white rounded-t-[2rem] md:rounded-[2rem] md:rounded-br-none z-0"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Top Row: Text & Graphic */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[38%] p-10 md:p-12 pt-16 text-black">
                  <p className="text-[10px] font-bold tracking-widest text-black/50 uppercase">Architecture</p>
                  <h2 className="mt-8 text-[clamp(2.5rem,3.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-black">
                    Three Layers.<br/>One Architecture.
                  </h2>
                  <p className="mt-6 text-sm text-black/70 leading-relaxed">
                    The silicon foundation of wide-bandgap SiC power module devices, the precision of a proprietary control architecture, the intelligence of patented firmware algorithms that orchestrate energy conversion in real time. Every layer of the MEIRIS Platform — from the switching topology in the silicon devices to the energy routing logic in the firmware — is designed, developed, and owned by MEIRIS.
                  </p>
                </div>
                <div className="w-full md:w-[62%] flex items-center justify-center p-8">
                  <ThreeLayers />
                </div>
              </div>

              {/* Bottom Row: 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] px-8 md:px-12 pb-8 md:pb-12 mt-8 md:mt-0">
                {[
                  {
                    title: "Silicon Foundation",
                    body: "SiC-based bidirectional power modules. Patented switching topologies. 30kW per module, scalable in parallel."
                  },
                  {
                    title: "Control Architecture",
                    body: "Proprietary SoC controller. DSP driven real-time switching. Multi module coordination and BMS communication."
                  },
                  {
                    title: "Firmware Intelligence",
                    body: "Patented control algorithms. V2X energy routing. Grid demand response, ISO 15118, OCPP, and predictive management."
                  }
                ].map((c, i) => (
                  <div 
                    key={c.title} 
                    className={`bg-[#2c2d2e] p-8 md:p-10 text-white
                      ${i === 0 ? 'rounded-t-[1.5rem] md:rounded-tr-none md:rounded-l-[1.5rem] md:rounded-bl-[2rem]' : ''}
                      ${i === 2 ? 'rounded-b-[1.5rem] md:rounded-bl-none md:rounded-r-[1.5rem]' : ''}
                    `}
                  >
                    <h3 className="text-base font-semibold">{c.title}</h3>
                    <p className="mt-4 text-xs leading-relaxed text-white/50">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Power conversion, rethought at the silicon level */}
      <section className="relative bg-black text-black">
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full bg-white md:w-1/2"></div>
          <div className="hidden w-1/2 bg-black md:block"></div>
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-2">
          <div className="bg-white px-8 py-24 md:pr-16 lg:pr-24">
            <h2 className="text-[clamp(2.5rem,4vw,3.75rem)] font-bold leading-[1.05] tracking-tight">
              Power<br />conversion,<br />rethought at<br />the silicon level
            </h2>
            <p className="mt-8 text-[13px] leading-relaxed text-black/80">
              The platform's core is built around Silicon Carbide — a wide-bandgap semiconductor that operates at higher voltages, higher switching frequencies, and higher junction temperatures than conventional Silicon devices. This material choice is not incidental. It is the foundation of every performance advantage that follows.
            </p>
            <p className="mt-8 text-[13px] leading-relaxed text-black/80">
              Each module integrates a bidirectional active rectifier built on SiC MOSFETs in a three-phase active bridge configuration with Active Power Factor Correction that maintains a power factor approaching unity. The result: <span className="font-bold text-[#00E573]">grid-clean conversion, minimal harmonic distortion, maximum energy utilization, and zero reactive power waste</span> at the conversion stage.
            </p>
            <p className="mt-8 text-[13px] leading-relaxed text-black/80">
              Modules combine in parallel. Each 30kW building block scales total system output from 30kW to 360kW within a single system architecture. Next-generation 60kW modules are under active development. Scaling up of power ratings no longer means replacement or major modifications.
            </p>
          </div>
          <div className="flex items-center justify-center bg-black px-8 py-24 md:pl-16">
            <Image
              src={platformModule}
              alt="Exploded diagram of a stacked MEIRIS power module"
              className="w-full max-w-[560px]"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/* Section 5 — The firmware makes the platform */}
      <section className="bg-black pt-24 pb-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <h2 className="max-w-3xl text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
            The firmware makes the platform<br />what it is.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              "Bidirectionality is embedded in the topology of every power module. The same firmware that manages charging manages discharge. There is no mode switch. There is no additional hardware. The direction of energy flow is a software variable.",
              "Each module integrates a bidirectional active rectifier built on SiC MOSFETs in a three-phase active bridge configuration with Active Power Factor Correction that maintains a power factor approaching unity. The result: grid-clean conversion, minimal harmonic distortion, maximum energy utilization, and zero reactive power waste at the conversion stage.",
              "The result: every MEIRIS-powered system is simultaneously a power delivery system and an energy recovery system. An EV battery becomes a dispatchable grid resource. A storage bank becomes a frequency regulation asset. A distributed energy node becomes a grid-interactive participant. The physics of conversion are identical in both directions. The intelligence defines direction, magnitude, and timing.",
            ].map((p, i) => (
              <div key={i} className="rounded-[1.5rem] border border-white/20 p-8">
                <p className="text-[13px] leading-relaxed text-white/80">
                  {p}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 border-l-2 border-[#00E573] pl-6">
            <p className="max-w-4xl text-sm italic leading-relaxed text-white/70">
              "The architecture that charges a battery is the same architecture that dispatches its energy to the grid. That is not a capability addition. That is a different way of thinking about power conversion."
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Gradient flow diagram */}
      <section
        className="py-32"
        style={{
          background: "linear-gradient(90deg, #00E573 0%, #002b5e 100%)",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-8">
          <FlowDiagram />
        </div>
      </section>

      {/* Section 7 — Firmware close */}
      <section className="bg-black py-32">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col">
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold leading-[1.05] tracking-tight">
              The firmware<br />makes the<br />platform<br />what it is.
            </h2>
            <p className="mt-12 max-w-sm text-[13px] leading-relaxed text-white/70">
              The controller units built on a proprietary architecture and firmware form the intelligence layer that makes the platform coherent across all operating conditions, load profiles, and application contexts
            </p>
            <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-white/70">
              Patented firmware orchestrates real-time power control, dynamic load management, predictive energy optimization, and grid integration without middleware latency.
            </p>
            <div className="mt-12 border-l-2 border-[#00E573] pl-6">
              <p className="max-w-md text-sm italic leading-relaxed text-white/80">
                "Hardware defines the boundary of what is possible. Firmware defines what actually happens. MEIRIS owns both."
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <Image
              src={platformFirmware}
              alt="Glowing SiC MOSFET representing MEIRIS firmware intelligence core"
              className="w-full max-w-[600px]"
              placeholder="blur"
            />
            <div className="mt-6 flex w-full max-w-[500px] items-center justify-between">
              <p className="text-sm text-white/80">MEIRIS Intelligence Core</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/40">
                <path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — One Platform. Multiple Applications */}
      <section className="bg-black py-24 pb-32">
        <div className="mx-auto max-w-[1200px] px-8">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
            One Platform. Multiple Applications
          </h2>
          <p className="mt-6 max-w-4xl text-[13px] leading-relaxed text-white/70">
            The power module platform architecture, control topology, and firmware intelligence are consistent across applications. Application-specific behaviour is determined at the software layer — not through hardware redesign.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
            {[
              {
                title: "EV Charging Solutions",
                subtitle: "DC Fast Chargers · AC Chargers · Onboard Chargers",
              },
              {
                title: "Solar",
                subtitle: "DC Fast Chargers · AC ChargeHigh output (>100 kVA) invertersers · Onboard Chargers",
              },
              {
                title: "Railway",
                subtitle: "Traction inverters · Auxiliary converters",
              },
              {
                title: "BESS",
                subtitle: "Power Conversion System (PCS)",
              },
            ].map((app, i) => (
              <div 
                key={i} 
                className="relative aspect-square md:aspect-[5/4] w-full overflow-hidden border border-white/10"
              >
                {/* Background Image */}
                <Image
                  src={platformModule}
                  alt={app.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-transform duration-700 hover:scale-105"
                  placeholder="blur"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-8 md:p-10 pointer-events-none">
                  <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">{app.title}</h3>
                  <p className="mt-2 text-[10px] text-white/80">{app.subtitle}</p>
                </div>
              </div>
            ))}
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
