import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { client } from "@/sanity/lib/client";

import { getLocalizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return getLocalizedMetadata({
    locale,
    path: '/products',
    title: "Products — Meiris Intelligent Power Conversion",
    description: "Discover MEIRIS Charge: SiC-based DC fast chargers and intelligent power conversion products.",
  });
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  const productsPage = await client.fetch(
    `*[_type == "productsPage" && language == $locale][0] {
      ...,
      hero {
        ...,
        "imageUrl": image.asset->url
      },
      categories {
        acCard {
          ...,
          "imageUrl": image.asset->url
        },
        dcCard {
          ...,
          "imageUrl": image.asset->url
        }
      }
    }`,
    { locale }
  ) || await client.fetch(
    `*[_type == "productsPage" && language == "en"][0] {
      ...,
      hero {
        ...,
        "imageUrl": image.asset->url
      },
      categories {
        acCard {
          ...,
          "imageUrl": image.asset->url
        },
        dcCard {
          ...,
          "imageUrl": image.asset->url
        }
      }
    }`
  );

  return <ProductsClient data={productsPage} />;
}
