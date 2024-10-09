import { Flex, useBreakpointValue } from "@chakra-ui/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroSectionCard } from "../HeroSection/HeroSectionCard";

export const OfferSectionBanner = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Flex
      w="90%"
      direction="column"
      px={{ base: "0px", lg: "105px" }}
      mx={isMobile ? "auto" : "auto"}
    >
      <Slider {...settings}>
        <HeroSectionCard
          srcImg="https://www.sephora.com/contentimages/2024-10-10-october-rare-beauty-make-a-rare-impact-site-desktop-home-page-rwd-marketing-banner-awareness-800x534-en-us-can.jpg?imwidth=400"
          label="World Mental Health Day"
          subLabel="Sephora is donating 100% of Rare Beauty sales to the Rare Impact Fund* on 10/10."
          label2="BUILD YOUR BASKET"
        />
        <HeroSectionCard
          srcImg="https://www.sephora.com/contentimages/2023-06-02-RWD-homepage-site-desktop-mobile-home-page-marketing-banner-800x534-dei-release.jpg?imwidth=400"
          label="World Mental Health Day"
          subLabel="Sephora is donating 100% of Rare Beauty sales to the Rare Impact Fund* on 10/10."
          label2="BUILD YOUR BASKET"
        />
        <HeroSectionCard
          srcImg="https://www.sephora.com/contentimages/2024-10-02-slotting-baar-site-rwd-home-page-marketing-banner-US-CAN-handoff_01.jpg?imwidth=400"
          label="World Mental Health Day"
          subLabel="Sephora is donating 100% of Rare Beauty sales to the Rare Impact Fund* on 10/10."
          label2="BUILD YOUR BASKET"
        />
      </Slider>
    </Flex>
  );
};
