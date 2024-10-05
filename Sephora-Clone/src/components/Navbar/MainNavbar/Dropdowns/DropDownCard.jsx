/* eslint-disable react/prop-types */
import { Avatar, Flex, Text, WrapItem } from "@chakra-ui/react";

export const DropDownCard = ({ label, subLabel, src }) => {
  return (
    <Flex py={2} align="center" justifyContent={"center"}>
      <WrapItem mx={2}>
        <Avatar name="Dan Abrahmov" src={src} />
      </WrapItem>

      {/* Text Labels subLabel */}
      <Flex direction="column">
        <Text fontSize="sm" fontWeight="semibold" noOfLines={1}>
          {label}
        </Text>

        {subLabel && (
          <Text fontSize="xs" color="gray.500">
            {subLabel}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
