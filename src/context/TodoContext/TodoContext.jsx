import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();
const TodoProvider = ({ children }) => {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const {
    item: todoState,
    updateItem: setTodoState,
    loading,
    error,
  } = useLocalStorage("Todos_V1", []);

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

  const addTodo = (text) => {
    const newTodos = [...todoState];
    newTodos.push({
      text,
      completed: false,
    })
    setTodoState(newTodos)
  }

  const totalTodos = todoState.length;

  const searchedTodos = todoState.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  return (
    <TodoContext.Provider
      value={{
        todoState,
        setTodoState,
        todosCompleted,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleTodoCompleted,
        deleteTodo,
        loading,
        error,
        modalIsOpen,
        setModalIsOpen,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
