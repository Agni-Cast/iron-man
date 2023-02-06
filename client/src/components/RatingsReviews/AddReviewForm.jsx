import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import StarRatingForm from './StarRatingForm.jsx';
import CharacteristicForm from './CharacteristicsForm.jsx';

const AddReviewForm = ({characteristics, product_id, closeModal} ) => {

  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [charChosen, setCharChosen] = useState({});

  const charKeys = Object.keys(characteristics);
  // console.log('LET"S SEEEEEEE ->>>>', charChosen)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      summary: reviewSummary,
      body: reviewBody,
      username: username,
      email: email,
      product_id: product_id,
      date: new Date(),
      rating: rating,
      characteristics: charChosen,
      recommend: recommend,
      photos: photos
    };


  axios.post(`http://localhost:3000/api/reviews`, data)
    .then((response) => {
      alert("Success! Your review has been submitted.");
    setTimeout(() => {
      closeModal();
    }, 1000);
    })
    .catch ((error) => {
      console.log(error);
    })
  }

  const handleCharChosen = (event)=>  {
    setCharChosen(previewState => ({
      ...previewState,
      [event.target.name]: Number(event.target.value)
    }));
  }
//console.log('charChosen: ', charChosen)
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Summary:
          <input type='text' value={reviewSummary} onChange = {e => setReviewSummary(e.target.value)}/>
        </label>
        <br />
        <label>
          Body:
          <input type='text' value={reviewBody} onChange = {e => setReviewBody(e.target.value)}/>
        </label>
        <br />
        <label>
          Username:
          <input type='text' value={username} onChange = {e => setUsername(e.target.value)}/>
        </label>
        <br />
        <label>
          Email:
          <input type='email' value={email} onChange = {e => setEmail(e.target.value)}/>
        </label>
        <br />
        <label>
          Rating:
          {/* <input type='number' value={rating} onChange = {e => setRating(e.target.value)}/>
           */}
           <StarRatingForm rating={rating} setRating={setRating}/>
        </label>
        <br />
        <div>
        <label>
          Characteristics:
          {charKeys.map(key => <CharacteristicForm characteristic={key} value={characteristics[key]} allChars={charKeys} handleCharChosen={handleCharChosen} charChosen={charChosen}/>)}
        </label>
        </div>
        <br />
        <label>
          Recommend:
          <input type='radio' value={recommend} onClick = {e => setRecommend(e.target.value)}/> Yes
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    )
}
export default AddReviewForm;