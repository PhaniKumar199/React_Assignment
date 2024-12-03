import React, { useState } from "react";
import "./Address.css";
import { useNavigate } from "react-router-dom";

const Address = () => {
    const navigate=useNavigate();
    const handleRating=()=>{
        navigate('/Rating');
    }
  const [formData, setFormData] = useState({
    fullname: "",
    mobilenumber: "",
    state: "",
    city: "",
    street: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
        <div className="add">
         <button className="back-button" onClick={() => navigate(-1)}>←</button>
      <h2>Address</h2>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="fullname" className="label">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobilenumber" className="label">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobilenumber"
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="1234567890"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state" className="label">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="label">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="street" className="label">
            Street
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <button type="submit" className="button" onClick={handleRating}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Address;
