
import React, { useEffect, useState } from 'react';
import './Main.css';
import { FaHome, FaMapMarkerAlt, FaShoppingCart, FaHeart, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate();

  const handleCategory = () => {
    navigate('/Category');
  };

  const handleFood = () => {
    navigate('/FoodDetails');
  };

  const handleFav = () => {
    navigate('/Favorites');
  };

  const handleProfile = () => {
    navigate('/Profile');
  };

  const handlewelcome=()=>{
    navigate('/Welcome');
  }

  useEffect(() => {
    fetch('/food.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(() => setError('Failed to load data'));
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mainfood">
      <nav className="navbar">
        <div className="menu-icon">
          <button onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>

            {isMenuOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li onClick={handlewelcome}>Logout</li>
                </ul>
              </div>
            )}
          </button>
        </div>

        <div className="delivery-info">
          <p className="deliver">Deliver to</p>
          <p className="view">4102 Pretty View Lane</p>
        </div>

        <div className="nav-image">
          <img src="/assets/foodicon.png" alt="foodicon" onClick={handleProfile} />
        </div>
      </nav>

      <div className="mainhead">
        <h1>What would you like to order</h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food or restaurant..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
        <button className="filter-button">Filter</button>
      </div>

      <div className="names">
        {filteredData.map((item, index) => (
          <div key={index} className="food-card" onClick={handleCategory}>
            <img className="image-food" src={item.image} alt="foodicons" />
            <h1 className="food-name">{item.name}</h1>
          </div>
        ))}
      </div>

      <h4>Featured Restaurants</h4>
      <div className="rescard">
        <div>
          <img className="imageres" src="/assets/resname.png" alt="resname" onClick={handleFood} />
        </div>
        <div>
          <img className="imagedis" src="/assets/resdis.png" alt="resname" />
        </div>
      </div>

      <h4>Popular Item</h4>
      <div className="pizzaa-list">
        <div className="pizzaa-card">
          <img
            src="/assets/piimage.png"
            alt="Pizza"
            className="pizzaa-image"
            onClick={handleFav}
          />
          <div className="pricee">$10.35</div>
          <button className="favoritee-button">❤️</button>
          <div className="detailss">
            <div className="ratingg">
              4.5 <span>(25+)</span>
            </div>
            <h3 className="pizzaa-name">Chicken Hawaiian</h3>
            <p className="descriptionn">Chicken, Cheese, and pineapple</p>
          </div>
        </div>
      </div>



      <div className="pizzaa-list">
        <div className="pizzaa-card">
          <img
            src="/assets/piimage.png"
            alt="Pizza"
            className="pizzaa-image"
            onClick={handleFav}
          />
          <div className="pricee">$10.35</div>
          <button className="favoritee-button">❤️</button>
          <div className="detailss">
            <div className="ratingg">
              4.5 <span>(25+)</span>
            </div>
            <h3 className="pizzaa-name">Chicken Hawaiian</h3>
            <p className="descriptionn">Chicken, Cheese, and pineapple</p>
          </div>
        </div>
        </div>

        <div className="pizzaa-list">
        <div className="pizzaa-card">
          <img
            src="/assets/piimage.png"
            alt="Pizza"
            className="pizzaa-image"
            onClick={handleFav}
          />
          <div className="pricee">$10.35</div>
          <button className="favoritee-button">❤️</button>
          <div className="detailss">
            <div className="ratingg">
              4.5 <span>(25+)</span>
            </div>
            <h3 className="pizzaa-name">Chicken Hawaiian</h3>
            <p className="descriptionn">Chicken, Cheese, and pineapple</p>
          </div>
        </div>
        </div>

      <footer className="footer">
        <FaHome color="red" className="footer-icon" title="Home" />
        <FaMapMarkerAlt className="footer-icon" title="Location" />
        <FaShoppingCart color="blue" className="footer-icon" title="Cart" />
        <FaHeart className="footer-icon" title="Favorites" />
        <FaBell color="yellow" className="footer-icon" title="Notifications" />
      </footer>
    </div>
  );
};

export default MenuPage;


