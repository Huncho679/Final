import { Box, Center, Heading } from "@chakra-ui/react";
import LoginForm from "../Components/LoginForm";

export default function Login() {
  return (
    <Center w="100vw" h="100vh">
      <Box
        border="2px"
        borderColor="#74c0fc"
        w="500px"
        h="500px"
        borderRadius="25px"
      >
        <Heading textAlign="center" mt="20px" color="#111" fontWeight="200">
          Welcome!
        </Heading>

        <Box w="80%" ml="50px" mt="50px">
          <LoginForm />
        </Box>
      </Box>
    </Center>
  );
}
