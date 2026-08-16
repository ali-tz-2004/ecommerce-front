import { Product, ProductsResponse } from "@/types/product";
import { apiClient } from "./api/api-client";
import { API_ENDPOINTS } from "./api/endpoints";

export async function getProducts(limit: number = 30, skip: number = 0) {
  const response = await apiClient.get<ProductsResponse>(
    API_ENDPOINTS.PRODUCTS,
    {
      params: {
        limit,
        skip,
      },
    },
  );

  return response.data;
}

export async function getProductById(id: number) {
  const response = await apiClient.get<Product>(
    `${API_ENDPOINTS.PRODUCT}/${id}`,
  );

  return response.data;
}
