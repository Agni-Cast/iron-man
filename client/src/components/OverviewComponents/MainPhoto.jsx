import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";



const MainPhoto = ({productID, photoNumber, setPhotoNumber, styleNumber}) => {


  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:3000/products/${productID}/styles`)
    .then((response) => {
      setPhotoList(response.data.results[styleNumber].photos);
    })
    .catch((error) => {
      console.log('this is an axios get error: ', error);
    })
  },[]);


  //TODO: figure out why fifth photo only shows during handleprev.
  const handleNext = function() {
    if (photoNumber === photoList.length - 1) {
      setPhotoNumber(0);
    } else {
      setPhotoNumber(photoNumber++);
    }
  }

  const handlePrev = function() {
    if (photoNumber === 0) {
      setPhotoNumber(photoList.length - 1);
    } else {
      setPhotoNumber(photoNumber--);
    }
  }

  //CSS:
  const arrowStylePrev = {
    position: "absolute",
    top: "50%",
    left: "15px",
    cursor: "pointer",
    width: "auto",
    padding: "0px",
    color: "black",
    fontWeight: "bold",
    fontSize: "38px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
  }

  const arrowStyleNext = {
    position: "absolute",
    top: "50%",
    right: "15px",
    cursor: "pointer",
    width: "auto",
    padding: "0px",
    color: "black",
    fontWeight: "bold",
    fontSize: "38px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
  }


  if (photoList.length === 0) {
    return (
      <span>Data not available</span>
    )
  };

  return (
  <>
    <div className="imageContainer" style={{position: "relative", display: "inline-block", width: "500px"}}>
     <img className="mainPhoto" src={photoList[photoNumber].url} alt="Italian Trulli"
     style={{
       width: "500px",
       height: "auto",}}/>
      <a className="prev"  style={arrowStylePrev} onClick={handlePrev}>&#10094;</a>
      <a className="next"  style={arrowStyleNext} onClick={handleNext}>&#10095;</a>
    </div>
    <div style={{width: "60%"}}></div>
  </>
  )
}


export default MainPhoto;