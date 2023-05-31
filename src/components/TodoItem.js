import React from 'react'
import '../styles/TodoItem.css'

const TodoItem = (props) => {
  const {text,completed} = props
  
    return (
      <li className="TodoItem">
          <div className={`check-container ${completed && 'completed'}`}>
        <span className={`check ${completed && 'completed'}`}>✓</span>
          </div>
        <p className={`todo ${completed && 'completed'}`}>{text}</p>
        <div className="closer-container">
        <span className="closer">X</span>
        </div>
      </li>
    );
  };

export { TodoItem }