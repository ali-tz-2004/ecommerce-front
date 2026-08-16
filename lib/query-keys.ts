export const QUERY_KEYS = {
  PRODUCTS: (limit?: number, skip?: number, search?: string) =>
    ["products", limit, skip, search] as const,

  PRODUCT: (id: number) => ["product", id] as const,

  CATEGORIES: ["categories"] as const,

  FEATURED_PRODUCTS: ["feature-products"] as const,

  POPULAR_PRODUCTS: ["popular-products"] as const,
};
