import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import solCharge from "@/assets/sol-charge.jpg";
import solDepot from "@/assets/sol-depot.jpg";
import solCustom from "@/assets/sol-custom.jpg";
import solHospitality from "@/assets/sol-hospitality.jpg";
import solResidential from "@/assets/sol-residential.jpg";
import RecommendedSetup from "./RecommendedSetup";
import CustomSection2 from "./CustomSection2";
import ScrollReveal from "@/components/ui/ScrollReveal";

import { getLocalizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  const locale = resolvedParams?.locale || 'en';
  
  return getLocalizedMetadata({
    locale,
    path: `/solutions/${slug}`,
    title: "Solutions — Meiris Intelligent Power Conversion",
    description: "Charging infrastructure built around your fleet's schedule.",
  });
}

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

function Marker({ num, top, left, labelOnTop = true }: { num: number; top: string; left: string; labelOnTop?: boolean }) {
  return (
    <div 
      className="absolute flex flex-col items-center gap-2 group cursor-pointer z-10"
      style={{ top, left, transform: 'translate(-50%, -50%)' }}
    >
      {labelOnTop && (
        <div className="bg-[#e6ebf0] text-black/60 text-[7px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
          MEIRIS CONVERSION STAGE
        </div>
      )}
      <div className="w-6 h-6 bg-[#00E573] rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-[0_0_15px_rgba(0,229,115,0.3)] group-hover:scale-110 transition-transform">
        {num}
      </div>
      {!labelOnTop && (
        <div className="bg-[#e6ebf0] text-black/60 text-[7px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
          MEIRIS CONVERSION STAGE
        </div>
      )}
    </div>
  );
}

