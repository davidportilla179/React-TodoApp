import React from "react";
import Form from './Form';
import '../css/Header.css';

const Header = (props) => (
  <div className="card-header">
    <h1 className="card-header-title header">Hay {props.todosTotal} tareas</h1>
    <Form updateTodo={props.updateTodo} />
  </div>
);

export default Header;