const router = require('express').Router()
const {getUsers, createUser} = require ('../../controllers/users.controller')


router.route('/')
    .get(async (req, res) => {
        const users = await getUsers()
        console.log(users)
        return res.send(users)
    })
    .post(async (req, res) => {
        const { mail, password, lastname, firstname, age, gender, phone, city, description, profile_picture } = req.body;
        const user = await createUser(mail, password, lastname, firstname, age, gender, phone, city, description, profile_picture);
        console.log(user)
        return res.send(user);
    });

module.exports = router