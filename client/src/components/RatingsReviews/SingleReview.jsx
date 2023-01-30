import React from 'react';

const SingleReview = ({review}) => {
  return (
  <div>
    <div>One review</div>
    <div>Star Rating: {review.rating}</div>
    <div>Use: {review.reviewer_name}</div>
    <div>Date: {review.date}</div>
    <div>Summary: {review.summary}</div>
    <div>Body: {review.body}</div>
    <div>I reccomand this product: {review.reccomend}</div>
    <div>Response: {review.response}</div>
    <div>Images {review.photos.map((photo) => {return (<img src={photo.url}/>)})}</div>
    <p>Helpful? <button> Yes!</button> <button>Report</button> </p>

  </div>

  )
}

export default SingleReview;