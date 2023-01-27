const path = require("path");

const express = require('express');
const app = express();
const axios = require('axios');
const {TOKEN} = require('../config.js');

const PORT = process.env.PORT || 3000;

//Middleware:

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")))

//Overview routes:

app.get('/products', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products?page=${req.body.page}&count=${req.body.count}`,
  {
   headers: {
    'Authorization': `${TOKEN}`
  }
  })
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((error) => {
    res.status(501).send(error);
  });
});


app.get('/products/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.product_id}`,
  {
   headers: {
    'Authorization': `${TOKEN}`
  }
  })
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((error) => {
    res.status(501).send(error.response.data);
  });
});


app.get('/products/:product_id/styles', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.product_id}/styles`,
  {
   headers: {
    'Authorization': `${TOKEN}`
  }
  })
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((error) => {
    res.status(501).send(error.response.data);
  });
});


app.get('/products/:product_id/related', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.product_id}/related`,
  {
   headers: {
    'Authorization': `${TOKEN}`
  }
  })
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((error) => {
    res.status(501).send(error.response.data);
  });
});



//QandA routes:

//Review routes:


// Update
app.listen(PORT, () => console.log(`listening on port ${PORT}`));