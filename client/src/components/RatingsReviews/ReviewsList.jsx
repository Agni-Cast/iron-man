import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleReview from './SingleReview.jsx'

const ReviewsList = ({product_id}) => {
  const[reviews, setReviews] = useState([]);
  const[sortBy, setSortBy] = useState(sortBy || 'relevant');
  const[reviewsShown, setReviewsShown] = useState(2);

  useEffect(() => {

    axios.get(`http://localhost:3000/reviews?count=5000&sort=${sortBy}&product_id=${product_id}`)
    .then((res) => {
      setReviews(res.data.results);
    });
  }, [sortBy, product_id]);
 //console.log('REVIEWS: ', reviews)

  return (
    <div>
        <div value={sortBy} onChange={(event) => {setSortBy(event.target.value)}}> {reviews.length} reviews, sorted by
          <select>
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
          <button onClick={() => setReviewsShown(reviewsShown + 2)}> MORE REVIEWS</button>
        )}
           <button>ADD A REVIEW +</button></div>
    </div>

  )
}

export default ReviewsList;