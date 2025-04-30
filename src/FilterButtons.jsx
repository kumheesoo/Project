// FilterButtons.js
import React from "react";

function FilterButtons({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("전체")} disabled={filter === "전체"}>전체</button>
      <button onClick={() => setFilter("미완료")} disabled={filter === "미완료"}>미완료</button>
      <button onClick={() => setFilter("완료")} disabled={filter === "완료"}>완료</button>
    </div>
  );
}

export default FilterButtons;