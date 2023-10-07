import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useTask } from "../Context/TaskProvider";

export default function CreateTaskForm() {
  const {
    taskName,
    taskDescription,
    taskDuration,
    createTaskName,
    createTaskDescription,
    createTaskLength,
    handleSubmit,
  } = useTask();
  return (
    <form
      style={{ padding: "50px" }}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <FormControl color="#111" w="50%" isRequired>
        <FormLabel>Task Name</FormLabel>
        <Input
          placeholder="Enter Task Name Here!"
          type="text"
          focusBorderColor="blue.200"
          color="#111"
          value={taskName}
          onChange={(e) => {
            createTaskName(e.target.value);
          }}
        />
      </FormControl>

      <FormControl color="#111" mt="50px" w="50%" isRequired>
        <FormLabel>Task Description</FormLabel>
        <Textarea
          placeholder="Enter Task Description Here!"
          focusBorderColor="blue.200"
          color="#111"
          value={taskDescription}
          onChange={(e) => {
            createTaskDescription(e.target.value);
          }}
        ></Textarea>
      </FormControl>

      <FormControl mt="50px" w="50%" isRequired>
        <FormLabel>How Long Will It Take?</FormLabel>
        <NumberInput
          step={0.5}
          value={taskDuration}
          min={0.5}
          max={8}
          focusBorderColor="blue.200"
          onChange={(e) => {
            createTaskLength(e);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText color="#666">Time is Measured in Hours!</FormHelperText>
      </FormControl>

      <Button
        bg="#74c0fc"
        _hover={{
          backgroundColor: "#4dabf7",
        }}
        mt="25px"
        type="submit"
      >
        <Text color="white">Submit</Text>
      </Button>
    </form>
  );
}
