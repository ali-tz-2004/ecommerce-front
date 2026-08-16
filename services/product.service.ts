import { Product, ProductsResponse } from "@/types/product";
import { apiClient } from "./api/api-client";
import { API_ENDPOINTS } from "./api/endpoints";

export async function getProducts(
  limit: number = 30,
  skip: number = 0,
  search?: string,
): Promise<ProductsResponse> {
  const endpoint = search
    ? API_ENDPOINTS.PRODUCTS_SEARCH
    : API_ENDPOINTS.PRODUCTS;

  const response = await apiClient.get<ProductsResponse>(endpoint, {
    params: {
      limit,
      skip,
      ...(search && { q: search }),
    },
  });

  return response.data;
}

export async function getProductById(id: number) {
  const response = await apiClient.get<Product>(
    `${API_ENDPOINTS.PRODUCT}/${id}`,
  );

  return response.data;
}
