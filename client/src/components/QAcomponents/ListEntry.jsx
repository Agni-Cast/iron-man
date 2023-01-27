import AList from './AList.jsx';
import {useState} from 'react';

const ListEntry = (props) => {
  // set helpfulnessCount for showing the current question helpfulness data
  const [helpfulnessCount, setHelpfulnessCount] = useState(props.question.question_helpfulness)

  const voteOnHelp = (questionId) => {
    setHelpfulnessCount(helpfulnessCount + 1);
  }


  return (
    <div>
      <div>
        <h2>Q: {props.question.question_body}</h2>
        <p>
          <button onClick={() => voteOnHelp(props.question.quesiton_id)}>Helpful? <a url="rul">YES</a> <a>{helpfulnessCount}</a></button>
          <button onClick={() => addAnswer(props.question.question_id)}>Add Answer</button>
        </p>
      </div>
      {/* {Object.values(answers).slice(0, numAnswerToShow).map((answer, index) => (
        <AList key={index} answer={answer}/>
      ))}
      {numAnswerToShow < Object.values(answers).length && (
        <button onClick={loadMoreAnswers}>Load More Answers</button>
      )} */}
      <AList answers={props.question.answers}/>
    </div>
  )
}

export default ListEntry