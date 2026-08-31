import FeaturedProductsSection from "@/components/home/featured-products-section";
import HeroSection from "@/components/home/hero-section";
import PopularProductsSection from "@/components/home/popular-products-section";
import StoreFeaturesSection from "@/components/home/store-features-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <PopularProductsSection />
      <StoreFeaturesSection />
    </>
  );
}
