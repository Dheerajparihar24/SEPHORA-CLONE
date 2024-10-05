/* eslint-disable react/prop-types */
import { HeroSectionCard } from "./HeroSectionCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

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


const data = [
  {
    srcImg: "src/assets/images/HeroSection-1.webp",
    label: "Decadent Vanilla Scents",
    subLabel: "Spritz on what's trending this season.",
    label2: " Shop Know",
  },
  {
    srcImg: "src/assets/images/HeroSection-2.webp",
    label: "Decadent Vanilla Scents",
    subLabel: "Spritz on what's trending this season.",
    label2: " Shop Know",
  },
  {
    srcImg: "src/assets/images/HeroSection-3.avif",
    label: "Decadent Vanilla Scents",
    subLabel: "Spritz on what's trending this season.",
    label2: " Shop Know",
  },
  {
    srcImg: "src/assets/images/HeroSection-4.avif",
    label: "Decadent Vanilla Scents",
    subLabel: "Spritz on what's trending this season.",
    label2: " Shop Know",
  },
  {
    srcImg: "src/assets/images/HeroSection-5.avif",
    label: "Decadent Vanilla Scents",
    subLabel: "Spritz on what's trending this season.",
    label2: " Shop Know",
  },
  {
    srcImg: "src/assets/images/HeroSection-6.avif",
    label: "Decadent Vanilla Scents",
    subLabel: "Spritz on what's trending this season.",
    label2: " Shop Know",
  },
];

export const HeroSection = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  return (
    <Box width="100%" mx="auto" overflow="hidden">
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
