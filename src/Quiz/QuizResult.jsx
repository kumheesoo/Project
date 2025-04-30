import React from 'react';

function QuizResult({ score, total, onRestart }) {
  return (
    <div>
      <h2>퀴즈 완료!</h2>
      <p>맞춘 개수: {score} / {total}</p>
      <button onClick={onRestart}>다시 시작</button>
    </div>
  );
}

export default QuizResult;
