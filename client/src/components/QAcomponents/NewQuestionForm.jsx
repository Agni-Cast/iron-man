import React, {useState} from 'react';
import {token} from '/config.js';
import Modal from 'react-modal';
import axios from 'axios';


const NewQuestionForm = (props, closeModal) => {
  // console.log("props for the form i got :", props);

  const [questionBody, setQuestionBody] = useState('');
  const [askerName, setAskerName] = useState('');
  const [askerEmail, setAskerEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { body: questionBody, name: askerName, email: askerEmail, product_id:props.questionId[0]};

    // console.log("show me the data that user fill?", data);

    axios.post('http://localhost:3000/api/qa/questions', data)
    // console.log(response)#;
    .then((response) => {
      alert("Success! Your question has been submitted.");
    setTimeout(() => {
      props.closeModal();
    }, 1000);
    })
    .catch ((error) => {
      console.log(error);
    })
  }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Question Body:
          <input type='text' value={questionBody} onChange = {e => setQuestionBody(e.target.value)}/>
        </label>
        <br />
        <label>
          Your Name:
          <input type='text' value={askerName} onChange = {e => setAskerName(e.target.value)}/>
        </label>
        <br />
        <label>
          Your Email:
          <input type='email' value={askerEmail} onChange = {e => setAskerEmail(e.target.value)}/>
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    )
}
export default NewQuestionForm;