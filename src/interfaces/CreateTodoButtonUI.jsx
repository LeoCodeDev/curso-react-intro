import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext/TodoContext'
import '../styles/CreateTodoButton.css'

const CreateTodoButtonUI = () => {

  const {
    modalIsOpen,
    setModalIsOpen,
  } = useContext(TodoContext)

  return (
    <button className='CreateTodoButton' onClick={() => setModalIsOpen(!modalIsOpen)}>
        +
    </button>
  )
}

export {CreateTodoButtonUI}