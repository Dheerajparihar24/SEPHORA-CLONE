/* eslint-disable react/prop-types */
import { Box, Image, Link, Text } from "@chakra-ui/react";

export const HeroSectionCard = ({ srcImg, label, subLabel, label2 }) => {
  return (
    <Box
      width="auto"
      m={1} 
      style={{ borderRadius: "5px", overflow: "hidden" }}
      color="white"
    >
      <Link>
        <Image boxSize="100%" height="auto" src={srcImg} alt="banner-1" />
        <Box bg="black" color="white" p={5}>
          <Text fontWeight="bold" fontSize="lg">
            {label}
          </Text>
          <Text>{subLabel}</Text>
          <Text display="block" my={2} fontWeight="bold" fontSize="md">
            {label2}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
