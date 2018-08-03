const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send({
    language: 'javascript',
    libraries: [
      'node',
      'express',
      'react'
    ]
  })
})

app.get('/about', (req, res) => {
  res.send({
    country: 'denmark',
    city: 'copenhagen'
  })
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  })
})

const PORT = process.env.PORT || 2000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})