import { mockProducts } from "@/mocks/products";
import { ProductGridProps } from "./product-grid.types";
import ProductCard from "@/components/shared/product-card";
import Container from "@/components/ui/container";

export default function ProductGrid({ itemsCount }: ProductGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
