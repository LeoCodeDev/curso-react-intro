import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  
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