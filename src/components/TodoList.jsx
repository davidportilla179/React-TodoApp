import React from "react";
import Todo from './Todo';
import "../css/TodoList.css";

class TodoList extends React.Component {
  state ={
    done: false
  }

  handleClick = () => {
    console.log('si jala xD, valor de done: ' + String(this.state.done));
    this.setState({
      done: !this.state.done
    })
  }
  render() {
    return (
      <div className="list-wrapper">
        <Todo 
          done={true}
          handleClick={this.handleClick}/>
        <Todo 
          handleClick={this.handleClick}/>
        <Todo 
          done={true}
          handleClick={this.handleClick}/>
        <Todo
          handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default TodoList;