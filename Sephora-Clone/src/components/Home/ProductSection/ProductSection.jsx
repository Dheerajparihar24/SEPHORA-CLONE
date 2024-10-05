import { Box, Flex, Heading } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";

export const ProductSection = () => {
  return (
    <Box style={{ padding: "10px" }}>
      <Flex padding={10}>
        <Heading size="lg"> Chose For You</Heading>
      </Flex>
      <Flex style={{ border:"1px solid black" }}>
        <ProductCard />
      </Flex>
    </Box>
  );
};
