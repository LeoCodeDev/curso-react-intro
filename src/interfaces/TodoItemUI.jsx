import React from "react";
import "../styles/TodoItem.css";
import { CompleteIconUI } from "./CompleteIconUI";
import { DeleteIconUI } from "./DeleteIconUI";

const TodoItemUI = (props) => {
  const { text, completed, onToggle, onDelete } = props;

  return (
    <li className="TodoItem">
      <div className={`check-container ${completed && "completed"}`}>
        <CompleteIconUI
          className={`check ${completed && "completed"}`}
          onClick={onToggle}
        />
      </div>
      <p className={`todo ${completed && "completed"}`}>{text}</p>
      <div className="closer-container">
        <DeleteIconUI className="closer" onClick={onDelete}/>
      </div>
    </li>
  );
};

export { TodoItemUI };
