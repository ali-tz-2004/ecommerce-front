import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { Category } from "./categories.types";

const categories: Category[] = [
  { id: 1, name: "Phones" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Furniture" },
  { id: 4, name: "Groceries" },
];

export default function CategoriesSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          title="Categories"
          description="Browse products by category."
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              {category.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
