import AList from './AList.jsx';
import {useState} from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';



const ListEntry = (props) => {
  // set helpfulnessCount for showing the current question helpfulness data
  const [helpfulnessCount, setHelpfulnessCount] = useState(props.question.question_helpfulness)
  // state for voting helpful
  const [votedHelpful, setVotedHelpful] = useState(false);

  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValidEmail(re.test(value));
  }

  const handleBodyChange = (event) => {
    const value = event.target.value;
    setBody(value);
    setWordCount(value.split(" ").length);
  }

  const handleVote = (questionId) => {
    // console.log("correct question ID here?", questionId)

    axios.put(`http://localhost:3000/qa/questions/${questionId}/helpful`)
    .then((response) => {
      alert("Thanks for voting this question helpful! ");
      // console.log(response.data);
      setVotedHelpful(true);
    })
    .catch((error) => {
      alert("This question helpful voting got error", error);
    })
  }

  // this is handle after the click, the helpfulness accumulate
  const voteOnHelp = (questionId) => {
    // console.log("voteOnHep func, which question is dealing with right now ?", questionId);
    setHelpfulnessCount(helpfulnessCount + 1);

    handleVote(questionId);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  // this is gonna handle the add answer button
  const addAnswer = (questionId) => {
    setIsModalOpen(!isModalOpen);
  }

  // console.log("in listEntry, i want to see the question_id :", props.question.question_id);

  // console.log("what is props here looks like?", props)
  return (
    <div>
      <div className="question-container">
        <h4 className="question-body">Q: {props.question.question_body}</h4>
        <div className="question-actions">
        <button className="question-help">
          Helpful? &nbsp;
          <u
            onClick={() => {
              if (!votedHelpful) {
                voteOnHelp(props.question.question_id);
              }
            }}
            disabled={votedHelpful}
          >
            {votedHelpful ? 'Voted' : `Yes (${helpfulnessCount})`}
          </u>
        </button>
          <button className="question-addAnswer" >| &nbsp; <u  onClick={() => addAnswer(props.question.question_id)}>Add Answer</u></button>
        </div>
      </div>

      <div className='flexbox-container'>
        <h4 className="answer-head">A:</h4>
        <AList answers={props.question.answers}/>
        {/* ariaHideApp is used here to prevent ReactModal fault in console */}
      </div>
      <ReactModal isOpen={isModalOpen} ariaHideApp={false} style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '400px'
          }
        }}>
          {/* handle the API request below */}
        <div style={{display: 'flex', flexDirection: 'column', aligItems: 'center' }}>
          <h3>Submit Your Answer 👇</h3>

        </div>
        <form onSubmit ={(event) => {
          event.preventDefault();
          // handle photo API requirement for [text] format

          let photos = [];
          for (let i = 0; i < event.target.photos.files.length; i++) {
            photos.push(event.target.photos.files[i].name);
          }

          const data = {body: event.target.body.value, name: event.target.name.value, email: event.target.email.value, photos: photos}


          const addAnsUrl = `http://localhost:3000/api/qa/questions/${props.question.question_id}/answers`;

          // console.log("here is the data for the req :", JSON.stringify(data), "Url sending is :", addAnsUrl);

          axios.post(addAnsUrl, data)
          .then((response) => {
            alert("Success! Your answer has been submitted.")
            setIsModalOpen(false);
          })
          .catch((error) => {
            alert('please check your format', error)
          })
        }}>
          <textarea name="body" placeholder="Enter your answer here" onChange={handleBodyChange} style={{ height: '200px', width: '350px' }}></textarea>
          {wordCount >= 5 ? <span style={{ color: "green" }}> &#10003; </span> : <span className = "add-answer-body">  {5 - wordCount} words to submit </span> }

          <br/>
          <input type='file' name="photos" accept="image/*" multiple />
          <br/>
          <br/>

          <input type='text' name='name' placeholder='Your Name' />
          <br/>
          <br/>
          <input type='text' name='email' placeholder='Your Email' onChange={handleEmailChange}/>
          {isValidEmail ? <span style={{ color: "green" }}> &#10003; </span> : <span className="add-answer-email"> Invalid Email format</span>}
          <br/>
          <br/>
          <button type="submit" disabled={wordCount < 5 || !isValidEmail}>Add Answer</button>
        </form>
      </ReactModal>
    </div>
  )
}

export default ListEntry