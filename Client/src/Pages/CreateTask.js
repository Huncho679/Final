import { HStack } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import MakeNewTask from "../Components/MakeNewTask";

function CreateTask() {
  return (
    <div>
      <HStack gap="0px">
        <NavBar />
        <MakeNewTask />
      </HStack>
    </div>
  );
}

export default CreateTask;
