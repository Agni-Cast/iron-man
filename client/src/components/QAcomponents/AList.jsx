import AnswerEntry from './AnswerEntry.jsx';
import { useState } from 'react';

const AList = (props) => {
    // console.log("im in Answer render now the incoming props looks like: ", props);
    const answersArray = Object.values(props.answers);
    const [numAnswersDisplayed, setNumAnswersDisplayed] = useState(2);

    return (
      <div className="flexbox-item answer-list">

        <div >
          {answersArray.slice(0, numAnswersDisplayed).map((answer, index) => (
              <AnswerEntry key={index} answer={answer} />
          ))}

          {answersArray.length > numAnswersDisplayed && (
            <button className="butLoadMoreAns" onClick={() => setNumAnswersDisplayed(numAnswersDisplayed + 2)}>LOAD MORE ANSWERS 👈</button>
          )}
        </div>
      </div>
    );

}

export default AList;

