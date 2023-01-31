import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";


const ProdInfo = ({productID, styleNumber}) => {


  const [styleEntry, setStyleEntry] = useState({});
  const [prodEntry, setProdEntry] = useState({});

  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {

    axios.get(`http://localhost:3000/products/${productID}/styles`)
    .then((response) => {
      setStyleEntry(response.data.results[styleNumber]);
    })
    .catch((error) => {
      console.log('this is an axios get error in ProdInfo.jsx: ', error);
    })

    axios.get(`http://localhost:3000/products/${productID}`)
    .then((response) => {
      setProdEntry(response.data);
      setNewCategory(response.data.category.toUpperCase())
    })
    .catch((error) => {
      console.log('this is an axios get error in ProdInfo.jsx: ', error);
    })

  },[]);


  //TODO: figure out why fifth photo only shows during handleprev.
  const handleNext = function() {

  }



  const handlePrev = function() {

  }


  //CSS:
  const prodNameStyle = {
    fontFamily: "Helvetica",
    fontSize: "40px",
    padding: "0 15px 0 15px"
  }

  const categoryStyle = {
    fontFamily: "Helvetica",
    fontSize: "16px",
    padding: "0 15px 0 15px"
  }

  const prodPriceStyle = {
    fontFamily: "Helvetica",
    fontSize: "16px",
    padding: "15px"
  }

  const reviewStyle = {
    fontFamily: "Helvetica",
    fontSize: "10px",
    padding: "15px"
  }

  return (
  <>
    <div className="prodInfoContainer">
     <div className="review" style={reviewStyle}>
      *STAR MODULE HERE*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="url" style={{color: "Gray"}}>Read all reviews</a>
     </div>
     <div className="category" style={categoryStyle}>
      {newCategory}
     </div>
     <div className="prodName" style={prodNameStyle}>
      <b>{prodEntry.name}</b>
     </div>
     <div className="prodPrice" style={prodPriceStyle}>
      ${styleEntry.original_price}  {styleEntry.sale_price}
     </div>
    </div>

  </>
  )
}


export default ProdInfo;