const router = require('express').Router()
const { getTrips, getTripById } = require('../../controllers/trips.controller')

// routes for journeys
router.route('/')
// Get all journeys
  .get(async (req, res) => {
    const trips = await getTrips()
    console.log(trips)
    return res.send(trips)
  })

router.route('/:id')
// Get journey by id
  .get(async (req, res) => {
    try {
      const trip = await getTripById(req.params.id)
      return res.send(trip)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  })

module.exports = router
