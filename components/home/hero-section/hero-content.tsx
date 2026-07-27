import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <span className="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
        New Collection
      </span>

      <h1 className="mt-8 text-6xl font-black leading-tight">
        Discover Premium
        <br />
        Tech Products
      </h1>

      <p className="mt-6 text-lg text-muted-foreground">
        Browse thousands of carefully selected products with modern design,
        premium quality and fast delivery.
      </p>

      <div className="mt-10 flex gap-4">
        <Button size="lg">
          Shop Now
          <ArrowRight className="ml-2 size-4" />
        </Button>

        <Button variant="outline" size="lg">
          Browse Products
        </Button>
      </div>
    </div>
  );
}