const solutionsData: Record<string, any> = {
  "custom-solutions": {
    heroTitle: "Power conversion, built to your specification.",
    heroSubtitle: "From EV charging to BESS, drones to railways — if it involves intelligent power conversion, we have the capability to engineer it.",
    cardTitle: "OVER-HEATING & DE-RATING",
    cardText: "Back-to-back charging sessions push conventional chargers past their thermal limits. Once they de-rate, charging slows down exactly when the depot needs every vehicle topped up before its next shift.",
    customSection2: {
      heading: "From EV charging to drones, railways to grid edge — if it involves power conversion, we can build it.",
      subHeading: "Tap an application to see the power conversion challenge it presents.",
      apps: [
        { 
          id: "ev", 
          title: "EV Charging", 
          desc: "High efficiency, sustained output under variable load", 
          details: "Sustained output at rated power under variable load conditions and extreme ambient temperatures — without the de-rating that conventional Si-based chargers exhibit." 
        },
        { 
          id: "bess", 
          title: "BESS", 
          desc: "Bidirectional conversion with high cycle efficiency", 
          details: "Bidirectional conversion with high cycle efficiency to maximize energy storage returns and grid stability." 
        },
        { 
          id: "drones", 
          title: "Drones & UAV", 
          desc: "Compact, high-power-density rapid turnaround charging", 
          details: "Compact, high-power-density rapid turnaround charging systems designed to minimize downtime for commercial drone fleets." 
        },
        { 
          id: "railways", 
          title: "Railways", 
          desc: "High-voltage, high-reliability traction power", 
          details: "High-voltage, high-reliability traction power and auxiliary conversion for demanding rail environments." 
        },
        { 
          id: "renewables", 
          title: "Renewables", 
          desc: "Grid-tied power conditioning for solar and wind", 
          details: "Robust grid-tied power conditioning to ensure stable, compliant energy delivery from solar and wind installations." 
        },
        { 
          id: "grid", 
          title: "Grid Edge", 
          desc: "Distributed energy management at point of consumption", 
          details: "Distributed energy management at point of consumption to balance local loads and integrate decentralized generation." 
        },
        { 
          id: "oem", 
          title: "OEM Onboard Chargers", 
          desc: "Compact AC-DC conversion integrated into the vehicle", 
          details: "Compact AC-DC conversion integrated into the vehicle, meeting strict automotive standards for size, weight, and vibration." 
        },
        { 
          id: "custom", 
          title: "Custom Application", 
          desc: "Any power conversion challenge — let's talk", 
          details: "Have a unique power conversion challenge? Our team of engineers can design a bespoke solution from the ground up." 
        }
      ],
      painPointsHeading: "What brings organisations to us",
      painPoints: [
        { title: "Standard products don't fit the spec", desc: "Off-the-shelf solutions leave gaps in power rating, form factor, or operating environment." },
        { title: "Import dependency and long lead times", desc: "Imported custom solutions mean slow design cycles, no local IP and extended waits for changes or spares." },
        { title: "Vendors who overpromise", desc: "Custom development often stalls at prototype — teams without deep in-house IP can't deliver to spec at volume." }
      ]
    },
    sectionHeading: "Why organisations come to MEIRIS for custom power conversion.",
    features: [
      {
        title: "SiC-based power conversion platform",
        desc: "The same SiC MOSFET technology foundation — proven across MEIRIS's own product lines — deployed to your specific application and operating requirements."
      },
      {
        title: "In-house design and IP",
        desc: "Core hardware and firmware designed and owned by MEIRIS. Not an assembler or systems integrator — genuine IP developed in-house, with a growing patent portfolio."
      },
      {
        title: "Co-development process",
        desc: "Structured engagement from specification through prototype, validation and production. Not a black-box quote — the client is part of the development process."
      },
      {
        title: "Local manufacturing, no import dependency",
        desc: "Made-in-India with shorter design iteration cycles, no import lead times for changes or spares, and reduced dependency on imported black box systems"
      },
      {
        title: "Built for certification",
        desc: "Hardware designed with international and Indian standards compliance from the start — CE, BIS, ARAI and application-specific standards as applicable."
      },
      {
        title: "Future-proof architecture",
        desc: "Modular, upgradeable designs that adapt as standards, vehicle architectures or grid requirements evolve — without a full redesign."
      }
    ],
    setupHeading: "Start the conversation",
    setupForm: {
      title: "Start the conversation",
      subtitle: "Tell us about your application and we'll come back to you with an initial assessment.",
      fields: [
        { label: "Application domain", placeholder: "e.g. BESS, Drone, Railway, OEM Onboard Charger, Grid Edge, Other", fullWidth: false },
        { label: "Power rating range (kW)", placeholder: "e.g. 10–500 kW, or 'to be defined'", fullWidth: false },
        { label: "Key constraints", placeholder: "Size / weight / operating environment / certifications required", fullWidth: false },
        { label: "Organisation & contact", placeholder: "Name, organisation, email or phone", fullWidth: false },
        { label: "Timeline", placeholder: "Prototype required by / production volumes expected", fullWidth: true }
      ]
    },
    benefitsHeading: "Why partner with us for custom development",
    benefits: [
      {
        heading: "Faster time-to-prototype",
        narrative: "In-house design capability and local manufacturing compress the development cycle compared to imported or assembled alternatives.",
        stat: ""
      },
      {
        heading: "No obsolescence risk",
        narrative: "Modular, upgradeable architecture means the solution adapts as standards change — without a full redesign and re-certification.",
        stat: ""
      },
      {
        heading: "Local support through development and production",
        narrative: "The same team that designs it supports it — through prototyping, validation, production ramp and beyond. No handover to a different support organisation.",
        stat: ""
      },
      {
        heading: "Certified, compliant, ready to deploy",
        narrative: "Design-for-certification from the start reduces the time and cost of getting a custom solution to market.",
        stat: ""
      },
      {
        heading: "Built on a proven technology foundation",
        narrative: "Every custom solution draws on the same SiC platform used in MEIRIS's own product lines — not a greenfield experiment.",
        stat: ""
      }
    ]
  },
  "residential": {
    heroTitle: "Make EV charging part of what your development offers.",
    heroSubtitle: "Scalable, well-designed EV charging infrastructure for premium residential projects — installed right during construction, maintained long after handover.",
    mapHeading: "EV charging is becoming a buying criterion. Here's where most residential projects fall short.",
    cardTitle: "EV CHARGING IS NOW A BUYER QUESTION",
    cardText: "Buyers increasingly ask about charging at the site visit. Developments that don't offer it are losing ground to those that do — especially in the premium segment.",
    sectionHeading: "Infrastructure that adds value at launch and zero burden after handover.",
    features: [
      {
        title: "Sustained performance, extreme conditions",
        desc: "High-efficiency hardware built to run reliably for the life of the building, not just the warranty period."
      },
      {
        title: "Right infrastructure, right stage",
        desc: "Scalable design — conduit and wiring laid during construction, chargers added per bay as demand grows, protecting the developer's upfront investment."
      },
      {
        title: "Individual metering and billing",
        desc: "Per-charger metering ensures fair, transparent cost allocation whether billed by the developer, society or resident."
      },
      {
        title: "Quality through in-house manufacturing",
        desc: "Long-life hardware with warranty terms suited to a residential asset maintained by a society committee, not a technical team."
      },
      {
        title: "Handover-ready AMC",
        desc: "Maintenance contract designed to transfer from developer to society at project completion, with remote monitoring and local support continuing uninterrupted."
      },
      {
        title: "End-to-end delivery",
        desc: "Turnkey EPC coordinated around the construction programme — design, supply, installation and commissioning."
      }
    ],
    setupHeading: "Recommended for your development",
    setupFeaturesOnly: [
      {
        title: "AC Charger per Resident Bay (Next-gen)",
        image: solResidential,
        text: "Compact, well-designed AC charger for resident parking bays. Product under development; illustration to be provided by design team."
      },
      {
        title: "DC Charger for Visitor / Commercial Bays",
        image: solCharge,
        text: "MEIRIS CHARGE Standard (Si IGBT-based, 30–60 kW) for visitor parking or commercial bays within the development."
      },
      {
        title: "Software",
        image: solDepot,
        text: "OCPP-compliant CMS with individual metering and billing per resident bay."
      },
      {
        title: "Services & Support",
        image: solCustom,
        text: "Turnkey EPC coordinated around the construction programme. Handover-ready AMC that transfers to the society at project completion. Up to 98% uptime, Multi-year warranty"
      }
    ],
    benefitsHeading: "A selling point at launch. Zero liability after handover.",
    benefits: [
      {
        heading: "Buyers notice. And they ask.",
        narrative: "EV charging is a tangible feature that comes up at site visits. Offering it — well-installed and well-branded — supports premium pricing and helps close decisions faster.",
        stat: ""
      },
      {
        heading: "Get it right during construction, not after",
        narrative: "Wiring and conduit laid during construction costs a fraction of retrofitting in a finished, occupied building. The time to plan it is before the slabs are poured.",
        stat: ""
      },
      {
        heading: "Hand over an asset, not a headache",
        narrative: "AMC transfers at project completion — the developer hands over a working, supported charging setup, not a vendor relationship for the society to figure out.",
        stat: ""
      },
      {
        heading: "Every resident pays for what they use",
        narrative: "Per-charger metering means no shared billing disputes from the moment the society takes over.",
        stat: ""
      },
      {
        heading: "Hardware that lasts",
        narrative: "In-house manufactured components and a multi-year warranty reduce the risk of early replacement or society-funded remediation.",
        stat: "Multi-year warranty"
      }
    ]
  },
  "hospitality-workplace": {
    heroTitle: "Charging that works as hard as your hospitality.",
    heroSubtitle: "Premium AC and DC charging for hotels, resorts, corporate campuses and offices – white-label branded, centrally managed, and zero burden on your facilities team.",
    mapHeading: "EV charging is becoming an expectation. Here's where most properties fall short.",
    cardTitle: "AESTHETICS & INTEGRATION",
    cardText: "Chargers visible to guests in lobbies and hotel car parks need to match the property's look and feel. Industrial-grade hardware designed for forecourts and depots stands out for the wrong reasons.",
    sectionHeading: "Everything you need. Nothing you have to manage.",
    features: [
      {
        title: "Sustained performance, extreme conditions",
        desc: "SiC-based hardware delivers >96% sustained efficiency without de-rating, across both AC and DC units."
      },
      {
        title: "AC and DC — the right mix",
        desc: "AC for long dwell-time bays (overnight guests, all-day office parking). DC for quick-turnaround visitor bays. White-label branding available on both."
      },
      {
        title: "Seamless guest and employee billing",
        desc: "OCPP-compliant CMS with room-charge integration for hospitality and cost-allocation controls for workplace."
      },
      {
        title: "Load management",
        desc: "Intelligent power distribution avoids conflicts with existing building demand — kitchens, HVAC, lifts — without manual intervention."
      },
      {
        title: "Servicing backed by in-house IP",
        desc: "Remote monitoring and AMC so the facilities team never has to manage a fault or chase a vendor directly."
      },
      {
        title: "End-to-end delivery",
        desc: "Turnkey EPC from design through commissioning, including civil and electrical coordination."
      }
    ],
    setupHeading: "Recommended for your property",
    setupFeaturesOnly: [
      {
        title: "AC Charger (Next-gen)",
        image: solHospitality,
        text: "White-label branded, compact form factor for long dwell-time bays — overnight guests and all-day office parking. Product under development; illustration to be provided by design team."
      },
      {
        title: "DC Fast Charger",
        image: solCharge,
        text: "MEIRIS CHARGE Standard or Plus for quick-turnaround visitor or drop-off bays."
      },
      {
        title: "Software",
        image: solDepot,
        text: "OCPP-compliant CMS with room-charge integration (hospitality) and access-control / cost-allocation controls (workplace). Supports multi-property management from a single dashboard."
      },
      {
        title: "Services & Support",
        image: solCustom,
        text: "Turnkey EPC (design, supply, installation, commissioning). AMC with remote monitoring. Up to 98% uptime, Multi-year warranty"
      }
    ],
    benefitsHeading: "A premium experience for guests and employees. Zero operational burden for your team.",
    benefits: [
      {
        heading: "Charging that matches your brand",
        narrative: "White-label hardware means the charger looks like part of the property — not an afterthought from a third-party supplier.",
        stat: ""
      },
      {
        heading: "Billing that works without intervention",
        narrative: "Room-charge and access-control integrations mean no manual reconciliation for the front desk or finance team.",
        stat: ""
      },
      {
        heading: "No load conflicts with existing systems",
        narrative: "Intelligent load management adds charging capacity without risking trips or demand penalties on the existing building supply.",
        stat: ""
      },
      {
        heading: "Uptime you can count on",
        narrative: "Remote monitoring and AMC means faults are caught and resolved before they affect a guest's experience.",
        stat: "Up to 98% uptime"
      },
      {
        heading: "Lower cost per session over the asset's life",
        narrative: "High-efficiency hardware reduces energy losses across the charger's working life.",
        stat: ">96% sustained efficiency"
      },
      {
        heading: "Peace of mind, built in",
        narrative: "Hardware backed by a multi-year warranty reduces the risk of unplanned replacement costs.",
        stat: "Multi-year warranty"
      },
      {
        heading: "Central control across multiple properties",
        narrative: "A single CMS dashboard gives chains and corporates full visibility across every site — one login, one contract, one point of support.",
        stat: ""
      }
    ]
  },
  "charge-point-operators": {
    heroTitle: "Charging infrastructure that powers your highway network.",
    heroSubtitle: "Reliable, Si/SiC-based DC fast charging built for high-traffic highway and quick-stop locations – designed to keep stations productive and customers moving.",
    cardTitle: "PRODUCT QUALITY",
    cardText: "Chargers run outdoors, 24x7, through heat, dust and monsoon, at high-traffic locations. Frequent component failures or poor build quality translate directly into downtime and bad reviews.",
    sectionHeading: "Build your highway network on infrastructure designed to be owned, not just installed.",
    features: [
      {
        title: "Sustained performance, extreme conditions",
        desc: "SiC-based power electronics deliver >96% sustained efficiency without de-rating, even under extreme ambient and operating conditions."
      },
      {
        title: "Lower total cost of ownership",
        desc: "Better conversion efficiency means lower energy losses over the network's working life."
      },
      {
        title: "Quality through in-house manufacturing",
        desc: "The SiC-based power stage and other core components are designed and manufactured in-house, for consistent quality and traceability."
      },
      {
        title: "Servicing backed by in-house IP",
        desc: "Turnkey EPC execution means faults are diagnosed and resolved faster, with local access to spares and expertise."
      },
      {
        title: "Built for what's next",
        desc: "Modular and upgradeable, resilient to weak grids and harmonics, interoperable with all EV types, and bidirectional-ready for V2X."
      },
      {
        title: "Cyber Secure",
        desc: "Every charger can be shipped with a hardware-level security chip as an option."
      }
    ],
    setupHeading: "Recommended for highway and quick-stop locations",
    setupFeaturesOnly: [
      {
        title: "Recommended Charger",
        image: solCharge,
        text: "MEIRIS CHARGE Plus – SiC-based DC fast/ultra-fast charger, 120–240 kW. MEIRIS CHARGE Standard (Si IGBT-based, 30–60 kW) as a complementary option for lower-power bays."
      },
      {
        title: "Software",
        image: solDepot,
        text: "OCPP-compliant CMS for monitoring, access control and billing, with roaming-ready architecture."
      },
      {
        title: "Services & Support",
        image: solCustom,
        text: "Turnkey EPC (design, supply, installation, commissioning). Up to 98% uptime, Multi-year warranty"
      }
    ],
    benefitsHeading: "More uptime, more sessions, more revenue per charger.",
    benefits: [
      {
        heading: "Charging that performs when it matters most",
        narrative: "Rated output delivered even during sustained high-traffic periods – keeping customers moving and stations productive.",
        stat: ""
      },
      {
        heading: "Uptime you can plan around",
        narrative: "A defined uptime commitment means the network can plan around predictable station availability rather than reacting to outages.",
        stat: "Up to 98% uptime"
      },
      {
        heading: "Lower cost per charging session",
        narrative: "Sustained high conversion efficiency reduces energy losses across the charger's working life. For a 240 kW charger, that can mean 150–360 MWh in energy savings over 7–10 years.",
        stat: ">96% sustained efficiency"
      },
      {
        heading: "Consistent quality you can rely on",
        narrative: "In-house manufactured core components mean fewer failures at unattended, high-traffic sites and clear traceability if something needs attention.",
        stat: ""
      },
      {
        heading: "Peace of mind, built in",
        narrative: "Hardware backed by a multi-year warranty reduces the risk of unplanned replacement costs early in the network's life.",
        stat: "Multi-year warranty"
      },
      {
        heading: "Faster fixes, less downtime",
        narrative: "Turnkey EPC delivery and in-house expertise mean issues are diagnosed and resolved faster, with local spares on hand – critical for stations far from base.",
        stat: ""
      },
      {
        heading: "No vendor lock-in",
        narrative: "Interoperable, standards-based hardware means you can connect to the CMS, app or roaming network of your choice without re-equipping your stations.",
        stat: ""
      },
      {
        heading: "Secure by design",
        narrative: "A hardware-level security chip on every charger can give the network a head start on cybersecurity as payment and grid integrations scale.",
        stat: ""
      }
    ]
  },
  "default": {
    heroTitle: "Charging infrastructure built around your fleet's schedule.",
    heroSubtitle: "End-to-end charging infrastructure for bus, truck and cab depots – engineered to deliver full-rated power consistently, even with 20–60 multiple vehicles charging in overlapping shifts.",
    cardTitle: "OVER-HEATING & DE-RATING",
    cardText: "Back-to-back charging sessions push conventional chargers past their thermal limits. Once they de-rate, charging slows down exactly when the depot needs every vehicle topped up before its next shift.",
    sectionHeading: "One partner for the charger, the site and everything that connects them.",
    features: [
      {
        title: "Sustained performance, extreme conditions",
        desc: "SiC-based power electronics deliver >96% sustained efficiency without de-rating, even under extreme ambient and operating conditions."
      },
      {
        title: "Lower total cost of ownership",
        desc: "Better conversion efficiency means lower energy losses over the fleet's working life."
      },
      {
        title: "Quality through in-house manufacturing",
        desc: "The SiC-based power stage and other core components are designed and manufactured in-house, for consistent quality and traceability."
      },
      {
        title: "Servicing backed by in-house IP",
        desc: "Turnkey EPC execution means faults are diagnosed and resolved faster, with local access to spares and expertise."
      },
      {
        title: "Built for what's next",
        desc: "Modular and upgradeable, resilient to weak grids and harmonics, interoperable with all EV types, and bidirectional-ready for V2X."
      },
      {
        title: "Cyber Secure",
        desc: "Every charger can be shipped with a hardware-level security chip as an option."
      }
    ],
    setupHeading: "Recommended for your setup",
    setupFleets: true,
    benefitsHeading: "More uptime, more sessions, more revenue per charger.",
    benefits: [
      {
        heading: "Charging that performs when it matters most",
        narrative: "Rated output delivered consistently without the de-rating that slows down conventional chargers under sustained load.",
        stat: ""
      },
      {
        heading: "Uptime you can plan around",
        narrative: "A defined uptime commitment means depot schedules are built around predictable charger availability, not worked around outages.",
        stat: "Up to 98% uptime"
      },
      {
        heading: "Lower cost per charging session",
        narrative: "Sustained high efficiency reduces energy losses across the charger's working life. For a 240 kW charger, that can mean 150–360 MWh in energy savings over 7–10 years.",
        stat: ">96% sustained efficiency"
      },
      {
        heading: "Consistent quality you can rely on",
        narrative: "In-house manufactured core components mean fewer surprises in the field and clear traceability when something needs attention.",
        stat: ""
      },
      {
        heading: "Peace of mind, built in",
        narrative: "Hardware backed by a multi-year warranty reduces the risk of unplanned replacement costs early in the asset's life.",
        stat: "Multi-year warranty"
      },
      {
        heading: "Faster fixes, less downtime",
        narrative: "Turnkey EPC delivery and in-house technical expertise mean faults are diagnosed and resolved faster, with local spares on hand.",
        stat: ""
      },
      {
        heading: "An investment ready for tomorrow",
        narrative: "Modular, grid-resilient and interoperable hardware protects the depot's investment as vehicle types, grid conditions and V2X requirements evolve.",
        stat: ""
      },
      {
        heading: "Secure by design",
        narrative: "A hardware-level security chip on every charger can give the depot a head start on cybersecurity as charging becomes more grid-connected.",
        stat: ""
      }
    ]
  }
};

