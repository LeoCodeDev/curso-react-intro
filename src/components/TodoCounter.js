import React from 'react'
import '../styles/TodoCounter.css'

function TodoCounter(props) {
  let {totalTodos, todosCompleted} = props
  return (
    <h1 
      className='TodoCounter'>
        Has Completado <span>{todosCompleted}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  )
}

export {TodoCounter}