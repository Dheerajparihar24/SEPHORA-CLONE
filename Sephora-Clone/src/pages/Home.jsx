import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/Home/HeroSection/HeroSection";
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
      {/* <ProductSection  sectionLabel="Chose For You"/> */}
      <Footer />
    </div>
  );
};
