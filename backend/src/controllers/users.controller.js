const User = require('../data/model/User')


const getUsers = async () => {
    const users = await User.getAll()
    return users
}

module.exports = {
    getUsers
}