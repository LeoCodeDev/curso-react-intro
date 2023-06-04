import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName)
          ? setItem(JSON.parse(localStorage.getItem(itemName)))
          : initialValue;
      
          setLoading(false)
        } catch(error) {
        setLoading(false)
        setError(true);
      }
    },3000)
  }, []);

  const updateItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    updateItem,
    loading,
    error,
  };
}

export { useLocalStorage };
