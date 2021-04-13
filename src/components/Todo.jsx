import React from "react";
import "../css/Todo.css";
import Checkmark from './Checkmark.jsx';
class Todo extends React.Component {

  render() {
    return(
    <div className="list-item">
      <Checkmark done={this.props.todo.done} toggleDone={this.props.toggleDone} index={this.props.index} />
      <p className={`${this.props.todo.done ? 'done' : ''}`}>{this.props.todo.title}</p>
      <div className="buttons">
        <button className="delete" onClick={(e) => this.props.deleteTodo(e, this.props.index)}>
          {'\u292b'}
        </button>
      </div>
    </div>
    );
  }
}

export default Todo;