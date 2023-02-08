import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";



const Styles = ({productID, styleNumber, setStyleNumber}) => {

  const [styleList, setStyleList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${productID}/styles`)
    .then((response) => {
      setStyleList(response.data.results);
    })
    .catch((error) => {
      console.log('this is an axios get error in Styles.jsx: ', error);
    })

  },[productID]);

  //CSS

  const circleStyle = {
    flex: "75px",
    minWidth: "75px",
    maxWidth: "75px",
    height: "75px",
    width: "75px",
    margin: "9px",
    borderRadius: "75px",
    background: "Gray",
  }

  const circleContainerStyle = {
    display: "flex",
    justifyContent: "flex-end"
  }

  const circleCheckmarkStyle = {
    width: "0px",
    position: "relative",
    bottom: "-5px",
    left: "60px"
  }

  const hiddenCheckmarkStyle = {
    visibility: "hidden",
    width: "0px",
    position: "relative",
    bottom: "-5px",
    left: "60px"
  }

  const checkmarkImageStyle = {
    backgroundColor: "white",
    borderRadius: "15px"
  }

  const handleStylesClick = (event) => {
    setStyleNumber(event.target.className);
    let imageList = document.getElementsByClassName("circleCheckmark");
    for (let entry of imageList) {
      if (entry.id === ('circle' + event.target.className)) {
        entry.style.visibility = "visible";
      } else {
        entry.style.visibility = "hidden";
      }
    }
  }

  //Additional code:

  let finalStyleList = styleList.map((entry, index) => {
    let checkBool = false;
    if (styleNumber === index) {
      checkBool = true;
    }
    return (
      <div key={"circleContainer" + index} className="circleContainer" style={circleContainerStyle}>
        <div key={"circleCheckmark" + index} className="circleCheckmark" id={'circle' + index} style={checkBool ? circleCheckmarkStyle : hiddenCheckmarkStyle}>
            <img key={"image" + index} src="check-mark-circle-icon.png" style={checkmarkImageStyle}/>
        </div>
          <img
            key={index}
            className={index}
            style={circleStyle}
            src={entry.photos[0].thumbnail_url}
            alt="Italian Trulli"
            onClick={handleStylesClick}
          />
        </div>
    )
})

  return (
  <>
    {finalStyleList}
  </>
  )
}


export default Styles;