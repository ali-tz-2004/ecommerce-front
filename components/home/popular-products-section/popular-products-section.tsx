import ProductCard from "@/components/shared/product-card";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title/section-title";
import { mockProducts } from "@/mocks/products";

export default function PopularProductsSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          title="Popular Products"
          description="Most loved by our customers."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
