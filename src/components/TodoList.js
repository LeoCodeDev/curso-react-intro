import React from 'react'
import '../styles/TodoList.css'

function TodoList(props) {
  const {children} = props
  return (
    <ul className='TodoList'>
        {children}
    </ul>
  )
}

export { TodoList }