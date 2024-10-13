// src/pages/TakeQuiz.js
import React from 'react';

const TakeQuiz = () => {
  const handleTakeQuiz = () => {
    // Implement quiz logic here
    console.log('Taking quiz...');
  };

  return (
    <div>
      <h2>Take Quiz</h2>
      <button onClick={handleTakeQuiz}>Take Quiz</button>
    </div>
  );
};

export default TakeQuiz;
