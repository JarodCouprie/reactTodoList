import { Input } from "../forms/Input.jsx";
import { useState } from "react";

/**
 * Ajoute une nouvelle tâche à faire à notre liste de tâches
 *
 * @param {({label:string, completed: boolean, date: string, id: number}) => void} addTodo
 * @return {JSX.Element}
 */
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
    if (value !== "") {
      addTodo(todo);
    }
    setValue("");
  };

  /**
   * Modifie la tâche dès lors que la touche Entrée est pressée
   *
   * @param event
   */
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
          "bg-gradient-to-r from-blue-600 to-blue-800 bg-opacity-70 hover:to-blue-900 rounded p-4 h-14 w-14 gap-2"
        }
        onClick={handleNewTodo}
      >
        <img
          src={"./src/assets/icon/add_icon.svg"}
          alt={"Ajout d'une nouvelle tâche"}
        />
      </button>
    </div>
  );
}
