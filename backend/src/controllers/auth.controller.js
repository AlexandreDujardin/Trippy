// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const User = require('../data/model/User')

const register = async (req, res) => {
  const isExist = await User.getUserByEmail(req.body.mail)
  if (isExist) {
    return res.status(400).json({
      message: 'Email already exists.'
    })
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const userData = req.body

  const user = await User.createUser({
    ...userData,
    password: hashedPassword
  })
  return res.json({
    data: user,
    message: 'User registered successfully.'
  })
}

// User authentication function
const login = async (req, res) => {
  const user = await User.getUserByEmail(req.body.mail)
  console.log(req.body.mail)
  if (user) {
    const isMatched = await bcrypt.compare(req.body.password, user.password)
    if (isMatched) {
      return res.status(200).json({ message: 'Connected.' })
    }
  }
  return res.status(400).json({ message: 'Unauthorized.' })
}

module.exports = {
  login,
  register
}
