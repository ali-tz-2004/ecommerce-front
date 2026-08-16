export const QUERY_KEYS = {
  PRODUCTS: ["products"] as const,
  PRODUCTS_LIMIT: (limit?: number, skip?: number) =>
    ["products", limit, skip] as const,

  PRODUCT: (id: number) => ["product", id] as const,

  CATEGORIES: ["categories"] as const,

  FEATURED_PRODUCTS: ["feature-products"] as const,

  POPULAR_PRODUCTS: ["popular-products"] as const,
};
