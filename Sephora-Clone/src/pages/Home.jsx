import { HeroSection } from "../components/Home/HeroSection/HeroSection";
import { ProductSection } from "../components/Home/ProductSection/ProductSection";
import { Navbar } from "../components/Navbar/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductSection />
    </div>
  );
};
