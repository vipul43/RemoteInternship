const express = require('express')
var fs = require('fs');
const path = require('path');
const app = express()


app.get('/', function (req, res) {
  var data = JSON.stringify(JSON.parse(fs.readFileSync('./data.json', 'utf8')));
  res.send(data);
})

app.get('/goog', function (req, res) {
  res.redirect('https://www.google.com/')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})