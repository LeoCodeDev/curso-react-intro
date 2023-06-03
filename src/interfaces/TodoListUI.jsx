import React from 'react'
import '../styles/TodoList.css'

function TodoListUI(props) {
  const {children} = props
  return (
    <ul className='TodoList'>
        {children}
    </ul>
  )
}

export { TodoListUI }