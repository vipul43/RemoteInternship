const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("SO FAR SO GOOD");
})

app.get('/goog', function (req, res) {
  res.redirect('https://www.google.com/')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})