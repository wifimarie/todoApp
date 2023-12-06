import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// Component
export default function TaskList() {
  // context with functions to get data
  const { tasks } = useContext(TaskContext);

  // Validate there are tasks

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas.
      </h1>
    );
  }

  // if exists, then show the tasks

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
