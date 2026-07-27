import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/product.service";
import { QUERY_KEYS } from "@/lib/query-keys";

interface UseProductsProps {
  limit?: number;
}

export function useProducts({ limit }: UseProductsProps = {}) {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS_LIMIT(limit),
    queryFn: () => getProducts(limit),
  });
}
