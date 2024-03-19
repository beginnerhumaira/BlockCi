// Signup.jsx
import React from 'react';
import './signup.scss';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">BlockCi</h1>
        <form className="signup-form">
          <label>Email Address:</label>
          <input type="email" placeholder="Enter your email address" />
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}

export default Signup;
