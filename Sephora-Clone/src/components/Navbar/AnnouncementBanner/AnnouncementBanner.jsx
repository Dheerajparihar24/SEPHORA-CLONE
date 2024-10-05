import { CloseIcon } from "@chakra-ui/icons";
import { Box, Text, Link, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

export const AnnouncementBanner = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Box
        bg="blue.100"
        alignItems={"center"}
        p={3}
        display={isOpen ? "flex" : "none"}
      >
        <Box flex="1" textAlign="center">
          <Text fontSize={{ base: "12px", md: "15px" }}>
            <Link href="#">
              <Text as="b">Don't miss out!</Text> So many deals, trial sizes,
              sample sets, and more.<Text as="b">Shop Beauty offers</Text>
            </Link>
          </Text>
        </Box>
        <CloseIcon
          onClick={onClose}
          pl="5px"
          ml="auto"
          mr="10px"
          cursor="pointer"
          fontSize={{ base: "15px", md: "15px" }}

        />
      </Box>
    </>
  );
};
