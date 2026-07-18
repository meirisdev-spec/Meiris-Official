"use client";

import { useState } from "react";

export default function CustomSection2({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState(data.apps[0].id);

  const activeApp = data.apps.find((a: any) => a.id === activeTab) || data.apps[0];

  return (
    <section className="bg-white py-32 px-8 md:px-20 relative border-t border-gray-200">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-[#1f2937] mb-2 max-w-4xl leading-[1.2] tracking-tight">
          {data.heading}
        </h2>
        <p className="text-gray-500 mb-12">
          {data.subHeading}
        </p>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {data.apps.map((app: any) => (
            <div 
              key={app.id} 
              onClick={() => setActiveTab(app.id)}
              className={`border rounded-xl p-6 cursor-pointer transition-colors ${
                activeTab === app.id 
                  ? "bg-[#137861] text-white border-[#137861]" 
                  : "bg-white text-gray-800 border-gray-200 hover:border-[#137861] hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  activeTab === app.id ? "border-white" : "border-[#137861]"
                }`}>
                  {activeTab === app.id && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <h4 className="font-bold text-base">{app.title}</h4>
              </div>
              <p className={`text-sm ${activeTab === app.id ? "text-white/90" : "text-gray-500"}`}>
                {app.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Active Tab Green Card */}
        <div className="w-full bg-[#eefaf3] rounded-xl p-6 md:p-8 border border-[#cbeadd] shadow-sm mb-24">
          <h3 className="text-[#0d6447] font-bold text-sm md:text-[13px] tracking-[0.1em] mb-3 uppercase">
            {activeApp.title}
          </h3>
          <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed max-w-5xl">
            {activeApp.details}
          </p>
        </div>

        {/* Pain Points */}
        <div className="mt-16">
          <p className="text-gray-500 text-sm mb-4">Reference Image — Custom Solutions Pain-point Card</p>
          <h3 className="text-xl md:text-2xl font-bold text-[#1f2937] mb-8">{data.painPointsHeading}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.painPoints.map((pp: any, idx: number) => (
              <div key={idx} className="w-full bg-[#eefaf3] rounded-xl p-6 md:p-8 border border-[#cbeadd] shadow-sm flex flex-col justify-start">
                <h4 className="text-[#0d6447] font-bold text-sm md:text-[14px] tracking-[0.1em] mb-4">
                  {pp.title}
                </h4>
                <p className="text-[#374151] text-[14px] md:text-[15px] leading-relaxed">
                  {pp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
