import React from "react";
import QAIndex from './components/QAcomponents/QAIndex.jsx';
import ReactDOM from "react-dom";
import RatingsReviews from "./components/RatingsReviews/RatingsReviews.jsx"

const App = () => {
  return (
    <div>
      <h1>Hello Iron Man!</h1>
      <QAIndex />
      {/* <RatingsReviews/> */}
    </div>
  )
}




ReactDOM.render(<App/>, document.getElementById('root'))