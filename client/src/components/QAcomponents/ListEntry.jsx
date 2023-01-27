import AList from './AList.jsx';

const ListEntry = (props) => {
  // console.log("props i gave to Alist are :", {props});
  return (
    <div>
      <div>
        <h2>Q: {props.question.question_body}</h2>
      </div>
      <AList answers={props.question.answers}/>
    </div>
  )
}

export default ListEntry