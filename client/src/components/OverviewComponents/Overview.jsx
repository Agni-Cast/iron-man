import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import MainPhoto from "./MainPhoto.jsx";



const Overview = ({productID}) => {

  const [photoNumber, setPhotoNumber] = useState(0);
  const [styleNumber, setStyleNumber] = useState(0);


  return (
    <div>
     <MainPhoto
       productID={productID}
       photoNumber={photoNumber}
       setPhotoNumber={setPhotoNumber}
       styleNumber={styleNumber}
     />
    </div>
  )
}

export default Overview;