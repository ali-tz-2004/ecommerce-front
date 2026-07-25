import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

export default function FeaturedProductsSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          title="Featured Products"
          description="Our hand-picked products."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-80 rounded-xl border bg-gray-100 dark:bg-gray-800"
            ></div>
          ))}
        </div>
      </Container>
    </section>
  );
}
