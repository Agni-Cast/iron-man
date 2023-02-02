import React from 'react';
import Stars from './Stars.jsx';

const SingleReview = ({review}) => {
  const months = ['Januray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const date = new Date(review.date)

  return (
  <div>
    <span>
       <div><Stars rating={review.rating}/> </div>
       <div>{review.reviewer_name}, {`${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`}
       </div>
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

export default SingleReview