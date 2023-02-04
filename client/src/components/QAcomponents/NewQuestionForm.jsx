import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from 'axios';


const NewQuestionForm = (props, closeModal) => {
  // console.log("props for the form i got :", props);

  const [questionBody, setQuestionBody] = useState('');
  const [askerName, setAskerName] = useState('');
  const [askerEmail, setAskerEmail] = useState('');

  const isValid = questionBody.length > 0 && askerName.length > 0 && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(askerEmail);
  const buttonClass = isValid ? "form-submit form-submit-valid" : "form-submit";

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
    <form onSubmit={handleSubmit} className="iron-man-form">
      <h2 className="form-title">STARK VALUE YOUR QUESTIONS</h2>
      <div className="form-group">
        <label htmlFor="question-body" className="form-label">Question Body:</label>
        <input
          type="text"
          value={questionBody}
          onChange={e => setQuestionBody(e.target.value)}
          id="question-body"
          className="form-input"
          placeholder="Enter your question"
        />
      </div>
      <div className="form-group">
        <label htmlFor="asker-name" className="form-label">Your Name:</label>
        <input
          type="text"
          value={askerName}
          onChange={e => setAskerName(e.target.value)}
          id="asker-name"
          className="form-input"
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="asker-email" className="form-label">Your Email:</label>
        <input
          type="email"
          value={askerEmail}
          onChange={e => setAskerEmail(e.target.value)}
          id="asker-email"
          className="form-input"
          placeholder="Enter your email"
        />
      </div>
      <button type="submit" className={buttonClass}>Submit</button>
    </form>
  );

}
export default NewQuestionForm;