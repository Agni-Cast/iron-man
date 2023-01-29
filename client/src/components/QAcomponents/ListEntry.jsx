import AList from './AList.jsx';
import {useState} from 'react';
import ReactModal from 'react-modal';

const ListEntry = (props) => {
  // set helpfulnessCount for showing the current question helpfulness data
  const [helpfulnessCount, setHelpfulnessCount] = useState(props.question.question_helpfulness)
  // this is handle after the click, the helpfulness accumulate
  const voteOnHelp = (questionId) => {
    setHelpfulnessCount(helpfulnessCount + 1);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  // this is gonna handle the add answer button
  const addAnswer = (questionId) => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      <div className="question-container">
        <h4 className="question-body">Q: {props.question.question_body}</h4>
        <div className="question-actions">
          <button className="question-help">Helpful? <u onClick={() => voteOnHelp(props.question.quesiton_id)}> Yes({helpfulnessCount})</u></button>
          <button className="question-addAnswer" >| &nbsp; <u  onClick={() => addAnswer(props.question.question_id)}>Add Answer</u></button>
        </div>
      </div>
      <br/>
      <br/>
      <br/>

      <AList answers={props.question.answers}/>
      <ReactModal isOpen={isModalOpen} ariaHideApp={false} style={{
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
        <form>
          <textarea placeholder="Enter your answer here" style={{ height: '200px', width: '300px' }}></textarea>
          <input type='file' accept="image/*" />
          <button onClick={() => setIsModalOpen(false)}>Add Answer</button>

        </form>
      </ReactModal>
    </div>
  )
}

export default ListEntry