import React from 'react'
import '../styles/TodoCounter.css'
import { TodoContext } from '../context/TodoContext/TodoContext'

function TodoCounterUI() {
  const {totalTodos, todosCompleted} = React.useContext(TodoContext)
  
  return (
    <h1 
      className='TodoCounter'>
        Has Completado <span>{todosCompleted}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  )
}

export {TodoCounterUI}