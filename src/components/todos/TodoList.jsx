import { TodoCategoryRow } from "./TodoCategoryRow.jsx";
import { TodoRow } from "./TodoRow.jsx";

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
        "w-1/2 flex flex-col gap-2 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg p-4"
      }
    >
      <TodoCategoryRow name={"Tâches à faire"} />
      {rows}
    </div>
  );
}
