import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";



const Checkout = ({styleEntry}) => {

  const [sizeDropDown, setSizeDropDown] = useState("");
  const [quantityDropDown, setQuantityDropDown] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    if (styleEntry.skus !== undefined) {
      let dropDown = Object.keys(styleEntry.skus).map((key, index) => {
            return (
              <option key={index} value={styleEntry.skus[key].size}>&nbsp;&nbsp;{styleEntry.skus[key].size}</option>
              )
            })
      setSizeDropDown(dropDown);
    }
    if (styleEntry.skus !== undefined) {

      //match the size to the quantity
      let qty = 0;
      for (let key in styleEntry.skus) {
        if (styleEntry.skus[key].size === size) {
          qty = styleEntry.skus[key].quantity < 16 ? styleEntry.skus[key].quantity : 15;
        }
      }

      //generate array with integers from 1 to quanity and use as dropdown values
      let qtyArray = [];
      for (let i = 1; i <= qty; i++) {
        qtyArray.push(i);
      }
      const finalQty = qtyArray.map((value, index) => {
        return (
          <option key={index} value={value}>&nbsp;&nbsp;{value}</option>
          )
        })
      setQuantityDropDown(finalQty);
    }

  },[styleEntry, size]);

  const handleChange = (event) => {
    setSize(event.target.value);
  }

  const handleFavorite = (event) => {
    if (event.target.innerText === '☆') {
      event.target.innerText = '★';
    } else if (event.target.innerText === '★') {
      event.target.innerText = '☆';
    }
  }


  //CSS:

  const sizeStyle = {
    height: "50px",
    width: "300px",
    margin: "15px",
    fontFamily: "Helvetica",
    fontSize: "16px"
  }

  const quantityStyle = {
    height: "50px",
    width: "150px",
    margin: "15px",
    fontFamily: "Helvetica",
    fontSize: "16px"
  }

  const checkoutContainerStyle = {
    display: "flex"
  }

  const addToCartContainerStyle = {
    display: "flex"
  }

  const buttonStyle = {
    height: "50px",
    minWidth: "300px",
    margin: "15px",
    borderWidth: "thin",
    background: "white",
    fontFamily: "Helvetica",
    fontSize: "16px",
    textAlign: "left"
  }

  const favoriteStyle = {
    height: "50px",
    minWidth: "50px",
    margin: "15px",
    borderWidth: "thin",
    background: "white",
    fontFamily: "Helvetica",
    fontSize: "16px"
  }

  return (
  <>
    <div className="checkoutContainer" style={checkoutContainerStyle}>
      <div className="sizeDropdown">
        <select name="size" id="size" style={sizeStyle} onChange={handleChange}>
          <option value="selectSize">&nbsp;&nbsp;SELECT SIZE</option>
          {sizeDropDown}
        </select>
      </div>
      <div className="quantityDropdown">
        <select name="quantity" id="quantity" style={quantityStyle}>
          <option value="selectQuantity">&nbsp;&nbsp;-</option>
          {quantityDropDown}
        </select>
      </div>
    </div>
    <div className="addToCartContainer" style={addToCartContainerStyle}>
      <button id="addToCart" style={buttonStyle}>&nbsp;&nbsp;ADD TO CART</button>
      <button id="addToFavorite" style={favoriteStyle} onClick={handleFavorite}>&#9734;</button>
    </div>
  </>
  )
}

export default Checkout;