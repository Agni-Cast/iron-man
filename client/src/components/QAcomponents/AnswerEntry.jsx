import { useState } from 'react';
import ReactModal from 'react-modal';


const AnswerEntry = ({ answer }) => {
    const [answerHelpfulCount, setAnswerHelpfulCount] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [isEnlarged, setIsEnlarged] = useState(false);


    const handleHelpfulClick = () => {
        setAnswerHelpfulCount(answerHelpfulCount + answer.helpfulness);
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
                    src={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_hlf_02_0.jpg'}
                    alt="answer photo"
                    onClick={handlePhotoClick}
                    className={isEnlarged ? 'enlarged-photo' : ''}
                />
            ))}
            <div className="answer-infor">
                <p>by {answer.answerer_name} - {new Date(answer.date).toLocaleDateString()}</p>
                <button className="answer-help" >| &nbsp; Helpful? <a href="url" onClick={handleHelpfulClick}> Yes({answerHelpfulCount}) </a> </button>
                <button className="answer-report" onClick={handleOpenModal}>| &nbsp; Report</button>
            </div>
            <ReactModal isOpen={isOpen} onRequestClose={handleCloseModal}>
                <form>
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
