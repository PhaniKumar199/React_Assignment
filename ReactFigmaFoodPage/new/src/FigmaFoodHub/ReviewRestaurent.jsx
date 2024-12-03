import React from 'react';
import './Final.css';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ReviewRestaurent() {
    const navigate=useNavigate();
    const handleFoodHub=()=>{
        navigate('/MenuPage');
    }
  return (
    <div className="containerrrrr">
      <img 
        src="/assets/revic6.png" 
        alt="Pizza Hut Logo" 
        className="logooooo" 
      />
      <h1>How was your last order from Pizza Hut?</h1>
      <div className="feedbackkkkk">Good</div>
      <div className="ss">
            <FaStar color="yellow" size={24}/><FaStar color="yellow" size={24}/><FaStar color="yellow" size={24}/><FaStar size={24}/>
        </div>
      <button className="submittttt-btn" onClick={handleFoodHub}>Submit</button>
    </div>
  );
}

export default ReviewRestaurent;
