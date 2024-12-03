import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  './Register.css';

const Registration = () => {
  const [countryCode, setCountryCode] = useState("+1");
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleMobileChange = (event) => {
    setMobileNumber(event.target.value);
    setError(""); 
  };

  const handleVerification = () => {
    
    if (!mobileNumber) {
      setError("Please enter your mobile number.");
      return;
    }

    const mobileRegex = /^[0-9]{7,15}$/; 
    if (!mobileRegex.test(mobileNumber)) {
      setError("Please enter a valid mobile number.");
      return;
    }

    alert('Verified')
    navigate("/Login");
  };

  return (
    <div className="mobile-verification-container">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
      <h1>Registration</h1>
      <p>Please enter your mobile to verify your account </p>
      <div className="mobile-input-container">
        <select
          className="country-select"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <option value="+1">+1 (USA)</option>
          <option value="+91">+91 (India)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+61">+61 (Australia)</option>
        </select>
        <input
          type="tel"
          className="mobile-input"
          placeholder="Enter your mobile number"
          value={mobileNumber}
          onChange={handleMobileChange}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button className="send-button" onClick={handleVerification}>
        SEND
      </button>
    </div>
  );
};

export default Registration;
