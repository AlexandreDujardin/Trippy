require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const port = 3000

// Paramètrage de Express pour le body et le JSON
app.use(bodyParser.urlencoded({ extended: JSON }))
app.use(bodyParser.json())

app.use(cors())

app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))
app.use('/trips', require('./routes/trips'))
app.use('/protected', require('./routes/protected'))

app.get('/', (req, res) => {
  res.send('Mdrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
})

app.listen(port, () => {
  console.log('Vroom Vroom sur le port : ' + port + ' !')
})
