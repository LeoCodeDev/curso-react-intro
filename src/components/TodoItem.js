import React from "react";
import "../styles/TodoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

const TodoItem = (props) => {
  const { text, completed, onToggle, onDelete } = props;

  return (
    <li className="TodoItem">
      <div className={`check-container ${completed && "completed"}`}>
        <CompleteIcon
          className={`check ${completed && "completed"}`}
          onClick={onToggle}
        />
      </div>
      <p className={`todo ${completed && "completed"}`}>{text}</p>
      <div className="closer-container">
        <DeleteIcon className="closer" onClick={onDelete}/>
      </div>
    </li>
  );
};

export { TodoItem };
