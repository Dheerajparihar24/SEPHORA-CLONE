/* eslint-disable react/prop-types */
import { HeroSectionCard } from "./HeroSectionCard";

// ----------slider---------------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// -------------------------

import { Box, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { data } from "../../../data/heroSectionData";

const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      aria-label="Next"
      icon={<ChevronRightIcon w={8} h={8} />}
      position="absolute"
      right="0"
      top="40%"
      transform="translate(0, -50%)"
      zIndex={2}
      bg="transparent"
      color="white"
      _hover={{ bg: "gray.800" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      aria-label="Previous"
      icon={<ChevronLeftIcon w={8} h={8} />}
      position="absolute"
      left="0"
      top="40%"
      transform="translate(0, -50%)"
      zIndex={2}
      bg="transparent"
      color="white"
      _hover={{ bg: "gray.800" }}
      onClick={onClick}
    />
  );
};

// -------slider - settings------
const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  nextArrow: <NextArrow />, // Use custom Next Arrow
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // Tablets and below
      settings: {
        slidesToShow: 3, // Show 1 full card and half of the second
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Mobile and below
      settings: {
        slidesToShow: 2, // Show only 1 full card
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 445, // Mobile and below
      settings: {
        slidesToShow: 1, // Show only 1 full card
        slidesToScroll: 1,
      },
    },
  ],
};

// -------Hero section started-------

export const HeroSection = () => {
  return (
    <Box width="100%" mx="auto" overflow="hidden" >
      <Slider {...settings}>
        {data.map((card, i) => (
          <Box key={i}>
            <HeroSectionCard
              srcImg={card.srcImg}
              label={card.label}
              subLabel={card.subLabel}
              label2={card.label2}
              cardWidth="350px"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
