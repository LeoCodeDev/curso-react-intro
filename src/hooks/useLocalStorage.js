import React from 'react'

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName)
      ? JSON.parse(localStorage.getItem(itemName))
      : initialValue;
  
    const [item, setItem] = React.useState(localStorageItem);
  
    const updateItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, updateItem];
  }

  export { useLocalStorage };
