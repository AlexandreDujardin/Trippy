const router = require('express').Router()
const { getUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../../controllers/users.controller')

// Les routes users
router.route('/')
// Tous les utilisateurs
  .get(async (req, res) => {
    // Appel au controller
    const users = await getUsers()
    console.log(users)
    return res.send(users)
  })
// Création d'un utilisateur
  .post(async (req, res) => {
    try {
      const createdUser = await createUser(req.body)
      return res.send(createdUser)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  })

router.route('/:id')
// Un utilisateur par son id
  .get(async (req, res) => {
    try {
      const user = await getUserById(req.params.id)
      return res.send(user)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  })
// Mise à jour d'un utilisateur
  .patch(async (req, res) => {
    try {
      const userId = req.params.id
      const data = req.body
      const updatedUser = await updateUserById(userId, data)
      return res.send(updatedUser)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  })

// Suppression d'un utilisateur
  .delete(async (req, res) => {
    try {
      const userId = req.params.id
      const deletedUser = await deleteUserById(userId)
      return res.send(deletedUser)
    } catch (error) {
      console.error()
      res.status(500).send(error)
    }
  })

module.exports = router
