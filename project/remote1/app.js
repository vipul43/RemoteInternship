const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send("SO FAR SO GOOD");
})

app.get('/goog', function (req, res) {
  res.redirect('https://www.google.com/')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})