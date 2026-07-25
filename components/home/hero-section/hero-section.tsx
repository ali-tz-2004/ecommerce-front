import Container from "@/components/ui/container";

import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import { HeroData } from "./hero.types";

const hero: HeroData = {
  title: "Discover Your Next Favorite Product",
  subtitle: "Explore thousands of premium products with modern design.",
  buttonText: "Shop Now",
};

export default function HeroSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <HeroContent hero={hero} />

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
