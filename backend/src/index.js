require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const connexion = require ('./data/helpers/db')

const app = express()

const port = 3000

// Paramètrage de Express pour le body et le JSON
app.use(bodyParser.urlencoded({ extended: JSON }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Mdrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
})

app.listen(port, () => {
  console.log('Vroom Vroom sur le port : ' + port + ' !')
})

connexion.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err)
    return
  }

  console.log('Connected to MySQL database!')
})

app.get('/users', (req, res) => {
  const sql = 'SELECT * from user'
  connexion.query(sql, (err, data) => {
    if (err) {
      return res.json(err)
    } else {
      res.json(data)
    }
  })
})
