import React from 'react';
import '../css/App.css';
import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';


class App extends React.Component{

  state = {
    todos: [
      {title: 'Tarea 1', done: true},
      {title: 'Tarea 2', done: false},
      {title: 'Tarea 3', done: false},
      {title: 'Tarea 4', done: false},
    ]
  };

    toggleDone = (event, index) => {
      const todos = [...this.state.todos];
      todos[index].done = !todos[index].done;
      this.setState({ todos:todos })
    };

    render(){
      return (
        <div className="wrapper">
          <div className="card-frame">
            <Header/>
            <TodoList todos={this.state.todos} toggleDone={this.toggleDone} />
            <Form />
          </div>
        </div>
      );
    };
};

export default App;