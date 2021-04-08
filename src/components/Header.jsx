import React from "react";
import Form from './Form';
import '../css/Header.css';

const Header = () => (
  <div className="card-header">
    <h1 className="card-header-title header">Hay 6 tareas</h1>
    <Form/>
  </div>
);

export default Header;