import { Product, ProductsResponse } from "@/types/product";
import { apiClient } from "./api/api-client";
import { API_ENDPOINTS } from "./api/endpoints";

export async function getProducts(
  limit: number = 30,
  skip: number = 0,
  search?: string,
  categories: string[] = [],
): Promise<ProductsResponse> {
  if (search) {
    const searchResponse = await apiClient.get<ProductsResponse>(
      API_ENDPOINTS.PRODUCTS_SEARCH,
      {
        params: {
          q: search,
          limit,
          skip,
        },
      },
    );

    let products = searchResponse.data.products;

    if (categories.length > 0) {
      const responses = await Promise.all(
        categories.map((category) =>
          apiClient.get<ProductsResponse>(
            `${API_ENDPOINTS.PRODUCTS}/category/${category}`,
            {
              params: {
                limit,
                skip: 0,
              },
            },
          ),
        ),
      );

      const categoryProductIds = new Set(
        responses.flatMap((response) =>
          response.data.products.map((product) => product.id),
        ),
      );

      products = products.filter((product) =>
        categoryProductIds.has(product.id),
      );

      const total = products.length;

      return {
        products: products.slice(skip, skip + limit),
        total,
        skip,
        limit,
      };
    }

    return searchResponse.data;
  }

  if (categories.length === 0) {
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

  const responses = await Promise.all(
    categories.map((category) =>
      apiClient.get<ProductsResponse>(
        `${API_ENDPOINTS.PRODUCTS}/category/${category}`,
        {
          params: {
            limit,
            skip: 0,
          },
        },
      ),
    ),
  );

  const products = responses.flatMap((response) => response.data.products);

  return {
    products,
    total: products.length,
    skip,
    limit,
  };
}

export async function getProductById(id: number) {
  const response = await apiClient.get<Product>(
    `${API_ENDPOINTS.PRODUCT}/${id}`,
  );

  return response.data;
}
