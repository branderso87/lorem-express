const express = require('express')
const app = express()

app.get('/', function (request, response) {
  response.send('Hello World')
})

app.listen(3000, function () {
  console.log('Oh Hai! Check out http://0.0.0:3000')
})
