/* eslint-disable react/prop-types */
import {
  Box,
  Image,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";

export const SecondaryNavbarDropdown = ({ dropdownContent, children }) => {
  return (
    <Popover trigger="hover" placement="bottom-start" closeOnBlur={true}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent width="100%" zIndex={1000}>
        <PopoverArrow />
        <PopoverBody>
          <Box display="flex">
            {/* Render sections */}
            <Box color="black" display="flex" gap={2}>
              {dropdownContent?.sections.map((section, index) => (
                <Box key={index} mb={4}>
                  <Box fontWeight="bold" mb={2}>
                    {section.title}
                  </Box>
                  <List spacing={2}>
                    {section.items.map((item, i) => (
                      <ListItem key={i}>{item}</ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>

            {/* Render images */}
            <Box display="flex" ml={5}>
              {dropdownContent?.images?.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  mb={2}
                  objectFit="cover"
                  mx={2}
                  width="300px"
                  height="300px"
                />
              ))}
            </Box>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
