"use client";
import React, { useState } from "react";
import Image from "next/image";

import solCharge from "@/assets/sol-charge.jpg";
import solDepot from "@/assets/sol-depot.jpg";
import solCustom from "@/assets/sol-custom.jpg";

type Feature = {
  title: string;
  image: any;
  text: string;
};

type Fleet = {
  id: string;
  label: string;
  features: Feature[];
};

const fleetsData: Fleet[] = [
  {
    id: "bus",
    label: "Bus Fleet",
    features: [
      {
        title: "Recommended Charger",
        image: solCharge,
        text: "MEIRIS CHARGE Plus – SiC-based DC fast/ultra-fast charger, 120–240 kW, for high-power overnight bulk charging of buses"
      },
      {
        title: "Software",
        image: solDepot,
        text: "OCPP-compliant CMS for monitoring, access control and billing"
      },
      {
        title: "Services & Support",
        image: solCustom,
        text: "Turnkey EPC. Up to 98% uptime, Multi-year warranty"
      }
    ]
  },
  {
    id: "truck",
    label: "Truck Fleet",
    features: [
      {
        title: "Recommended Charger",
        image: solCharge,
        text: "MEIRIS CHARGE Plus – SiC-based DC fast/ultra-fast charger, 120–240 kW, for overnight and layover charging of trucks"
      },
      {
        title: "Software",
        image: solDepot,
        text: "OCPP-compliant CMS for monitoring, access control and billing"
      },
      {
        title: "Services & Support",
        image: solCustom,
        text: "Turnkey EPC. Up to 98% uptime, Multi-year warranty"
      }
    ]
  },
  {
    id: "cab",
    label: "Cab aggregator hub",
    features: [
      {
        title: "Recommended Charger",
        image: solCharge,
        text: "MEIRIS CHARGE Standard – Si IGBT-based DC charger, 30–60 kW, suited to lower-battery EVs such as cabs"
      },
      {
        title: "Software",
        image: solDepot,
        text: "OCPP-compliant CMS for monitoring, access control and billing"
      },
      {
        title: "Services & Support",
        image: solCustom,
        text: "Turnkey EPC. Up to 98% uptime, Multi-year warranty"
      }
    ]
  }
];

export default function RecommendedSetup({ setupData }: { setupData?: any }) {
  const [activeTab, setActiveTab] = useState("bus");

  // Determine which features to show
  let featuresToDisplay: Feature[] = [];
  let showTabs = false;
  
  if (setupData?.setupForm) {
    showTabs = false;
  } else if (setupData?.setupFeaturesOnly) {
    featuresToDisplay = setupData.setupFeaturesOnly;
  } else {
    showTabs = true;
    const activeFleet = fleetsData.find(f => f.id === activeTab) || fleetsData[0];
    featuresToDisplay = activeFleet.features;
  }

  const headingText = setupData?.setupHeading || "Recommended for your setup";

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Header & Tabs */}
        <div className="mb-16 md:mb-24">
          {headingText && (
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[#1f2937] mb-8 tracking-tight font-[family-name:var(--font-primary)]">
              {headingText}
            </h2>
          )}
          
          {showTabs && (
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[12px] font-bold uppercase tracking-widest font-[family-name:var(--font-secondary)]">
              {fleetsData.map((fleet) => (
                <button 
                  key={fleet.id}
                  onClick={() => setActiveTab(fleet.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === fleet.id 
                      ? "bg-[#00D384] text-black shadow-md" 
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  {fleet.label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {setupData?.setupForm ? (
          <div className="max-w-4xl mx-auto bg-white">
            <p className="text-gray-500 mb-8">{setupData.setupForm.subtitle}</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {setupData.setupForm.fields.map((field: any, idx: number) => (
                <div key={idx} className={field.fullWidth ? "md:col-span-2" : ""}>
                  <label className="block text-sm font-bold text-gray-800 mb-2">{field.label}</label>
                  <input 
                    type="text" 
                    placeholder={field.placeholder} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-[#00E573]"
                  />
                </div>
              ))}
              <div className="md:col-span-2 mt-4">
                <button type="button" className="bg-[#126b53] hover:bg-[#0f5a45] text-white px-6 py-3 rounded-md font-bold transition-colors">
                  Talk to our expert
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className={`grid gap-10 md:gap-12 lg:gap-16 ${
            featuresToDisplay.length === 4 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
              : "grid-cols-1 md:grid-cols-3"
          }`}>
            {featuresToDisplay.map((feature: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-[2rem] overflow-hidden relative shadow-sm mb-8 transition-transform duration-500 hover:scale-[1.02]">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-[1.75rem] font-bold text-[#1f2937] mb-4 text-center font-[family-name:var(--font-primary)]">
                  {feature.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed text-center max-w-[320px] font-[family-name:var(--font-secondary)]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
