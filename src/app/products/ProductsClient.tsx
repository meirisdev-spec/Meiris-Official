"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import solDepot from "@/assets/sol-depot.jpg";
import solCharge from "@/assets/sol-charge.jpg";
import solHospitality from "@/assets/sol-hospitality.jpg";
import platformModule from "@/assets/platform-module.jpg";

const acModels = [
  { id: '3.3', name: '3.3 kW', formFactor: 'Compact wall mount', useCase: 'Home / residential bay', spec: 'Single-phase, overnight charging' },
  { id: '7.4', name: '7.4 kW', formFactor: 'Compact wall mount', useCase: 'Home / residential bay', spec: 'Single-phase, faster overnight' },
  { id: '11', name: '11 kW', formFactor: 'Wall mount / pedestal', useCase: 'Workplace / apartment complex', spec: 'Three-phase' },
  { id: '22', name: '22 kW', formFactor: 'Pedestal', useCase: 'Workplace / commercial car park', spec: 'Three-phase, higher throughput' },
];

const dcModels = [
  { id: '30', name: '30 kW', formFactor: 'Compact pedestal', useCase: 'Cab / light EV depot', spec: 'Si/SiC-based, compact footprint' },
  { id: '60', name: '60 kW', formFactor: 'Floor mounted', useCase: 'Cab / light commercial depot', spec: 'Si/SiC-based' },
  { id: '120', name: '120 kW', formFactor: 'Floor mounted', useCase: 'Bus / truck depot, highway site', spec: 'Si/SiC-based, high power' },
  { id: '180', name: '180 kW', formFactor: 'Floor mounted', useCase: 'Bus / truck depot, highway site', spec: 'Si/SiC-based, high power' },
  { id: '240', name: '240 kW', formFactor: 'Floor mounted', useCase: 'Heavy commercial depot, HPC hub', spec: 'MEIRIS CHARGE Plus flagship, Si/SiC based' },
  { id: '360', name: '360 kW', formFactor: 'Floor mounted', useCase: 'Ultra-high power, HPC hub', spec: 'Si/SiC based, Multi-module, high-throughput' },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<'ac' | 'dc' | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  
  // Animation and selected model state
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [animState, setAnimState] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('right');

  const heroRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");

            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.remove("opacity-0", "translate-y-10");
                child.classList.add("opacity-100", "translate-y-0");
              }, 150 + i * 150);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    [heroRef, productsRef, servicesRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  // Lock body scroll when detail view is open
  useEffect(() => {
    if (activeCategory !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset animation states when closing
      setActiveModelIndex(0);
      setAnimState('idle');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCategory]);

  const handleModelChange = (newIndex: number) => {
    if (newIndex === activeModelIndex || animState !== 'idle') return;
    
    setAnimationDirection(newIndex > activeModelIndex ? 'right' : 'left');
    setAnimState('exiting');
    
    setTimeout(() => {
      setActiveModelIndex(newIndex);
      setAnimState('entering');
      
      setTimeout(() => {
        setAnimState('idle');
      }, 50); // Small delay to let browser apply 'entering' layout before animating to 'idle'
    }, 300); // Wait for exit animation to complete
  };

  const currentModels = activeCategory === 'ac' ? acModels : activeCategory === 'dc' ? dcModels : [];
  const activeModel = currentModels[activeModelIndex] || acModels[0];

  // Derive CSS classes based on animation state
  const textClasses = animState === 'idle' 
    ? 'opacity-100 transition-opacity duration-300' 
    : 'opacity-0 transition-opacity duration-300';

  let imageClasses = '';
  if (animState === 'idle') {
    imageClasses = 'translate-x-0 opacity-100 transition-all duration-500 ease-out';
  } else if (animState === 'exiting') {
    imageClasses = `transition-all duration-300 ease-in opacity-0 ${
      animationDirection === 'right' ? '-translate-x-full' : 'translate-x-full'
    }`;
  } else if (animState === 'entering') {
    // transition-none ensures we snap to the correct starting position instantly
    imageClasses = `transition-none opacity-0 ${
      animationDirection === 'right' ? 'translate-x-full' : '-translate-x-full'
    }`;
  }

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveCategory(null);
      setIsClosing(false);
    }, 450); // wait for fade-out duration
  };

  return (
    <div className="relative bg-[#111111] text-white selection:bg-[#00E573] selection:text-black">

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative flex w-full min-h-screen flex-col justify-center bg-black overflow-hidden opacity-0 translate-y-10 transition duration-1000 ease-out"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <Image src={solHospitality} alt="Commercial Charging" className="h-full w-full object-cover object-right" placeholder="blur" />
          </div>
          <div 
            className="absolute inset-0"
            style={{ clipPath: "polygon(0 0, 85% 0, 70% 100%, 0 100%)" }}
          >
            <Image src={solCharge} alt="Highway Charging" className="h-full w-full object-cover object-[70%_center]" placeholder="blur" />
          </div>
          <div 
            className="absolute inset-0"
            style={{ clipPath: "polygon(0 0, 55% 0, 40% 100%, 0 100%)" }}
          >
            <Image src={solDepot} alt="Depot Charging" className="h-full w-full object-cover object-[30%_center] opacity-80" placeholder="blur" />
          </div>
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
            <button className="bg-[#00E573] text-white px-6 py-3 text-[13px] font-bold tracking-wide rounded-sm cursor-pointer hover:bg-[#00c261] transition-colors">
              Talk to our expert
            </button>
            <button className="border border-white text-white px-6 py-3 text-[13px] font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors rounded-sm cursor-pointer">
              See how it works
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section 
        ref={productsRef}
        className="flex flex-col justify-center bg-[#111111] pt-24 pb-16 transition duration-1000 ease-out opacity-0 translate-y-10 px-8 md:px-16"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* AC Chargers Card (Fully clickable) */}
              <div 
                onClick={() => setActiveCategory('ac')}
                className="flex flex-col animate-on-scroll opacity-0 translate-y-10 transition duration-700 ease-out cursor-pointer group"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-black border border-white/5">
                  <Image src={platformModule} alt="AC Chargers Module" className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-transform duration-700 group-hover:scale-105" placeholder="blur" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-10 pointer-events-none">
                    <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold tracking-tight">AC Chargers</h2>
                    <div className="mt-4 text-[11px] text-white/80 space-y-1">
                      <p>3.3 · 7.4 · 11 · 22 kW</p>
                      <p>Bidirectional Distributed Dispenser Systems</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#d9d9d9] group-hover:bg-[#c9c9c9] transition-colors text-black py-5 flex items-center justify-center gap-3 text-[13px] font-medium border border-black/10 cursor-pointer">
                  See how it works
                  <span className="font-light">→</span>
                </button>
              </div>

              {/* DC Fast Chargers Card (Fully clickable) */}
              <div 
                onClick={() => setActiveCategory('dc')}
                className="flex flex-col animate-on-scroll opacity-0 translate-y-10 transition duration-700 ease-out cursor-pointer group"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-black border border-white/5">
                  <Image src={platformModule} alt="DC Fast Chargers Module" className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-transform duration-700 group-hover:scale-105" placeholder="blur" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-10 pointer-events-none">
                    <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold tracking-tight leading-[1.1]">DC Fast<br />Chargers</h2>
                    <div className="mt-4 text-[11px] text-white/80 space-y-1">
                      <p>30 · 60 · 120 · 180 · 240 · 360 kW</p>
                      <p>Bidirectional Distributed Dispenser Systems</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#d9d9d9] group-hover:bg-[#c9c9c9] transition-colors text-black py-5 flex items-center justify-center gap-3 text-[13px] font-medium border border-black/10 cursor-pointer">
                  See how it works
                  <span className="font-light">→</span>
                </button>
              </div>

            </div>
        </div>
      </section>

      {/* Detail View Overlay */}
      {activeCategory !== null && (
        <div className={`fixed inset-0 z-50 bg-white text-black flex flex-col overflow-y-auto pt-[99px] ${
          isClosing ? 'animate-out fade-out zoom-out-95 duration-500' : 'animate-in fade-in zoom-in-95 duration-500'
        }`}>
              {/* Top Header & Navigation */}
              <div className="flex items-center justify-between px-10 py-10 border-b border-black/10">
                <button 
                  onClick={() => handleModelChange(Math.max(0, activeModelIndex - 1))}
                  className="text-black/50 hover:text-black transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeModelIndex === 0}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                
                <div className="flex gap-4 md:gap-10 text-[11px] font-bold tracking-wide overflow-x-auto scrollbar-hide px-4">
                  {currentModels.map((model, idx) => (
                    <button 
                      key={model.id}
                      onClick={() => handleModelChange(idx)}
                      className={`px-5 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                        activeModelIndex === idx 
                          ? 'bg-[#00E573] text-white shadow-sm scale-105' 
                          : 'text-black/40 hover:text-black'
                      }`}
                    >
                      {model.name}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-10">
                  <button 
                    onClick={() => handleModelChange(Math.min(currentModels.length - 1, activeModelIndex + 1))}
                    className="text-black/50 hover:text-black transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={activeModelIndex === currentModels.length - 1}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                  <button onClick={handleClose} className="text-black/40 hover:text-black transition-colors p-2 -mr-2 cursor-pointer">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col md:flex-row relative">
                {/* Left Text */}
                <div className={`w-full md:w-[40%] p-10 md:p-16 flex flex-col justify-center z-10 ${textClasses}`}>
                  <h2 className="text-[2.75rem] font-bold mb-8 tracking-tight">
                    Model {activeModel.name}
                  </h2>
                  <div className="text-[1.35rem] font-bold leading-[1.3] tracking-tight text-black flex flex-col gap-6">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-black/40 block mb-1">Form Factor</span>
                      {activeModel.formFactor}
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-black/40 block mb-1">Key Use Case</span>
                      {activeModel.useCase}
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-black/40 block mb-1">Notable Spec</span>
                      {activeModel.spec}
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-[60%] relative flex items-center justify-start py-16 pl-10 md:pl-0">
                  <div className={`w-[280px] md:w-[320px] flex-shrink-0 relative z-10 ${imageClasses}`}>
                      <Image src="/images/ChargerDemo.png" alt="Charger Graphic" width={320} height={600} className="w-full h-auto object-contain" />
                  </div>
                  {/* Secondary faint image in queue */}
                  {activeModelIndex < currentModels.length - 1 && (
                    <div className={`w-[280px] md:w-[320px] flex-shrink-0 ml-16 scale-90 relative opacity-40 transition-all duration-500 ease-out ${animState !== 'idle' ? 'translate-x-[150%] opacity-0' : ''}`}>
                        <Image src="/images/ChargerDemo.png" alt="Charger Graphic" width={320} height={600} className="w-full h-auto object-contain" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Bottom Green Bar */}
              <div className={`w-full bg-[#00E573] py-8 px-10 text-white font-bold text-[1.75rem] tracking-tight ${textClasses}`}>
                Model {activeModel.name}
              </div>
            </div>
          )}

      {/* Everything After Delivery (Services Grid) */}
      <section 
        ref={servicesRef}
        className="flex flex-col justify-center bg-[#111111] pb-24 pt-8 opacity-0 translate-y-10 transition duration-1000 ease-out px-8 md:px-16"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-tight text-white mb-12">
            Everything after delivery.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll opacity-0 translate-y-10 transition duration-700 ease-out">
            {[
              {
                title: 'Pan-India Service Support',
                description: 'Nationwide coverage with local technical expertise and spares.',
                badge: null,
              },
              {
                title: 'Turnkey EPC Implementation',
                description: 'End-to-end project execution — civil, electrical, installation, commissioning.',
                badge: null,
              },
              {
                title: 'Warranty Operations',
                description: 'Multi-year warranty with defined uptime commitment.',
                badge: 'Up to 98% uptime',
              },
              {
                title: 'End of Life Management',
                description: 'Responsible decommissioning, component recovery and recycling programme.',
                badge: null,
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="bg-[#EAEAEA] p-10 flex flex-col h-full min-h-[300px]"
              >
                <h3 className="text-[14px] md:text-[15px] font-bold text-black leading-tight">{service.title}</h3>
                <p className="mt-4 text-[12px] md:text-[13px] text-black/60 leading-relaxed">
                  {service.description}
                </p>
                {service.badge && (
                  <div className="mt-auto pt-6">
                    <span className="inline-block bg-[#00E573]/20 text-[#00a854] text-[10px] md:text-[11px] font-bold px-3 py-1.5 rounded-sm">
                      {service.badge}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
