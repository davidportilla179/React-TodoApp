import React from 'react';
import '../css/Form.css';

const Form = (props) => {

  const handleAddTodo = (e)=>{
    e.preventDefault();
    const newTodo = {title: e.target.firstChild.value, done: false};
    props.updateTodo(e,newTodo);
    e.target.reset();
  }

  return (
    <form
      className="form"
      onSubmit={handleAddTodo}
    >
      <input
        className="form-input"
        type="text"
        placeholder="Escribe una tarea..."
      />
      <button
        className="form-button"
      >
        Añadir
      </button>
    </form>
  );
}

export default Form;