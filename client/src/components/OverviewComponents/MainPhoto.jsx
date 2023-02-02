import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail.jsx"


const MainPhoto = ({productID, photoNumber, setPhotoNumber, styleNumber}) => {


  const [photoList, setPhotoList] = useState([]);


  useEffect(() => {

    axios.get(`http://localhost:3000/products/${productID}/styles`)
    .then((response) => {
      setPhotoList(response.data.results[styleNumber].photos);
    })
    .catch((error) => {
      console.log('this is an axios get error in MainPhoto.jsx: ', error);
    })
  },[styleNumber]);


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

  if (photoList.length === 0) {
    return (
      <span>Data not available</span>
    )
  };

  //CSS:
  const arrowStylePrev = {
    position: "absolute",
    top: "50%",
    left: "115px",
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

  const imageContainer = {
    backgroundColor: "LightGray",
    position: "relative",
    display: "inline-block",
    width: "800px",
    height: "600px"
  }

  const mainPhoto = {
      width: "100%",
      height: "100%",
  }

  return (
  <>
    <div className="imageContainer" style={imageContainer}>
     <img className="mainPhoto" src={photoList[photoNumber].url} alt="Italian Trulli"
     style={mainPhoto}/>
      <a className="prev"  style={arrowStylePrev} onClick={handlePrev}>&#10094;</a>
      <a className="next"  style={arrowStyleNext} onClick={handleNext}>&#10095;</a>
      <Thumbnail
       productID={productID}
       photoNumber={photoNumber}
       setPhotoNumber={setPhotoNumber}
       styleNumber={styleNumber}
       photoList={photoList}
     />
    </div>

  </>
  )
}


export default MainPhoto;