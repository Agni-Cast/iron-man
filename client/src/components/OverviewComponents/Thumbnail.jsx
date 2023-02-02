import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";



const Thumbnail = ({productID, photoNumber, setPhotoNumber, styleNumber, photoList}) => {



  useEffect(() => {

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

  const handleClick = (event) => {
   setPhotoNumber(event.target.className);

  }

  const thumbnail = {
    display: "block",
    left: "0%",
    width: "75px",
    height: "75px",
    padding: "1px 0 1px 0"
}

  let thumbnailList = photoList.map((photo, index) => {
    return (
      <li key={index} style={{ listStyle: 'none', listStyleType: 'none' , left: "0%", position: "relative"}}>
        <img
          className={index}
          src={photoList[index].thumbnail_url}
          style={thumbnail}
          alt="Italian Trulli"
          onClick={handleClick}/>
      </li>
    )
  })


  if (photoList.length === 0) {
    return (
      <span>Data not available</span>
    )
  };

  //CSS:
  const arrowStyleUp = {
    position: "absolute",
    display: "block",
    top: "-15px",
    left: "30%",
    cursor: "pointer",
    padding: "15px 0px 15px 0px",
    color: "black",
    fontWeight: "bold",
    fontSize: "38px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
  }

  const arrowStyleDown = {
    position: "absolute",
    bottom: "-15px",
    left: "30%",
    cursor: "pointer",
    width: "auto",
    padding: "15px 0px 15px 0px",
    color: "black",
    fontWeight: "bold",
    fontSize: "38px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
  }

  const thumbnailContainer = {
    position: "absolute",
    display: "block",
    padding: "50px 0 50px 0",
    width: "100px",
    height: "500px",
    top: "0%",
    left: "0%"
  }

  return (
  <>

    <div className="thumbnailContainer" style={thumbnailContainer}>
     <a className="up"  style={arrowStyleUp} >&#65087;</a>
     <div style={{height: "600px"}}>
      <ul className="thumbnailList" style={{position: "absolute", display: "block", left: "-30px"}}>
      {thumbnailList}
      </ul>
     </div>
     <a className="down"  style={arrowStyleDown} >&#65088;</a>
    </div>
  </>
  )
}


export default Thumbnail;