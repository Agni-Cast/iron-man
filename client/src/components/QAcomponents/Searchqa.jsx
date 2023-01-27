import React, { useState } from 'react';
import axios from 'axios';

function SearchComponent() {

  const productId = 37312;

  const token = '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';



  function handleSearch() {
    console.log("sending request to questions now")
    $.ajax({
        type: 'GET',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${productId}`,
        headers: {
            'Authorization': `${token}`,
        },
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            console.log(error);
        }
    });

    console.log("sending request to ")


}
//
  return (
    <div className="search-container">
        <input  placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <button type="submit" onClick={handleSearch}>
          <img src="./magnifier.png" alt="Amplifier"/>
        </button>
    </div>

  );
}

export default SearchComponent;

