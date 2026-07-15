import type { Metadata } from "next";
import PlatformClient from "./PlatformClient";

export const metadata: Metadata = {
  title: "Platform — Meiris Intelligent Power Conversion",
  description: "From grid input to precision output — a vertically integrated power conversion architecture built on Silicon Carbide devices and proprietary firmware.",
  openGraph: {
    title: "Meiris Platform — Intelligent Power Conversion",
    description: "Vertically integrated SiC power conversion platform engineered to convert, manage and orchestrate energy at 96% system efficiency.",
  },
};

export default function PlatformPage() {
  return <PlatformClient />;
}
