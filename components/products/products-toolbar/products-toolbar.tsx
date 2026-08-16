"use client";

import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ProductsToolbarProps, SortOption } from "./products-toolbar.types";

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
  search,
  sort,
  onSearchChange,
  onSortChange,
}: ProductsToolbarProps) {
  return (
    <Container>
      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border p-4 md:flex-row md:items-center md:justify-between">
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          className="max-w-sm"
          placeholder="Search products..."
        />

        <Select value={sort} onValueChange={onSortChange}>
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
    </Container>
  );
}
