import React, { useContext } from "react";
import { TodoCounterUI } from "./TodoCounterUI";
import { TodoSearchUI } from "./TodoSearchUI";
import { TodoListUI } from "./TodoListUI";
import { TodoItemUI } from "./TodoItemUI";
import { CreateTodoButtonUI } from "./CreateTodoButtonUI";
import { LoaderUIC } from "./LoaderUIC";
import { LoaderUI } from "./LoaderUI";
import { ErrorUI } from "./ErrorUI";
import { EmptyTodosUI } from "./EmptyTodosUI";
import { Modal } from "../components/Modal";
import { TodoContext } from "../context/TodoContext/TodoContext";
import { DeleteIconUI } from "./DeleteIconUI";
import { TodoForm } from "../components/TodoForm";

function AppUI() {
  const {
    loading,
    error,
    toggleTodoCompleted,
    deleteTodo,
    searchedTodos,
    modalIsOpen,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounterUI />

      <TodoSearchUI />

      <TodoListUI>
        {
          loading && <LoaderUI />
          // <>
          // <LoaderUIC/>
          // <LoaderUIC/>
          // <LoaderUIC/>
          // <LoaderUIC/>
          // <LoaderUIC/>
          // </>
        }
        {error && (
          <p className="alternative-text error">Something went wrong</p>
        )}
        {!loading && !error && searchedTodos.length === 0 && (
          <p className="alternative-text empty-list">Crea tu primer TODO</p>
        )}

        {searchedTodos.map((todo) => (
          <TodoItemUI
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => toggleTodoCompleted(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoListUI>

      <CreateTodoButtonUI />

      {modalIsOpen && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  );
}

export { AppUI };
