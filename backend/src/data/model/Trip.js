const pool = require('../helpers/db')

class Trip {
  // On récupère tous les voyages de la table journey
  static async getTrips () {
    const sql = 'SELECT * FROM journey'
    // Appel de la requête
    const [rows] = await pool.promise().query(sql)
    return rows
  }

  // On récupère le voyage de la table journey par l'id donnée
  static async getTripById (id) {
    try {
      const sql = 'SELECT * FROM journey WHERE id = ?'
      const [rows] = await pool.promise().query(sql, [id])
      return rows[0]
    } catch (err) {
      console.error(`Error getting user by ID: ${err}`)
      throw err
    }
  }

  static async subscribeToTrip (userId, journeyId) {
    try {
      const sql = 'SELECT id FROM journey JOIN user_journey ON journey_id = user_journey.journey_id WHERE user_journey.user_id = 8;'

      const [result] = await pool.promise().query(sql, [userId, journeyId])
      console.log('User subscribed to the journey successfully.')
      return { id: result.insertId }
    } catch (err) {
      console.error(`Error getting user by ID: ${err}`)
      throw err
    }
  }

  // On créer le voyage avec les informations donnée
  static async createTrip (trip) {
    const {
      name,
      dateStart,
      dateEnd,
      maxPeople,
      budget,
      description
    } = trip

    const sql = 'INSERT INTO `journey` (name, date_start, date_end, max_people, budget, description) VALUES (?, ?, ?, ?, ?, ?);'

    const [result] = await pool.promise().query(sql, [name, dateStart, dateEnd, maxPeople, budget, description])
    return { id: result.insertId, ...trip }
  }
}

module.exports = Trip
