// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const User = require('../data/model/User')
const jwt = require('jsonwebtoken')

// méthode pour s'enregistrer
const register = async (credentials, callback) => {
  let _error
  // Appel de la méthode getUserByEmail pour comparer si un email existe
  const isExist = await User.getUserByEmail(credentials.mail)
  if (isExist) {
    _error = 'Email already exists.'
  }
  // hashage du mot de passe avec bcrypt
  const hashedPassword = await bcrypt.hash(credentials.password, 10)
  const userData = credentials

  // On remplace le mot de passe par celui hasher
  const user = await User.createUser({
    ...userData,
    password: hashedPassword
  })
  return callback(_error, {
    user
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
  // si l'utilisateur existe bien on compare le mot de passe de la db et celui reçu
  const isMatched = await bcrypt.compare(credentials.password, user.password)
  if (isMatched) {
    const payload = {
      id: user.id
    }
    jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '7d' }, (error, token) => {
      if (error) {
        _error = 'Invalid credentials'
      }
      return callback(_error, {
        user,
        token
      })
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
