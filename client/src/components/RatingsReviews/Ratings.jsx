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
    {/* {checkForFilter() === true ? <button onClick={removeStarFilters}> Remove filters</button> : ''} */}
    <div className='stars-bars'>
      {Object.keys(starsPercentage).map((num, index) => {
        return (
            <StarsBars key={index} num={num} percentages={starsPercentage[num]} rating={ratings} reviews={reviews} setReviews={setReviews} allReviews={allReviews}/>
        )
      })}
    </div>
    <div className='characteristics'>
      {Object.keys(characteristics).map((key, index) => {
        return (
            <CharacteristicBreakdown key={index} category={key} categoryValue={characteristics[key].value}/>
        )
      })}
    </div>

  </div>

  )
}

export default Ratings;