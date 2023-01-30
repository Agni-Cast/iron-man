import React from "react";
import {useEffect, useState} from "react";
import QAIndex from './components/QAcomponents/QAIndex.jsx';
import ReactDOM from "react-dom";
import RatingsReviews from "./components/RatingsReviews/RatingsReviews.jsx";
import Overview from "./components/OverviewComponents/Overview.jsx";


const App = () => {

  const [productID, setProductID] = useState(37311);



  return (
    <div>
      <h1>Hello Iron Man!</h1>
      <Overview productID={productID}/>
      {/* <QAIndex /> */}
      <RatingsReviews/>
    </div>
  )
}




ReactDOM.render(<App/>, document.getElementById('root'))