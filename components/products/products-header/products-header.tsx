import { ProductsHeaderProps } from "./products-header.types";

export default function ProductsHeader({
  title,
  description,
}: ProductsHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
