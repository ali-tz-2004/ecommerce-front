import { SortOptionValue } from "@/types/product-sort";

export interface SortOption {
  label: string;
  value: SortOptionValue;
}

export interface ProductsToolbarProps {
  search: string;
  sort: SortOptionValue;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOptionValue) => void;
}
