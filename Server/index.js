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



// Question and Answers routes
// ***************************************************************/
// handle the answer helpful
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  // console.log("am i geting req?", req.params)

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${req.params.answer_id}/helpful`, {},
  {
    headers: {
      'Authorization': `${token}`
    }
  })
  .then(response => {
    console.log("any response?")
    res.status(204).end();
  })
  .catch(error => {
    res.status(501);
  })
});

// handle the answer report
app.put('/qa/answers/:answer_id/report', (req, res) => {
  // console.log("am i geting req?", req.params)

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${req.params.answer_id}/report`, {},
  {
    headers: {
      'Authorization': `${token}`
    }
  })
  .then(response => {
    console.log("any response?")
    res.status(204).end();
  })
  .catch(error => {
    res.status(501);
  })
});

// to handle add a question
app.post('/api/qa/questions', (req, res) => {
  // console.log('getting req for add question?', req);
  // console.log('show me the param body', req.body);
  const addQdata = req.body

  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',addQdata,
  {
    headers: {
      'Authorization': `${token}`
    }
  })
  .then(response => {

    res.status(201).end()
  })
  .catch(error => {
    res.status(501);
  })
})

// handle voting question helpful
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  console.log("req for voting question ?", req.params)

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.params.question_id}/helpful`, {},
  {
    headers: {
      'Authorization': `${token}`
    }
  })
  .then (response => {
    res.status(204).end();
  })
  .catch(error => {
    res.status(501);
  })
})



// ************************************************************** */
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