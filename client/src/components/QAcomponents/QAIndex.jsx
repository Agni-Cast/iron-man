// import QAList from './QAList.jsx';
// import SearchComponent from './Searchqa.jsx';
// import {useState} from 'react';
// import axios from 'axios';
// import {token} from '/config.js';
// import NewQuestionForm from './NewQuestionForm.jsx';
// import Modal from 'react-modal';

// const QAIndex = () => {

//   const [questionId, setQuestionId] = useState([37316])
//   const [qaData, setQaData] = useState([])
//   // inital state for how many questions show on the DOM
//   const [questionsToShow, setQuestionsToShow] = useState(2)
//   // inital state for add new question form
//   const [modelIsOpen, setModelIsOpen] = useState(false)


//   function handleSearch() {
//     // console.log(`sending request to server and token is ${token}`);

//     $.ajax({
//       type: 'GET',
//       url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${questionId}`,
//       headers: {
//           'Authorization': `${token}`,
//       },
//       success: function (response) {
//           // console.log("res from API looks like: ", response.results)
//           setQaData(response.results)
//       },
//       error: function (error) {
//           console.log(error);
//       }
//   });

//   }
//   // handle the show more questions func
//   function showMoreQuestions() {
//     setQuestionsToShow(questionsToShow + 2);
//   }

//   // handle the func to add new questions
//   function addNewQuestion() {
//     setModelIsOpen(!modelIsOpen);
//   }

//   return (
//     <div className="qa-wholebody">
//       <p className="qa-head">QUESTIONS & ANSWERS</p>
//       <SearchComponent handleSearch={handleSearch}/>
//       <QAList qaData={qaData} questionsToShow={questionsToShow}/>
//       <button className="button-show-more-answered-question" onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
//       <button className="button-add-a-question" onClick={addNewQuestion}>ADD A QUESTION +</button>
//       <Modal isOpen={modelIsOpen} onRequestClose={() => setModelIsOpen(false)} ariaHideApp={false}
//         style={{
//           content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             width: '400px',
//             height: '300px'
//           }
//         }}>
//         <NewQuestionForm questionId={questionId} closeModal={() => setModelIsOpen(false)}/>
//       </Modal>

//     </div>
//   )
// }

// export default QAIndex;
