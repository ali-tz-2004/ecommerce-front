"use client";

import { ProductsGridProps } from "./products-grid.types";
import ProductCard from "@/components/shared/product-card";

export default function ProductsGrid({ data }: ProductsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {data?.products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
