import React from "react";
import Todo from './Todo';
import "../css/TodoList.css";

class TodoList extends React.Component {
  state ={
    done: false
  }

  handleClick = () => {
    this.setState({
      done: !this.state.done
    })
    console.log('si jala xD, valor de done: ' + String(this.state.done));
  }
  render() {
    return (
      <div className="list-wrapper">
        <Todo 
          done={this.state.done}
          handleClick={this.handleClick}/>
        <Todo 
          done={this.state.done}
          handleClick={this.handleClick}/>
        <Todo 
          done={this.state.done}
          handleClick={this.handleClick}/>
        <Todo
          done={this.state.done}
          handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default TodoList;