"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useCategories } from "@/hooks/queries/use-categories";

export default function ProductsSidebar() {
  const { data } = useCategories();

  return (
    <aside className="rounded-xl border border-border p-6">
      <h2 className="mb-4 text-lg font-semibold">Categories</h2>

      <div className="space-y-4">
        {data?.map((category, index) => (
          <div key={index} className="flex items-center gap-3">
            <Checkbox id={`category-${index}`} />

            <Label htmlFor={`category-${index}`} className="cursor-pointer">
              {category.name}
            </Label>
          </div>
        ))}
      </div>
    </aside>
  );
}