export default async function SolutionsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const content = solutionsData[resolvedParams?.slug] || solutionsData["default"];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#00E573] selection:text-black overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row h-auto md:h-screen min-h-[100dvh] md:min-h-[700px] pt-[68px] bg-[#0c0c0c] w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 px-6 md:pl-20 md:pr-12 pb-16 pt-20 md:pt-[15vh] z-10 flex flex-col justify-start md:justify-center">
          <ScrollReveal>
            <h1 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-xl">
              {content.heroTitle}
            </h1>
            <p className="text-[15px] md:text-[16px] text-white/80 max-w-xl mb-10 leading-relaxed font-[family-name:var(--font-secondary)]">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#00E573] text-black px-6 py-3 text-[13px] font-bold tracking-wide transition-all hover:bg-white hover:-translate-y-0.5 rounded-sm">
                Talk to our expert
              </button>
              <button className="border border-white/20 text-white px-6 py-3 text-[13px] font-bold tracking-wide flex items-center gap-2 hover:bg-white/5 transition-all rounded-sm hover:-translate-y-0.5">
                See how it works 
                <span className="text-[14px] leading-none font-normal">→</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Right Massive Gray Block */}
        <ScrollReveal delay={300} className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] bg-[#e6e6e6] rounded-l-[4rem] shadow-2xl z-0">
          <div />
        </ScrollReveal>
      </section>

      {/* Interactive Map Section OR Custom Section 2 */}
      {content.customSection2 ? (
        <CustomSection2 data={content.customSection2} />
      ) : (
        <section className="bg-black py-16 md:py-32 px-6 md:px-20 border-t border-white/10 relative">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-white mb-16 max-w-4xl leading-[1.1] tracking-tight">
                {content.mapHeading || (
                  <>
                    Running a fleet depot has its own set of challenges.<br />
                    Tap a marker to see where things typically go wrong.
                  </>
                )}
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={150}>
              <div className="w-full bg-white rounded-2xl md:rounded-3xl relative aspect-[4/3] md:aspect-[16/9] max-h-[700px] overflow-hidden mb-10 shadow-2xl p-4 md:p-8">
                {/* SVG Lines Connecting Markers */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="20%" y1="35%" x2="40%" y2="50%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="20%" y1="35%" x2="30%" y2="60%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="40%" y1="50%" x2="55%" y2="25%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="40%" y1="50%" x2="70%" y2="50%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="40%" y1="50%" x2="30%" y2="60%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="55%" y1="25%" x2="70%" y2="50%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="70%" y1="50%" x2="85%" y2="35%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="70%" y1="50%" x2="90%" y2="60%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
                  <line x1="85%" y1="35%" x2="90%" y2="60%" stroke="black" strokeWidth="1" strokeOpacity="0.3" />
                </svg>
                
                {/* Markers */}
                <Marker num={1} top="35%" left="20%" />
                <Marker num={2} top="50%" left="40%" />
                <Marker num={3} top="25%" left="55%" labelOnTop={false} />
                <Marker num={4} top="50%" left="70%" />
                <Marker num={5} top="35%" left="85%" />
                <Marker num={6} top="60%" left="90%" />
                <Marker num={7} top="60%" left="30%" labelOnTop={false} />
                
                {/* Bottom text */}
                <div className="absolute bottom-8 right-10 text-[#00E573] text-[10px] font-medium tracking-wide">
                  Select a marker to explore
                </div>
              </div>
            </ScrollReveal>
            
            {/* Over-heating / Quality Card */}
            <ScrollReveal delay={300}>
              <div className="w-full bg-[#eefaf3] rounded-xl p-6 md:p-8 border border-[#cbeadd] shadow-sm">
                <h3 className="text-[#0d6447] font-bold text-sm md:text-[13px] tracking-[0.1em] mb-3 uppercase">
                  {content.cardTitle}
                </h3>
                <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed max-w-5xl">
                  {content.cardText}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* "One partner" Section */}
      <section className="bg-[#171717] py-16 md:py-32 px-6 md:px-20 relative border-t border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-bold text-white mb-16 max-w-4xl leading-[1.05] tracking-tight">
              {content.sectionHeading}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature: any, i: number) => (
              <div key={i} className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out border border-white/20 rounded-2xl p-8 flex flex-col gap-4 hover:bg-white/5">
                <div className="w-3.5 h-3.5 rounded-full bg-white/90 shadow-sm"></div>
                <h3 className="text-white font-bold text-lg mt-3 pr-4 leading-tight">{feature.title}</h3>
                <p className="text-white/50 text-[11px] leading-relaxed pr-2">{feature.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
        
      </section>

      <RecommendedSetup setupData={content} />

      {/* Uptime Section */}
      <section className="bg-white py-16 md:py-32 px-6 md:px-20 relative border-t border-black/5">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-black mb-16 text-center tracking-tight leading-tight">
              {content.benefitsHeading}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal staggerChildren={true} className="flex flex-col gap-4">
            {content.benefits.map((item: any, i: number) => (
              <div key={i} className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out bg-[#f0f1f3] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 hover:bg-[#e6e8eb]">
                <div className="w-6 h-6 rounded-full bg-[#00E573] flex-shrink-0 mt-1 md:mt-0 shadow-[0_0_15px_rgba(0,229,115,0.4)]"></div>
                <div className="flex flex-col gap-1.5 flex-grow">
                  <h3 className="text-black font-bold text-[17px]">{item.heading}</h3>
                  <p className="text-black/60 text-[12px] leading-relaxed max-w-3xl font-medium">
                    {item.narrative}
                  </p>
                </div>
                {item.stat && (
                  <div className="bg-[#00E573] text-black text-[11px] font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-sm tracking-wide mt-2 md:mt-0 self-start md:self-auto uppercase">
                    {item.stat}
                  </div>
                )}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      
    </div>
  );
}
