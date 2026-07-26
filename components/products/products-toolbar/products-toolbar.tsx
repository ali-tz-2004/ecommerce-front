import { Input } from "@/components/ui/input";
import { ProductsToolbarProps, SortOption } from "./products-toolbar.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortOptions: SortOption[] = [
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Price: Low to High",
    value: "price-asc",
  },
  {
    label: "Price: High to Low",
    value: "price-desc",
  },
];

export default function ProductsToolbar({
  totalProducts,
}: ProductsToolbarProps) {
  return (
    <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border p-4 md:flex-row md:items-center md:justify-between">
      <Input className="max-w-sm" placeholder="Search products..." />

      <span className="text-sm text-gray-500">
        Showing {totalProducts} products
      </span>

      <Select defaultValue="newest">
        <SelectTrigger className="w-55">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>

        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
