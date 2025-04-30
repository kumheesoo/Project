import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) setCount(count - 1);
  };

  const getColor = () => {
    return count % 2 === 0 ? 'blue' : 'red';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: getColor() }}>{count}</h1>
      <button onClick={handleIncrease} style={{ marginRight: '10px' }}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default Counter;

