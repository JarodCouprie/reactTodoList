import { TodoCategoryRow } from "./TodoCategoryRow.jsx";
import { TodoRow } from "./TodoRow.jsx";

/**
 * Liste de toutes les tâches à faire
 *
 * @param {[{label: string, completed: boolean, date: string, id: number}]} todos
 * @param {(value: number) => void} deleteTodo
 * @param {(value: number) => void} completeTodo
 * @param {(value: number, value: string) => void } updateTodo
 * @return {JSX.Element}
 */
export function TodoList({ todos, deleteTodo, completeTodo, updateTodo }) {
  const rows = [];

  for (const todo of todos) {
    rows.push(
      <TodoRow
        todo={todo}
        key={todo.id}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
      />,
    );
  }

  if (todos.length == 0) {
    rows.push(
      <div key={"nodata"} className={"text-center"}>
        Aucune tâches trouvées
      </div>,
    );
  }

  return (
    <div
      className={
        "w-1/2 flex flex-col bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg p-4"
      }
    >
      <TodoCategoryRow name={"Tâches à faire"} />
      {rows}
    </div>
  );
}
