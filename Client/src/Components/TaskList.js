import { Center, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Task from "./Task";
import { useTask } from "../Context/TaskProvider";
import Message from "./Message";
import CustomModal from "./CustomModal";

function TaskList() {
  const { taskList } = useTask();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {taskList && taskList.tasks.length === 0 && (
        <Center mt="250px">
          <Message>You have completed all your tasks 😀</Message>
        </Center>
      )}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap="20px"
        padding="50px 50px 50px 50px"
      >
        {taskList &&
          taskList.tasks.map((task, i) => {
            return (
              <GridItem key={i}>
                <Task
                  title={task.title}
                  duration={task.duration}
                  status={task.complete}
                  description={task.description}
                  id={task.customID}
                  onOpen={onOpen}
                />
              </GridItem>
            );
          })}
      </Grid>

      <CustomModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default TaskList;
