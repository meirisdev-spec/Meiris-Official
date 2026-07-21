
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

  // Fetch the latest 3 posts dynamically
  const latestPosts = await client.fetch(
    `*[_type == "post" && (!defined(language) || language == $locale)] | order(publishedAt desc)[0...3] {
      title,
      publishedAt,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      categories[]->{title}
    }`,
    { locale }
  );

  console.log("HOMEPAGE DATA FROM SANITY:", JSON.stringify(homePage, null, 2));

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
