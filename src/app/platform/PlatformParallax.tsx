"use client";

import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChipGraphic, NetworkGraphic, ThreeLayers, GREEN } from "./Graphics";

interface Props {
  platformModule: StaticImageData;
}

export default function PlatformParallax({ platformModule }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elHeight = el.offsetHeight;
      const windowH = window.innerHeight;
      const navH = 68;

      // Container top relative to viewport
      const containerTop = rect.top - navH;
      const containerBottom = rect.bottom - navH;

      // Are we within the parallax zone?
      const active = containerTop <= 0 && containerBottom >= windowH - navH;
      setIsActive(active);

      if (active) {
        const scrolled = -containerTop;
        const total = elHeight - (windowH - navH);
        const p = Math.max(0, Math.min(1, scrolled / total));
        setProgress(p);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ΓöÇΓöÇ Interpolation helpers ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  function lerp(start: number, end: number): number {
    if (progress <= start) return 0;
    if (progress >= end) return 1;
    return (progress - start) / (end - start);
  }

  function rng(inS: number, inE: number, outS: number, outE: number): number {
    const t = lerp(inS, inE);
    return outS + t * (outE - outS);
  }

  // ── Section animation values ──────────────────────────────────────────

  // S1 (0 → 0.2)
  const s1Op = 1 - lerp(0.16, 0.19);
  const s1Y = rng(0, 0.2, 0, -60);
  const s1ChipOp = lerp(0, 0.06) * (1 - lerp(0.16, 0.19));
  const s1ChipX = rng(0, 0.06, 80, 0);

  // S2 (0.2 → 0.4)
  const s2In = lerp(0.20, 0.23);
  const s2Out = 1 - lerp(0.36, 0.39);
  const s2Op = Math.min(s2In, s2Out);
  const s2Y = rng(0.20, 0.23, 50, 0) + rng(0.36, 0.39, 0, -50);
  const s2Title = lerp(0.20, 0.23);
  const s2Sub = lerp(0.22, 0.25);
  const s2Body = lerp(0.24, 0.27);
  const s2Quote = lerp(0.27, 0.30);
  const s2Net = lerp(0.22, 0.26);

  // S3 (0.4 → 0.6)
  const s3In = lerp(0.40, 0.43);
  const s3Out = 1 - lerp(0.57, 0.59);
  const s3Op = Math.min(s3In, s3Out);
  const s3BoxW = rng(0.40, 0.46, 0, 38);
  const s3BoxOp = Math.min(lerp(0.40, 0.43), 1 - lerp(0.57, 0.59));
  const s3Diag = lerp(0.44, 0.48);
  const s3C1Op = lerp(0.48, 0.51);
  const s3C1Y = rng(0.48, 0.51, 30, 0);
  const s3C2Op = lerp(0.50, 0.53);
  const s3C2Y = rng(0.50, 0.53, 30, 0);
  const s3C3Op = lerp(0.52, 0.55);
  const s3C3Y = rng(0.52, 0.55, 30, 0);

  // S4 (0.6 → 0.8)
  const s4In = lerp(0.60, 0.63);
  const s4Out = 1 - lerp(0.77, 0.79);
  const s4Op = Math.min(s4In, s4Out);
  const s4Y = rng(0.60, 0.63, 50, 0);
  const s4Scale = rng(0.60, 0.78, 0.92, 1.06);

  // S5 (0.8 → 1.0)
  const s5Op = lerp(0.80, 0.83);
  const s5TitleOp = lerp(0.80, 0.83);
  const s5TitleY = rng(0.80, 0.83, 30, 0);
  const s5C1Op = lerp(0.83, 0.86);
  const s5C1X = rng(0.83, 0.86, -60, 0);
  const s5C2Op = lerp(0.85, 0.88);
  const s5C2X = rng(0.85, 0.88, -60, 0);
  const s5C3Op = lerp(0.87, 0.90);
  const s5C3X = rng(0.87, 0.90, -60, 0);
  const s5QuoteOp = lerp(0.90, 0.93);

  return (
    <>
      {/* Scroll track — 500vh tall, creates the scroll distance */}
      <div ref={containerRef} style={{ height: "500vh", position: "relative" }} />

      {/* Fixed stage — only visible when we're inside the scroll track */}
      {isActive && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            background: "#000",
            zIndex: 10,
          }}
        >

          {/* ── SECTION 1 ───────────────────────────────────── */}
          <div
            style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: s1Op,
              transform: `translateY(${s1Y}px)`,
              willChange: "opacity, transform",
            }}
          >
            <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-8 sm:px-10 md:grid-cols-[1.15fr_1fr] md:gap-16 lg:px-12">
              <div>
                <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
                  Intelligent<br />Power<br />Conversion.
                </h1>
                <p className="mt-16 max-w-xl text-[clamp(1rem,1.8vw,1.35rem)] font-semibold leading-snug text-white">
                  From grid input to precision output — a single vertically integrated architecture.
                </p>
                <p className="mt-12 max-w-xl text-[clamp(0.85rem,1.3vw,1rem)] leading-[1.55] text-white/60">
                  The MEIRIS Platform is a vertically integrated power conversion platform built using
                  Silicon Carbide (SiC) devices &amp; proprietary firmware, engineered to convert, manage, and
                  orchestrate energy with precision at 96% system efficiency.
                </p>
              </div>
              <div
                style={{ opacity: s1ChipOp, transform: `translateX(${s1ChipX}px)`, willChange: "opacity, transform" }}
                className="flex items-center justify-center md:justify-end"
              >
                <ChipGraphic />
              </div>
            </div>
          </div>

          {/* ── SECTION 2 ───────────────────────────────────── */}
          <div
            style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: s2Op,
              transform: `translateY(${s2Y}px)`,
              willChange: "opacity, transform",
            }}
          >
            <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-8 sm:px-10 md:grid-cols-[1.1fr_1fr] md:gap-14 lg:px-12">
              <div>
                <h2
                  className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white"
                  style={{ opacity: s2Title }}
                >
                  Energy is everywhere.<br />Intelligence is not.
                </h2>
                <p
                  className="mt-10 max-w-xl text-[clamp(0.95rem,1.5vw,1.15rem)] font-semibold leading-snug text-white"
                  style={{ opacity: s2Sub }}
                >
                  The Energy Transition is not a hardware problem.<br />It is a conversion problem.
                </p>
                <div style={{ opacity: s2Body }}>
                  <p className="mt-10 max-w-xl text-[clamp(0.8rem,1.2vw,0.95rem)] leading-[1.55] text-white/55">
                    Every megawatt of renewable generation, every EV, every battery system requires
                    conversion. Every aspect of electricity generation and consumption involves an element
                    of conversion. Raw electrical energy from the grid must be transformed, regulated, and
                    delivered with precision to every load, every 10ms. With variable sources and changing
                    load profiles the conversion problem has become more complex. The efficiency of that
                    conversion determines the efficiency of the entire energy system. Conversion
                    efficiency can no longer be ignored.
                  </p>
                  <p className="mt-6 text-[clamp(0.85rem,1.3vw,1rem)] text-white">MEIRIS was built to solve it differently.</p>
                </div>
                <div className="mt-12 border-l-2 pl-6" style={{ borderColor: GREEN, opacity: s2Quote }}>
                  <p className="max-w-lg text-[clamp(0.8rem,1.1vw,0.9rem)] italic leading-[1.8] text-white/65">
                    &ldquo;The gap between raw electrical energy and intelligent, precise power delivery is
                    where the next generation of energy infrastructure is built.&rdquo;
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-widest" style={{ color: GREEN }}>
                    — MEIRIS Engineering
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end" style={{ opacity: s2Net }}>
                <NetworkGraphic />
              </div>
            </div>
          </div>

          {/* ── SECTION 3 ───────────────────────────────────── */}
          <div
            style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: s3Op,
              willChange: "opacity",
            }}
          >
            <div className="mx-auto w-full max-w-[1180px] h-full flex flex-col justify-center relative px-6 sm:px-8 py-8 lg:px-10">
              <div
                className="absolute top-0 bottom-0 left-0 rounded-[2rem] rounded-br-none z-0"
                style={{ width: `${s3BoxW}%`, opacity: s3BoxOp, background: "#e6e6e6" }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col md:flex-row flex-1 min-h-0">
                  <div className="w-full md:w-[38%] p-10 md:p-12 pt-16 text-black">
                    <p className="text-[10px] font-bold tracking-widest text-black/50 uppercase">Architecture</p>
                    <h2 className="mt-8 text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-black">
                      Three Layers.<br />One Architecture.
                    </h2>
                    <p className="mt-6 text-sm text-black/70 leading-relaxed">
                      The silicon foundation of wide-bandgap SiC power module devices, the precision of a proprietary
                      control architecture, the intelligence of patented firmware algorithms that orchestrate energy
                      conversion in real time. Every layer of the MEIRIS Platform is designed, developed, and owned by MEIRIS.
                    </p>
                  </div>
                  <div className="w-full md:w-[62%] flex items-center justify-center p-8" style={{ opacity: s3Diag }}>
                    <ThreeLayers />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] px-8 md:px-12 pb-8 mt-6">
                  <div className="bg-[#2c2d2e] p-8 text-white rounded-t-[1.5rem] md:rounded-tr-none md:rounded-l-[1.5rem] md:rounded-bl-[2rem]" style={{ opacity: s3C1Op, transform: `translateY(${s3C1Y}px)` }}>
                    <h3 className="text-base font-semibold">Silicon Foundation</h3>
                    <p className="mt-4 text-xs leading-relaxed text-white/50">SiC-based bidirectional power modules. Patented switching topologies. 30kW per module, scalable in parallel.</p>
                  </div>
                  <div className="bg-[#2c2d2e] p-8 text-white" style={{ opacity: s3C2Op, transform: `translateY(${s3C2Y}px)` }}>
                    <h3 className="text-base font-semibold">Control Architecture</h3>
                    <p className="mt-4 text-xs leading-relaxed text-white/50">Proprietary SoC controller. DSP driven real-time switching. Multi module coordination and BMS communication.</p>
                  </div>
                  <div className="bg-[#2c2d2e] p-8 text-white rounded-b-[1.5rem] md:rounded-bl-none md:rounded-r-[1.5rem]" style={{ opacity: s3C3Op, transform: `translateY(${s3C3Y}px)` }}>
                    <h3 className="text-base font-semibold">Firmware Intelligence</h3>
                    <p className="mt-4 text-xs leading-relaxed text-white/50">Patented control algorithms. V2X energy routing. Grid demand response, ISO 15118, OCPP, and predictive management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 4 ───────────────────────────────────── */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", opacity: s4Op, willChange: "opacity, transform" }}>
            <div className="absolute inset-0 z-0 flex" style={{ opacity: s4Op }}>
              <div className="w-full bg-[#e6e6e6] md:w-1/2 h-full" />
              <div className="hidden w-1/2 bg-black md:block h-full" />
            </div>
            <div className="relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-1 md:grid-cols-2 px-6 sm:px-8 lg:px-10" style={{ transform: `translateY(${s4Y}px)` }}>
              <div className="px-8 py-12 md:py-24 md:pr-16 lg:pr-24 text-black">
                <h2 className="text-[clamp(2.5rem,4vw,3.75rem)] font-bold leading-[1.05] tracking-tight">
                  Power<br />conversion,<br />rethought at<br />the silicon level
                </h2>
                <p className="mt-8 text-[13px] leading-relaxed text-black/80">
                  The platform&apos;s core is built around Silicon Carbide — a wide-bandgap semiconductor that operates at higher
                  voltages, higher switching frequencies, and higher junction temperatures than conventional Silicon devices.
                </p>
                <p className="mt-6 text-[13px] leading-relaxed text-black/80">
                  Each module integrates a bidirectional active rectifier built on SiC MOSFETs with Active Power Factor
                  Correction. The result: <span className="font-bold text-[#00E573]">grid-clean conversion, minimal harmonic
                    distortion, and zero reactive power waste</span> at the conversion stage.
                </p>
              </div>
              <div className="flex items-center justify-center px-8 py-12 md:py-24 md:pl-16">
                <div style={{ transform: `scale(${s4Scale})` }}>
                  <Image src={platformModule} alt="MEIRIS power module" className="w-full max-w-[560px]" placeholder="blur" />
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 5 ───────────────────────────────────── */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: s5Op, willChange: "opacity" }}>
            <div className="mx-auto w-full max-w-[1180px] px-8 sm:px-10 lg:px-12">
              <h2 className="max-w-3xl text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white" style={{ opacity: s5TitleOp, transform: `translateY(${s5TitleY}px)` }}>
                The firmware makes the platform<br />what it is.
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/20 p-8" style={{ opacity: s5C1Op, transform: `translateX(${s5C1X}px)` }}>
                  <p className="text-[13px] leading-relaxed text-white/80">
                    Bidirectionality is embedded in the topology of every power module. The same firmware that manages
                    charging manages discharge. There is no mode switch. The direction of energy flow is a software variable.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/20 p-8" style={{ opacity: s5C2Op, transform: `translateX(${s5C2X}px)` }}>
                  <p className="text-[13px] leading-relaxed text-white/80">
                    Each module integrates a bidirectional active rectifier built on SiC MOSFETs in a three-phase active
                    bridge configuration with Active Power Factor Correction approaching unity.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/20 p-8" style={{ opacity: s5C3Op, transform: `translateX(${s5C3X}px)` }}>
                  <p className="text-[13px] leading-relaxed text-white/80">
                    Every MEIRIS-powered system is simultaneously a power delivery system and an energy recovery system.
                    An EV battery becomes a dispatchable grid resource. A distributed energy node becomes grid-interactive.
                  </p>
                </div>
              </div>
              <div className="mt-14 border-l-2 border-[#00E573] pl-6" style={{ opacity: s5QuoteOp }}>
                <p className="max-w-4xl text-sm italic leading-relaxed text-white/70">
                  &ldquo;The architecture that charges a battery is the same architecture that dispatches its energy to the grid.
                  That is not a capability addition. That is a different way of thinking about power conversion.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
