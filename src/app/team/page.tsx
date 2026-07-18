import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Core Team — Meiris Intelligent Power Conversion",
  description: "Meet the core team behind MEIRIS.",
};

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

export default function TeamPage() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      

      <main className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12 pt-36 md:pt-44 lg:pt-48 pb-12 md:pb-16 lg:pb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-12 md:mb-20">
          CORE TEAM
        </h1>

        <div className="flex flex-col gap-32">
          {/* Member 1: Satish Shenoy */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-center">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/5] bg-[#e5e5e5] shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-black/30 font-semibold tracking-widest text-sm uppercase">
                Image Placeholder
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#00E573] mb-3">
                Founder & MD
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-black mb-6 tracking-tight">
                Satish Shenoy
              </h2>
              <p className="text-[14px] md:text-[15px] text-black/80 leading-loose font-medium text-justify">
                With a rich experience of over three decades in consulting and financial services encompassing business consulting, investment banking, capital markets, M&A and financial distribution, Satish founded SIRI Electromotive to realize his dream of contributing to a greener planet through meaningful participation in the setting up of EV Charging infrastructure in India. Satish has depth of varied transaction experience in multiple sectors including, inter-alia, Technology, Infrastructure, Real Estate, Healthcare, Manufacturing and Financial Services. His experiential and intuitive understanding of India’s legal, regulatory and financial landscape provides a strong risk management orientation for SIRI. He is a proven leader, having successfully built and led strong business teams from large institutions to entrepreneurial organizations. He has previously worked at Kotak Mahindra and IL&FS in senior capacities. A NIT, Surathkal alumnus, he also has a PGDM from IIM Ahmedabad.
              </p>
            </div>
          </div>

          {/* Member 2: Sanath Kumar */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-center">
            {/* Text Content (Left on desktop) */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-bold text-[#00E573] mb-3 leading-tight">
                Co-founder & Director –<br />Technical
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-black mb-6 tracking-tight">
                Sanath Kumar
              </h2>
              <p className="text-[14px] md:text-[15px] text-black/80 leading-loose font-medium text-justify">
                Sanath brings over twenty years of hands-on expertise across multiple domains including Research, Product Design & Development, Engineering, Simulation, Testing, Certification, Manufacturing, and Intellectual Property creation. A passionate innovator, his professional journey spans the entire R&D product lifecycle and New Product Introductions (NPI) in sectors such as AC & DC EV Chargers, Power & Energy, Lighting, Metering, Solar, Real-time Location Systems (RTLS), Industrial IoT, and Automation & Control. He has spearheaded the development of comprehensive IoT solutions for diverse applications including Industrial Plant Safety, Predictive Maintenance, Anomaly Detection of Industrial Assets, Smart Street Lighting, Smart Metering (AMR/AMI), Wireless Sensor Networks (WSN) for IoT, among others. With a track record of co-inventing four patents, Sanath is committed to driving continuing innovation in SIRI. Sanath has a Bachelor of Engineering (B.E) in Electronics and Communication (E&C) from Visvesvaraya Technological University (VTU) at Nitte, Karnataka, and a PG Diploma in Embedded Systems Design & Development from UTL Technologies Ltd, Bangalore, Karnataka.
              </p>
            </div>

            {/* Image Placeholder (Right on desktop) */}
            <div className="w-full aspect-[4/5] bg-[#e5e5e5] shadow-lg relative overflow-hidden order-1 md:order-2">
              <div className="absolute inset-0 flex items-center justify-center text-black/30 font-semibold tracking-widest text-sm uppercase">
                Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}
