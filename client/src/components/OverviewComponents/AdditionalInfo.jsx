import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Styles from "./Styles.jsx";
import Checkout from "./Checkout.jsx";


const AdditionalInfo = ({productID}) => {

  const [featuresEntry, setFeaturesEntry] = useState({});

  useEffect(() => {
    axios.get(`/products/${productID}`)
    .then((response) => {
      setFeaturesEntry(response.data);
    })
    .catch((error) => {
      console.log('this is an axios get error in AdditionalInfo.jsx: ', error);
    })
  },[productID]);

  let featuresList = [];

  const liStyle = {
    padding: "5px"
  }

  if (Object.keys(featuresEntry).length !== 0) {
    featuresList = featuresEntry.features.map((entry, index) => {
      return (
        <li key={index} style={liStyle}>✓ &nbsp;{entry.feature}:&nbsp;{entry.value}</li>
      )
    })
  }

  //CSS:
  const additionalInfoContainerStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "30px 15px 15px 15px",
    fontFamily: "Helvetica"
  }

  const sloganAndDescriptionContainerStyle = {
    display: "flex",
    maxWidth: "600px",
    flexDirection: "column"
  }

  const featuresStyle = {
    borderLeft: "solid",
    minWidth: "300px"
  }

  const sloganStyle = {
    padding: "0 40px 0px 15px",
    fontSize: "18px"
  }

  const descriptionStyle = {
    padding: "15px 40px 15px 15px"
  }

  const featuresListStyle = {
    listStyle: "none",
    margin: 0
  }

  return (
  <>
    <div className="additionalInfoContainer" style={additionalInfoContainerStyle}>
      <div className="sloganAndDescriptionContainer" style={sloganAndDescriptionContainerStyle}>
          <div className="slogan" style={sloganStyle}>
            <b>"{featuresEntry.slogan}"</b>
          </div>
          <div className="description" style={descriptionStyle}>
            {featuresEntry.description}
          </div>
      </div>
      <div className="features" style={featuresStyle}>
        <ul className="featuresList" style={featuresListStyle}>
          {featuresList}
        </ul>
      </div>
    </div>
  </>
  )
}


export default AdditionalInfo;