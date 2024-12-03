import React from 'react';

import './Review.css';
import { useNavigate } from 'react-router-dom';
 
const reviewsData = [

  {

    name: 'Alyce Lambo',

    date: '25/06/2020',

    rating: 5.0,

    review:

      'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.',

    avatar: '/assets/revic2.png', 

  },

  {

    name: 'Gonela Solom',

    date: '22/06/2020',

    rating: 4.5,

    review:

      'Been a life saver for keeping our sanity during the pandemic, although they could improve some of their UI and how they handle specials...',

    avatar: '/assets/revic3.png',

  },

  {

    name: 'Brian C',

    date: '21/06/2020',

    rating: 2.5,

    review:

      'Got an intro offer of 50% off first order that did not work. I have scaled the app to find a contact us button...',

    avatar: '/assets/revic4.png',

  },

  {

    name: 'Helsmar E',

    date: '20/06/2020',

    rating: 3.5,

    review:

      'Some good offers but not consistent. The service could be improved with a little more customer support engagement...',

    avatar: '/assets/revic2.png',

  },

];
 
const Review = () => {
    const navigate=useNavigate()
 const handleFinal=()=>{
    navigate('/ReviewRestaurent')
 }
  return (
<div className="reviewssss-container">
<button className="back-button" onClick={() => navigate(-1)}>←</button>
<h2 className="reviewssss-title">Reviews</h2>
<div className="reviewwww-input">
<img

          src="/assets/revic.png"

          alt="User avatar"

          className="userrrr-avatar"

        />
<input

          type="text"

          placeholder="Write your review..."

          className="reviewwww-text-input"

        />
</div>

      {reviewsData.map((review, index) => (
<div className="reviewwww-card" key={index} onClick={handleFinal}>
<img src={review.avatar} alt={review.name} className="reviewwww-avatar" />
<div className="reviewwww-content">
<div className="reviewwww-header">
<span className="reviewwww-name">{review.name}</span>
<span className="reviewwww-date">{review.date}</span>
</div>
<div className="reviewwww-rating">{review.rating.toFixed(1)}</div>
<p className="reviewwww-text">{review.review}</p>
</div>
</div>

      ))}


</div>

  );

};
 
export default Review;

 
