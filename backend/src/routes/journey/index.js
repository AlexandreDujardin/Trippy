const router = require('express').Router()
const {getUsers, getUserById, createUser, updateUserById, deleteUserById} = require ('../../controllers/users.controller')

// routes for journeys
router.route('/')
    // Get all journeys
    .get(async (req, res) => {
        const users = await getUsers()
        console.log(users)
        return res.send(users)
    })
    //Create a journey
    .post(async (req, res) => {
        try {      
            const userCreated = await createUser(req.body);
            console.log({userCreated})
            return res.send(userCreated);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    })

router.route('/:id')
    // Get journey by id
  .get(async (req, res) => {
    try {
      const user = await getUserById(req.params.id);
      return res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
  // Update a user
  .patch(async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = req.body;
        const result = await updateUserById(userId, updatedUser);
        return res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
  })

  // Delete a user
  .delete(async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await deleteUserById(userId)
      return res.send(result);
    } catch (error) {
      console.error()
      res.status(500).send(error)
    }
  })

module.exports = router