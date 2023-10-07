import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./Auth";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const { loggedInUser } = useAuth();
  const [taskList, setTaskList] = useState();
  const [err, setErr] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDuration, setTaskDuration] = useState(4);

  function createTaskName(name) {
    setTaskName(name);
  }

  function createTaskDescription(desc) {
    setTaskDescription(desc);
  }

  function createTaskLength(length) {
    setTaskDuration(length);
  }

  function handleSubmit(e) {
    e.preventDefault();
    createTaskObject();
    setTaskName("");
    setTaskDescription("");
    setTaskDuration(4);
  }

  async function createTaskObject() {
    let newId;
    if (taskList.tasks.length === 0) {
      newId = 1;
    } else {
      newId = taskList.tasks[taskList.tasks.length - 1].customID + 1;
    }
    const newTask = {
      id: newId,
      title: taskName,
      duration: taskDuration,
      complete: false,
      description: taskDescription,
    };

    const res = await fetch(`http://localhost:5000/api/v1/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: loggedInUser,
        title: taskName,
        duration: taskDuration,
        complete: false,
        description: taskDescription,
      }),
    });

    const data = await res.json();
    setTaskList({...taskList, tasks: [...taskList.tasks, newTask]});
  }

  useEffect(function () {
    async function fetchTasks() {
      try {
        setIsLoading(true);
        if (!loggedInUser) return;
        const res = await fetch(`http://localhost:5000/api/v1/tasks?userName=${loggedInUser}`, {
          method: "GET",
        });
        const data = await res.json();
        setTaskList(data);
      } catch {
        setErr(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTasks();
  }, [loggedInUser, taskList?.tasks.length]);

  async function handleCompleteTask(
    title,
    duration,
    description,
    id,
    completed
  ) {
    const res = await fetch(`http://localhost:5000/api/v1/tasks`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: loggedInUser,
        id: id,
      }),
    });

    const data = await res.json();
  }

  async function handleDeleteTask(id) {
    try {
      setIsLoading(true);
      await fetch(`http://localhost:5000/api/v1/tasks?id=${id}&user=${loggedInUser}`, {
        method: "DELETE",
      });
      const newTaskList = taskList.tasks.filter((task) => task.customID !== id);
      setTaskList({...taskList, tasks: newTaskList});
    } catch {
      setErr(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        taskList,
        loading,
        err,
        handleDeleteTask,
        handleCompleteTask,
        taskName,
        taskDescription,
        taskDuration,
        createTaskName,
        createTaskDescription,
        createTaskLength,
        handleSubmit,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined) throw new Error("Context is undefined");
  return context;
}

export { TaskProvider, useTask };
