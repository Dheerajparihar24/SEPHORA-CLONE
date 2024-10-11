/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Flex,
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
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { SignUp } from "../Sign Up/SignUp";
import axios from "axios";

export const CreateAccount = ({ children }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password.length > 6) {
      toast({
        title: "Invalid input",
        description:
          "Please ensure all fields are filled and password is at least 6 characters.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = axios.post(
        "https://sephora-e81aa-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        user
      );

      toast({
        title: "User created successfully",
        description: `Welcome to Beauty Insider!`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      onClose(); // Close the modal on success
    } catch (error) {
      toast({
        title: "Error creating user",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

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
            <form onSubmit={handleSubmit}>
              <InputGroup my={5} gap={2}>
                <Input
                  ref={initialRef}
                  placeholder="First Name"
                  border="1px solid gray"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  placeholder="Last Name"
                  border="1px solid gray"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>
              <Input
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                border="1px solid gray"
              />
              <Input
              type="password"
                marginTop={5}
                placeholder="Enter Password (6 - 12 Characters)"
                border="1px solid gray"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                value="Continue"
                type="submit"
                bg="black"
                borderRadius="25px"
                color="white"
                marginTop={5}
              />
            </form>
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
