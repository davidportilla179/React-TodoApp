import React from "react";
import Form from './Form';
import '../css/Header.css';

const Header = (props) => {
  const completed = props.todos.filter(todo => todo.done === true)
  const incompleted = props.todos.filter(todo => todo.done !== true)
  
  return(
    <div className="card-header">
      <div className="header">
        <h1>Tienes <span className="span-header">{props.todos.length}</span> {(props.todos.length)> 2 ? 'Tareas': 'Tarea'}</h1>
        <p className="task">Completadas:  <span className="span-header">{completed.length}</span></p>
        <p className="task">Faltan: <span className="span-header">{incompleted.length}</span></p>
      </div>
      <Form updateTodo={props.updateTodo} />
    </div>
  )
};

export default Header;