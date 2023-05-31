import React from 'react'
import '../styles/TodoCounter.css'

function TodoCounter(props) {
  let {total, completed} = props
  return (
    <h1 className='TodoCounter'>
        Has Completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  )
}

export {TodoCounter}