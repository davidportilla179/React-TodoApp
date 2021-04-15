import React from "react";
import Todo from './Todo';
import "../css/TodoList.css";

const TodoList = ({ todos, toggleDone, deleteTodo, show}) => {
    return (
      <div className="list-wrapper">
        {
          todos.map((todo,index) => {
            if (show){
              return !todo.done ? <Todo todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} index={index} key={index} /> : ''
            }else{
              return <Todo todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} index={index} key={index} />
            }
          })
        }
      </div>
    )
}

export default TodoList;