const router = require('express').Router()
const {getUsers, getUserById, createUser} = require ('../../controllers/users.controller')


router.route('/')
    .get(async (req, res) => {
        const users = await getUsers()
        console.log(users)
        return res.send(users)
    })
    //Create a user
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
.get(async (req, res) => {
    try {
      const user = await getUserById(req.params.id);
      return res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

module.exports = router