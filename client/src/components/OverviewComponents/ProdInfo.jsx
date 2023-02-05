import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Styles from "./Styles.jsx";
import Checkout from "./Checkout.jsx";


const ProdInfo = ({productID, styleNumber, setStyleNumber}) => {


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

  },[styleNumber, productID]);

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

  const priceContainerStyle = {
    display: "flex",

  }

  const prodPriceStyle = {
    fontFamily: "Helvetica",
    fontSize: "16px",
    padding: "15px"
  }

  const prodPriceSlashStyle = {
    fontFamily: "Helvetica",
    textDecoration: "line-through",
    fontSize: "16px",
    padding: "15px"
  }

  const salePriceStyle = {
    fontFamily: "Helvetica",
    color: "red",
    fontSize: "16px",
    padding: "15px"
  }

  const reviewStyle = {
    fontFamily: "Helvetica",
    fontSize: "10px",
    padding: "15px"
  }

  const styleTypeStyle = {
    fontFamily: "Helvetica",
    fontSize: "16px",
    padding: "15px"
  }

  const prodInfoContainerStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px"
  }

  const stylesStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "left",
    justifyContent: "flex-start"
  }

  return (
  <>
    <div className="prodInfoContainer" style={prodInfoContainerStyle}>
      <div>
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
        <div className="priceContainer" style={priceContainerStyle}>
            <div className="prodPrice" style={styleEntry.sale_price ? prodPriceSlashStyle : prodPriceStyle}>
              ${styleEntry.original_price ? styleEntry.original_price : ''}
            </div>
            <div className="salePrice" style={salePriceStyle}>
              {styleEntry.sale_price ? '$' + styleEntry.sale_price : ''}
            </div>
        </div>
        <div className="styleType" style={styleTypeStyle}>
        <b>Style</b> &nbsp; > &nbsp;{styleEntry.name}
        </div>
      </div>
      <div className="styles" style={stylesStyle}>
        <Styles
          styleNumber={styleNumber}
          setStyleNumber={setStyleNumber}
          productID={productID}
          />
      </div>
      <div className="chekcout">
          <Checkout
              productID={productID}
              styleNumber={styleNumber}
              styleEntry={styleEntry}
          />
      </div>
    </div>
  </>
  )
}


export default ProdInfo;