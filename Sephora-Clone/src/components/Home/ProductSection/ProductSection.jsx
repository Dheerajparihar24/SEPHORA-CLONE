/* eslint-disable react/prop-types */
import { Box, Flex, Heading, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export const ProductSection = ({ sectionLabel, products }) => {
  // Hook to determine if it's a mobile view (breakpoint 480px)
  const isMobile = useBreakpointValue({ base: true, md: false });

  const NextArrow = ({ onClick }) => {
    if (isMobile) return null; // Hide the button in mobile view
    return (
      <IconButton
        aria-label="Next"
        icon={<ChevronRightIcon w={8} h={8} />}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        color="white"
        _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
        onClick={onClick}
        borderRadius="50%"
        mx={-2}
      />
    );
  };

  const PrevArrow = ({ onClick }) => {
    if (isMobile) return null; // Hide the button in mobile view
    return (
      <IconButton
        aria-label="Previous"
        icon={<ChevronLeftIcon w={8} h={8} />}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        color="white"
        _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
        onClick={onClick}
        borderRadius="50%"
        mx={-2}
      />
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 6, 
    slidesToScroll: isMobile ? 1 : 6, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          slidesToShow: 4,
          slidesToScroll: 4,
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
      w="100%"
      direction="column"
      px={{ base: "0px", lg: "105px" }} 
      mx={isMobile ? "0px" : "auto"} 
    >
      {/* Slider box */}
      <Box
        overflow="hidden"
        width="100%"
        p={isMobile ? "0" : 5} 
        m={isMobile ? "0" : "auto"} 
        position="relative"
      >
        {/* Slider title */}
        <Box my="2">
          <Heading fontSize={{ base: "16px", lg: "16px" }} fontWeight="bold">
            {sectionLabel}
          </Heading>
        </Box>
        <Box>
          <Slider {...settings}>
            {products.map((product, i) => (
              <ProductCard
                key={i}
                srcImg={product.image}
                title={product.label}
                subTitle={product.subLabel}
                price={product.price}
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            ))}
          </Slider>
        </Box>
      </Box>
    </Flex>
  );
};
