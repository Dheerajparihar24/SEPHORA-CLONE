import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { IconWithLabel } from "./Icons/IconWithLabel";
import { RiStore3Line } from "react-icons/ri";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { HoverDropdown } from "./Dropdowns/HoverDropdown";
import { PopoverDropdown } from "./Dropdowns/PopoverDropdown";

export const MainNavbar = () => {
  const [isIconVisible, setIconVisible] = useState(true);
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const showHamburger = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
    xl: false,
  });

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
        px={{ base: 2, md: 9, lg: 10 }}
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
          flex="none"
          justify={{ base: "center", md: "flex-start" }}
          maxW={{ base: "150px", md: "200px", lg: "250px" }}
        >
          <Text
            fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}
            fontWeight="semibold"
            noOfLines={1}
          >
            SEPHORA
          </Text>
        </Flex>

        {/* Search Bar */}
        <Flex
          flex={{ base: 2, md: 2, lg: 1 }}
          mx={{ base: 2, md: 4 }}
          display={{ base: "flex" }}
          maxW={{ base: "200px", md: "400px", lg: "500px" }}
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
          flex={{ base: 1, md: 1, lg: "none" }}
          justify={{ base: "flex-end", md: "flex-end" }}
          alignItems="center"
          mx={{ base: 2, md: 4 }}
        >
          {isLargeScreen && (
            <>
              <HoverDropdown>
                <IconWithLabel
                  icon={RiStore3Line}
                  label="Stores & Services"
                  subLabel="Choose Your Store"
                  display={{ base: "none", lg: "flex" }}
                />
              </HoverDropdown>

              {/* PopoverDropdown for Community Icon */}
              <PopoverDropdown community={true}>
                <IconWithLabel
                  icon={AiOutlineUsergroupDelete}
                  label="Community"
                  display={{ base: "none", lg: "flex" }}
                />
              </PopoverDropdown>

              <Divider
                orientation="vertical"
                height="40px"
                display={{ base: "none", lg: "flex" }}
              />

              <PopoverDropdown>
                <IconWithLabel
                  iconSrc="src\assets\images\icon-3.svg"
                  label="Sign In"
                  subLabel="for FREE shipping🚗"
                />
              </PopoverDropdown>

              <IconWithLabel icon={AiOutlineHeart} badgeCount={1} />
            </>
          )}

          <IconWithLabel icon={AiOutlineShopping} />
          {showHamburger && <HamburgerIcon />}
        </Flex>
      </Flex>

      {showHamburger && (
        <Flex justify="space-between" px={5} my={2}>
          <Box>
            <Text fontSize="16px" fontWeight="semibold">
              Sign In for FREE Shipping 🚗
            </Text>
            <Text fontSize="14px">
              Don&apos;t have an Account ? <Link>Create Account</Link>
            </Text>
          </Box>
          <Button bg="black" color="white">
            Sign In
          </Button>
        </Flex>
      )}
    </>
  );
};
