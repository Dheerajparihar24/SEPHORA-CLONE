import { Box, Flex, Link } from "@chakra-ui/react";
import { SecondaryNavbarDropdown } from "./Dropdowns/SecondaryNavbarDropdown";

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

  const dropdownContentMap = {
    New: {
      sections: [
        {
          title: "All New",
          items: [
            "Just Dropped",
            "New Makeup",
            "New Skincare",
            "New Hair Care",
            "New Fragrance",
            "New Bath & Body",
            "New Tools & Brushes",
          ],
        },
        {
          title: "The Next Big Thing",
          items: [
            "Bestsellers",
            "Trending on Social",
            "Refillable Beauty Products",
            "Buying Guides",
            "Clean Beauty",
            "Planet Aware Beauty",
            "FSA & HSA Eligible",
          ],
        },
      ],
      images: [
        {
          src: "https://www.sephora.com/contentimages/2024-9-26-fenty-hair-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294",
          alt: "Image description 1",
        },
        {
          src: "https://www.sephora.com/contentimages/2024-10-3-summer-fridays-jetlag-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294",
          alt: "Image description 2",
        },
      ],
    },

    Brands: {
      sections: [
        {
          title: "Brands A-Z",
          items: [
            "SEPHORA COLLECTION",
            "New Brands",
            "Sarah Creal",
            "Montale",
            "Davines",
          ],
        },

        {
          title: "Only At Sephora",
          items: [
            "iNNBEAUTY PROJECT",
            "KAYALI",
            "MILK MAKEUP",
            "Crown Affair",
            "Rare Beauty by Selena Gomez",
          ],
        },
        {
          title: "Affordable Brands",
          items: [
            "SEPHORA COLLECTION",
            "The Ordinary",
            "The Inkey List",
            "Verb",
          ],
        },
        {
          title: "Black-Owned Brands",
          items: [
            "Hyper Skin",
            "FORVR Mood",
            "Fenty Beauty by Rihanna",
            "PATTERN By Tracee Ellis Ross",
          ],
        },
        {
          title: "Clean at Sephora",
          items: ["Josie Maran", "CLEAN RESERVE", "Briogeo", "MERIT"],
        },
      ],
    },
  };

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
          <SecondaryNavbarDropdown
            key={item}
            dropdownContent={dropdownContentMap[item]}
          >
            <Link {...linkStyle} style={{ textDecoration: "none" }}>
              {item}
            </Link>
          </SecondaryNavbarDropdown>
        </Box>
      ))}
    </Flex>
  );
};
