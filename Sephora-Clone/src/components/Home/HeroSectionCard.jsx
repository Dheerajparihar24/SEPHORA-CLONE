import { Box, Image, Link, Text } from "@chakra-ui/react";

export const HeroSectionCard = () => {
  return (
    <Link
      width="500px"
      m={4}
      style={{ borderRadius: "20px", overflow: "hidden" }}
      color="white"
    >
      <Image
        boxSize="100%"
        height="330px"
        src="https://www.sephora.com/contentimages/2024-q3-fragrance-site-home-page-RWD-hero-banner-newness-us-can-2957-image-only.jpg?imwidth=545"
        alt="banner-1"
      />
      <Box bg="black" color="white" p={5}>
        <Text fontWeight="bold" fontSize="lg">
          Decadent Vanilla Scents
        </Text>
        <Text>Spritz on what's trending this season.</Text>
        <Text display="block" my={2} fontWeight="bold" fontSize="lg">
          Shop Know
        </Text>
      </Box>
    </Link>
  );
};
