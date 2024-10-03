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
        py={{ base: 2, md: 4, lg: 6 }}
        px={{ base: 7, md: 9, lg: 10 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
        justifyContent={{
          base: "space-between",
          md: "flex-start",
          lg: "center",
        }}
      >
        <Flex
          flex="none" // Prevents shrinking or growing
          justify={{ base: "center", md: "flex-start" }}
          maxW={{ base: "150px", md: "200px", lg: "250px" }}
        >
          <Text
            fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}
            fontWeight="semibold"
            noOfLines={1} // Ensures it doesn't overflow into multiple lines
          >
            SEPHORA
          </Text>
        </Flex>

        {/* Search Bar */}
        <Flex
          flex={{ base: 2, md: 2, lg: 1 }}
          mx={{ base: 2, md: 4 }}
          display={{ base: "flex" }}
          maxW={{ base: "200px", md: "400px", lg:"500px"}}
        >
          <InputGroup size="md">
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
        <Flex
          flex={{ base: 1, md: 1, lg: "none" }} // none extra add tonight
          justify={{ base: "flex-end", md: "flex-end" }}
          alignItems="center"
          mx={{ base: 2, md: 4 }} // extra add tonight
        >
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
