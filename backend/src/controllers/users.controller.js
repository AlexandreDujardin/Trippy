const User = require('../data/model/User')


const getUsers = async () => {
    const users = await User.getUsers()
    return users
}

const createUser = async (user) => {
    
      // Si les paramètres sont OK, on continue
      const _user = new User({
        mail: user.mail,
        password: user.password,
        lastName: user.lastName,
        firstName: user.firstName,
        age: user.age,
        gender: user.gender,
        phone: user.phone,
        city: user.city,
        description: user.description,
        profile_picture: user.profile_picture

      })
    const userId = await User.createUser(_user);
    return userId
  }


module.exports = {
    getUsers,
    createUser
}