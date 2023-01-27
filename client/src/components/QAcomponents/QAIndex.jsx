import QAList from './QAList.jsx';

const QAIndex = () => {
  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <div className="search-container">
        <input  placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <button type="submit">
          <img src="./magnifier.png" alt="Amplifier"/>
        </button>
      </div>
      <QAList />
    </div>
  )
}

export default QAIndex;
