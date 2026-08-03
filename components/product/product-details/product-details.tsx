"use client";

import Container from "@/components/ui/container";
import { useProduct } from "@/hooks/queries/use-product";
import ProductGallery from "../product-gallery";
import ProductInfo from "../product-info/product-info";

interface ProductDetailProps {
  id: string;
}

export default function ProductDetail({ id }: ProductDetailProps) {
  const { data } = useProduct({ id: Number(id) });

  if (!data) return null;

  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <ProductGallery data={data} />

          <ProductInfo data={data} />
        </div>
      </Container>
    </section>
  );
}
