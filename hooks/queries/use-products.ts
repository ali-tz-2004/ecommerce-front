import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/product.service";
import { QUERY_KEYS } from "@/lib/query-keys";

interface UseProductsProps {
  limit?: number;
  skip?: number;
}

export function useProducts({ limit, skip }: UseProductsProps = {}) {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS_LIMIT(limit, skip),
    queryFn: () => getProducts(limit, skip),
  });
}
