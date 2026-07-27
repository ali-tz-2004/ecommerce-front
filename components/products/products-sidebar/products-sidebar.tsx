import { Checkbox } from "@/components/ui/checkbox";

import { CategoryItem } from "./products-sidebar.types";
import { Label } from "@/components/ui/label";
import Container from "@/components/ui/container";

const categories: CategoryItem[] = [
  { id: 1, name: "Smartphones" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Tablets" },
  { id: 4, name: "Accessories" },
];

export default function ProductsSidebar() {
  return (
    <aside className="rounded-xl border border-border p-6">
      <h2 className="mb-4 text-lg font-semibold">Categories</h2>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center gap-3">
            <Checkbox id={`category-${category.id}`} />

            <Label
              htmlFor={`category-${category.id}`}
              className="cursor-pointer"
            >
              {category.name}
            </Label>
          </div>
        ))}
      </div>
    </aside>
  );
}
