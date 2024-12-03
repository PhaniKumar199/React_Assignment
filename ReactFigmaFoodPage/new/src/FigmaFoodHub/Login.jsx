import React, { useState } from 'react';
import './index3signup.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    navigate('/SignUp');
  };

  const handlePassword = () => {
    navigate('/VerificationCode');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the saved data from localStorage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (email === savedEmail && password === savedPassword) {
      // Login successful
      alert('Login successful!');
      navigate('/MenuPage');
    } else {
      // Login failed
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <button className="circle"></button>
      <button className="circles"></button>
      <button className="back-button" onClick={() => navigate(-1)}>←</button>

      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <div className="password-container">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon">&#128065;</span>
        </div>
        {error && <p className="error-text">{error}</p>}
        <p className="passwordcolor" onClick={handlePassword}>Forget Password?</p>
        <button type="submit" className="signup-btn">Login</button>
      </form>

      <p className="login-text">
        Don't have an account? <span onClick={handleSignUp}>Sign Up</span>
      </p>

      <div className="social-signup">
        <p>Sign up with</p>
        <div className="social-buttons">
          <button className="social-btn facebook">
            <a href="https://www.facebook.com/login/">
              <FaFacebook className="log" color="blue" /> Facebook
            </a>
          </button>

          <button className="social-btn google">
            <a href="https://accounts.google.com/">
              <FaGoogle className="log" color="red" /> Google
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
