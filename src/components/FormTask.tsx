import { useState } from "react";

type FormTaskProps = {
  onAddTask: (newTaskTitle: string) => void;
};

const FormTask: React.FC<FormTaskProps> = (props: {
  onAddTask: (newTaskTitle: string) => void;
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    props.onAddTask(newTaskTitle);
    setNewTaskTitle("");
  };
  return (
    <>
      <form className="input-group" onSubmit={(e) => submit(e)}>
        <input
          type="text"
          placeholder="New task"
          className=" mr-2 rounded"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default FormTask;

//demander expliquation pour la ligne 7 ou j'avais oublié de rajouter React.FC<FormTaskProps>
