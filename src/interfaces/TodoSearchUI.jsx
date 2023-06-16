import React from 'react'
import '../styles/TodoSearch.css'
import { TodoContext } from '../context/TodoContext/TodoContext';

function TodoSearchUI() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  return (
    <input 
      placeholder='Busca el ToDo'
      className='TodoSearch' 
      value={searchValue}
      onChange={(e) =>{
        setSearchValue(e.target.value)     
      }}
      ></input>
  )
}

export { TodoSearchUI }