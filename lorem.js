const express = require('express')
const app = express()
const lorem = require('lorem-ipsum')

app.get('/lorem/:number', function (request, response) {
  const number = parseInt(request.params.number)
  response.send(lorem({count: number, units: 'paragraphs', format: 'html'}))
})

app.listen(3000, function () {
  console.log('Oh Hai! Check out http://0.0.0:3000')
})
