"use client";

import { useState } from "react";

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState("Sales & Partnerships");

  const categories = [
    "Sales & Partnerships",
    "Technical Support",
    "Product Information",
    "General Enquiries",
  ];

  return (
    <div className="flex flex-col items-center relative w-full">
      <h2 className="text-[1.75rem] font-bold text-black mb-12 self-start absolute left-0 top-0 hidden lg:block">Contact us</h2>
      <h2 className="text-[1.75rem] font-bold text-black mb-10 self-center lg:hidden">Contact us</h2>
      
      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-2xl">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setInquiryType(cat)}
            className={`cursor-pointer px-6 py-2.5 rounded-full text-xs font-semibold shadow-sm transition-all ${
              inquiryType === cat
                ? "bg-[#00E573] text-white hover:scale-105"
                : "bg-white text-black font-medium hover:shadow"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-[800px] p-10 md:p-14">
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Company</label>
              <input type="text" placeholder="Organization Name" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Email Address</label>
              <input type="email" placeholder="john@company.com" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Your Message</label>
            <textarea rows={5} placeholder="How can we help you?" className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all resize-none"></textarea>
          </div>

          <div className="flex justify-center pt-6">
            <button type="submit" className="cursor-pointer bg-[#00E573] text-white px-8 py-3.5 rounded-full text-[12px] font-bold shadow-lg shadow-[#00E573]/20 hover:shadow-[#00E573]/40 transition-all flex items-center gap-2 hover:-translate-y-0.5 tracking-wide">
              SEND MESSAGE
              <span>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
