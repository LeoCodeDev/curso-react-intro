import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearch(props) {
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

export { TodoSearch }