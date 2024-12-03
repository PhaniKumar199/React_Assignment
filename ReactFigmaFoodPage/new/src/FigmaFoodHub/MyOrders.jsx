import React from 'react';
import './myorders.css';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const navigate=useNavigate();
  return (
    <div className="myyy-orders">
      <header className="headerrr">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h2>My Orders</h2>
        <div className="profileee-avatar">
          <img src= "/assets/favicon (2).png" alt="Profile" />
        </div>
      </header>

      <div className="tabsss">
        <button className="tabbb active">Upcoming</button>
        <button className="tabbb">History</button>
      </div>

      <div className="upcominggg-order">
        <div className="orderrr-card">
          <div className="orderrr-info">
            <img src="/assets/startbug.png" alt="Starbucks" className="orderrr-logo" />
            <div>
              <h2>Starbuck</h2>
              <p>3 Items</p>
            </div>
          </div>
          <div className="orderrr-status">
            <p>Estimated Arrival</p>
            <h3>25 min</h3>
            <p>Food on the way</p>
          </div>
          <div className="orderrr-actions">
            <button className="cancel-btn">Cancel</button>
            <button className="track-btn">Track Order</button>
          </div>
        </div>
      </div>

      <div className="last-orders">
        <h2>Lasted Orders</h2>
        <div className="orderrr-card">
          <div className="orderrr-info">
            <img src="/assets/jimmy.png" alt="Jimmy Johns" className="orderrr-logo" />
            <div>
              <h2>Jimmy John’s</h2>
              <p>20 Jun, 10:30 · 3 Items</p>
            </div>
          </div>
          <div className="orderrr-status">
            <p className="delivereddd">Order Delivered</p>
            <p>$17.10</p>
          </div>
          <div className="orderrr-actions">
            <button className="rate-btn">Rate</button>
            <button className="reorder-btn">Re-Order</button>
          </div>
        </div>

        <div className="orderrr-card">
          <div className="orderrr-info">
            <img src="/assets/subway.png" alt="Subway" className="orderrr-logo" />
            <div>
              <h2>Subway</h2>
              <p>19 Jun, 11:50 · 2 Items</p>
            </div>
          </div>
          <div className="orderrr-status">
            <p className="delivereddd">Order Delivered</p>
            <p>$20.50</p>
          </div>
          <div className="orderrr-actions">
            <button className="rate-btn">Rate</button>
            <button className="reorder-btn">Re-Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
