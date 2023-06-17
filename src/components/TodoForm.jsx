import { useState } from "react";
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext/TodoContext";
import "../styles/TodoForm.css";

const TodoForm = () => {
  const { modalIsOpen, setModalIsOpen, addTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handlerClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setModalIsOpen(!modalIsOpen);
  };

  const handlerChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form className="createTodo-form" onSubmit={onSubmit}>
      <label className="createTodo-label">Crear Nuevo To-Do</label>
      <textarea
        value={newTodo}
        onChange={handlerChange}
        className="createTodo-text"
        placeholder="Escribe tu nuevo To-Do aquí"
      ></textarea>
      <button
      type="submit"
        className="createTodo-button"
      >
        Crear
      </button>
    </form>
  );
};

export { TodoForm };
