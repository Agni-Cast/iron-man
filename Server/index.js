const path = require("path");
const config =require('../config.js')
const axios = require('axios');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")))



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