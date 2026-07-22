
import type { Metadata } from "next";
import { getLocalizedMetadata } from "@/lib/seo";
import { client } from "@/sanity/lib/client";
import ResourcesClient from "./ResourcesClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  return getLocalizedMetadata({
    locale,
    path: '/resources',
    title: "Resources — Meiris Intelligent Power Conversion",
    description: "Brochures, datasheets, and technical specifications for Meiris products and solutions.",
  });
}

export const revalidate = 0; // Disable caching to fetch live data from Sanity

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';

  // Fetch the resources page document for this locale. Fallback to English if not found.
  let content = await client.fetch(
    `*[_type == "resourcesPage" && language == $locale][0] {
      pageTitle,
      pageSubtitle,
      tabCategories,
      "resourceItems": resourceItems[] {
        cardTitle,
        cardCategory,
        cardVersion,
        cardUploadDate,
        "thumbnailUrl": cardThumbnail.asset->url,
        "fileUrl": cardFile.asset->url,
        "fileExtension": cardFile.asset->extension,
        "fileSize": cardFile.asset->size
      }
    }`,
    { locale }
  );

  if (!content) {
    content = await client.fetch(
      `*[_type == "resourcesPage" && language == "en"][0] {
        pageTitle,
        pageSubtitle,
        tabCategories,
        "resourceItems": resourceItems[] {
          cardTitle,
          cardCategory,
          cardVersion,
          cardUploadDate,
          "thumbnailUrl": cardThumbnail.asset->url,
          "fileUrl": cardFile.asset->url,
          "fileExtension": cardFile.asset->extension,
          "fileSize": cardFile.asset->size
        }
      }`
    );
  }

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-[#00E573] selection:text-black">
      <ResourcesClient data={content || {}} />
    </div>
  );
}
