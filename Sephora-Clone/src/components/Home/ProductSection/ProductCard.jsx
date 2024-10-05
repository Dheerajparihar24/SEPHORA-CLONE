import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { StarReviews } from "./StarReviews";

const products = [
  {
    id: 1,
    label: "Summer Fridays",
    subLabel: "The Mini Neutrals Lip Butter Balm Set",
    price: 25.0,
    isNew: true,
    isLimitedEdition: true,
    rating: 4.5,
    reviewCount: 15,
    image:
      "https://www.sephora.com/productimages/sku/s2802452-main-zoom.jpg?imwidth=166",
  },
  {
    id: 2,
    label: "Touchland",
    subLabel: "Power Mist Hydrating Hand Sanitizer",
    price: 25.0,
    isNew: true,
    isLimitedEdition: true,
    rating: 4,
    reviewCount: 1300,
    image:
      "https://www.sephora.com/productimages/sku/s2802395-main-zoom.jpg?imwidth=166",
  },
];

export const ProductCard = () => {
  return (
    <Card  m={2} p={2} boxShadow="xl" width={{ base:"193px"}} borderRadius={2}>
      <CardBody>
        <Image 
            width="166px"
            height="166px"
          src="https://www.sephora.com/productimages/sku/s2802452-main-zoom.jpg?imwidth=166"
          alt="Nars Mini Radiant Creamy Concealer"
        />
        <Heading fontSize="15px">Nars</Heading>

        <Text noOfLines={2} my={1} fontSize="13px">The Mini Neutrals Lip Butter Balm Set</Text>

        <Text color="blue.400" fontSize="lg" fontWeight="semibold"> $450</Text>

        <Box mt={2}>
          {/* Make sure rating is passed as a number */}
          <StarReviews rating={4.8} reviewCount={1000} />
        </Box>
      </CardBody>
    </Card>
  );
};
