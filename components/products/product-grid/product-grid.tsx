"use client";

import { ProductGridProps } from "./product-grid.types";
import ProductCard from "@/components/shared/product-card";
import { useProducts } from "@/hooks/queries/use-products";

export default function ProductGrid({ itemsCount }: ProductGridProps) {
  const { data } = useProducts({ limit: itemsCount });
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {data?.products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
