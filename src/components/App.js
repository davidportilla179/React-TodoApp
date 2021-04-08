import React from 'react';
import '../css/App.css';
import Header from './Header';
import TodoList from './TodoList';


const App = () =>(
  <div className="wrapper">
    <div className="card-frame">
      <Header/>
      <TodoList/>
    </div>
  </div>
);

export default App;