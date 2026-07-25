import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title/section-title";

export default function PopularProductsSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          title="Popular Products"
          description="Most loved by our customers."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
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
