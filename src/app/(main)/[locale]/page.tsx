
import Hero from '../../_components/Hero';
import Solutions from '../../_components/Solutions';
import LatestNews from '../../_components/LatestNews';
import Contact from '../../_components/Contact';
import { getLocalizedMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

import { client } from '@/sanity/lib/client';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return getLocalizedMetadata({
    locale,
    path: '/',
    title: 'Meiris — The power conversion platform for global electrification',
  });
}

export const revalidate = 0; // Disable caching to fetch live data from Sanity


export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  // Fetch the homepage document for this locale. Fallback to English if not found.
  const homePage = await client.fetch(
    `*[_type == "homePage" && language == $locale][0] {
      ...,
      solutionsSection {
        ...,
        solutions[] {
          ...,
          "imageUrl": image.asset->url
        }
      },
      contactSection {
        ...,
        "imageUrl": image.asset->url
      }
    }
    `,
    { locale }
  ) || await client.fetch(
    `*[_type == "homePage" && language == "en"][0] {
      ...,
      solutionsSection {
        ...,
        solutions[] {
          ...,
          "imageUrl": image.asset->url
        }
      },
      contactSection {
        ...,
        "imageUrl": image.asset->url
      }
    }`
  );

  // Fetch the latest 3 posts dynamically from the insightsPage singleton
  let latestPosts = await client.fetch(
    `*[_type == "insightsPage" && language == $locale][0].insightsItems[] | order(publishedAt desc)[0...3] {
      title,
      publishedAt,
      "slug": _key,
      "imageUrl": image.asset->url + "?w=800&h=450&fit=crop"
    }`,
    { locale }
  );

  if (!latestPosts || latestPosts.length === 0) {
    latestPosts = await client.fetch(
      `*[_type == "insightsPage" && language == "en"][0].insightsItems[] | order(publishedAt desc)[0...3] {
        title,
        publishedAt,
        "slug": _key,
        "imageUrl": image.asset->url + "?w=800&h=450&fit=crop"
      }`
    );
  }


  if (!homePage) {
    return <div>Home page content not found.</div>;
  }

  return (
    <div className="main-wrapper">
      <Hero data={homePage.hero || {}} />
      <Solutions data={homePage.solutionsSection || {}} />
      <LatestNews data={{...(homePage.latestNewsSection || {}), posts: latestPosts}} locale={locale} />
      <Contact data={homePage.contactSection || {}} />
    </div>
  );
}
