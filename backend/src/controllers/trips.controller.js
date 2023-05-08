const Trip = require('../data/model/Trip')

// Appel des méthodes du modèle Trip
const getTrips = async () => {
  const trips = await Trip.getTrips()
  return trips
}

const getTripById = async (id) => {
  if (!id) {
    throw new Error('Missing ID')
  }
  const trip = await Trip.getTripById(id)
  return trip
}

module.exports = {
  getTrips,
  getTripById
}
