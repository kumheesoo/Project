import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

const questions = [
  { question: '왕이 넘어지면', options: ['킹콩', '철푸덕', '다친다'], answer: 0 },
  { question: '진짜 문제투성이인 것은?', options: ['내인생', '리액트', '시험지'], answer: 2 },
  { question: '스님이 내리면서 하는 말은?', options: ['잘가세요', '중도하차', '감사합니다'], answer: 1 },
];

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0); //초기값
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === questions[currentIndex].answer) {
      setScore(prev => prev + 1);
    }

    if (currentIndex < questions.length -1) { //length는 퀴즈 배열 갯수를 카운트 currentIndex는 현재 퀴즈 번호 
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true); //문제 끝
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div>
      {isFinished ? (
        <QuizResult score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <QuizQuestion
          questionData={questions[currentIndex]}
          onAnswer={handleAnswer} //문제가 끝일때는 결과를 보여주고 아님 문제를 보여준다 
        />
      )}
    </div>
  );
}

export default QuizApp;
