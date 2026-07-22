import type { Metadata } from "next";
import { Suspense } from "react";
import InsightsClient from "./InsightsClient";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

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
  // Fetch the insights page singleton
  let content = await sanityFetch<any>({
    query: `*[_type == "insightsPage" && language == $locale][0] {
      pageTitle,
      pageSubtitle,
      tabCategories,
      insightsItems
    }`,
    params: { locale }
  });

  if (!content) {
    content = await sanityFetch<any>({
      query: `*[_type == "insightsPage" && language == "en"][0] {
        pageTitle,
        pageSubtitle,
        tabCategories,
        insightsItems
      }`
    });
  }

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      <Suspense fallback={<div className="min-h-screen"></div>}>
        <InsightsClient data={content} />
      </Suspense>
    </div>
  );
}
