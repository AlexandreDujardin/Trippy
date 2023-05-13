const { login, register } = require('../../controllers/auth.controller')

const router = require('express').Router()

router.route('/login')
  .post(async (req, res) => {
    const credentials = req.body

    try {
      login(credentials, (error, result) => {
        if (error) {
          return res.status(500).send(error)
        }
        return res.send(result)
      })
    } catch (error) {
      console.error(error)
      return res.status(500).send('error')
    }
  })

router.route('/register')
  .post(async (req, res) => {
    const credentials = req.body

    try {
      register(credentials, (error, result) => {
        if (error) {
          return res.status(500).send(error)
        }
        return res.send(result)
      })
    } catch (error) {
      console.error(error)
      return res.status(500).send('error')
    }
  })

module.exports = router
