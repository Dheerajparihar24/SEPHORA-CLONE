import { SearchIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useState } from "react";
import { IconWithLabel } from "./IconWithLabel";
import { RiStore3Line } from "react-icons/ri";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

export const MainNavbar = () => {
  const [isIconVisible, setIconVisible] = useState(true);
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const handleFocus = () => {
    setIconVisible(false);
  };

  const handleBlur = () => {
    setIconVisible(true);
  };

  return (
    <>
      <Flex
        bg="white"
        color="black"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: "28" }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        {/* Logo */}
        <Flex flex={{ base: 1 }} mr={1}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">
            SEPHORA
          </Text>
        </Flex>

        {/* Search Bar */}
        <Flex flex={{ base: 2, md: 2 }} display={{ base: "none", md: "flex" }}>
          <InputGroup size="md" border={1}>
            {isIconVisible && (
              <InputLeftElement>
                <SearchIcon color="gray.500" />
              </InputLeftElement>
            )}
            <Input
              placeholder="Search"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputGroup>
        </Flex>

        {/* Right Side Icons */}
        <Flex justify={"flex-end"}>
          {isLargeScreen && (
            <>
              <IconWithLabel
                icon={RiStore3Line}
                label="Stores & Services"
                subLabel="Choose Your Store"
              />

              <IconWithLabel
                icon={AiOutlineUsergroupDelete}
                label="Community"
                display={{ base: "none", lg: "flex" }}
              />

              <Divider
                orientation="vertical"
                height="40px"
                display={{ base: "none", lg: "flex" }}
              />

              <IconWithLabel
                iconSrc="src\assets\images\icon-3.svg"
                label="Sign In"
                subLabel="for FREE shipping🚗"
              />
            </>
          )}

          <IconWithLabel icon={AiOutlineHeart} badgeCount={1} />
          <IconWithLabel icon={AiOutlineShopping} />
        </Flex>
      </Flex>
    </>
  );
};
