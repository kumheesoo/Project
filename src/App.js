import React, { useState } from 'react';
import Counter from './counter';
import TodoApp from './Todo/todoApp';
import QuizApp from './Quiz/QuizApp';

function App(){
  return(
    <div>
      <Counter></Counter>
      <TodoApp></TodoApp>
      <QuizApp></QuizApp>
    </div>
  )
}


export default App;

