import React, {useState} from 'react';
import '../css/Form.css';

const Form = (props) => {

  const [description, setDescription] = useState('');

  const handleAddTodo = (e)=>{
    e.preventDefault();
    const newTodo = {title: e.target.firstChild.value, done: false};
    props.updateTodo(e,newTodo);
    setDescription('');
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
        onChange={e => setDescription(e.target.value)}
      />
      <button
        className="form-button"
        disabled={description ? '' : 'disabled'}
      >
        Añadir
      </button>
    </form>
  );
}

export default Form;