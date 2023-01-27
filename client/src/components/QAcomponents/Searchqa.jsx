import { API_KEY } from '../config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchQA = (query, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the API server.
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/`,
    type: 'GET',
    data: {product_id: 5},
    contentType: 'application/json',
    success: function(response) {
      console.log(response);
    }
    error: function(error) {
      // do something when request failed
      console.error('Failed to fetch videos', error);
    }
  });
};

export default searchQA;
