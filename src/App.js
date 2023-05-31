import React from 'react'
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

function App() {
  const todos = [
    {text: 'Hacer la app todo', completed : true},
    {text: 'Hacer la app registro de deudas',completed: false},
    {text: 'Terminar de aprender React',completed: true},
    {text: 'Aprender Redux y Express',completed: false},
  ]

  let todosCompleted = todos.filter(todo => todo.completed === true)

  return (
    <>

      <TodoCounter completed={todosCompleted.length} total={todos.length}/>

      <TodoSearch/>

      <TodoList >
        {todos.map((todo,i)=>(
          <TodoItem
            key={`task ${i+1}`}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export {App};
