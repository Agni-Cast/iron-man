import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Stars from './Stars.jsx';


const SingleReview = ({review}) => {
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulness)

  const handleVoteCount = (review_id) => {
    axios.put(`http://localhost:3000/reviews/${review_id}/helpful`)
    .then((res) => {
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const increaseHelpCount = (review_id) => {
    setHelpfulCount(helpfulCount + 1);
    handleVoteCount(review_id);
  }

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
    <div>{review.photos.map((photo) => {return (<img key={photo.id} src={photo.url}/>)})}</div>
    <p>Helpful? <button onClick={() => increaseHelpCount(review.review_id)}> Yes({helpfulCount})</button> | <button>Report</button> </p>

  </div>
  )
}

export default SingleReview