import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Ratings = ({product_id}) => {
  const[ratings, setRatings] = useState({});
  const[averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const product_id = 37315
    axios.get(`http://localhost:3000/reviews/meta?product_id=${product_id}`)
    .then((res) => {
      setRatings(res.data);
      console.log('res.data.rating', res.data.ratings[1])
      setAverageRating(calculateAverageRating(res.data.ratings));
    })
  }, [])
//console.log('average rating', averageRating)
  function calculateAverageRating(obj) {
    let sum = (obj[1] * 1) + (obj[2] * 2) + (obj[3] * 3) + (obj[4] * 4) + (obj[5] * 5);
    let count = Number(obj[1]) + Number(obj[2]) + Number(obj[3]) + Number(obj[4]) + Number(obj[5])
    return Math.round((sum/count) * 10) / 10;
  }

  console.log('RATINGS: ', ratings)
  // console.log(ratings.ratings)
  // for (let star in ratings.ratings) {
  //   return
  // }
  return (
  <div>
    <div> Ratings</div>
    <div> {averageRating}</div>
  </div>

  )
}

export default Ratings;