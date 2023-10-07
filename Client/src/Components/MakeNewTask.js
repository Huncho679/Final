import { Box } from "@chakra-ui/react";
import Header from "./Header";
import CreateTaskForm from "./CreateTaskForm";

export default function MakeNewTask() {
  return (
    <Box w="85%" h="100vh" bg="white" overflowY="scroll">
      <Header>Create Task</Header>
      <CreateTaskForm />
    </Box>
  );
}
