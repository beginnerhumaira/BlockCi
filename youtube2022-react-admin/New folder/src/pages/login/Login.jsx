// Login.jsx
import React from 'react';
import './login.scss';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">BlockCi</h1>
        <form className="login-form">
          <label>Email Address:</label>
          <input type="email" placeholder="Enter your email address" />
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}

export default Login;
