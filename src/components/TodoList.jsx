import React from "react";
import Todo from './Todo';
import "../css/TodoList.css";

const TodoList = ({ todos, toggleDone, deleteTodo}) => {
    return (
      <div className="list-wrapper">
        {
          todos.map((todo,index) => {
            return <Todo todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} index={index} key={index} />
          })
        }
      </div>
    )
}

export default TodoList;