import {
  Box,
  Button,
  HStack,
  Heading,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import TaskList from "./TaskList";
import { useTask } from "../Context/TaskProvider";
import Message from "./Message";
import Header from "./Header";

function DisplayTasks() {
  const { loading } = useTask();
  return (
    <Box w="85%" h="100vh" bg="white" overflowY="scroll">
      {/* <HStack pl="50px" mt="45px">
        <Heading fontSize="24px" color="#111">
          Tasks
        </Heading>
        <Spacer />
        <HStack pr="65px" gap="24px">
          <Text fontSize="18px" fontWeight="500" color="#111">
            Joel Johnson
          </Text>
          <Button
            bg="#74c0fc"
            _hover={{
              backgroundColor: "#4dabf7",
            }}
          >
            <Text color="white">Logout &rarr;</Text>
          </Button>
        </HStack>
      </HStack> */}

      <Header>Tasks</Header>

      {loading && <Spinner size="xl" color="#74c0fc" ml="600px" mt="200px" />}

      {!loading && <TaskList />}
    </Box>
  );
}

export default DisplayTasks;
