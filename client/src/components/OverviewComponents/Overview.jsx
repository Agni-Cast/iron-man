import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import MainPhoto from "./MainPhoto.jsx";
import ProdInfo from "./ProdInfo.jsx";




const Overview = ({productID}) => {

  const [photoNumber, setPhotoNumber] = useState(0);
  const [styleNumber, setStyleNumber] = useState(0);

  const overviewStyle = {
    display: "flex"
  }

  return (
    <div style={overviewStyle}>
     <MainPhoto
        productID={productID}
        photoNumber={photoNumber}
        setPhotoNumber={setPhotoNumber}
        styleNumber={styleNumber}
     />
     <ProdInfo
        productID={productID}
        styleNumber={styleNumber}
        setStyleNumber={setStyleNumber}
      />
    </div>
  )
}

export default Overview;