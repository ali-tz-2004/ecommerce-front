import { ProductGridProps } from "./product-grid.types";

export default function ProductGrid({ itemsCount }: ProductGridProps) {
  return (
    <div className="grid gap-6 sm-grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: itemsCount }).map((_, index) => (
        <div
          key={index}
          className="h-80 rounded-xl border border-border bg-gray-100 dark:bg-gray-800"
        ></div>
      ))}
    </div>
  );
}
