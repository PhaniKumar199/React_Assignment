import React from "react";
import { FaStar } from "react-icons/fa";
import './Rating.css';
import { useNavigate } from "react-router-dom";

const Rating = () => {
  const navigate=useNavigate();
  const handleReview=()=>{
    navigate('/Review');
  }
  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
      <div className="pizza-image-container">
        <img src="/assets/review.png" alt="Pizza" className="pizza-image" />
        <img src="/assets/pizzaicon.png" alt="Pizza Hut Icon" className="pizzahut-icon" />
      </div>

      
      <div className="delivery-info">
        <h2>Pizza Hut</h2>
        <h4>4102 Pretty View Lanenda</h4>
        <p>Order Delivered</p>
        <h2>Please Rate Delivery Service</h2>
        <h5>Good</h5>
        <div className="ss">
            <FaStar color="yellow" size={24}/><FaStar color="yellow" size={24}/><FaStar color="yellow" size={24}/><FaStar size={24}/>
        </div>

        <input className="sss" type="text" placeholder="Enter text"/>
        <button className="button submit" onClick={handleReview}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Rating;
