"use client";

import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { useCategories } from "@/hooks/queries/use-categories";
import CategoriesSectionSkeleton from "./categories-section-skeleton";

export default function CategoriesSection() {
  const { data, isLoading } = useCategories();

  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          title="Categories"
          description="Browse products by category."
        />

        {isLoading ? (
          <CategoriesSectionSkeleton />
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {data?.map((category, index) => (
              <div
                key={index}
                className="rounded-xl border p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                {category.name}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
