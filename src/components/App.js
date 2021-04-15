import React, { useState } from 'react';
import '../css/App.css';
import Header from './Header';
import TodoList from './TodoList';

const App = () => {

  const [todos,setTodos] = useState([
    {title: 'Tarea 1', done: false},
    {title: 'Tarea 2', done: false},
    {title: 'Tarea 3', done: false},
    {title: 'Tarea 4', done: false},
  ]);
  const [show, setShow] = useState(false);

  const toggleDone = (event, index) => {
    const todosInList = [...todos];
    todosInList[index].done = !todosInList[index].done;
    setTodos(todosInList);
  };

  const deleteTodo = (event, index) => {
    const todosInList = [...todos];
    todosInList.splice(index,1);
    setTodos(todosInList);
  }

  const updateTodo = (event, todo) => {
    const todosInList = [...todos];
    const repeatTitle = todosInList.filter(todoInList => todoInList.title === todo.title);

    if(repeatTitle.length > 0){
      alert("tarea duplicada")
    }else{
      todosInList.push(todo);
      setTodos(todosInList);
    }
  }

  return (
    <div className="wrapper">
      <div className="card-frame">
        <Header todos={todos} updateTodo={updateTodo} show={show} handleHide={setShow} />
        <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} show={show} />
      </div>
    </div>
  );
};

export default App;