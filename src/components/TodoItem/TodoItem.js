import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const { todo, deleteItem, toggleItem } = props;
  console.log();
  return (
    <div onClick={() => toggleItem(todo.id)}>
      <span className={todo.checked ? "line-through" : null}>
        {todo.content}
      </span>
      <button
        onClick={(e) => deleteItem(todo.id, e)}
        className=" btn btn-sm btn-danger float-right"
      >
        Sil
      </button>
    </div>
  );
}

export default TodoItem;
