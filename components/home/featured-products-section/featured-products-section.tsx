import ProductCard from "@/components/shared/product-card";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { mockProducts } from "@/mocks/products";

export default function FeaturedProductsSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          title="Featured Products"
          description="Our hand-picked products."
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
