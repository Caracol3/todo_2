import React, { useState, useEffect } from "react";

export type SingleTasks = {
  id: number;
  title: string;
  isDone: boolean;
};
const firstTasks: SingleTasks[] = [
  {
    id: 1,
    title: "first task",
    isDone: false,
  },
  {
    id: 2,
    title: "secund task",
    isDone: true,
  },
];

type TasksProps = {
  tasks: SingleTasks[];
};

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  const [taskList, setTaskList] = useState<SingleTasks[]>(tasks);
  const allTasks = [...firstTasks, ...taskList];

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  return (
    <>
      <ul className="list-group">
        {allTasks.map((task: SingleTasks) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between"
          >
            {task.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
