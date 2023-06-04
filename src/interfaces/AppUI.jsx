import React from "react";
import { TodoCounterUI } from "./TodoCounterUI";
import { TodoSearchUI } from "./TodoSearchUI";
import { TodoListUI } from "./TodoListUI";
import { TodoItemUI } from "./TodoItemUI";
import { CreateTodoButtonUI } from "./CreateTodoButtonUI";
import { Loader } from "./Loader";

function AppUI({
  loading,
  error,
  todosCompleted,
  totalTodos,
  toggleTodoCompleted,
  deleteTodo,
  searchValue,
  setSearchValue,
  searchedTodos,
}) {
  return (
    <>
      <TodoCounterUI todosCompleted={todosCompleted} totalTodos={totalTodos} />

      <TodoSearchUI searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoListUI>
        {loading && <Loader/>}
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
    </>
  );
}

export { AppUI };
