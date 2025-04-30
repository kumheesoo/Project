// TodoInput.js
import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState(""); //초기값

  const handleClick = () => {
    if (text.trim()) {
      onAdd(text);
      setText(""); //입력하면 칸 비워주기 
    }
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} /> 
      <button onClick={handleClick}>추가</button>
    </div>
  );
}

export default TodoInput;
