const router = require('express').Router()
const { getUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../../controllers/users.controller')

// routes for users
router.route('/')
// Get all users
  .get(async (req, res) => {
    const users = await getUsers()
    console.log(users)
    return res.send(users)
  })
// Create a user
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
// Get user by id
  .get(async (req, res) => {
    try {
      const user = await getUserById(req.params.id)
      return res.send(user)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  })
  // Update a user
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

  // Delete a user
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
