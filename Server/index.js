const path = require("path");
const {token} = require('../config.js');
const axios = require('axios');

const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;

//Middleware:

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")))

//Overview routes:

app.get('/products', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products?page=${req.body.page}&count=${req.body.count}`,
  {
   headers: {
    'Authorization': `${token}`
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
    'Authorization': `${token}`
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
    'Authorization': `${token}`
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
    'Authorization': `${token}`
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
app.post('/qa/questions', (req, res) => {
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?${req.params.product_id}`,
  {
   headers: {
    'Authorization': `${token}`
  }
  })
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((error) => {
    res.status(501).send(error.response.data);
  });
});



//Review routes:

app.get('/reviews', (req, res) => {
  console.log('REQ:', req)
  console.log('REQ Query:', req.query)
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?page=${req.query.page}&count=${req.query.count}&product_id=${req.query.product_id}&sort=${req.query.sort}`,
  {
   headers: {
    'Authorization': `${token}`
  }
  })
  .then((response) => {
    return res.status(200).send(response.data);
  })
  .catch((error) => {
    res.status(501).send(error);
  });
});

app.get('/reviews/meta', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?&product_id=${req.query.product_id}`,
  {
    headers: {
      'Authorization': `${token}`
    }
  })
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((error) => {
    res.status(501)
  })
})



app.listen(PORT, () => console.log(`listening on port ${PORT}`));