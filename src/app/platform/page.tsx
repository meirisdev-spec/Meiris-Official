import type { Metadata } from "next";
import Image from "next/image";
import platformModule from "@/assets/platform-module.jpg";
import platformFirmware from "@/assets/platform-firmware.jpg";
import PlatformParallax from "./PlatformParallax";

export const metadata: Metadata = {
  title: "Platform — Meiris Intelligent Power Conversion",
  description: "From grid input to precision output — a vertically integrated power conversion architecture built on Silicon Carbide devices and proprietary firmware.",
  openGraph: {
    title: "Meiris Platform — Intelligent Power Conversion",
    description: "Vertically integrated SiC power conversion platform engineered to convert, manage and orchestrate energy at 96% system efficiency.",
  },
};

const GREEN = "oklch(0.78 0.19 155)";

function FlowDiagram() {
  return (
    <div className="relative w-full max-w-[900px] h-[280px] flex items-center justify-between px-8 md:px-16">
      <div className="absolute left-[15%] right-[15%] top-1/2 h-[1px] bg-white/30 -translate-y-1/2 z-0"></div>
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
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white shadow-xl">
          <svg width="20" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M16 4h-2V2h-4v2H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
        <span className="text-[9px] font-bold tracking-widest text-black uppercase bg-white px-3 py-1.5 rounded-sm">STORAGE</span>
      </div>
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
    <div className="relative bg-black text-white">
      {/* Parallax scrolling sections 1–5 */}
      <PlatformParallax platformModule={platformModule} />

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
                &ldquo;Hardware defines the boundary of what is possible. Firmware defines what actually happens. MEIRIS owns both.&rdquo;
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
              { title: "EV Charging Solutions", subtitle: "DC Fast Chargers · AC Chargers · Onboard Chargers" },
              { title: "Solar", subtitle: "High output (>100 kVA) inverters" },
              { title: "Railway", subtitle: "Traction inverters · Auxiliary converters" },
              { title: "BESS", subtitle: "Power Conversion System (PCS)" },
            ].map((app, i) => (
              <div key={i} className="relative aspect-square md:aspect-[5/4] w-full overflow-hidden border border-white/10">
                <Image
                  src={platformModule}
                  alt={app.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-transform duration-700 hover:scale-105"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 pointer-events-none">
                  <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">{app.title}</h3>
                  <p className="mt-2 text-[10px] text-white/80">{app.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
