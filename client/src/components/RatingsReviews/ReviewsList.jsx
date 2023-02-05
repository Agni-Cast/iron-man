import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleReview from './SingleReview.jsx'

const ReviewsList = ({product_id, reviews, sortBy, reviewsShown, handleSortBy, handleReviewsShown}) => {


  return (
    <div className='reviews-list'>
        <div className='reviews-tot-sorted-by' value={sortBy} onChange={(event) => {handleSortBy(event.target.value)}}> {reviews.length} reviews, sorted by
          <select className='sort-by'>
            <option value='relevance'>relevance</option>
            <option value='newest'>newest</option>
            <option value='helpfulness'>helpfulness</option>
          </select>
        </div>

        {reviews.slice(0, reviewsShown).map((singleReview) => {
          return (
            <div key={singleReview.review_id}><SingleReview review={singleReview}/></div>
          )
        })}

        <div>
        {reviews.length > reviewsShown && (
          <button className='more-reviews' onClick={() => handleReviewsShown()}> MORE REVIEWS</button>
        )}
           <button className='add-review'>ADD A REVIEW +</button></div>
    </div>

  )
}

export default ReviewsList;