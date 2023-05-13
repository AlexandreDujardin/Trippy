// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const User = require('../data/model/User')

// méthode pour s'enregistrer
const register = async (req, res) => {
  // Appel de la méthode getUserByEmail pour comparer si un email existe
  const isExist = await User.getUserByEmail(req.body.mail)
  if (isExist) {
    return res.status(400).json({
      message: 'Email already exists.'
    })
  }
  // hashage du mot de passe avec bcrypt
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const userData = req.body

  // On remplace le mot de passe par celui hasher
  const user = await User.createUser({
    ...userData,
    password: hashedPassword
  })
  return res.json({
    data: user,
    message: 'User registered successfully.'
  })
}

// méthode pour se connecter
const login = async (credentials, callback) => {
  let _error
  if (!credentials.mail || !credentials.password) {
    _error = 'Invalid credentials - 1'
  }
  const user = await User.getUserByEmail(credentials.mail)
  if (!user) {
    _error = 'Invalid credentials - 2'
    return callback(_error, null)
  }
  console.log(user)
  // si l'utilisateur existe bien on compare le mot de passe de la db et celui reçu
  const isMatched = await bcrypt.compare(credentials.password, user.password)
  console.log(isMatched)
  if (isMatched) {
    return callback(_error, {
      user
    })
  } else {
    _error = 'Invalid credentials'
    return callback(_error, null)
  }
}

module.exports = {
  login,
  register
}
