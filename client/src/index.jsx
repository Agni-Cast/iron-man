import React from "react";
import ReactDOM from "react-dom";
import RatingsReviews from "./components/RatingsReviews/RatingsReviews.jsx"

const App = () => {
  return (
    <div>
      <h1>Hello Iron Man!</h1>
      <RatingsReviews/>
    </div>
  )
}




ReactDOM.render(<App/>, document.getElementById('root'))