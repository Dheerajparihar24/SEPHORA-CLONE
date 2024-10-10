import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/Home/HeroSection/HeroSection";
import { OfferSection } from "../components/Home/OfferSection/OfferSection";
import { OfferSectionBanner } from "../components/Home/OfferSectionBanner/OfferSectionSlider";

import { ProductSection } from "../components/Home/ProductSection/ProductSection";
import { Navbar } from "../components/Navbar/Navbar";
import { products } from "../data/product";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductSection sectionLabel="Chose For You" products={products} />
      <ProductSection sectionLabel="New Arrivals" products={products} />

      <OfferSection />

      <OfferSectionBanner />

      <ProductSection sectionLabel="Celebrate La Cultura" products={products} />
      
      <ProductSection
        sectionLabel="Beauty Insider Rewards"
        products={products}
      />

      <OfferSectionBanner />
      <Footer />
    </div>
  );
};
