import CategoriesSection from "@/components/home/categories-section";
import FeaturedProductsSection from "@/components/home/featured-products-section";
import HeroSection from "@/components/home/hero-section";
import NewsletterSection from "@/components/home/news-letters-section";
import PopularProductsSection from "@/components/home/popular-products-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <PopularProductsSection />
      <NewsletterSection />
    </>
  );
}
