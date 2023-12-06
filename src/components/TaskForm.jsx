import { useState, useContext } from "react";
import {TaskContext} from "../context/TaskContext";

function TaskForm() {

  // context with functions to get data 
  const { createTask } = useContext(TaskContext)

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, desc });
    setDesc("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Tengo que cocinar..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 px-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Basicamente tengo que cocinar "
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
          className="bg-slate-300 px-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
