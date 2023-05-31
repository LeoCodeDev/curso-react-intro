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

  const [todoState, setTodoState] = React.useState(todos)
  const [searchValue, setSearchValue] = React.useState('');
  
  const todosCompleted = todoState.filter(todo => todo.completed === true).length
  const totalTodos = todoState.length

  return (
    <>

      <TodoCounter todosCompleted={todosCompleted} totalTodos={totalTodos}/>

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
