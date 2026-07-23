import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ctaEngineers from "@/assets/cta-engineers.jpg";
<<<<<<< HEAD
=======
import CareersForm from "./CareersForm";
>>>>>>> 787f409bb4eb7f44a75dfb3c23bbef6ec02b550c

import { getLocalizedMetadata } from "@/lib/seo";
import { client } from "@/sanity/lib/client";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return getLocalizedMetadata({
    locale,
    path: '/careers',
    title: "Careers — Meiris Intelligent Power Conversion",
    description: "Join a culture defined by technical precision, environmental consciousness, and the drive to disrupt the energy landscape.",
  });
}

export const revalidate = 0; // Disable caching to fetch live data from Sanity

export default async function CareersPage({ params: { locale } }: { params: { locale: string } }) {
  // Fetch the careers page document for this locale. Fallback to English if not found.
  const careersPage = await client.fetch(
    `*[_type == "careersPage" && language == $locale][0] {
      ...,
      "imageUrl": hero.image.asset->url
    }`,
    { locale }
  ) || await client.fetch(
    `*[_type == "careersPage" && language == "en"][0] {
      ...,
      "imageUrl": hero.image.asset->url
    }`
  );

  if (!careersPage) {
    return (
      <div className="relative min-h-screen bg-white text-black flex items-center justify-center">
        <p>Careers page content not found.</p>
      </div>
    );
  }

  const { hero, cvUpload, imageUrl } = careersPage;

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      
      {/* Hero Section */}
      <section className="bg-white pt-36 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#00E573] uppercase mb-6">
              {hero?.eyebrow || "WORK WITH US"}
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-black">
              {hero?.title || "Powering the Future of Mobility"}
            </h1>
            <p className="mt-8 text-[14px] leading-relaxed text-black/60">
              {hero?.description}
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
            {imageUrl ? (
              <Image 
                src={imageUrl} 
                alt={hero?.title || "Careers Hero"} 
                className="absolute inset-0 w-full h-full object-cover" 
                fill
              />
            ) : (
              <Image 
                src={ctaEngineers} 
                alt="Engineers reviewing data" 
                className="absolute inset-0 w-full h-full object-cover" 
                placeholder="blur" 
              />
            )}
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      <section className="bg-[#111111] py-16 md:py-24 lg:py-32 text-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
              {cvUpload?.headingLine1 || "Don't see a fit?"}
            </h2>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#00E573]">
              {cvUpload?.headingLine2 || "Send us your CV"}
            </h2>
            <p className="mt-6 text-[12px] leading-relaxed text-white/70 max-w-md">
              {cvUpload?.description}
            </p>
            <div className="mt-12 flex items-center gap-3 text-white/90">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M2 4l10 8 10-8"></path>
              </svg>
              <span className="text-[12px] font-medium tracking-wide">{cvUpload?.email || "careers@meiris.energy"}</span>
            </div>
          </div>
          
<<<<<<< HEAD
          <div className="bg-white rounded-xl p-10 md:p-12 shadow-2xl text-black">
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent border border-black/20 rounded-md px-4 py-3.5 text-[13px] outline-none focus:border-[#00E573] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-transparent border border-black/20 rounded-md px-4 py-3.5 text-[13px] outline-none focus:border-[#00E573] transition-colors" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">Attach CV/Resume</label>
                <div className="w-full border-[1.5px] border-dashed border-black/40 rounded-xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#f9f9f9] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E573" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                  <span className="text-[13px] font-medium text-black">Drop file or click to browse</span>
                  <span className="text-[9px] text-black/40 font-medium">PDF, DOCX (Max 10MB)</span>
                </div>
              </div>

              <button type="button" className="cursor-pointer w-full bg-[#0a0a0a] text-white py-4 rounded-full text-[12px] font-bold shadow-lg hover:bg-[#00E573] hover:text-black hover:shadow-[0_0_18px_rgba(0,211,132,0.35)] transition-all duration-300 flex items-center justify-center gap-2 tracking-wide mt-2">
                {locale === 'es-419' ? 'ENVIAR SOLICITUD' : 'SUBMIT APPLICATION'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
            </form>
          </div>
=======
          <CareersForm locale={locale} />
>>>>>>> 787f409bb4eb7f44a75dfb3c23bbef6ec02b550c
        </div>
      </section>

    </div>
  );
}
