import React, { useState } from 'react';

const AddQuestion = () => {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [answer, setAnswer] = useState(''); // Corrected variable name

  const handleAddQuestion = async () => {
    // Construct the question data to send to the backend
    const newQuestion = {
      question: question, 
      options: [option1, option2, option3, option4],
      answer: answer
    };

    try {
      // Send POST request to Spring Boot backend
      const response = await fetch('http://localhost:8080/admin/addQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Send data as JSON
        },
        body: JSON.stringify(newQuestion)  // Convert JavaScript object to JSON string
      });

      // Check for a successful response
      if (response.ok) {
        console.log('Question added successfully!');
        const responseData = await response.json();
        alert('Question added successfully: ' + responseData.message); // Handle success response
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Error adding question: ' + errorData.message); // Handle error response
      }
    } catch (error) {
      console.error('Error sending request:', error);
      alert('Error sending request to backend!');
    }
  };

  return (
    <div>
      <h2>Add Question</h2>
      <input 
        type="text" 
        placeholder="Question" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Option 1" 
        value={option1} 
        onChange={(e) => setOption1(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Option 2" 
        value={option2} 
        onChange={(e) => setOption2(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Option 3" 
        value={option3} 
        onChange={(e) => setOption3(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Option 4" 
        value={option4} 
        onChange={(e) => setOption4(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Answer" 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
      />
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default AddQuestion;
