const path = require("path");
const config =require('../config.js')
const axios = require('axios');

const express = require('express');
const app = express();

const {token} = require('../config.js');

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



// app.get('/reviews/', function(req, res) {
//   return axios({
//     method: req.method,
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/`,
//     headers: {
//       'User-Agent': 'request',
//       'Authorization': `token ${config.TOKEN}`
//     },
//     data: req.body
//   })
//   .then((response) => {
//     console.log(response)
//   res.send(response.data)
//   })
// })


app.listen(PORT, () => console.log(`listening on port ${PORT}`));