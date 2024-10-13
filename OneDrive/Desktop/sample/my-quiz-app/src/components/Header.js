import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li className="dropdown">
          Admin
          <ul className="dropdown-content">
            <li><Link to="/admin/login">Login</Link></li>
            <li><Link to="/admin/add-question">AddQuestion</Link></li>
            <li><Link to="/admin/delete-question">Delete Question</Link></li>
            <li><Link to="/admin/view-score">View Score</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          User
          <ul className="dropdown-content">
            <li><Link to="/user/register">Register</Link></li>
            <li><Link to="/user/login">Login</Link></li>
            <li><Link to="/user/take-quiz">Take Quiz</Link></li>
            <li><Link to="/user/view-score">View Score</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
