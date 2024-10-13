// Import necessary libraries at the top
import React, { useState } from 'react';
import axios from 'axios';

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    // Prepare the request payload
    const userData = { username, password };

    try {
      // Send POST request to Spring Boot API
      const response = await axios.post('http://localhost:8081/api/register', userData);
      
      // Assuming the response contains the message with the unique user ID
      if (response.data.message) {
        setMessage(response.data.message);  // Display the success message from the backend
      }
    } catch (error) {
      // Handle error appropriately
      if (error.response) {
        setMessage(`Error: ${error.response.data.message || 'Something went wrong'}`);
      } else {
        setMessage('Error: Network error');
      }
    }
  };

  return (
    <div className="register-container">
      <form>
        <h2>User Registration</h2>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
      {message && <p>{message}</p>} {/* Display success or error message */}
    </div>
  );
};

export default UserRegister;
