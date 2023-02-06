import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// const ContainerStyle = styled.div`
//   height: 10px;
//   width: 359px;
//   background-color: grey;
//   margin-left: 50px;
//   margin-top: 10px;
//   //margin-bottom: 10px;
// `
// const FillerStyles = styled.div`
//   height: 100%;
//   background-color: green;
//   width: 0%;
// `
// const LabelStyles = styled.span`
//   padding: 5px;
//   color: green;
// `

// const StarNum = styled.span`
//   position: absolute;
//   bottom: 5px;
//   left: 161px;
//   font-size: 9px;
// `

const GrayBar = styled.div`
  height: 10px;
  width: 235px;
  background-color: #D3D3D3;
  margin: 0px;
  margin-top: 10px;
`
const GreenBar = styled.div`
  height: 100%;
  background-color: #009f00;
  width: 0%;
`
const RatingsNum = styled.span`
  padding: 5px;
  color: black;
  position: absolute;
  left: 240px;
  bottom: 10px;
  font-size: small;
`
const StarNum = styled.u`
  // padding: 5px;
  color: black;
  position: absolute;
  left: -50px;
  bottom: 14px;
  font-size: small;
`

const Container = styled.div`
position: relative;
width: 335px;
left: 50px;
height:25px;
margin: 0px;
`;

const StarsBars = ({ percentages, rating, num, reviews, setReviews }) => {
  // console.log('Reviews --->', reviews)
  // console.log('percentages: ', percentages[5])

  // const barPercentage5 = percentages[5];
  // const barPercentage4 = percentages[4];
  // const barPercentage3 = percentages[3];
  // const barPercentage2 = percentages[2];
  // const barPercentage1 = percentages[1];
  // const reviewsArr = Object.


  const filterReviews = (num) => {
    const numClicked = Number(num);
    const newArr = [];
    // console.log(num)
    // const filteredReviews = reviews.filter((review) => {
    //   review.rating === numClicked
    // })
    // setReviews(filteredReviews)
    for (let i = 0; i < reviews.length; i++) {
      const singleReview = reviews[i];
      if (singleReview.rating === numClicked) {
        newArr.push(singleReview);
      }
    }
    setReviews(newArr)
  }

  useEffect(() => {

  }, [reviews])
  return (
    <Container>
      {/* <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage5}` }}>
          <div>5 stars</div>
          <LabelStyles>{rating.length !== 0 && rating[5] !== undefined ? rating[5] : ''} reviews</LabelStyles>
        </FillerStyles>
      </ContainerStyle>
      <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage4}` }}>
        <div>4 stars</div>
          <LabelStyles>{rating.length !== 0 && rating[4] !== undefined ? rating[4] : ''} reviews</LabelStyles>
        </FillerStyles>
      </ContainerStyle>
      <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage3}` }}>
        <div>3 stars</div>
          <LabelStyles>{rating.length !== 0 && rating[3] !== undefined ? rating[3] : ''} reviews</LabelStyles>
        </FillerStyles>
      </ContainerStyle>
      <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage2}` }}>
        <div>2 stars</div>
          <LabelStyles>{rating.length !== 0 && rating[2] !== undefined ? rating[2] : ''} reviews</LabelStyles>
        </FillerStyles>
      </ContainerStyle>
      <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage1}` }}>
        <div>1 stars</div>
          <LabelStyles>{rating.length !== 0 && rating[1] !== undefined ? rating[1] : ''} reviews</LabelStyles>
        </FillerStyles>
      </ContainerStyle> */}


      <GrayBar onClick={() => filterReviews(num)}>
        <StarNum>{num} stars</StarNum>
        <GreenBar style={{ width: `${percentages}` }}>
          <RatingsNum>{rating.length !== 0 && rating[num] !== undefined ? rating[num] : ''} reviews</RatingsNum>
        </GreenBar>
      </GrayBar>
    </Container>
  );
};



export default StarsBars;
