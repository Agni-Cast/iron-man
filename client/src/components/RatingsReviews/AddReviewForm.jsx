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

  const [toggle, setToggle] = useState(true)

  const charKeys = Object.keys(characteristics);
  // console.log('LET"S SEEEEEEE ->>>>', charChosen)

  const handleSubmit = (event) => {
    closeModal();
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
          <input type='text' value={reviewSummary} onChange = {e => setReviewSummary(e.target.value)} maxLength="60" placeholder={'Example: Best purchase ever!'}/>
        </label>
        <br />
        <br />
        <label>
          Body:
          <input required type='text' value={reviewBody} onChange = {e => setReviewBody(e.target.value)} placeholder={'Why did you like the product or not?'}/>
        </label>
        <br />
        <br />
        <label>
          Username:
          <input required type='text' value={username} onChange = {e => setUsername(e.target.value)} placeholder={'Example: jackson11!'}/>
        </label>
        <br />
        For privacy reasons, do not use your full name or email address
        <br />
        <br />
        <label>
          Email:
          <input required type='email' value={email} onChange = {e => setEmail(e.target.value)} placeholder={'Example: jackson11@email.com'}/>
        </label>
        <br />
        For authentication reasons, you will not be emailed
        <br />
        <br />
        <label>
          Rating:
          {/* <input type='number' value={rating} onChange = {e => setRating(e.target.value)}/>
           */}
           <StarRatingForm required rating={rating} setRating={setRating}/>
        </label>
        <br />
        <br />
        <div>
        <label>
          Characteristics:
          {charKeys.map(key => <CharacteristicForm required characteristic={key} value={characteristics[key]} allChars={charKeys} handleCharChosen={handleCharChosen} charChosen={charChosen}/>)}
        </label>
        </div>
        <br />
        <br />
        <label>
          Recommend:
          <input required type='radio' value={recommend} onClick = {(e) => {setToggle(!toggle); setRecommend(e.target.value) }}/> Yes
        </label>
        <br />
        <br />
        <button required type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    )
}
export default AddReviewForm;