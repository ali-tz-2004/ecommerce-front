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
import PrimaryActionButton from "@/components/shared/primary-action-button";

const sortOptions: SortOption[] = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Name: A to Z",
    value: "title-asc",
  },
  {
    label: "Name: Z to A",
    value: "title-desc",
  },
];

export default function ProductsToolbar({
  search,
  sort,
  hasActiveFilters,
  onSearchChange,
  onSortChange,
  onClearFilters,
}: ProductsToolbarProps) {
  return (
    <div className="sticky top-16 z-40 bg-background/80 backdrop-blur">
      <Container>
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border p-4 md:flex-row md:items-center md:justify-between">
          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            className="max-w-sm"
            placeholder="Search products..."
          />

          <div className="flex justify-center items-center gap-2">
            <Select value={sort} onValueChange={onSortChange}>
              <SelectTrigger className="w-55">
                <SelectValue placeholder="Sort by">
                  {sortOptions.find((option) => option.value === sort)?.label}
                </SelectValue>
              </SelectTrigger>

              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {hasActiveFilters && (
              <PrimaryActionButton onClick={onClearFilters}>
                Clear all
              </PrimaryActionButton>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
