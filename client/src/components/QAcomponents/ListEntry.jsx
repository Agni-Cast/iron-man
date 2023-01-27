import AList from './AList.jsx';
import {useState} from 'react';

const ListEntry = (props) => {
  // console.log("props i gave to Alist are :", {props});
  // set state for just render two answers at begging
  // const [numAnswerToShow, setnumAnswerToShow] = useState(2);

  // const loadMoreAnswers = () => {
  //   setnumAnswerToShow(numAnswerToShow + 2);
  // }

  // const answers = props.question.answers;
  // console.log(Object.values(answers));
  return (
    <div>
      <div>
        <h2>Q: {props.question.question_body}</h2>
        <p>
          <button onClick={() => voteOnHelp(props.question.quesiton_id)}>Helpful? <a url="rul">YES</a></button>
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