
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './reset.css';

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setError(""); 

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(inputEmail) && inputEmail.endsWith(".com")) {
      navigate("/Registration"); 
    }
  };

  const handlePasswordReset = () => {
    if (!email) {
      setError("Please enter an email address.");
      return;
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    navigate("/VerificationCode");
  };

  return (
    <div className="reset-password-container">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
      <h1>Reset Password</h1>
      <p>Please enter your email address to request a password reset</p>
      <input
        type="email"
        className="email-input"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
      />
      {error && <p className="error-message">{error}</p>}
      <button className="send-button" onClick={handlePasswordReset}>
        SEND NEW PASSWORD
      </button>
    </div>
  );
};

export default ResetPassword;
