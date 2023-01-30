import React from 'react';

const SingleReview = ({review}) => {
  return (
  <div>
    <div>{review.rating}</div>
    <span>
        <div>{review.reviewer_name}, {review.date}</div>
    </span>
    <div>{review.summary}</div>
    <div>{review.body}</div>
    <div>{review.reccomend}</div>
    <div>{review.response}</div>
    <div>{review.photos.map((photo) => {return (<img src={photo.url}/>)})}</div>
    <p>Helpful? <button> Yes! </button> | <button>Report</button> </p>

  </div>
  )
}

export default SingleReview;