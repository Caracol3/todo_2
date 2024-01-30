import React from "react";

export type SingleTasks = {
  id: number;
  title: string;
  isDone: boolean;
};

type TasksProps = {
  tasks: SingleTasks[];
  setTasks: React.Dispatch<React.SetStateAction<SingleTasks[]>>;
};

const Tasks: React.FC<TasksProps> = ({ tasks, setTasks }) => {
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    console.log("target:", e.target.checked);

    setTasks((prevTaskList) => {
      console.log("prevTaskList:", prevTaskList);

      return prevTaskList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: e.target.checked,
          };
        }
        return task;
      });
    });
  };

  console.log(tasks);

  return (
    tasks && (
      <>
        <div className="row">
          <div className="col-md">
            <span>todo</span>
            <ul className="list-group">
              {tasks.map(
                (task: SingleTasks) =>
                  !task.isDone && (
                    <li
                      key={task.id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      {task.title}
                      <input
                        type="checkbox"
                        checked={task.isDone}
                        onChange={(e) => handleCheckboxChange(e, task.id)}
                      />
                    </li>
                  )
              )}
            </ul>
          </div>

          <div className="col-md">
            <span>done</span>
            <ul className="list-group">
              {tasks.map(
                (task: SingleTasks) =>
                  task.isDone && (
                    <li
                      key={task.id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      {task.title}
                      <input
                        type="checkbox"
                        checked={task.isDone}
                        onChange={(e) => handleCheckboxChange(e, task.id)}
                      />
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </>
    )
  );
};

export default Tasks;
