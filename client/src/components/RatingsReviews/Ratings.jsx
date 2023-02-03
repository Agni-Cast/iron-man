import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Stars from './Stars.jsx';

const Ratings = ({product_id}) => {
  const[ratings, setRatings] = useState({});
  const[averageRating, setAverageRating] = useState(0);
  const[recommendPerc, setRecommendPerc] = useState(0);

  useEffect(() => {
    const product_id = 37315
    axios.get(`http://localhost:3000/reviews/meta?product_id=${product_id}`)
    .then((res) => {
      setRatings(res.data);
      setAverageRating(calculateAverageRating(res.data.ratings));
      setRecommendPerc(calculatePercentageRecommend(res.data.recommended))
    })
  }, [])

  function calculateAverageRating(obj) {
    let sum = (obj[1] * 1) + (obj[2] * 2) + (obj[3] * 3) + (obj[4] * 4) + (obj[5] * 5);
    let count = Number(obj[1]) + Number(obj[2]) + Number(obj[3]) + Number(obj[4]) + Number(obj[5])
    return Math.round((sum/count) * 10) / 10;
  }

  function calculatePercentageRecommend(obj) {
    return Math.round(Number(obj.true)/ (Number(obj.true) + Number(obj.false)) * 100)
  }
  //console.log('RATINGS: ', ratings)

  return (
  <div>
    <div> Ratings</div>
    <div> {averageRating}</div>
    <Stars rating={averageRating}/>
    <div>{recommendPerc}% of reviews reccomend this product</div>
  </div>

  )
}

export default Ratings;