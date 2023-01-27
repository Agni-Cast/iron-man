import AnswerEntry from './AnswerEntry.jsx';

const AList = (props) => {
    // console.log("im in Answer render now the incoming props looks like: ", props);
    const answersArray = Object.values(props.answers);

    return (
      <div>
        {answersArray.map((answer, index) => (
            <AnswerEntry key={index} answer={answer} />
        ))}
      </div>
    );

}

export default AList;