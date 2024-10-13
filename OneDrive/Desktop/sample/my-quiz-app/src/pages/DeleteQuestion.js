import React, { useState } from 'react';

const DeleteQuestion = () => {
  const [questionId, setQuestionId] = useState('');

  const handleDeleteQuestion = () => {
    // Handle question deletion logic here
    console.log('Deleted Question with ID:', questionId);
  };

  return (
    <div>
      <h2>Delete Question</h2>
      <input 
        type="text" 
        placeholder="Question ID" 
        value={questionId} 
        onChange={(e) => setQuestionId(e.target.value)} 
      />
      <button onClick={handleDeleteQuestion}>Delete Question</button>
    </div>
  );
};

export default DeleteQuestion;
