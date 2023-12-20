import { Checkbox } from "../forms/Checkbox.jsx";
import { useState } from "react";
import { Input } from "../forms/Input.jsx";

/**
 * Ligne individuelle d'une tâche à faire
 *
 * @param {{label:string, completed: boolean, date: string, id: number}} todo
 * @param {string} deleteTodo
 * @param {string} completeTodo
 * @param {(string, string)} updateTodo
 * @return {JSX.Element}
 */
export function TodoRow({ todo, deleteTodo, completeTodo, updateTodo }) {
  const [completed, setCompleted] = useState(todo.completed);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(todo.label);
  const handleCompleted = () => {
    setCompleted(!completed);
    completeTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  const handleEdit = () => {
    setEdit(!edit);
    setValue(todo.label);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      updateTodo(todo.id, value);
      setEdit(false);
    }
  };
  let todayStyle = "";
  let date = todo.date;
  if (todo.date == new Date().toLocaleDateString("fr-FR")) {
    date = "Aujourd'hui";
    todayStyle = "bg-slate-900";
  }

  return (
    <div
      className={
        "flex justify-between gap-4 h-14 max-lg:truncate max-md:flex-col max-md:h-fit max-md:gap-0 border-t"
      }
    >
      {!edit && (
        <Checkbox
          checked={completed}
          label={todo.label}
          id={todo.id}
          onChange={handleCompleted}
          classNameLabel={todo.completed ? "line-through" : ""}
        />
      )}
      {edit && (
        <Input
          value={value}
          onChange={setValue}
          className={"outline-1 outline-blue-700 m-2"}
          onKeyUp={handleKeyUp}
        />
      )}

      <div
        className={
          "flex pr-4 justify-end items-center gap-4 max-md:w-full max-md:p-4"
        }
      >
        <p
          className={`text-slate-950 max-lg:hidden text-sm bg-opacity-20 p-2 rounded-lg ${todayStyle}`}
        >
          {date}
        </p>
        <button
          onClick={handleEdit}
          className={
            "hover:bg-slate-600 hover:border-none h-10 w-10 grid place-items-center rounded"
          }
        >
          {!edit && <img src={"./src/assets/icon/edit_icon.svg"} />}
          {edit && <img src={"./src/assets/icon/close_icon.svg"} />}
        </button>
        <button
          onClick={handleDelete}
          className={
            "bg-gradient-to-r from-rose-500 to-red-600 hover:to-red-800 h-10 w-10 grid place-items-center rounded"
          }
        >
          <img src={"./src/assets/icon/delete_icon.svg"} />
        </button>
      </div>
    </div>
  );
}
