import Link from "next/link";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function ProductDetailsNotFound() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex min-h-100 flex-col items-center justify-center rounded-3xl border bg-card p-8 text-center">
          <h2 className="text-2xl font-bold">Product Not Found</h2>

          <p className="mt-2 max-w-md text-muted-foreground">
            {
              "The product you're looking for doesn't exist or may have been removed."
            }
          </p>

          <Button className="mt-6">
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
