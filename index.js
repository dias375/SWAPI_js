const express = require('express');
const app = express();
const PORT = 8080;
const db = require('./queries')

app.use(express.json())

app.listen(PORT,() => console.log(`Server UP`));

app.all('/', (req, res) => {
    res.send('Welcome to SWAPI')
  })

app.get('/planet/', (req, res) => {
    res.send('GET request to the homepage')
  })

  
  app.post('/planet/', (req, res) => {
    res.send('POST request to the homepage')
  })

//  app.get('/planets/', db.getPlanets)

  app.get('/planets/', (req, res) => {
    res.send(db.getPlanets)
  })