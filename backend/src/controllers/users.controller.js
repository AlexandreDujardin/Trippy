const User = require('../data/model/User')


const getUsers = async () => {
    const users = await User.getUsers()
    return users
}

const getUserById = async (id) => {
  if (!id) {
    throw new Error('Missing ID')
  }
  const user = await User.getUserById(id);
  return user
}

const createUser = async (user) => {
    const newUser = await User.createUser(user);
    return newUser
  }


module.exports = {
    getUsers,
    getUserById,
    createUser
}