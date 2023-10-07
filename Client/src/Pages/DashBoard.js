import { HStack, Heading } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import DisplayTasks from "../Components/DisplayTasks";

function DashBoard() {
  return (
    <div>
      <HStack gap="0px">
        <NavBar />
        <DisplayTasks />
      </HStack>
    </div>
  );
}

export default DashBoard;
