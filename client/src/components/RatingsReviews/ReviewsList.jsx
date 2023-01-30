import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleReview from './SingleReview.jsx'

const ReviewsList = ({product_id}) => {
  const[reviews, setReviews] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:3000/reviews?page=1&count=5&sort=helpful&product_id=${product_id}`)
    .then((res) => {
     //console.log(res.data)
      setReviews(res.data.results);
    });
  }, []);
 console.log('REVIEWS: ', reviews)

  return (
    <div>
        <div> Reviews:</div>
        {reviews.map((singleReview) => {
          return (
            <div key={singleReview.review_id}><SingleReview review={singleReview}/></div>
          )
        })}
    </div>

  )
}

export default ReviewsList;