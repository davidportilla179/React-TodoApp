import React from "react";
import "../css/Todo.css";
import Checkmark from './Checkmark.jsx';
const Todo = ({ todo, toggleDone, index, deleteTodo}) => {
    return(
    <div className="list-item animate__animated animate__bounceInDown">
      <Checkmark done={todo.done} toggleDone={toggleDone} index={index} />
      <p className={`${todo.done ? 'done' : ''}`}>{todo.title}</p>
      <div className="buttons">
        <button className="delete" onClick={(e) => deleteTodo(e, index)}>
          {'\u292b'}
        </button>
      </div>
    </div>
    );
}

export default Todo;