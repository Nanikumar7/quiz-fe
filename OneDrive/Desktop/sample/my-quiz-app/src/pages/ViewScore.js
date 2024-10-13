import React, { useState } from 'react';

const ViewScore = () => {
  const [userId, setUserId] = useState('');

  const handleViewScore = () => {
    // Handle viewing score logic here
    console.log('Viewing Score for User ID:', userId);
  };

  return (
    <div>
      <h2>View Score</h2>
      <input 
        type="text" 
        placeholder="User ID" 
        value={userId} 
        onChange={(e) => setUserId(e.target.value)} 
      />
      <button onClick={handleViewScore}>View Score</button>
    </div>
  );
};

export default ViewScore;
