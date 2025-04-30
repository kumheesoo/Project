
// TodoApp.js
import React, { useState } from "react";
import TodoInput from "./Input";
import TodoList from "./list";
import FilterButtons from "./FilterButtons";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("전체");

  const handleAdd = (text) => {
    const newTodo = { id: Date.now(), text, done: false };
    setTodos([...todos, newTodo]);
  };
 
  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "전체") return true;
    if (filter === "완료") return todo.done;
    if (filter === "미완료") return !todo.done;
    return true;
  });
 
  return (
    <div>
      <h1>투두 리스트</h1>
      <TodoInput onAdd={handleAdd} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default TodoApp;

