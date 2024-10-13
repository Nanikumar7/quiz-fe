import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header'; // Updated import
import AdminLogin from './pages/AdminLogin';
import AddQuestion from './pages/AddQuestion';
import DeleteQuestion from './pages/DeleteQuestion';
import ViewScore from './pages/ViewScore';
import UserRegister from './pages/UserRegister';
import TakeQuiz from './pages/TakeQuiz';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/add-question" element={<AddQuestion />} />
        <Route path="/admin/delete-question" element={<DeleteQuestion />} />
        <Route path="/admin/view-score" element={<ViewScore />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<AdminLogin />} />
        <Route path="/user/take-quiz" element={<TakeQuiz />} />
        <Route path="/user/view-score" element={<ViewScore />} />
      </Routes>
    </Router>
  );
}

export default App;
