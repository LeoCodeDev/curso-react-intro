import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearchUI(props) {
  const { searchValue, setSearchValue } = props;
  
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