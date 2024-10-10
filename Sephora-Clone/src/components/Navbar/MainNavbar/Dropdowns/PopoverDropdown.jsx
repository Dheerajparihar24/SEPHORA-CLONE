/* eslint-disable react/prop-types */
import {
  Box,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
// import { BiSolidLocationPlus } from "react-icons/bi";
import { DropDownCard } from "./DropDownCard";
import { PopoverCard } from "./PopoverCard";

export const PopoverDropdown = ({ children, community }) => {
  return (
    <Popover trigger="hover" placement="bottom" closeOnBlur={true}>
      <PopoverTrigger>
        <div>{children}</div>
      </PopoverTrigger>
      <PopoverContent width={"360px"}>
        <PopoverHeader>
          <PopoverCard
            label="Community Profile"
            subLabel="Sign in to see your profile"
            src="https://www.sephora.com/img/ufe/icons/me-active.svg"
            notification={true}
          />
        </PopoverHeader>

        <PopoverArrow />

        <PopoverBody>
          {community ? (
            <Box>
              <DropDownCard
                src="https://community.sephora.com/html/@18A4D26C36E7126B19DCD90FCAA15A96/assets/img-community-home.png"
                label="Community Home"
                subLabel="Ask questions, join challenges, and get recommendations from people like"
              />

              <Divider />

              <DropDownCard
                src="https://community.sephora.com/html/@1FF1216E3839211C4E7748C9AEAF589C/assets/community_groups.webp"
                label="Groups"
                subLabel="Discover topics tailored to your beauty interests"
              />

              <Divider />

              <DropDownCard
                src="https://community.sephora.com/html/@AA1386B9F8369D317C9665D0C52A21D1/assets/img-gallery.png"
                label="Gallery"
                subLabel="Add your photos and get inspired by fellow beauty lovers"
              />
            </Box>
          ) : (
            <Box>
              <DropDownCard
                src="https://community.sephora.com/html/@18A4D26C36E7126B19DCD90FCAA15A96/assets/img-community-home.png"
                label="Community Home"
                subLabel="Ask questions, join challenges, and get recommendations from people like"
              />
              
            </Box>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
