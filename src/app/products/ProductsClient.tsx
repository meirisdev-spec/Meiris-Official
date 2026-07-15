"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import solDepot from "@/assets/sol-depot.jpg";
import solCharge from "@/assets/sol-charge.jpg";
import solHospitality from "@/assets/sol-hospitality.jpg";
import platformModule from "@/assets/platform-module.jpg";


export default function ProductsPage() {
  const [activeDetail, setActiveDetail] = useState<'ac' | 'dc' | null>(null);

  return (
    <div className="relative min-h-screen bg-[#111111] text-white selection:bg-[#00E573] selection:text-black">

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

      {/* Products Grid / Detail View */}
      <section className={`bg-[#111111] py-24 transition-all duration-500 ${activeDetail !== null ? 'px-0' : 'px-8 md:px-16'}`}>
        <div className={`mx-auto ${activeDetail !== null ? 'w-full max-w-none' : 'max-w-[1400px]'}`}>
          {activeDetail === null ? (
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
                <button 
                  onClick={() => setActiveDetail('ac')}
                  className="w-full bg-[#d9d9d9] hover:bg-[#c9c9c9] transition-colors text-black py-5 flex items-center justify-center gap-3 text-[13px] font-medium border border-black/10"
                >
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
                <button 
                  onClick={() => setActiveDetail('dc')}
                  className="w-full bg-[#d9d9d9] hover:bg-[#c9c9c9] transition-colors text-black py-5 flex items-center justify-center gap-3 text-[13px] font-medium border border-black/10"
                >
                  See how it works
                  <span className="font-light">→</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full bg-white text-black relative flex flex-col min-h-[700px] rounded-sm overflow-hidden animate-in fade-in zoom-in-95 duration-300 shadow-2xl">
              {/* Top Header & Navigation */}
              <div className="flex items-center justify-between px-10 py-10 border-b border-black/10">
                <button className="text-black/50 hover:text-black transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                
                <div className="flex gap-6 md:gap-10 text-[11px] font-bold tracking-wide">
                  <button className="bg-[#00E573] text-white px-5 py-2.5 rounded-full shadow-sm">
                    {activeDetail === 'ac' ? '3.3 kW' : '30 kW'}
                  </button>
                  <button className="text-black/40 hover:text-black px-2 py-2.5 transition-colors">
                    {activeDetail === 'ac' ? '7.4 kW' : '60 kW'}
                  </button>
                  <button className="text-black/40 hover:text-black px-2 py-2.5 transition-colors">
                    {activeDetail === 'ac' ? '11 kW' : '120 kW'}
                  </button>
                  <button className="text-black/40 hover:text-black px-2 py-2.5 transition-colors">
                    {activeDetail === 'ac' ? '22 kW' : '240 kW'}
                  </button>
                </div>

                <div className="flex items-center gap-10">
                  <button className="text-black/50 hover:text-black transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                  <button onClick={() => setActiveDetail(null)} className="text-black/40 hover:text-black transition-colors p-2 -mr-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col md:flex-row relative">
                {/* Left Text */}
                <div className="w-full md:w-[40%] p-10 md:p-16 flex flex-col justify-center z-10">
                  <h2 className="text-[2.75rem] font-bold mb-6 tracking-tight">
                    Model {activeDetail === 'ac' ? '3.3 kW' : '30 kW'}
                  </h2>
                  <p className="text-[1.35rem] font-bold leading-[1.1] tracking-tight text-black">
                    {activeDetail === 'ac' ? (
                      <>
                        Compact wall mount<br/>
                        Home residential bay<br/>
                        Single-phase, overnight
                      </>
                    ) : (
                      <>
                        Robust floor mount<br/>
                        Fleet & commercial depot<br/>
                        DC Fast Charging, bulk
                      </>
                    )}
                  </p>
                </div>
                
                {/* Right Carousel Area */}
                <div className="w-full md:w-[60%] relative flex items-center justify-start overflow-hidden py-16 pl-10 md:pl-0">
                  {/* Center Image */}
                  <div className="w-[280px] md:w-[320px] aspect-[9/16] rounded-[2rem] flex-shrink-0 relative overflow-hidden z-10 shadow-2xl bg-gray-100">
                      <Image src={platformModule} alt="Charger Graphic" className="w-full h-full object-cover" />
                      {/* Gradient overlay to make it look like a product render */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-black/20 pointer-events-none"></div>
                  </div>
                  {/* Next Image partially visible */}
                  <div className="w-[280px] md:w-[320px] aspect-[9/16] rounded-[2rem] flex-shrink-0 ml-16 scale-90 relative overflow-hidden opacity-40 bg-gray-100">
                      <Image src={platformModule} alt="Charger Graphic" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-white/50 pointer-events-none"></div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Green Bar */}
              <div className="w-full bg-[#00E573] py-8 px-10 text-white font-bold text-[1.75rem] tracking-tight">
                Model {activeDetail === 'ac' ? '3.3 kW' : '30 kW'}
              </div>
            </div>
          )}
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
      

    </div>
  );
}
