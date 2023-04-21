const router = require('express').Router()
const {getUsers} = require ('../../controllers/users.controller')


router.route('/')
    .get(async (req, res) => {
        const users =  await getUsers()
        console.log(users)
        return res.send(users)
    })

module.exports = router