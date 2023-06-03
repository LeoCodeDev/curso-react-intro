import React from "react";
import { TodoCounterUI } from "./TodoCounterUI";
import { TodoSearchUI } from "./TodoSearchUI";
import { TodoListUI } from "./TodoListUI";
import { TodoItemUI } from "./TodoItemUI";
import { CreateTodoButtonUI } from "./CreateTodoButtonUI";

function AppUI({
  todosCompleted,
  totalTodos,
  toggleTodoCompleted,
  deleteTodo,
  searchValue,
  setSearchValue,
  searchedTodos
}) {

  return (
    <>
      <TodoCounterUI todosCompleted={todosCompleted} totalTodos={totalTodos} />

      <TodoSearchUI searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoListUI>
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
