import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  
  const [todoState, setTodoState] = useLocalStorage("Todos_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const todosCompleted = todoState.filter(
    (todo) => todo.completed === true
  ).length;

  const toggleTodoCompleted = (text) => {
    const newTodos = [...todoState];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodoState(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todoState];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodoState(newTodos);
  };

  const totalTodos = todoState.length;
  const searchedTodos = todoState.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  return (
    <>
      <TodoCounter todosCompleted={todosCompleted} totalTodos={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => toggleTodoCompleted(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { App };
