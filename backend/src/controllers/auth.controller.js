//const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../data/model/User');

const register = async (req, res) => { 
  const isExist = await User.findUserByEmail(req.body.email);
  if(isExist) {
      return res.status(400).json({ 
          message: 'Email already exists.' 
      });
  }
  const hashedPassword = bcrypt.hash(req.body.password);
  const userData = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
  }
  const user = await AuthService.createUser(userData);
  return res.json({
      data: user,
      message: 'User registered successfully.'
  });
}

// User authentication function
const login = async (req, res) =>{

  const user = await User.getUserByEmail(req.body.mail); 
  console.log(req.body.mail)
  if (user) {
      if(req.body.password == user.password){
         const isMatched = true
         if (isMatched) {
           return res.status(200).json({ message: 'Connected.' });
         }
      }
  }
  return res.status(400).json({ message: 'Unauthorized.' });
}
module.exports = {
  login
};