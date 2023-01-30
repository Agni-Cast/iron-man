import { useState } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import {token} from '/config.js';

const AnswerEntry = ({ answer }) => {
    console.log('what is each answer_id looks like :', answer.id);
    const [answerHelpfulCount, setAnswerHelpfulCount] = useState(answer.helpfulness);
    const [isOpen, setIsOpen] = useState(false);
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleVote = async (answerId) => {
        // console.log(answerId)
        try {
          const response = await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answerId}/helpful`, {}, {
            headers: {
              'Authorization': `${token}`
            }
          });
          alert("Thanks for voting this answer helpful! ")
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
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

    const handlePhotoClick = () => {
        // console.log("enlarge func active ?")
        setIsEnlarged(!isEnlarged);
    }




    return (
        <div>
            <p>A: {answer.body}</p>
            {answer.photos.map((photo, index) => (
                <img
                    key={index}
                    onClick={handlePhotoClick}
                    src={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_hlf_02_0.jpg'}
                    alt="answer photo"
                    className={isEnlarged ? 'enlarged-photo' : ''}
                />
            ))}
            <div className="answer-infor">
                <p>by {answer.answerer_name} - {new Date(answer.date).toLocaleDateString()}</p>
                <button className="answer-help" >| &nbsp; Helpful? <u onClick={() => handleHelpfulClick(answer.id)}> Yes({answerHelpfulCount}) </u> </button>
                <button className="answer-report" onClick={handleOpenModal}>| &nbsp; <u > Report</u></button>
            </div>
            <ReactModal isOpen={isOpen} ariaHideApp={false} style={{
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
                <form onSubmit={async (event) => {
                    event.preventDefault();
                    try {
                        const response = await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answer.id}/report`, {}, {
                          headers: {
                            'Authorization': `${token}`
                          }
                        });
                        alert("Thanks for reporting this answer! ")
                        console.log(response.data);
                        setIsOpen(false);
                      } catch (error) {
                        console.log(error);
                      }

                }}>
                    <label>
                        Report Reason:
                        <input type="text" name="reportReason" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </ReactModal>
        </div>
    )
}

export default AnswerEntry;
