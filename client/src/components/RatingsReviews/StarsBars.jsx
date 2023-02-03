import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  height: 10px;
  width: 370px;
  background-color: grey;
  margin: 50px;
`
const FillerStyles = styled.div`
  height: 100%;
  background-color: green;
  width: 0%;
`
const LabelStyles = styled.span`
  padding: 5px;
  color: green;
`

const StarsBars = ({ percentages, rating }) => {
  // console.log('percentages: ', percentages[5])
  // console.log('rating: ', rating)
  const barPercentage5 = percentages[5];
  const barPercentage4 = percentages[4];
  const barPercentage3 = percentages[3];
  const barPercentage2 = percentages[2];
  const barPercentage1 = percentages[1];

  return (
    <div>
      <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage5}` }}>
          <LabelStyles></LabelStyles>
        </FillerStyles>
      </ContainerStyle>
      <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage4}` }}>
          <LabelStyles></LabelStyles>
        </FillerStyles>
      </ContainerStyle>
      <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage3}` }}>
          <LabelStyles></LabelStyles>
        </FillerStyles>
      </ContainerStyle>
      <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage2}` }}>
          <LabelStyles></LabelStyles>
        </FillerStyles>
      </ContainerStyle>
      <ContainerStyle>
        <FillerStyles style={{ width: `${barPercentage1}` }}>
          <LabelStyles></LabelStyles>
        </FillerStyles>
      </ContainerStyle>
    </div>
  );
};


export default StarsBars;
