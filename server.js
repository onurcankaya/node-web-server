const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
  const now = new Date().toString()

  console.log(`${now}`)
  next()
})

app.get('/', (req, res) => {
  res.send({
    language: 'javascript',
    libraries: ['node', 'express', 'react'],
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  })
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request',
  })
})

const PORT = process.env.PORT || 2000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
