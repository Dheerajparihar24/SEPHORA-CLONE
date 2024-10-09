import { Flex, useBreakpointValue } from "@chakra-ui/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OfferCard } from "./OfferCard";

export const OfferSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 5,
    slidesToScroll: isMobile ? 1 : 5,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      my={5}
    >
      <Slider {...settings}>
        <OfferCard
          srcImg="https://www.sephora.com/contentimages/promo/beautyoffers/2024/October/2024-10-02-slotting-baar-site-beauty-offers-banner-1000x750-english-US-CAN-handoff.jpg?imwidth=240"
          label="Auto-Replenish Hot Deal "
          offer="Get 15% off¶ select Ouai subscription deliveries."
          offerFor="Limited Time Only"
          subLabel="Beauty Insider members only. Online only • Ends 10/31/2024¶Terms apply."
        />
        <OfferCard
          srcImg="https://www.sephora.com/contentimages/promo/beautyoffers/2024/October/2024-10-08-slotting-baar-site-beauty-offers-banner-1000x750-english-US-CA-handoff.jpg?imwidth=240"
          label="Auto-Replenish Hot Deal "
          offer="Get 15% off¶ select Ouai subscription deliveries."
          offerFor="Limited Time Only"
          subLabel="Beauty Insider members only. Online only • Ends 10/31/2024¶Terms apply."
        />
        <OfferCard
          srcImg="https://www.sephora.com/contentimages/promo/bpme/2024/October/2024-10-3-october-bpme-site-desktop-mobile-app-beauty-offers-page-banner-dior-en-us-can-v2.jpg?imwidth=240"
          label="Auto-Replenish Hot Deal "
          offer="Get 15% off¶ select Ouai subscription deliveries."
          offerFor="Limited Time Only"
          subLabel="Beauty Insider members only. Online only • Ends 10/31/2024¶Terms apply."
        />
        <OfferCard
          srcImg="https://www.sephora.com/contentimages/promo/bpme/2024/October/2024-10-3-october-bpme-site-desktop-mobile-app-beauty-offers-page-banner-k18-biomimetic-hairscience-en-us-can.jpg?imwidth=240"
          label="Auto-Replenish Hot Deal "
          offer="Get 15% off¶ select Ouai subscription deliveries."
          offerFor="Limited Time Only"
          subLabel="Beauty Insider members only. Online only • Ends 10/31/2024¶Terms apply."
        />
        <OfferCard
          srcImg="https://www.sephora.com/contentimages/promo/beautyoffers/2024/October/2024-10-01-slotting-baar-site-beauty-offers-banner-1000x750-US-handoff.jpg?imwidth=240"
          label="Auto-Replenish Hot Deal "
          offer="Get 15% off¶ select Ouai subscription deliveries."
          offerFor="Limited Time Only"
          subLabel="Beauty Insider members only. Online only • Ends 10/31/2024¶Terms apply."
        />
      </Slider>
    </Flex>
  );
};
