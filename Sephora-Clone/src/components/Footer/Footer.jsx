import { Box, Flex, Link } from "@chakra-ui/react";
import { IconWithLabel } from "../Navbar/MainNavbar/Icons/IconWithLabel";

export const Footer = () => {
  return (
    <Box mt={5} bg="#CCCCCC">
      <Box textAlign="center">
        <Link fontWeight="bold">Website feedback? Let us know</Link>
      </Box>
      <Box bg="black">
        <Flex>
          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/find-store.svg"
            label="Find a Store"
            subLabel="Chose Your Store"
            color="white"
            subLabelColor="white"
          />

          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/sms-ko.svg"
            label="Customer Service"
            subLabel="Chat is unavailable"
            color="white"
            subLabelColor="white"
          />
          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/app.svg"
            label="Get the App"
            subLabel="Download Now"
            color="white"
            subLabelColor="white"
          />
          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/sms-ko.svg"
            label="Get Sephora Text Alerts"
            subLabel="Sign up Now"
            color="white"
            subLabelColor="white"
          />
          <IconWithLabel
            iconSrc="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg"
            label="Sephora Credit Card Program"
            subLabel="Want 25% off your Sephora purchase? DETAILS"
            color="white"
            subLabelColor="white"
          />
        </Flex>
      </Box>
    </Box>
  );
};
