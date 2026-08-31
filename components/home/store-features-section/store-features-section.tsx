import { Headphones, ShieldCheck, Truck } from "lucide-react";

import Container from "@/components/ui/container";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your order delivered quickly and safely.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "Your shopping experience is safe and protected.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "We're here whenever you need help.",
  },
];

export default function StoreFeaturesSection() {
  return (
    <section className="border-y bg-muted/30 py-16">
      <Container>
        <div className="grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 px-6 py-6 first:pt-0 last:pb-0 md:py-2"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background">
                <Icon className="size-5" />
              </div>

              <div>
                <h3 className="font-semibold">{title}</h3>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
