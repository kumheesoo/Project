import React, { useState } from 'react'; //세팅값

function Counter() {
    const [count, setCount] = useState(0);
  
    const handleIncrease = () => {
      setCount(count + 1);
    }; //증감값
  
    const handleDecrease = () => {
      if (count > 0) setCount(count - 1);
    }; //감소값
  
    const getColor = () => {
      return count % 2 === 0 ? 'blue' : 'red';
    }; //색깔 정하기
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        
        <h1 style={{ color: getColor() }}>{count}</h1>
        <button onClick={handleIncrease} style={{ marginRight: '10px' }}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    ); //버튼을 눌렀을 때 증가과 감소 함수를 실행시키고 쁠마 버튼 디자인 
}


export default Counter //내보내기