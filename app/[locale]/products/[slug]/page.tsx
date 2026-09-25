import { notFound } from "next/navigation";

import ProductDetails from "@/components/products/ProductDetails";
import { getProductBySlug } from "@/data/products";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}