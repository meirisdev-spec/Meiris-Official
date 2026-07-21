"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations('ContactPage');
  const [inquiryType, setInquiryType] = useState(t('catSales'));

  const categories = [
    t('catSales'),
    t('catSupport'),
    t('catProduct'),
    t('catGeneral'),
  ];

  return (
    <div className="flex flex-col items-center relative w-full">
      <h2 className="text-[1.75rem] font-bold text-black mb-12 self-start absolute left-0 top-0 hidden lg:block">{t('formHeading')}</h2>
      <h2 className="text-[1.75rem] font-bold text-black mb-10 self-center lg:hidden">{t('formHeading')}</h2>
      
      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-2xl">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setInquiryType(cat)}
            className={`cursor-pointer px-6 py-2.5 rounded-full text-xs font-semibold shadow-sm transition-all duration-300 ${
              inquiryType === cat
                ? "bg-[#00E573] text-black shadow-[0_0_18px_rgba(0,211,132,0.35)] scale-105"
                : "bg-white text-black font-medium hover:bg-[#00E573] hover:text-black hover:shadow-[0_0_18px_rgba(0,211,132,0.35)] hover:-translate-y-0.5"
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
              <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">{t('labelName')}</label>
              <input type="text" placeholder={t('placeholderName')} className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">{t('labelCompany')}</label>
              <input type="text" placeholder={t('placeholderCompany')} className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">{t('labelEmail')}</label>
              <input type="email" placeholder={t('placeholderEmail')} className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">{t('labelPhone')}</label>
              <input type="tel" placeholder={t('placeholderPhone')} className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-black/50 font-bold">{t('labelMessage')}</label>
            <textarea rows={5} placeholder={t('placeholderMessage')} className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-[13px] outline-none focus:ring-1 focus:ring-[#00E573] transition-all resize-none"></textarea>
          </div>

          <div className="flex justify-center pt-6">
            <button type="submit" className="cursor-pointer bg-[#0a0a0a] text-white px-8 py-4 rounded-full text-[12px] font-bold shadow-lg hover:bg-[#00E573] hover:text-black hover:shadow-[0_0_18px_rgba(0,211,132,0.35)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 tracking-wide">
              {t('send')}
              <span>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
