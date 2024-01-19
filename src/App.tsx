import { useState } from "react";
import "./App.css";
import todo from "./assets/todo.png";
import FormTask from "./components/FormTask";
import Tasks from "./components/Tasks";
import { SingleTasks } from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState<SingleTasks[]>([]);

  const addTask = (newTaskTitle: string): void => {
    const newTask: SingleTasks = {
      id: tasks.length + 1,
      title: newTaskTitle,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div className="d-flex">
        <h1 className="text-success mr-4">Ma todo</h1>
        <img
          src={todo}
          alt="checkmark img"
          className="mb-5"
          style={{ width: "60px", height: "50px" }}
        />
      </div>
      <div className="mb-2">
        <FormTask onAddTask={addTask} />
      </div>
      <>
        <Tasks tasks={tasks} />
      </>
    </>
  );
}

export default App;
