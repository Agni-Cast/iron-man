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


    const handleVote = (answerId) => {
        // console.log("am in handleVote func, prepare send request to API", apiUrl);
        axios.put(`http://localhost:3000/qa/answers/${answerId}/helpful`)
        .then((response) => {
          alert("Thanks for voting this answer helpful! ")
          // console.log("voting succeed!")
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
            <p>A: {answer.body}</p>
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
                <form onSubmit={(event) => {
                    event.preventDefault();

                    // console.log("am i sending request to ans report API?", answer.id)

                    axios.put(`http://localhost:3000/qa/answers/${answer.id}/report`)
                    .then((response) => {
                          alert("Thanks for report this answer ! ")
                          // console.log("voting succeed!")
                          setIsOpen(false);
                      })
                    .catch ((error) => {
                      alert('this answer report get error: ', error);
                     })
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
