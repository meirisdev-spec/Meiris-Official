"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ChipGraphic, NetworkGraphic, ThreeLayers, GREEN } from "./Graphics";
import platformFirmware from "@/assets/platform-firmware.jpg";

interface Props {
  platformModule: StaticImageData;
}

export default function PlatformParallax({ platformModule }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      // Track scroll progress as long as we haven't scrolled completely past it
      if (rect.top <= 0) {
        const scrolled = -rect.top;
        const total = window.innerHeight * 50; // Restore 5000vh track length
        const p = Math.max(0, Math.min(1, scrolled / total));
        setProgress(p);
      } else if (rect.top > 0) {
        setProgress(0); // Before track starts
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

  // S1 (0 → 0.032)
  const s1Op = 1 - lerp(0.008, 0.032);
  const s1Y = 0;
  const s1ChipOp = 1 - lerp(0.008, 0.032);
  const s1ChipX = 0;

  // S2 (0.032 → 0.14)
  const s2In = lerp(0.032, 0.04);
  const s2Out = 1 - lerp(0.132, 0.14);
  const s2Op = Math.min(s2In, s2Out);
  const s2Y = rng(0.032, 0.04, 50, 0) + rng(0.132, 0.14, 0, -50);
  const s2Quote = lerp(0.096, 0.108); // Fixed gap: text ends at 0.096
  const s2Net = lerp(0.048, 0.112); 

  // S3 (0.14 → 0.24)
  const s3In = lerp(0.14, 0.148);
  const s3Out = 1 - lerp(0.232, 0.24);
  const s3Op = Math.min(s3In, s3Out);
  const s3BoxOp = Math.min(lerp(0.14, 0.148), s3Out);
  const s3BoxW = rng(0.14, 0.152, 0, 45);
  const s3DiagOp = lerp(0.16, 0.208);
  const s3C1Op = lerp(0.208, 0.216);
  const s3C1Y = rng(0.208, 0.216, 40, 0);
  const s3C2Op = lerp(0.216, 0.224);
  const s3C2Y = rng(0.216, 0.224, 40, 0);
  const s3C3Op = lerp(0.224, 0.232);
  const s3C3Y = rng(0.224, 0.232, 40, 0);

  // S4 (0.24 → 0.34)
  const s4In = lerp(0.24, 0.248);
  const s4Out = 1 - lerp(0.332, 0.34);
  const s4Op = Math.min(s4In, s4Out);
  const s4TextFadeOut = 1 - lerp(0.316, 0.328);
  const s4BoxScaleX = lerp(0.24, 0.26) * (1 - lerp(0.328, 0.34));
  const s4ImgOp = Math.min(lerp(0.26, 0.288), s4TextFadeOut);
  const s4Scale = rng(0.26, 0.328, 0.92, 1.06);

  // S5 (0.34 → 0.40)
  const s5In = lerp(0.34, 0.348);
  const s5Out = 1 - lerp(0.392, 0.40);
  const s5Op = Math.min(s5In, s5Out);
  const s5TitleOp = Math.min(lerp(0.34, 0.348), s5Out);
  const s5TitleY = rng(0.34, 0.348, 30, 0);
  const s5C1Op = Math.min(lerp(0.352, 0.364), s5Out);
  const s5C1X = rng(0.352, 0.364, -60, 0);
  const s5C2Op = Math.min(lerp(0.364, 0.376), s5Out);
  const s5C2X = rng(0.364, 0.376, -60, 0);
  const s5QuoteOp = Math.min(lerp(0.376, 0.380), s5Out);

  // S6: Video/Image Frame (0.40 → 0.43)
  const s6In = lerp(0.40, 0.41);
  const s6Out = 1 - lerp(0.42, 0.43);
  const s6Op = Math.min(s6In, s6Out);
  const s6ImgOp = Math.min(lerp(0.405, 0.415), 1 - lerp(0.415, 0.425));

  // S7: Firmware Text Showcase (0.43 → 0.60)
  const s7In = lerp(0.43, 0.45);
  // Restore fade out so Section 8 can take over cleanly!
  const s7Out = 1 - lerp(0.58, 0.60);
  const s7Op = Math.min(s7In, s7Out); 
  const s7Quote = lerp(0.53, 0.55);
  const s7ImgOp = lerp(0.48, 0.53);

  // S8: 4 Cards Reveal and Upward Pan (0.60 → 1.0)
  const s8In = lerp(0.60, 0.62);
  const s8Op = s8In; 
  
  // Title & Intro (0.62 -> 0.64), HOLD until 0.76 when pan starts
  const s8TitleOp = lerp(0.62, 0.64);
  const s8TitleY = rng(0.62, 0.64, 30, 0);
  const s8IntroOp = lerp(0.64, 0.66);
  
  // Row 1 (Cards 1 & 2) slides in (0.68 -> 0.72)
  const s8R1Op = lerp(0.68, 0.72);
  const s8C1X = rng(0.68, 0.72, -150, 0);
  const s8C2X = rng(0.68, 0.72, 150, 0);
  
  // HOLD Row 1 from 0.72 -> 0.76
  // Pan Upwards (0.76 -> 0.84)
  const s8PanY = rng(0.76, 0.84, 0, -45); // moves up by 45vh (less aggressive than 60)
  
  // Row 2 (Cards 3 & 4) slides in as space is revealed (0.80 -> 0.84)
  const s8R2Op = lerp(0.80, 0.84);
  const s8C3X = rng(0.80, 0.84, -150, 0);
  const s8C4X = rng(0.80, 0.84, 150, 0);

  function TypewriterScroll({ text, start, end, className }: { text: string, start: number, end: number, className?: string }) {
    const tokens = text.split(/(\n| )/);
    let wordCount = tokens.filter(t => t !== " " && t !== "\n").length;
    let wordIdx = 0;
    
    return (
      <span className={className}>
        {tokens.map((token, i) => {
          if (token === "\n") return <br key={i} />;
          if (token === " ") return <span key={i}> </span>;
          
          const pStart = start + (wordIdx / wordCount) * (end - start);
          const pEnd = Math.min(end, pStart + (end - start) / wordCount * 2);
          const opacity = lerp(pStart, pEnd);
          wordIdx++;
          
          return <span key={i} style={{ opacity }}>{token}</span>;
        })}
      </span>
    );
  }

  return (
    <>
      {/* Scroll track — 4300vh tall to end perfectly at p=0.84 when Row 2 finishes */}
      <div ref={containerRef} style={{ height: "4300vh", position: "relative" }}>
        {/* Sticky stage — sticks to the top and natively scrolls up when the track ends! */}
        <div style={{ position: "sticky", top: 0, width: "100%", height: "100vh", zIndex: 0, backgroundColor: "#000", overflow: "hidden" }}>

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
                <h2 className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
                  <TypewriterScroll text={"Energy is everywhere.\nIntelligence is not."} start={0.032} end={0.044} />
                </h2>
                <p className="mt-10 max-w-xl text-[clamp(0.95rem,1.5vw,1.15rem)] font-semibold leading-snug text-white">
                  <TypewriterScroll text={"The Energy Transition is not a hardware problem.\nIt is a conversion problem."} start={0.044} end={0.056} />
                </p>
                <div>
                  <p className="mt-10 max-w-xl text-[clamp(0.8rem,1.2vw,0.95rem)] leading-[1.55] text-white/55">
                    <TypewriterScroll text={"Every megawatt of renewable generation, every EV, every battery system requires conversion. Every aspect of electricity generation and consumption involves an element of conversion. Raw electrical energy from the grid must be transformed, regulated, and delivered with precision to every load, every 10ms. With variable sources and changing load profiles the conversion problem has become more complex. The efficiency of that conversion determines the efficiency of the entire energy system. Conversion efficiency can no longer be ignored."} start={0.056} end={0.088} />
                  </p>
                  <p className="mt-6 text-[clamp(0.85rem,1.3vw,1rem)] text-white">
                    <TypewriterScroll text={"MEIRIS was built to solve it differently."} start={0.088} end={0.096} />
                  </p>
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
            <div className="mx-auto w-full max-w-[1180px] flex flex-col justify-center relative px-6 sm:px-8 py-8 lg:px-10">
              <div
                className="absolute top-12 bottom-12 left-0 rounded-[2rem] rounded-br-none z-0"
                style={{ width: `${s3BoxW}%`, opacity: s3BoxOp, background: "#e6e6e6" }}
              />
              <div className="relative z-10 flex flex-col">
                <div className="flex flex-col md:flex-row flex-1 min-h-0">
                  <div className="w-full md:w-[38%] p-10 md:p-12 pt-16 text-black">
                    <p className="text-[10px] font-bold tracking-widest text-black/50 uppercase">
                      <TypewriterScroll text={"Architecture"} start={0.152} end={0.16} />
                    </p>
                    <h2 className="mt-8 text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-black">
                      <TypewriterScroll text={"Three Layers.\nOne Architecture."} start={0.16} end={0.176} />
                    </h2>
                    <p className="mt-6 text-sm text-black/70 leading-relaxed">
                      <TypewriterScroll text={"The silicon foundation of wide-bandgap SiC power module devices, the precision of a proprietary control architecture, the intelligence of patented firmware algorithms that orchestrate energy conversion in real time. Every layer of the MEIRIS Platform is designed, developed, and owned by MEIRIS."} start={0.176} end={0.208} />
                    </p>
                  </div>
                  <div className="w-full md:w-[62%] flex items-center justify-center p-8" style={{ opacity: s3DiagOp }}>
                    <ThreeLayers />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 md:px-12 pb-8 mt-6">
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
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", opacity: s4Op, willChange: "opacity" }}>
            <div className="absolute inset-0 z-0 flex" style={{ opacity: s4Op }}>
              <div className="w-full bg-[#e6e6e6] md:w-1/2 h-full origin-left" style={{ transform: `scaleX(${s4BoxScaleX})` }} />
              <div className="hidden w-1/2 bg-black md:block h-full" />
            </div>
            <div className="relative z-10 grid w-full grid-cols-1 md:grid-cols-2">
              <div className="px-8 py-12 md:py-24 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center" style={{ opacity: s4TextFadeOut }}>
                <div className="w-full text-black">
                  <h2 className="text-[clamp(2.75rem,3.8vw,4rem)] font-bold leading-[1.05] tracking-tight">
                    <TypewriterScroll text={"Power Conversion,\nrethought at the\nSilicon Level"} start={0.26} end={0.272} />
                  </h2>
                <p className="mt-8 text-[15px] leading-relaxed text-black/80">
                  <TypewriterScroll text={"The platform's core is built around Silicon Carbide — a wide-bandgap semiconductor that operates at higher voltages, higher switching frequencies, and higher junction temperatures than conventional Silicon devices."} start={0.272} end={0.284} />
                </p>
                <p className="mt-6 text-[15px] leading-relaxed text-black/80">
                  <TypewriterScroll text={"Each module integrates a bidirectional active rectifier built on SiC MOSFETs with Active Power Factor Correction. The result:"} start={0.284} end={0.296} />
                  {" "}
                  <span className="font-bold text-[#00E573]">
                    <TypewriterScroll text={"grid-clean conversion, minimal harmonic distortion, and zero reactive power waste"} start={0.296} end={0.308} />
                  </span>
                  {" "}
                  <TypewriterScroll text={"at the conversion stage."} start={0.308} end={0.312} />
                </p>
                </div>
              </div>
              <div className="flex items-center justify-center px-8 py-12 md:py-24 md:pl-16" style={{ opacity: s4ImgOp }}>
                <div style={{ transform: `scale(${s4Scale})` }}>
                  <Image src={platformModule} alt="MEIRIS power module" className="w-full max-w-[560px]" placeholder="blur" />
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 5 ───────────────────────────────────── */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", opacity: s5Op, willChange: "opacity" }}>
            <div className="mx-auto flex h-full w-full max-w-[1240px] flex-col justify-center px-8 sm:px-10 lg:px-12">
              <h2 className="text-[clamp(2.5rem,4vw,3.75rem)] font-bold tracking-tight text-white" style={{ transform: `translateY(${s5TitleY}px)`, opacity: s5TitleOp }}>
                Power has a direction.<br/>We removed the constraint.
              </h2>
              <p className="mt-4 text-lg font-medium text-[#00E573]" style={{ transform: `translateY(${s5TitleY}px)`, opacity: s5TitleOp }}>
                Bidirectionality is not a feature. It is the architecture.
              </p>
              <div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/20 p-8" style={{ opacity: s5C1Op, transform: `translateX(${s5C1X}px)` }}>
                  <p className="text-[13px] leading-relaxed text-white/80">Bidirectionality is native to SiC devices. The same firmware that manages charging can manage discharge. There is no mode switch.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/20 p-8" style={{ opacity: s5C2Op, transform: `translateX(${s5C2X}px)` }}>
                  <p className="text-[13px] leading-relaxed text-white/80">The result: MEIRIS-powered systems can be simultaneously a power delivery system and an energy recovery system. An EV battery becomes a dispatchable grid resource. A storage bank becomes a frequency regulation asset. A distributed energy node becomes a grid-interactive participant. The physics of conversion are identical in both directions. The intelligence defines direction, magnitude, and timing.</p>
                </div>
              </div>
              <div className="mt-20 border-l-2 pl-6" style={{ borderColor: GREEN, opacity: s5QuoteOp }}>
                <p className="max-w-4xl text-[13px] italic leading-relaxed text-white/80">
                  &ldquo;The architecture that charges a battery is the same architecture that dispatches its energy to the grid. That is not a capability addition. That is a different way of thinking about power conversion.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* ── SECTION 6 ───────────────────────────────────── */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(90deg, #00E573 0%, #002b5e 100%)", opacity: s6Op, willChange: "opacity" }}>
            <div className="w-full max-w-[1200px] px-8 flex justify-center" style={{ opacity: s6ImgOp }}>
              {/* Using the platformModule as a placeholder for the video frame scroll */}
              <Image src={platformModule} alt="Video Placeholder" className="w-full max-w-[900px] h-auto object-cover opacity-80 mix-blend-screen" />
            </div>
          </div>

          {/* ── SECTION 7 ───────────────────────────────────── */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", opacity: s7Op, willChange: "opacity" }}>
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-[1fr_1.1fr]">
              <div className="flex flex-col">
                <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold leading-[1.05] tracking-tight text-white">
                  <TypewriterScroll text={"The firmware\nmakes the\nplatform\nwhat it is."} start={0.45} end={0.47} />
                </h2>
                <p className="mt-12 max-w-sm text-[13px] leading-relaxed text-white/70">
                  <TypewriterScroll text={"The controller units built on a proprietary architecture and firmware form the intelligence layer that makes the platform coherent across all operating conditions, load profiles, and application contexts"} start={0.47} end={0.50} />
                </p>
                <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-white/70">
                  <TypewriterScroll text={"Patented firmware orchestrates real-time power control, dynamic load management, predictive energy optimization, and grid integration without middleware latency."} start={0.50} end={0.53} />
                </p>
                <div className="mt-12 border-l-2 border-[#00E573] pl-6" style={{ opacity: s7Quote }}>
                  <p className="max-w-md text-sm italic leading-relaxed text-white/80">
                    &ldquo;Hardware defines the boundary of what is possible. Firmware defines what actually happens. MEIRIS owns both.&rdquo;
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center" style={{ opacity: s7ImgOp }}>
                <Image src={platformFirmware} alt="Glowing SiC MOSFET representing MEIRIS firmware intelligence core" className="w-full max-w-[600px]" placeholder="blur" />
                <div className="mt-6 flex w-full max-w-[500px] items-center justify-between">
                  <p className="text-sm text-white/80">MEIRIS Intelligence Core</p>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/40">
                    <path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 8 ───────────────────────────────────── */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingTop: "15vh", opacity: s8Op, willChange: "opacity" }}>
            <div className="mx-auto w-full max-w-[1200px] px-8" style={{ transform: `translateY(${s8PanY}vh)` }}>
              
              <div style={{ opacity: s8TitleOp, transform: `translateY(${s8TitleY}px)` }}>
                <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white">
                  One Platform. Multiple Applications
                </h2>
              </div>
              <div style={{ opacity: s8IntroOp }}>
                <p className="mt-6 max-w-4xl text-[13px] leading-relaxed text-white/70">
                  The power module platform architecture, control topology, and firmware intelligence are consistent across applications. Application-specific behaviour is determined at the software layer — not through hardware redesign.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Card 1 - From Left */}
                <div className="relative aspect-square md:aspect-[5/4] w-full overflow-hidden border border-white/10" style={{ opacity: s8R1Op, transform: `translateX(${s8C1X}px)` }}>
                  <Image src={platformModule} alt="EV Charging Solutions" className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-transform duration-700 hover:scale-105" placeholder="blur" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-10 pointer-events-none">
                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-white">EV Charging Solutions</h3>
                    <p className="mt-2 text-[10px] text-white/80">DC Fast Chargers · AC Chargers · Onboard Chargers</p>
                  </div>
                </div>
                
                {/* Card 2 - From Right */}
                <div className="relative aspect-square md:aspect-[5/4] w-full overflow-hidden border border-white/10" style={{ opacity: s8R1Op, transform: `translateX(${s8C2X}px)` }}>
                  <Image src={platformModule} alt="Solar" className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-transform duration-700 hover:scale-105" placeholder="blur" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-10 pointer-events-none">
                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-white">Solar</h3>
                    <p className="mt-2 text-[10px] text-white/80">High output (&gt;100 kVA) inverters</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Card 3 - From Left */}
                <div className="relative aspect-square md:aspect-[5/4] w-full overflow-hidden border border-white/10" style={{ opacity: s8R2Op, transform: `translateX(${s8C3X}px)` }}>
                  <Image src={platformModule} alt="Railway" className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-transform duration-700 hover:scale-105" placeholder="blur" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-10 pointer-events-none">
                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-white">Railway</h3>
                    <p className="mt-2 text-[10px] text-white/80">Traction inverters · Auxiliary converters</p>
                  </div>
                </div>
                
                {/* Card 4 - From Right */}
                <div className="relative aspect-square md:aspect-[5/4] w-full overflow-hidden border border-white/10" style={{ opacity: s8R2Op, transform: `translateX(${s8C4X}px)` }}>
                  <Image src={platformModule} alt="BESS" className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-transform duration-700 hover:scale-105" placeholder="blur" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-10 pointer-events-none">
                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-white">BESS</h3>
                    <p className="mt-2 text-[10px] text-white/80">Power Conversion System (PCS)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
