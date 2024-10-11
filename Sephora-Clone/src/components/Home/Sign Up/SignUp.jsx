/* eslint-disable react/prop-types */
import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
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
import axios from "axios";
import { useRef, useState } from "react";
import { CreateAccount } from "../CreateAccount/CreateAccount";

export const SignUp = ({ children }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://sephora-e81aa-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        user
      );
      alert("User created successfully", response.data);
    } catch (error) {
      alert("error", error);
      console.log(error.message);
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
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input
                ref={initialRef}
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <ButtonGroup mb={4}>
              <Button
                colorScheme="black"
                bg="black"
                borderRadius="25px"
                mr={3}
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button
                onClick={onClose}
                bg="red.300"
                borderRadius="25px"
                colorScheme="red"
              >
                Cancel
              </Button>
            </ButtonGroup>

            {/* New to Sephora and Create Account section */}
            <Flex direction="column" alignItems="center">
              <Text mb={2} fontWeight="bold">
                New to Sephora?
              </Text>
              <CreateAccount>
                <Button
                  variant="outline"
                  borderRadius="25px"
                  color="black"
                  outlineColor="black"
                >
                  Create Account
                </Button>
              </CreateAccount>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
