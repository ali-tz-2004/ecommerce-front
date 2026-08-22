import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/product.service";
import { QUERY_KEYS } from "@/lib/query-keys";

interface UseProductsProps {
  limit?: number;
  skip?: number;
  search?: string;
  categories: string[];
}

export function useProducts({
  limit,
  skip,
  search,
  categories,
}: UseProductsProps) {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS(limit, skip, search, categories),
    queryFn: () => getProducts(limit, skip, search, categories),
  });
}
