import React, { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    // Create the login request body
    const loginData = {
      username: username,
      password: password,
    };

    try {
      // Send POST request to the backend with login credentials
      const response = await fetch('http://localhost:8081/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Send data as JSON
        },
        body: JSON.stringify(loginData),  // Convert JavaScript object to JSON string
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // You can redirect to the admin dashboard or store the token if using JWT
        // For example: window.location.href = '/admin/dashboard';
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Error occurred while logging in');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default AdminLogin;
