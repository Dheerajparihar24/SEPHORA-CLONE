/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { StarReviews } from "./StarReviews";

export const ProductCard = ({
  srcImg,
  title,
  subTitle,
  price,
  rating,
  reviewCount,
}) => {
  return (
    <Card
      h={{ base: "280px", lg: "323px" }}
      m={2}
      borderRadius={5}
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      cursor="pointer"
      position="relative"
      overflow="hidden"
      _hover={{
        "& .quicklook-button": {
          opacity: "1",
          visibility: "visible",
        },
        "& overlay": {
          opacity: "0.5",
        },
      }}
    >
      <CardBody>
        <Box m={0} w="100%" marginBottom="8px" position="relative">
          <Image
            height={{ base: "140px", lg: "166px" }}
            src={srcImg}
            alt="Nars Mini Radiant Creamy Concealer"
          />
          <Button
            variant="outline"
            width="100%"
            _hover={{ bg: "transparent" }}
            position="absolute"
            bottom="0"
            opacity="0"
            transition="opacity 0.3s ease"
            className="quicklook-button"
            bg="transparent"
          >
            Quicklook
          </Button>
        </Box>
        <Heading
          noOfLines={1}
          fontSize={{ base: "12px", lg: "14px" }}
          fontWeight="bold"
        >
          {title}
        </Heading>

        <Text
          noOfLines={2}
          my={1}
          fontSize={{ base: "11px", lg: "13px" }}
          fontWeight="semibold"
        >
          {subTitle}
        </Text>

        <Text color="black.400" fontSize="md" fontWeight="bold">
          ${price}
        </Text>

        <Box mt={2}>
          <StarReviews rating={rating} reviewCount={reviewCount} />
        </Box>
      </CardBody>
    </Card>
  );
};
