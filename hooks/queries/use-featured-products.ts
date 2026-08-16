import { QUERY_KEYS } from "@/lib/query-keys";
import { getProducts } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export function useFeaturedProducts() {
  return useQuery({
    queryKey: QUERY_KEYS.FEATURED_PRODUCTS,
    queryFn: async () => {
      const response = await getProducts();
      return response.products
        .toSorted((a, b) => b.discountPercentage - a.discountPercentage)
        .slice(0, 8);
    },
  });
}
