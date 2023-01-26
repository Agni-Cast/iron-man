const express = require('express');
const app = express();
const axios = require('axios');
const {TOKEN} = require('../config.js');

const PORT = process.env.PORT || 3000;

//Middleware:

app.use(express.json());


//Overview routes:

//TODO: fix function so that page and count parameters go through to axios request.
app.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
  {
   headers: {
    'Authorization': `${TOKEN}`
  }
  })
  .then((response) => {
    console.log('this is product list', response.data);
    res.status(200).send(response.data); //.send(productList);
  })
  .catch((error) => {
    console.log(error);
    res.status(501).send(error);
  });
});


// Update
app.listen(PORT, () => console.log(`listening on port ${PORT}`));