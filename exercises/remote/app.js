const express = require('express')
const app = express()

const fetch = require("node-fetch");

app.get('/', function (req, res) {
  res.sendFile('/Users/vipul/Documents/internship_crisptag/RemoteInternship/exercises/remote/index.html')
})

app.get('/goog', function (req, res) {
    res.redirect('https://www.google.com/')
})

// fetch('/Users/vipul/Documents/internship_crisptag/RemoteInternship/exercises/remote/read.json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     appendData(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// var mainContainer = document.getElementById("myData");

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})