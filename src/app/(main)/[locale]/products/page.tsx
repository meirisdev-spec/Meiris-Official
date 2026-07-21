import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

import { getLocalizedMetadata } from "@/lib/seo";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return getLocalizedMetadata({
    locale,
    path: '/products',
    title: "Products — Meiris Intelligent Power Conversion",
    description: "Discover MEIRIS Charge: SiC-based DC fast chargers and intelligent power conversion products.",
  });
}

export default function Page() {
  return <ProductsClient />;
}
