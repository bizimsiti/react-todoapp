import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id} className="list-group-item">
              <TodoItem
                todo={todo}
                deleteItem={props.deleteItem}
                toggleItem={props.toggleItem}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
