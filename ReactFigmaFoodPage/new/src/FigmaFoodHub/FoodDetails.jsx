 /*import { FaStar } from "react-icons/fa";
 import './food.css';
import { useNavigate } from "react-router-dom";
 const FoodDetails=()=>{
    const navigate=useNavigate()
    const handleCart=()=>{
        navigate('/Cart')
    }
    return(
        <div className="fooddetails-container">
            <button className="back-button" onClick={() => navigate(-1)}>←</button>
            <div className="fooddetails-image">
                <img  src="/assets/resname.png" alt="imagename"/>
            </div>
            <div className="fooddis">
            <div className="g">
                <h1>Ground Beef Tacos</h1>
               <p><FaStar/>4.5</p>
            </div>
            <div className="rate">
                <div>
                <p className="foodrate">$ 9.50</p>
                </div>
                <div className="rates">
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
            <div className="ground">
                <p>Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</p>
            </div>
            <h4>Choice of add on</h4>
            <div className="pepp">
                <img className="pep" src="/assets/pepper.png" alt="imagename"/>
                <img className="pep" src="/assets/spinach.png" alt="imagename"/>
                <img className="pep" src="/assets/mansoon.png" alt="imagename"/>
            </div>
            <div className="butcart">
                <button className="buttcart" onClick={handleCart}>Add TO CART</button>
            </div>
            </div>
        </div>
    )
 }
 export default FoodDetails;*/



 


 import React, { useState } from "react";
import "./food.css";
import { useNavigate } from "react-router-dom";
const FoodDetails = () => {
    const navigate=useNavigate()
    const handleCart=()=>{
        navigate('/Cart')
    }
  const [quantity, setQuantity] = useState(2);
  const [selectedAddon, setSelectedAddon] = useState("");

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);
  const handleAddonSelect = (addon) => setSelectedAddon(addon);

  return (
    <div className="food-details-container">
       <button className="back-button" onClick={() => navigate(-1)}>←</button>
      <div className="image-container">
        <img
          src="/assets/foodimage.png" // Replace with actual image URL
          alt="Ground Beef Tacos"
          className="food-image"
        />
        <button className="favorite-button">❤️</button>
      </div>
      <div className="details-container">
        <h2>Ground Beef Tacos</h2>
        <div className="rating">
          <span>⭐ 4.5 (30+)</span> <a href="#reviews">See Review</a>
        </div>
        <div className="price">$9.50</div>
        <p>
          Brown the beef better. Lean ground beef – I like to use 85% lean
          angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion
          powder.
        </p>
        <div className="quantity-selector">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity.toString().padStart(2, "0")}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <h3>Choice of Add On</h3>
        <div className="addons">
        <label>
            
            
            <img
              src="/assets/image 8.png" 
              alt="Pepper Julienne"
              className="addon-image"
            />
            
            Pepper Julienne
           
            
           
            
            (+$2.30)
           
            <input
              type="radio"
              name="addon"
              value="Pepper Julienne"
              onChange={() => handleAddonSelect("Pepper Julienne")}
              checked={selectedAddon === "Pepper Julienne"}
            />
           
          </label>
          
          <label>
            <img
              src="/assets/Mask Group.png" 
              alt="Baby Spinach"
              className="addon-image"
            />
            Baby Spinach (+$4.70)

           
            <input
              type="radio"
              name="addon"
              value="Pepper Julienne"
              onChange={() => handleAddonSelect("Pepper Julienne")}
              checked={selectedAddon === "Pepper Julienne"}
            />
          </label>
          <label>
            
            <img
              src="/assets/Mask Group (1).png" 
              alt="Mushroom"
              className="addon-image"
            />
            Mushroom (+$2.50)

            
            <input
              type="radio"
              name="addon"
              value="Pepper Julienne"
              onChange={() => handleAddonSelect("Pepper Julienne")}
              checked={selectedAddon === "Pepper Julienne"}
            />
          </label>
        </div>
        <button className="add-to-cart-button" onClick={handleCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodDetails;
