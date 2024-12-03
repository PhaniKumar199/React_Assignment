


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index4verify.css';

const VerificationCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);

  const handleInputChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;

    setCode(newCode);

    
    if (newCode.every((char) => char)) {
      navigate("/ResetPassword");  
    }
  };

  

  return (
    <div className="simple-verification-container">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
      <h1>Verification Code</h1>
      <p>Please type the verification code sent to your email@example.com</p>
      <div className="simple-code-inputs">
        {code.map((_, index) => (
          <input
            key={index}
            className="simple-code-input"
            type="text"
            maxLength="1"
            placeholder="•"
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
      </div>
      <p className="simple-resend-text">
        I don’t receive a code!{" "}
        <span className="simple-resend-link">Please resend</span>
      </p>
    </div>
  );
};

export default VerificationCode;

