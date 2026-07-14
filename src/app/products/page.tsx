import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — Meiris Intelligent Power Conversion",
  description: "Engineered for harsh operating conditions. Built to deliver every time.",
};

export default function Page() {
  return <ProductsClient />;
}
