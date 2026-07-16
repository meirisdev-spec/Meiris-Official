import type { Metadata } from "next";
import Image from "next/image";
import platformModule from "@/assets/platform-module.jpg";
// platformFirmware import removed as it's now exclusively used in PlatformParallax
import PlatformParallax from "./PlatformParallax";

export const metadata: Metadata = {
  title: "Platform — Meiris Intelligent Power Conversion",
  description: "From grid input to precision output — a vertically integrated power conversion architecture built on Silicon Carbide devices and proprietary firmware.",
  openGraph: {
    title: "Meiris Platform — Intelligent Power Conversion",
    description: "Vertically integrated SiC power conversion platform engineered to convert, manage and orchestrate energy at 96% system efficiency.",
  },
};

const GREEN = "oklch(0.78 0.19 155)";

export default function PlatformPage() {
  return (
    <div className="relative bg-black text-white">
      {/* Parallax scrolling sections 1–8 */}
      <PlatformParallax platformModule={platformModule} />
    </div>
  );
}
