const { login, register } = require('../../controllers/auth.controller')

const router = require('express').Router()

// Les routes auth pour se connecter et s'enregistrer
router.post('/login', login)
router.post('/register', register)

module.exports = router
