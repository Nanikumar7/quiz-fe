// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8081/api', // Adjust if your backend runs on a different port
});

// User Registration
export const userRegister = async (userData) => {
    try {
        const response = await api.post('/register', userData);
        return response.data; // { message: "User registered with unique ID: ..." }
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// User Login
export const userLogin = async (uniqueUserId, password) => {
    try {
        const response = await api.post('/login', null, {
            params: { uniqueUserId, password }
        });
        return response.data; // { message: "Login successful!" }
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// Admin Login
export const adminLogin = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:8081/api/admin/login', {
            username: 'nani',
            password: '123',
        });
        console.log(response.data);// { message: "Admin login successful!" }
    } catch (error) {
        console.error('Error during login:', error);// Handle error response
    }
};

// Add Question (Admin)
export const addQuestion = async (questionData) => {
    try {
        const response = await api.post('/admin/addQuestion', questionData);
        return response.data; // { message: "Question added successfully!" }
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// Delete Question (Admin)
export const deleteQuestion = async (id) => {
    try {
        const response = await api.delete(`/admin/deleteQuestion/${id}`);
        return response.data; // { message: "Question deleted successfully!" }
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// Get All Questions
export const getAllQuestions = async () => {
    try {
        const response = await api.get('/questions');
        return response.data; // Array of questions
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// Save User Score
export const saveUserScore = async (scoreData) => {
    try {
        const response = await api.post('/user/saveScore', scoreData);
        return response.data; // { message: "Score saved successfully!" }
    } catch (error) {
        throw error.response.data; // Handle error response
    }
};

// Get User Scores
export const getUserScores = async (userId) => {
    try {
        const response = await api.get(`/user/scores/${userId}`);
        return response.data; // Array of user scores
    } catch (error) {
        throw error.response.data; // Handle error response
    }
}
