import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import MainPhoto from "./MainPhoto.jsx";
import ProdInfo from "./ProdInfo.jsx";
import AdditionalInfo from "./AdditionalInfo.jsx";




const Overview = ({productID}) => {

  const [photoNumber, setPhotoNumber] = useState(0);
  const [styleNumber, setStyleNumber] = useState(0);

  const photoAndProdInfoContainerStyle = {
    display: "flex"
  }

  const overallContainerStyle = {
    display: "flex",
    flexDirection: "column"
  }

  return (
    <div className="overallContainer" style={overallContainerStyle}>
        <div className="photoAndProdInfoContainer" style={photoAndProdInfoContainerStyle}>
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
        <div>
          <AdditionalInfo
            productID={productID}
          />
        </div>
    </div>
  )
}

export default Overview;