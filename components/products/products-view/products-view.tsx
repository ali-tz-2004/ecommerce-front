"use client";
import Container from "@/components/ui/container";
import ProductsHeader from "../products-header";
import ProductsToolbar from "../products-toolbar";
import ProductsSidebar from "../products-sidebar";
import ProductGrid from "../products-grid";
import ProductPagination from "../products-pagination";
import { useProducts } from "@/hooks/queries/use-products";
import { useState } from "react";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const skip = (page - 1) * limit;

  const { data, isLoading, isError } = useProducts({
    limit: limit,
    skip: skip,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !data) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="py-10">
      <ProductsHeader
        title="Products"
        description="Discover our latest collection"
      />

      <ProductsToolbar totalProducts={24} />

      <Container>
        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
          <ProductsSidebar />
          <div className="space-y-10">
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
          </div>
        </div>
      </Container>
    </div>
  );
}
