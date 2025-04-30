import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
