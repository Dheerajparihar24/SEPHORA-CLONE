/* eslint-disable react/prop-types */
import { Avatar, Flex, Text, WrapItem, Box } from "@chakra-ui/react";
import { ButtonComponent } from "../../common/ButtonComponent";
import { SignUp } from "../../../Home/Sign Up/SignUp";
import { CreateAccount } from "../../../Home/CreateAccount/CreateAccount";

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
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <SignUp>
          <ButtonComponent
            variant="solid"
            bg="black"
            colorScheme="black"
            borderRadius="2xl"
            width="160px"
            value={"Sign In"}
            height="30px"
          />
        </SignUp>

        <CreateAccount>
          <ButtonComponent
            variant="outline"
            colorScheme="black"
            borderRadius="2xl"
            width="160px"
            value="Create Account"
            height="30px"
          />
        </CreateAccount>
      </Flex>
    </Box>
  );
};
