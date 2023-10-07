import { Button, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import { useAuth } from "../Context/Auth";

export default function Header({ children }) {
  const { setIsAuthenticated, realName, setLoggedInUser } = useAuth();

  return (
    <HStack pl="50px" mt="45px">
      <Heading fontSize="24px" color="#111">
        {children}
      </Heading>
      <Spacer />
      <HStack pr="65px" gap="24px">
        <Text fontSize="18px" fontWeight="500" color="#111">
          {realName}
        </Text>
        <Button
          bg="#74c0fc"
          _hover={{
            backgroundColor: "#4dabf7",
          }}
          onClick={() => {
            setIsAuthenticated(false);
            setLoggedInUser('');
          }}
        >
          <Text color="white">Logout &rarr;</Text>
        </Button>
      </HStack>
    </HStack>
  );
}
