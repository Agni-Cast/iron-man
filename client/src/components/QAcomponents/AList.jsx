
const AList = (props) => {
    // console.log("im in Answer render now the incoming props looks like: ", props);
    const answersArray = Object.values(props.answers)
    console.log("im in Answer render now the answers array looks like: ", answersArray);
    return (
      <div>
        {answersArray.map((answer, index) => (
          <div key={index}>
            <p>{answer.body}</p>
            {answer.photos.map((photo, index) => (
            <img key={index} src={photo.url} alt="answer" />
            ))}
            <p>by {answer.answerer_name} - {new Date(answer.date).toLocaleDateString()} | Helpful? <a href="url">Yes</a> | <a href="url">Report</a></p>
          </div>
        ))}
      </div>
    );

}

export default AList;