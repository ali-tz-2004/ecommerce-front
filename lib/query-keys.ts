import { SortOptionValue } from "@/types/product-sort";

export const QUERY_KEYS = {
  PRODUCTS: (
    limit?: number,
    skip?: number,
    search?: string,
    sort?: SortOptionValue,
    categories?: string[],
  ) => ["products", limit, skip, search, sort, categories] as const,

  PRODUCT: (id: number) => ["product", id] as const,

  CATEGORIES: ["categories"] as const,

  FEATURED_PRODUCTS: ["feature-products"] as const,

  POPULAR_PRODUCTS: ["popular-products"] as const,
};
