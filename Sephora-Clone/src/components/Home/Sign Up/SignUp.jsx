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
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { CreateAccount } from "../CreateAccount/CreateAccount";
import axios from "axios";

export const SignUp = ({ children }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast(); // Initialize toast

  const [users, setUsers] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://sephora-e81aa-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      )
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  const handleSignIn = () => {
    if (users) {
      const userEntries = Object.values(users); // Convert users object to array
      const matchedUser = userEntries.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        // Show a welcome toast with the user's name
        toast({
          title: `Welcome back, ${matchedUser.firstName}!`,
          description: "You've signed in successfully.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });

        onClose(); // Close the modal after sign-in
      } else {
        // Show error toast if credentials don't match
        toast({
          title: "Invalid credentials",
          description: "Email or password is incorrect.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } else {
      // Show error toast if no users are found
      toast({
        title: "No users found",
        description: "Please create an account.",
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
