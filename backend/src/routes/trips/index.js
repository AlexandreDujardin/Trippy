const router = require('express').Router()
const { getTrips, getTripById, subscribeToTrip } = require('../../controllers/trips.controller')

// // Les routes trips
router.route('/')
// Tous les voyages
  .get(async (req, res) => {
    // Appel au controller
    const trips = await getTrips()
    console.log(trips)
    return res.send(trips)
  })

router.route('/:id')
// Un voyage par son id
  .get(async (req, res) => {
    try {
      const trip = await getTripById(req.params.id)
      return res.send(trip)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  })

router.route('/subscribe')
  .post(async (req, res) => {
    try {
      const SubscribedUser = await subscribeToTrip(req.body)
      return res.send(SubscribedUser)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  })

module.exports = router
