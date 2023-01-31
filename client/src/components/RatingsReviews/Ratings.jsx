import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Ratings = ({product_id}) => {
  const[ratings, setRatings] = useState({});

  useEffect(() => {
    const product_id = 37315
    axios.get(`http://localhost:3000/reviews/meta?product_id=${product_id}`)
    .then((res) => {
      setRatings(res.data);
    })
  }, [])

  //console.log('RATINGS: ', ratings)

  return (
  <div>
    <div> Ratings</div>
    <div></div>
  </div>

  )
}

export default Ratings;