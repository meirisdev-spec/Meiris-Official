import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights — Meiris Intelligent Power Conversion",
  description: "A unified page with clear segmentation for Blogs, Press Releases and Announcements.",
};

export default function InsightsPage() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      <InsightsClient />
    </div>
  );
}
