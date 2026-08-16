"use client";
import Container from "@/components/ui/container";
import ProductsHeader from "../products-header";
import ProductsToolbar from "../products-toolbar";
import ProductsSidebar from "../products-sidebar";
import ProductGrid from "../products-grid";
import ProductPagination from "../products-pagination";
import { useProducts } from "@/hooks/queries/use-products";
import { useState } from "react";
import { SortOptionValue } from "../products-toolbar/products-toolbar.types";
import { useDebounce } from "@/hooks/use-debounce";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOptionValue>("newest");

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const debouncedSearch = useDebounce(search, 500);

  const skip = (page - 1) * limit;

  const { data, isError, isFetching } = useProducts({
    limit: limit,
    skip: skip,
    search: debouncedSearch,
  });

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
        }}
      />

      <Container>
        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
          <ProductsSidebar />
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
