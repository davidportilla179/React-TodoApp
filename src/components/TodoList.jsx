import React from "react";
import Todo from './Todo';
import "../css/TodoList.css";

class TodoList extends React.Component {

  render() {
    return (
      <div className="list-wrapper">
        {
          this.props.todos.map((todo,index) => {
            return <Todo todo={todo} toggleDone={this.props.toggleDone} index={index} key={index} />
          })
        }
      </div>
    )
  }
}

export default TodoList;