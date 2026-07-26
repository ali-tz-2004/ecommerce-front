import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-card px-8 py-16 text-center">
          <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>

          <p className="mt-3 opacity-90">
            Get the latest products and exclusive offers.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl rounded-xl bg-background p-2 shadow-lg gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-0 shadow-none focus-visible:ring-0"
            />

            <Button>Subscribe</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
