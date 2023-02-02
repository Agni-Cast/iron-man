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

  },[]);

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

  const handleClick = (event) => {
    setStyleNumber(event.target.className);
  }

  let finalStyleList = styleList.map((entry, index) => {
    let cr = "";
    if (index % 4 === 0) {
      cr = ""
    }
    return (
          <img
                  key={index}
                  className={index}
                  style={circleStyle}
                  src={entry.photos[0].thumbnail_url}
                  alt="Italian Trulli"
                  onClick={handleClick}
          />
    )
  })


  //CSS:


  return (
  <>
    {finalStyleList}
  </>
  )
}


export default Styles;