import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
const axios = require('axios');

// TESTING
const RatingsReviews = () => {

  // axios.get(`/reviews`)
  // .then((data) => {
  //   console.log(data)
  //   return data
  // })

  return (
    <div>
      <h5> RATINGS & REVIEWS</h5>
      <Ratings/>
      <Reviews/>
    </div>
  );
}

export default RatingsReviews;