import React, {useState, useEffect} from 'react';
import Ratings from './Ratings.jsx';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';

const RatingsReviews = (/* produt_id from overview component*/) => {
  const product_id = 37315

  return (
    <div id='ratings&reviews'>
      <h5> RATINGS & REVIEWS</h5>
      <Ratings product_id={product_id}/>
      <ReviewsList product_id={product_id} />
    </div>
  );
}

export default RatingsReviews;