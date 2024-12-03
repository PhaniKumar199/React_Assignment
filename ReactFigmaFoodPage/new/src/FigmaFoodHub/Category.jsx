
/*import './category.css';
const Category=()=>{
    return(
        <div className='catcontainer'>
            
           <div className="catimage">
           
            <img src="/assets/carpizza.png" alt="imagename"/>
            <h1 className='cathead'>Fast<br/>Food</h1>
               
               <div className='pi'>
                <p>80 types of pizza</p>
               </div>
               <div className='picaty'>
               <div className='piimages'>
                    <img src='/assets/piimage.png' alt='imagename'/>
               </div>
               <div className='catchi'>
                <h1>Chicken Hawaiian</h1>
                <p>Chicken, Cheese and pineapple</p>
               </div>
               </div>

               <div className='picaty'>
               <div className='piimages'>
                    <img src='/assets/piimage.png' alt='imagename'/>
               </div>
               <div className='catchi'>
                <h1>Chicken Hawaiian</h1>
                <p>Chicken, Cheese and pineapple</p>
               </div>
               </div>
           </div>

           
           
        </div>
    )
}
export default Category;*/



import React from 'react';
import './category.css';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate=useNavigate();
  return (
    <div className="appp">
        <img className='cattimagee' width={"150px"} src='/assets/carpizza.png' alt='imagename'/>
      <header className="headerr">
      <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h1 className="titlee">
          Fast <span className="highlightt">Food</span>
        </h1>
        <p className="subtitlee">80 type of pizza</p>
      </header>

      <div className="filterr-section">
        <span>Short by:</span>
        <select className="filterr-dropdown">
          <option value="popularr">Popular</option>
        </select>
        <button className="filterr-button">⚙</button>
      </div>

      <div className="pizzaa-list">
        <div className="pizzaa-card">
          <img
            src="/assets/piimage.png" 
            alt="Pizza"
            className="pizzaa-image"
          />
          <div className="pricee">$10.35</div>
          <button className="favoritee-button">❤️</button>
          <div className="detailss">
            <div className="ratingg">
              4.5 <span>(25+)</span>
            </div>
            <h3 className="pizzaa-name">Chicken Hawaiian</h3>
            <p className="descriptionn">Chicken, Cheese and pineapple</p>
          </div>
      </div>
      </div>

      <div className="pizzaa-list">
        <div className="pizzaa-card">
          <img
            src="/assets/piimage.png" 
            alt="Pizza"
            className="pizzaa-image"
          />
          <div className="pricee">$10.35</div>
          <button className="favoritee-button">❤️</button>
          <div className="detailss">
            <div className="ratingg">
              4.5 <span>(25+)</span>
            </div>
            <h3 className="pizzaa-name">Chicken Hawaiian</h3>
            <p className="descriptionn">Chicken, Cheese and pineapple</p>
          </div>
      </div>
      </div>



    </div>
  );
};

export default Category;
