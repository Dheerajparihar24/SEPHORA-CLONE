/* eslint-disable react/prop-types */
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";

export const OfferCard = ({ srcImg, label, offer, offerFor, subLabel }) => {
  return (
    <Card mx={2} my={1}>
      <Image src={srcImg} />
      <Box p={2}>
        <Text fontWeight="bold" fontSize="14px">
          {label}
        </Text>
        <Text fontSize="small" fontWeight="bold" my={1}>
          {offer}
        </Text>
        <Text my={1} fontSize="small">{offerFor}</Text>
        <Text fontSize="small">{subLabel}</Text>
        <Flex>
          <Button variant="outline" borderRadius="25px" my={2}>
            Shop Now
          </Button>
        </Flex>
      </Box>
    </Card>
  );
};
