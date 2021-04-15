import React from "react";
import Form from './Form';
import '../css/Header.css';

const Header = ({ todos, updateTodo, show, handleHide }) => {
  const completed = todos.filter(todo => todo.done === true)
  const incompleted = todos.filter(todo => todo.done !== true)
  
  return(
    <div className="card-header">
      <div className="header">
        <h1>Tienes <span className="span-header">{todos.length}</span> {(todos.length)> 2 ? 'Tareas': 'Tarea'}</h1>
        <p className="task">Completadas:  <span className="span-header">{completed.length}</span></p>
        <p className="task">Faltan: <span className="span-header">{incompleted.length}</span></p>
        <p className="progress-tag">Progreso:</p>
        <progress 
          value={completed.length}
          max={todos.length}
        ></progress>
        <div className="icon-wrapper" onClick={e => handleHide(!show)}>
          <i className={show ? 'gg-block' : 'gg-unblock'} />
          <p>{show ? 'SHOW' : 'HIDE'}</p>
        </div>
      </div>
      <Form updateTodo={updateTodo} />
    </div>
  )
};

export default Header;