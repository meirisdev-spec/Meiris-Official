import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ctaEngineers from "@/assets/cta-engineers.jpg";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Meiris Intelligent Power Conversion",
  description: "Connect with our experts to discuss intelligent charging solutions designed for tomorrow's mobility.",
};

const navItems = [
  { label: "Platform", to: "/platform" },
  { label: "Products", to: "/products" },
  { label: "Solutions", to: "/solutions" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-white">
      <svg width={28} height={28} viewBox="0 0 40 40" fill="none" aria-hidden>
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

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-32">
        <div className="mx-auto max-w-[1200px] px-8 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div>
            <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-black pr-8">
              Whether you<br />
              are an EV<br />
              manufacturer,<br />
              fleet operator,<br />
              or business<br />
              exploring EV<br />
              infrastructure,<br />
              we'd love to<br />
              hear from you.
            </h1>
            <p className="mt-8 text-[14px] leading-relaxed text-black/60 max-w-[400px]">
              Connect with our experts to discuss intelligent charging solutions designed for tomorrow's mobility.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
            <Image 
              src={ctaEngineers} 
              alt="Engineers reviewing data" 
              className="absolute inset-0 w-full h-full object-cover" 
              placeholder="blur" 
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#f5f6f8] py-32">
        <div className="mx-auto max-w-[1200px] px-8">
          <ContactForm />

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[900px] mt-16 mx-auto">
              {/* Card 1: HQ */}
              <div className="bg-[#114b43] text-white rounded-3xl p-8 flex flex-col items-center text-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="text-[13px] font-bold mb-3">Global Headquarters</h3>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  130 Innovation Drive, Tech District,<br />
                  Singapore 128577
                </p>
              </div>
              
              {/* Card 2: Email */}
              <div className="bg-white text-black rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M2 4l10 8 10-8"></path>
                </svg>
                <h3 className="text-[13px] font-bold mb-3">Email Us</h3>
                <p className="text-[11px] text-black/60 leading-relaxed">
                  info@meiris.com<br />
                  support@meiris.com
                </p>
              </div>

              {/* Card 3: Phone */}
              <div className="bg-white text-black rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <h3 className="text-[13px] font-bold mb-3">Call Experts</h3>
                <p className="text-[11px] text-black/60 leading-relaxed">
                  +65-6789-0123<br />
                  Mon - Fri, 9am - 6pm SGT
                </p>
              </div>
            </div>
        </div>
      </section>


    </div>
  );
}
