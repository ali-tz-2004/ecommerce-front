import Container from "@/components/ui/container";

export default function NewsletterSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-blue-600 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>

          <p className="mt-3">Get the latest products and exclusive offers.</p>

          <div className="mx-auto mt-8 flex max-w-lg gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg bg-white px-4 py-3 text-black outline-none"
            />

            <button className="rounded-lg bg-black px-6 py-3">Subscribe</button>
          </div>
        </div>
      </Container>
    </section>
  );
}
