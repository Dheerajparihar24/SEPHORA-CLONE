/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Divider,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { BiSolidLocationPlus } from "react-icons/bi";
import { DropDownCard } from "./DropDownCard";

export const HoverDropdown = ({ children }) => {
  return (
    <Popover trigger="hover" placement="bottom" closeOnBlur={true}>
      <PopoverTrigger>
        <div>{children}</div>
      </PopoverTrigger>
      <PopoverContent width={"360px"}>
        <PopoverHeader
          fontWeight="semibold"
          display="flex"
          justifyContent="center"
        >
          <Button bg="black" color="white" colorScheme="black">
            Chose Your Store
          </Button>
        </PopoverHeader>

        <PopoverArrow />

        <PopoverBody>
          <Flex
            p={3}
            align={"center"}
            justifyContent={"center"}
            cursor="pointer"
          >
            <BiSolidLocationPlus size={25} />{" "}
            <Text mx={2} fontSize={"xl"}>
              Find a Sephora
            </Text>
          </Flex>
          <Divider />
          <Box>
            <DropDownCard
              src="https://www.sephora.com/contentimages/happening/flyoutmenu_makeup.svg"
              label={"Makeup Services"}
              subLabel={"One-on-one makeup application or beauty lesson"}
            />
            <Divider />
            <DropDownCard
              src="https://www.sephora.com/contentimages/happening/flyoutmenu_skincare.svg"
              label="skincare services"
              subLabel="Hydrating and exfoliating Perk treatments by Hydrafacial™"
            />
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
