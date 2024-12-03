
import React, { useState, useEffect } from 'react';
import './index3signup.css';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedName) setFullName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();

    
    if (!fullName || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    
    localStorage.setItem('name', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Form submitted successfully! Data saved to localStorage.');

   
    setFullName('');
    setEmail('');
    setPassword('');
    /*navigate('/Welcome');*/
  };

  const handleLogin = () => {
    navigate('/Login');
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>Full name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

      <p className="login-text">
        Already have an account? <span onClick={handleLogin}>Login</span>
      </p>

      <div className="social-signup">
        <p>Sign up with</p>
        <div className="social-buttons">
          <button className='social-btn facebook'>
            <a href='https://www.facebook.com/login/'>
              <FaFacebook className='log' color="blue" />
              Facebook
            </a>
          </button>

          <button className="social-btn google">
            <a href='https://accounts.google.com/'>
              <FaGoogle className='log' color="red" />
              Google
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
