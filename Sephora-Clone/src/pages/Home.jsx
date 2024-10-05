import { Carousel } from "../components/Home/Carousel";
import { HeroSectionCard } from "../components/Home/HeroSectionCard";
import { Navbar } from "../components/Navbar/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel>
        <HeroSectionCard />
      </Carousel>
    </div>
  );
};
