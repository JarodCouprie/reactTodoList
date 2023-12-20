import { Searchbar } from "./components/forms/SearchBar.jsx";
import { useEffect, useState } from "react";
import { TodoList } from "./components/todos/TodoList.jsx";
import { NewTodo } from "./components/todos/NewTodo.jsx";
import { TODOS } from "./TODOS.jsx";

function App() {
  if (localStorage.getItem("TodoList") == null) {
    localStorage.setItem("TodoList", JSON.stringify(TODOS));
  }
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("TodoList")),
  );
  const [search, setSearch] = useState("");
  const [showTodayOnly, setShowTodayOnly] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todos));
  }, [todos]);

  const visibleTodos = todos.filter((todo) => {
    const today = new Date().toLocaleDateString("fr-FR");
    if (showTodayOnly && !(todo.date == today)) {
      return false;
    }
    if (search && !todo.label.toLowerCase().includes(search)) {
      return false;
    }
    if (completed && !todo.completed) {
      return false;
    }
    return true;
  });

  const addTodo = (todo) => {
    const arrayTodos = [...todos];
    arrayTodos.unshift(todo);
    setTodos(arrayTodos);
  };

  const deleteTodo = (todoId) => {
    const tempTodos = [...todos];
    const arrayIndex = tempTodos.findIndex((element) => element.id == todoId);
    tempTodos.splice(arrayIndex, 1);
    setTodos(tempTodos);
  };

  const completeTodo = (todoId) => {
    const tempTodos = [...todos];
    tempTodos.map((todo) => {
      if (todo.id == todoId) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(tempTodos);
  };
  const updateTodo = (todoId, todoValue) => {
    const tempTodos = [...todos];
    tempTodos.map((todo) => {
      if (todo.id == todoId) {
        todo.label = todoValue;
      }
    });
    setTodos(tempTodos);
  };

  return (
    <div className={"w-full flex flex-col items-center p-4 gap-4"}>
      <Searchbar
        search={search}
        onSearchChange={setSearch}
        showTodayOnly={showTodayOnly}
        onTodayOnlyChange={setShowTodayOnly}
        showCompleted={completed}
        onShowCompletedChange={setCompleted}
      />
      <NewTodo addTodo={addTodo} />
      <TodoList
        todos={visibleTodos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
