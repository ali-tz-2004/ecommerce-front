"use client";
import Container from "@/components/ui/container";
import ProductsHeader from "../products-header";
import ProductsToolbar from "../products-toolbar";
import ProductsSidebar from "../products-sidebar";
import ProductGrid from "../products-grid";
import ProductPagination from "../products-pagination";
import { useProducts } from "@/hooks/queries/use-products";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { useCategories } from "@/hooks/queries/use-categories";
import { SortOptionValue } from "@/types/product-sort";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const [sort, setSort] = useState<SortOptionValue>(
    (searchParams.get("sort") as SortOptionValue) ?? "default",
  );

  const [categories, setCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",").filter(Boolean) ?? [],
  );

  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const [limit, setLimit] = useState(Number(searchParams.get("limit")) || 12);

  const debouncedSearch = useDebounce(search, 500);

  const skip = (page - 1) * limit;

  const { data, isError, isFetching } = useProducts({
    limit,
    skip,
    search: debouncedSearch,
    sort,
    categories,
  });

  const { data: categoriesData } = useCategories();

  const updateQueryParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(window.location.search);

      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      router.replace(`${pathname}?${params.toString()}`);
    },
    [router, pathname],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currentSearch = params.get("search") ?? "";

    if (currentSearch === debouncedSearch) {
      return;
    }

    updateQueryParams({
      search: debouncedSearch || null,
      page: "1",
    });
  }, [debouncedSearch, updateQueryParams]);

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="py-10">
      <ProductsHeader
        title="Products"
        description="Discover our latest collection"
      />

      <ProductsToolbar
        search={search}
        sort={sort}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onSortChange={(value) => {
          setSort(value);
          setPage(1);
          updateQueryParams({
            sort: value === "default" ? null : value,
            page: "1",
          });
        }}
      />

      <Container>
        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
          <ProductsSidebar
            data={categoriesData ?? []}
            selectedCategories={categories}
            onCategoriesChange={(categories) => {
              setCategories(categories);
              setPage(1);
              updateQueryParams({
                categories: categories.length ? categories.join(",") : null,
                page: "1",
              });
            }}
          />
          <div className="space-y-10 relative">
            {isFetching && (
              <div className="absolute inset-0 z-10 flex items-start justify-center bg-background/50 pt-20 backdrop-blur-sm">
                <span className="text-sm text-muted-foreground">
                  Loading products...
                </span>
              </div>
            )}
            {data && (
              <>
                <ProductGrid data={data} />

                <ProductPagination
                  currentPage={page}
                  totalPages={Math.ceil(data.total / limit)}
                  pageSize={limit}
                  totalProducts={data.total}
                  onPageChange={setPage}
                  onPageSizeChange={(size) => {
                    setLimit(size);
                    setPage(1);

                    updateQueryParams({
                      page: String(page),
                    });
                  }}
                />
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
