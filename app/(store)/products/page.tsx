import ProductGrid from "@/components/products/product-grid";
import ProductPagination from "@/components/products/product-pagination";
import ProductsHeader from "@/components/products/products-header";
import ProductsSidebar from "@/components/products/products-sidebar";
import ProductsToolbar from "@/components/products/products-toolbar";
import Container from "@/components/ui/container";

export default function ProductsPage() {
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
            <ProductGrid itemsCount={9} />

            <ProductPagination currentPage={1} totalPages={10} />
          </div>
        </div>
      </Container>
    </div>
  );
}
