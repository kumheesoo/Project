import React, { useEffect } from 'react';

function QuizQuestion({ questionData, onAnswer }) {
  const { question, options } = questionData;

  useEffect(() => {
    const timer = setTimeout(() => {
      onAnswer(-1); // 아무것도 선택 안했을 때
    }, 5000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 제거
  }, [questionData, onAnswer]);

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((opt, idx) => (
          <li key={idx}>
            <button onClick={() => onAnswer(idx)}>{opt}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizQuestion;
