import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "../Context/Auth";
import Message from "./Message";

export default function LoginForm() {
  const {
    userName,
    password,
    updateUserName,
    updatePassword,
    handleSubmit,
    isAuthenticated,
  } = useAuth();

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={userName}
          focusBorderColor="blue.200"
          color="#111"
          onChange={(e) => {
            updateUserName(e.target.value);
          }}
        />
      </FormControl>

      <FormControl mt="50px" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          focusBorderColor="blue.200"
          color="#111"
          onChange={(e) => {
            updatePassword(e.target.value);
          }}
        />
      </FormControl>

      {/* <Center mt="30px">
        {isAuthenticated && (
          <Message color="tomato" fontWeight="200">
            Login Failure 😞
          </Message>
        )}
      </Center> */}

      <Center>
        <Button
          mt="70px"
          bg="#74c0fc"
          _hover={{
            backgroundColor: "#4dabf7",
          }}
          type="submit"
        >
          <Text color="white">Login</Text>
        </Button>
      </Center>
    </form>
  );
}
