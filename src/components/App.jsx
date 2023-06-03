import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AppUI } from "../interfaces/AppUI";

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
    <AppUI
      todosCompleted={todosCompleted}
      totalTodos={totalTodos}
      toggleTodoCompleted={toggleTodoCompleted}
      deleteTodo={deleteTodo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
    />
  );
}

export { App };
