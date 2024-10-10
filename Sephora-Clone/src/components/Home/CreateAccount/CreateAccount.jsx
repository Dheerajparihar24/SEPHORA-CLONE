/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { h3 } from "framer-motion/client";
import { useRef, useState } from "react";
import { SignUp } from "../Sign Up/SignUp";

export const CreateAccount = ({ children }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState(null);

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">Create Account</ModalHeader>
          <ModalCloseButton />

          <Box>
            <Heading fontFamily="monospace" fontSize="28px" mx={5}>
              Beauty Insider
            </Heading>
            <Text mx={5} my={3} fontSize="md">
              Join the Beauty Insider loyalty program. Earn points, get
              <b> FREE </b>
              <b>standard shipping</b>, redeem rewards, and more.
            </Text>
          </Box>

          <ModalBody pb={6}>
            <InputGroup my={5} gap={2}>
              <Input placeholder="First Name" border="1px solid gray" />
              <Input placeholder="Last Name" border="1px solid gray" />
            </InputGroup>

            <Input
              ref={initialRef}
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              border="1px solid gray"
            />
            <Input
              marginTop={5}
              ref={initialRef}
              placeholder="Enter Password (6 - 12 Characters)"
              border="1px solid gray"
            />

            <Input
              type="button"
              value="Continue"
              mt={5}
              bg="black"
              borderRadius="25px"
              color="white"
            />
          </ModalBody>

          <ModalFooter
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Flex direction="column" alignItems="center">
              <Text mb={2} fontWeight="bold">
                Already have an account?
              </Text>
              <SignUp>
                <Button
                  width="150px"
                  variant="outline"
                  borderRadius="25px"
                  color="black"
                  outlineColor="black"
                >
                  Sign In
                </Button>
              </SignUp>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
