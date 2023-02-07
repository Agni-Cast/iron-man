import { useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import EnlargedImageModal from './EnlargedImageModal.jsx';

const AnswerEntry = ({ answer }) => {
    // console.log('what is each answer_id looks like :', answer.id);
    const [answerHelpfulCount, setAnswerHelpfulCount] = useState(answer.helpfulness);
    const [isOpen, setIsOpen] = useState(false);
    const [isEnlarged, setIsEnlarged] = useState(false);
    const [enlargePhotoIndex, setEnlargedPhotoIndex] = useState(-1);

    const [votedHelpful, setVotedHelpful] = useState(false);
    const [reportActed, setReportActed] = useState(false);



    const handleVote = (answerId) => {
        // console.log("am in handleVote func, prepare send request to API", apiUrl);
        axios.put(`http://localhost:3000/qa/answers/${answerId}/helpful`)
        .then((response) => {
          alert("Thanks for voting this answer helpful! ")
          // console.log("voting succeed!")
          setVotedHelpful(true);
        })
        .catch ((error) => {
          alert('this answer voting get error: ', error);
        })
    }

    const handleHelpfulClick = (answerId) => {
        setAnswerHelpfulCount(answerHelpfulCount + 1);
        handleVote(answerId);
    }

    const handleOpenModal = () => {
      setIsOpen(true);
    }

    const handleCloseModal = () => {
      setIsOpen(false);
    }

    const handlePhotoClick = (index) => {
        // console.log("enlarge func active ?")
        setEnlargedPhotoIndex(index);
        setIsEnlarged(!isEnlarged);

    }

    // console.log("let me see what is the answer looks like: ",  answer)
    return (
        <div>
            <p className="answer-text">{answer.body}</p>
            {answer.photos.map((photo, index) => (
                <img
                    key={index}
                    onClick={() => handlePhotoClick(index)}
                    src={`${answer.photos[index]}`}
                    alt="answer photo"
                    className={index === enlargePhotoIndex && isEnlarged ? 'enlarged-photo' : 'answer-photo-orign' }
                />

            ))}
             <EnlargedImageModal
                imageUrl={answer.photos[enlargePhotoIndex]}
                isOpen={isEnlarged}
                ariaHideApp={false}
                onClose={() => setIsEnlarged(false)}
            />
            <div className="answer-infor">
                <p>by {answer.answerer_name} - {new Date(answer.date).toLocaleDateString()}</p>
                <button className="answer-help">
                  | &nbsp; Helpful? &nbsp;
                  <u
                    onClick={() => {
                      if (!votedHelpful) {
                        handleHelpfulClick(answer.id);
                      }
                    }}
                    disabled={votedHelpful}
                  >
                    {votedHelpful ? 'Voted ' : `Yes (${answerHelpfulCount}) `}
                  </u>
              </button>
                {/* <button className="answer-report" onClick={handleOpenModal}>| &nbsp; <u > Report</u></button> */}
                <button className="answer-report">
                  <p>| &nbsp; &nbsp;
                    <u
                      onClick={() => {
                        if (!reportActed) {
                          handleOpenModal()
                        }
                      }}
                      disabled={reportActed}
                      >
                        {reportActed ? 'Reported' : 'Report'}
                      </u>
                    </p>
                </button>
            </div>
            <ReactModal isOpen={isOpen} ariaHideApp={false}  style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '300px'
          }
        }}>
                <button className="close-button" style={{ color: 'black', cursor: 'pointer', position: 'absolute', top: '25px', right: '25px', background:'none', border:'none' }}onClick={() => setIsOpen(false)}>[Close]</button>

                <form onSubmit={(event) => {
                    event.preventDefault();

                    // console.log("am i sending request to ans report API?", answer.id)

                    axios.put(`http://localhost:3000/qa/answers/${answer.id}/report`)
                    .then((response) => {
                          alert("Thanks for report this answer ! ")
                          // console.log("voting succeed!")
                          setIsOpen(false);
                          setReportActed(true);
                      })
                    .catch ((error) => {
                      alert('this answer report get error: ', error);
                     })
                    }}>
                    <div className="iron-man-form">
                      <label className="form-title">
                          Report This Answer:
                          <br />
                          <textarea
                            className="report-textarea"
                            name="reportReason"
                            onChange={(e) => setReportReason(e.target.value)}
                            style={{ height: '200px', width: '270px' }}
                            placeholder="Enter your report reason here"
                          />
                          <br/>

                          {wordCount > 4 ? <span></span> : <span className="report-word-count"> &nbsp; &nbsp; {5 - wordCount} Words To Submit</span>}

                      </label>
                      <br />
                      <div className="report-form-button-container">
                        <input
                          className="report-submit-button"
                          type="submit"
                          value="Submit"
                          disabled={wordCount < 5}
                          style={{ backgroundColor: wordCount >= 5 ? "green" : "" }}
                        />
                      </div>

                    </div>
                </form>
            </ReactModal>
        </div>
    )
}

export default AnswerEntry;
