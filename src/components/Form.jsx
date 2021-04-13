import React, { useState } from 'react';
import '../css/Form.css';

const Form = () => {
  const [description, setDescription] = useState("");

  // const handleAddTodo = (e) =>{
  //   e.preventDefault();
  //   const newTodo;
  // }
  return (
    <form 
      className="form" 
    >
      <input 
        className="form-input" 
        type="text" 
        placeholder="Escribe una tarea..."
        onChange={e => setDescription(e.target.value)}
      />
      <button 
        className="form-button"
        disabled={description ? "" : "disabled"}>
        Añadir
      </button>
    </form>
  );
}

export default Form;