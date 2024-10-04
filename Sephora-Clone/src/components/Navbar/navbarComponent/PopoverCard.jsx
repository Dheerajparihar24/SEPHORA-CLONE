/* eslint-disable react/prop-types */
import { Avatar, Flex, Text, WrapItem, Box, Button } from "@chakra-ui/react";
import { ButtonComponent } from "../common/ButtonComponent";

export const PopoverCard = ({ label, subLabel, src }) => {
  return (
    <Box>
      <Flex py={2}>
        {src && (
          <WrapItem mx={2}>
            <Avatar name="Dan Abrahmov" src={src} />
          </WrapItem>
        )}

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

          {/* {notification && (
            <>
              <Text>No</Text>
              <Text>Yes</Text>
            </>
          )} */}
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <ButtonComponent
          variant="solid"
          bg="black"
          colorScheme="black"
          borderRadius="2xl"
          width="160px"
          value={"Sign In"}
          height="30px"
        />

        {/* <Button
          variant="outline"
          colorScheme="black"
          borderRadius="2xl"
          width="160px"
        >
          Create Account
        </Button> */}
        <ButtonComponent
          variant="outline"
          colorScheme="black"
          borderRadius="2xl"
          width="160px"
          value="Create Account"
           height="30px"
        />
      </Flex>
    </Box>
  );
};
