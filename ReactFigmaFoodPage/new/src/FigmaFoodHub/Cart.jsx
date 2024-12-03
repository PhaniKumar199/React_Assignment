
import React, { useState } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Red n hot pizza",
      description: "Spicy chicken, beef",
      price: 15.3,
      quantity: 2,
      image: "/assets/cart1.png",
    },
    {
      id: 2,
      name: "Greek salad",
      description: "with baked salmon",
      price: 12.0,
      quantity: 2,
      image: "/assets/cart1.png",
    },
  ]);

  
  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const taxAndFees = subtotal * 0.1; 
    const delivery = 1.0; 
    const total = subtotal + taxAndFees + delivery;

    return { subtotal, taxAndFees, delivery, total };
  };

  const { subtotal, taxAndFees, delivery, total } = calculateTotals();

  
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + delta, 1), 
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate("/MyOrders");
  };

  return (
    <div className="cartttt-container">
      <header className="cartttt-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Cart</h1>
      </header>

      {cartItems.map((item) => (
        <div key={item.id} className="cartttt-item">
          <img src={item.image} alt={item.name} className="itemmmm-image" />
          <div className="itemmmm-details">
            <h3 className="itemmmm-name">{item.name}</h3>
            <p className="itemmmm-description">{item.description}</p>
            <p className="itemmmm-price">${item.price.toFixed(2)}</p>
          </div>
          <div className="itemmmm-actions">
            <button
              className="quantityyyy-button"
              onClick={() => handleQuantityChange(item.id, -1)}
            >
              -
            </button>
            <span className="quantityyyy">{item.quantity}</span>
            <button
              className="quantityyyy-button"
              onClick={() => handleQuantityChange(item.id, 1)}
            >
              +
            </button>
            <button
              className="removeeee-button"
              onClick={() => handleRemoveItem(item.id)}
            >
              ×
            </button>
          </div>
        </div>
      ))}

      <div className="promoooo-section">
        <div className="promo-wrapper">
          <input
            type="text"
            className="promoooo-input"
            placeholder="Promo Code"
          />
          <button className="apply-button">Apply</button>
        </div>
      </div>

      <div className="summaryyyy">
        <div className="summaryyyy-item">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)} USD</span>
        </div>
        <div className="summaryyyy-item">
          <span>Tax and Fees</span>
          <span>${taxAndFees.toFixed(2)} USD</span>
        </div>
        <div className="summaryyyy-item">
          <span>Delivery</span>
          <span>${delivery.toFixed(2)} USD</span>
        </div>
        <div className="summaryyyy-total">
          <span>Total ({cartItems.length} items)</span>
          <span>${total.toFixed(2)} USD</span>
        </div>
      </div>

      <button className="checkoutttt-button" onClick={handleCheckout}>
        CHECKOUT
      </button>
    </div>
  );
};

export default Cart;
