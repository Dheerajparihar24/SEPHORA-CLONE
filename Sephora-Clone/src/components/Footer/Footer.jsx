import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { IconWithLabel } from "../Navbar/MainNavbar/Icons/IconWithLabel";

export const Footer = () => {
  return (
    <Box mt={5}>
      <Box textAlign="center" bg="#CCCCCC" py={{ base: "5", lg: "10" }}>
        <Link fontWeight="bold">Website feedback? Let us know</Link>
      </Box>
      <Box bg="black">
        <Flex
          width="80%"
          margin="auto"
          justifyContent="space-around"
          py={5}
          direction={{ base: "column", lg: "row" }}
          rowGap={3}
          outline={true}
        >
          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/find-store.svg"
            label="Find a Store"
            subLabel="Chose Your Store"
            color="white"
            subLabelColor="white"
            outline={true}
          />

          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/sms-ko.svg"
            label="Customer Service"
            subLabel="Chat is unavailable"
            color="white"
            subLabelColor="white"
            outline={true}
          />
          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/app.svg"
            label="Get the App"
            subLabel="Download Now"
            color="white"
            subLabelColor="white"
            outline={true}
          />
          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/sms-ko.svg"
            label="Get Sephora Text Alerts"
            subLabel="Sign up Now"
            color="white"
            subLabelColor="white"
            outline={true}
          />
          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg"
            label="Sephora Credit Card Program"
            subLabel="Want 25% off your Sephora purchase? DETAILS"
            color="white"
            subLabelColor="white"
            noOfLine={1}
            outline={true}
          />
        </Flex>

        <Divider my={5} />

        <Flex justify="center" direction="column" align="center">
          <Text
            fontSize="25px"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            We Belong to Something Beautiful
          </Text>
          <Flex
            gap={{ base: "5", lg: "20" }}
            marginTop={2}
            direction={{ base: "column", lg: "row" }}
          >
            <Box mx={2}>
              <Text fontSize="14px" color="white">
                Sign up for Sephora text updates
              </Text>
              <Flex gap={5} alignItems="center">
                <Input
                  placeholder="Mobile Phone Number"
                  bg="white"
                  my={{ base: "0", lg: "2" }}
                  height="35px"
                  outline="none"
                />
                <Button
                  variant="outline"
                  color="white"
                  colorScheme="black"
                  borderRadius="25px"
                  px={"28px"}
                  fontSize="14px"
                >
                  Continue
                </Button>
              </Flex>
            </Box>

            <Box mx={2}>
              <Text fontSize="14px" color="white">
                Sign up for Sephora Emails
              </Text>
              <Flex gap={5} alignItems="center">
                <Input
                  placeholder="Enter your Email Address"
                  bg="white"
                  my={{ base: "0", lg: "2" }}
                  height="35px"
                  outline="none"
                />
                <Button
                  variant="outline"
                  color="white"
                  colorScheme="black"
                  borderRadius="25px"
                  px={"28px"}
                  fontSize="14px"
                >
                  Sign Up
                </Button>
              </Flex>
            </Box>
          </Flex>

          <Divider my={5} />

          <Flex justify="space-around" marginBottom={5}>
            <Box>
              <Text color="white " fontSize={{ base: "14px", lg: "16px" }}>
                © 2024 Sephora USA, Inc. All rights reserved.
              </Text>
            </Box>
            {/* logos  */}
            {/* <Flex>
              <Image src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg" />
              <Image src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg" />
              <Image src="https://www.sephora.com/img/ufe/icons/x-ko.svg" />
              <Image src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg" />
              <Image src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg" />
              <Image src="https://www.sephora.com/img/ufe/icons/snapchat-ko.svg" />
              <Image src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg" />
            </Flex> */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
