import React from 'react';
import './Login.css'; // Add CSS for styling

const Login = () => {
  return (
    <div className="login-container">
      {/* Header Section */}
      <header className="login-header">
        <img src={require("./images/logo.png")} alt="School Logo" className="school-logo" />
        <div className="school-name">
          <h1>OLUSEGUN AGAGU</h1>
          <h2>UNIVERSITY OF SCIENCE & TECH</h2>
          <h3>OKITIPUPA, ONDO STATE</h3>
        </div>
      </header>

      {/* Body Section */}
      <div className="login-body">
        <hr className="footer-line" />
        <h4 className="project-title">
          National Research Fund Project: <br />
          Blockchain IoT Water Monitoring System
        </h4>
        <h5 className="form-title">Login</h5>
        <form className="login-form">
          {/* Username Field */}
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input type="text" placeholder="Username" className="login-input" />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Password" className="login-input" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">SIGN IN</button>
        </form>

        {/* Bottom Links */}
        <div className="login-links">
          <p>
            Forgot your password? <a href="#forgot-password" className="link">Click Here</a>
          </p>
          <p>
            Don't have an account? <a href="#create-account" className="link">Create One</a>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="login-footer">
        <hr className="footer-line" />
        <p className="footer-text">Powered by Prof. IKUMOLA OAUSTECH NRF TEAM, 2024</p>
      </footer>
    </div>
  );
};

export default Login;
