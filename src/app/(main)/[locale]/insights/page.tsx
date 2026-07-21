import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";
import { client } from "@/sanity/lib/client";

import { getLocalizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return getLocalizedMetadata({
    locale,
    path: '/insights',
    title: "Insights — Meiris Intelligent Power Conversion",
    description: "Insights, press releases, and announcements from Meiris.",
  });
}

// Revalidate the page every 30 seconds (or 0 for SSR)
export const revalidate = 0;

export default async function InsightsPage({ params: { locale } }: { params: { locale: string } }) {
  const posts = await client.fetch(`*[_type == "post" && (!defined(language) || language == $locale)] | order(publishedAt desc)`, { locale });

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      <InsightsClient initialPosts={posts} />
    </div>
  );
}
