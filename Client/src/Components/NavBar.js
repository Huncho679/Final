import { CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bg="#74c0fc"
      w={{lg: '15%', md: '25%', base: '40%'}}
      h="100vh"
      alignItems="left"
      pl={{lg: '50px', base: '20px'}}
      pt="50px"
    >
      <Link to="/dashboard">
        <HStack
          spacing="12px"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline white",
          }}
        >
          <CalendarIcon boxSize={4} color="white" />
          <Text color="white" fontSize={{lg: '24px', md: '20px'}} fontWeight="bold">
            Dashboard
          </Text>
        </HStack>
      </Link>
      <Link to="/task">
        <HStack
          mt="20px"
          spacing="12px"
          _hover={{
            cursor: "pointer",
            textDecoration: "underline white",
          }}
        >
          <EditIcon boxSize={4} color="white" />
          <Text color="white" fontSize={{lg: '24px', md: '20px'}} fontWeight="bold">
            Create Task
          </Text>
        </HStack>
      </Link>
    </Box>
  );
}

export default NavBar;
