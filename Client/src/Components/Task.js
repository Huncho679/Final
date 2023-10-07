import { CheckIcon, CloseIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTask } from "../Context/TaskProvider";

function Task({ title, duration, status, description, id, onOpen }) {
  const [completed, setIsCompleted] = useState(status);


  const { handleDeleteTask, handleCompleteTask } = useTask();

  //   async function handleDeleteTask() {
  //     await fetch(`http://localhost:8000/tasks/${id}`, {
  //       method: "DELETE",
  //     });
  //   }

  return (
    <Card
      borderTop="8px"
      borderColor={completed ? "#12b886" : "#74c0fc"}
      h="100%"
    >
      <CardHeader>
        <HStack>
          <Text fontWeight="500" fontSize="16px">
            {title}
          </Text>
          <Spacer />
          <HStack gap="6px">
            <TimeIcon boxSize={4} />
            <Text>
              {duration} {duration === 1 ? "Hour" : "Hours"}
            </Text>
          </HStack>
        </HStack>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <HStack>
          <Button
            h="40px"
            w="40px"
            bg="#12b886"
            borderRadius="50%"
            _hover={{
              backgroundColor: "#0ca678",
            }}
            onClick={() => {
              if (completed) {
                setIsCompleted(false);
                handleCompleteTask(title, duration, description, id, completed);
                onOpen();
              } else {
                setIsCompleted(true);
                handleCompleteTask(title, duration, description, id, completed);
              }
            }}
          >
            <CheckIcon color="white" boxSize={3} />
          </Button>
          <Button
            h="40px"
            w="40px"
            bg="#fa5252"
            borderRadius="50%"
            _hover={{
              backgroundColor: "#f03e3e",
            }}
            onClick={() => {
              handleDeleteTask(id);
            }}
          >
            <CloseIcon color="white" boxSize={3} />
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default Task;
