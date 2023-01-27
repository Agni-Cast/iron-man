import QAList from './QAList.jsx';
import SearchComponent from './Searchqa.jsx';
import {useState} from 'react';
import axios from 'axios';
import {token} from '/config.js';

const QAIndex = () => {
  const [questionId, setQuestionId] = useState([37315])
  const [qaData, setQaData] = useState([])

  function handleSearch() {
    // console.log(`sending request to server and token is ${token}`);

    $.ajax({
      type: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${questionId}`,
      headers: {
          'Authorization': `${token}`,
      },
      success: function (response) {
          console.log("res from API looks like: ", response.results)
          setQaData(response.results)
      },
      error: function (error) {
          console.log(error);
      }
  });

  }

  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchComponent handleSearch={handleSearch}/>
      <QAList qaData={qaData}/>
    </div>
  )
}

export default QAIndex;
