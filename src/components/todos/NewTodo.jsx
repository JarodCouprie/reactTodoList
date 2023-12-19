import { Input } from "../forms/Input.jsx";
import { useState } from "react";

export function NewTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleNewTodo = () => {
    const id = Date.now() + Math.floor(Math.random() * 50);
    const todo = {
      label: value,
      completed: false,
      date: new Date().toLocaleDateString("fr-FR"),
      id: id,
    };
    addTodo(todo);
    setValue("");
  };

  const handleOnKeyUpNewTodo = (event) => {
    if (event.key === "Enter") {
      handleNewTodo();
    }
  };

  return (
    <div
      className={
        "w-1/2 flex justify-between gap-4 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg p-4"
      }
    >
      <Input
        placeholder={"Nouvelle tâche..."}
        onChange={setValue}
        id={"newTodo"}
        value={value}
        onKeyUp={handleOnKeyUpNewTodo}
      />
      <button
        className={
          "bg-blue-800 bg-opacity-70 hover:bg-blue-900 rounded p-4 h-14 w-14 gap-2"
        }
        onClick={handleNewTodo}
      >
        <img src={"./src/assets/icon/add_icon.svg"} />
      </button>
    </div>
  );
}
