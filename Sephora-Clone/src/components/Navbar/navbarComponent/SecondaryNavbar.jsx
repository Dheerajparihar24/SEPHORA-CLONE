import { Box, Flex, Link } from "@chakra-ui/react";

export const SecondaryNavbar = () => {
  const listItem = [
    "New",
    "Brands",
    "Makeup",
    "Skincare",
    "Hair",
    "Fragrance",
    "Tools & Brushes",
    "Bath & Body",
    "Mini Size",
    "Gift & Gift Card",
    "Beauty Under $20",
    "Sale & Offers",
  ];

  const boxStyles = {
    paddingX: 2,
    borderRadius: 3,
    h: "25px",
    mx: 1,
    whiteSpace: "nowrap",
    boxShadow: { base: "md", lg: "none" },
    bg: { base: "white", lg: "none" },
  };

  const linkStyle = {
    fontSize: "sm",
    fontWeight: "semibold",
    cursor: "pointer",
  };

  return (
    <Flex
      bg={{ base: "gray.100", lg: "black" }}
      justify={"space-between"}
      px={{ md: "10px", lg: "150px" }}
      py={3}
      overflowX={"auto"}
    >
      {listItem.map((item, i) => (
        <Box key={i} {...boxStyles} color={{ base: "black", lg: "white" }}>
          <Link {...linkStyle} style={{ textDecoration: "none" }}>
            {item}
          </Link>
        </Box>
      ))}
    </Flex>
  );
};
