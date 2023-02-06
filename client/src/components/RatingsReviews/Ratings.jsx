import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Stars from './Stars.jsx';
import StarsBars from './StarsBars.jsx';
import CharacteristicBreakdown from './CharacteristicBreakdown.jsx';


const Ratings = ({product_id, ratingsData, ratings, averageRating, recommendPerc, starsPercentage, characteristics, reviews, setReviews, allReviews}) => {

  return (
  <div className='ratings'>
    <div className='average-star-rating'>
      <div className='average-rating'> {averageRating}</div>
      <Stars className='average-star' rating={averageRating}/>
    </div>
    <div className='recommend-pecent'>{recommendPerc}% of reviews reccomend this product</div>
    {/* <StarsBars percentages={starsPercentage} rating={ratings}/> */}
    <div className='stars-bars'>
      {Object.keys(starsPercentage).map((key) => {
        return (
            <StarsBars num={key} percentages={starsPercentage[key]} rating={ratings} reviews={reviews} setReviews={setReviews} allReviews={allReviews}/>
        )
      })}
    </div>
    <div className='characteristics'>
      {Object.keys(characteristics).map((key) => {
        return (
            <CharacteristicBreakdown category={key} categoryValue={characteristics[key].value}/>
        )
      })}
    </div>

  </div>

  )
}

export default Ratings;