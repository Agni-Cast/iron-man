import QAList from './QAList.jsx';
import {useState, useEffect} from 'react';
import axios from 'axios';
import NewQuestionForm from './NewQuestionForm.jsx';
import Modal from 'react-modal';

const QAIndex = () => {

  const [questionId, setQuestionId] = useState([37777])
  const [qaData, setQaData] = useState([])
  // inital state for how many questions show on the DOM
  const [questionsToShow, setQuestionsToShow] = useState(4)
  // inital state for add new question form
  const [modelIsOpen, setModelIsOpen] = useState(false)

  // below two are used for search function
  const [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = () => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();
    // console.log("what is data transfer to handlesearch func",qaData[0]);
    const filtered = qaData.filter((data) => {
      return (
        data.question_body.toLowerCase().includes(lowerCasedSearchTerm)
      );
    });
    // console.log("filtered data looks like :", filtered)
    setFilteredData(filtered);
  }

  // this is for the test right now, render out questions and answers for product 37322
  useEffect(() => {

    axios.get(`http://localhost:3000/api/qa/questions/?product_id=${questionId}`)
    .then((response) => {
      // console.log("response return from server :", response)
      setQaData(response.data.results)
    })
    .catch((error) => {
      alert('first render got trouble!', error)
    })

  }, [])



  // handle the show more questions func
  function showMoreQuestions() {
    setQuestionsToShow(questionsToShow + 2);
  }

  // handle the func to add new questions
  function addNewQuestion() {
    setModelIsOpen(!modelIsOpen);
  }

  return (
    <div className="qa-wholebody">
      <p data-testid="todo-1" className="qa-head">QUESTIONS & ANSWERS</p>

      <div className="search-container">
        <input
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          <img src="./magnifier.png" alt="Amplifier"/>
        </button>
      </div>

      <QAList qaData={filteredData.length > 0 ? filteredData : qaData} questionsToShow={questionsToShow}/>
      <button className="button-show-more-answered-question" onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
      <button className="button-add-a-question" onClick={addNewQuestion}>ADD A QUESTION +</button>
      <Modal isOpen={modelIsOpen} onRequestClose={() => setModelIsOpen(false)} ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            height: 'auto',
            border: 'none',
            background: 'none'
          }
        }}>
        <NewQuestionForm questionId={questionId} closeModal={() => setModelIsOpen(false)}/>
      </Modal>

    </div>
  )
}

export default QAIndex;
