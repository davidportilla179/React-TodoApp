import React from "react";
import "../css/Todo.css";

class Todo extends React.Component {
  render() {
    return(
    <div className="list-item">
      <input type="checkbox" 
          className="ok"
          defaultChecked={this.props.done}
          onChange={this.props.handleClick}
      />
      <p className={`${this.props.done ? 'done' : 'undone'}`}>Tarea</p>
      <div className="buttons">
        <button className="delete">
          {'\u292b'}
        </button>
      </div>
    </div>
    );
  }
}

export default Todo;