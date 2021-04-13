import React from 'react';
import '../css/App.css';
import Header from './Header';
import TodoList from './TodoList';

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
    this.setState({ todos:todos });
  };

  deleteTodo = (event, index) => {
    const todos = [...this.state.todos];
    todos.splice(index,1);
    this.setState({ todos:todos });
  }

  updateTodo = (event, todo) => {
    const todos = [...this.state.todos];
    const repeatTitle = todos.filter(todoInList => todoInList.title === todo.title);

    if(repeatTitle.length > 0){
      alert("tarea duplicada")
    }else{
      todos.push(todo);
      this.setState({ todos:todos });
    }
  }

  render(){
    return (
      <div className="wrapper">
        <div className="card-frame">
          <Header todosTotal={this.state.todos.length} updateTodo={this.updateTodo}/>
          <TodoList todos={this.state.todos} toggleDone={this.toggleDone} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  };
};

export default App;