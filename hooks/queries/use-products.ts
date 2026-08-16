import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/product.service";
import { QUERY_KEYS } from "@/lib/query-keys";

interface UseProductsProps {
  limit?: number;
  skip?: number;
  search?: string;
}

export function useProducts({ limit, skip, search }: UseProductsProps = {}) {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS(limit, skip, search),
    queryFn: () => getProducts(limit, skip, search),
  });
}
