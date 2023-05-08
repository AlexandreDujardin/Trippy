const router = require('express').Router()
const { getTrips, getTripById } = require('../../controllers/trips.controller')

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

module.exports = router
