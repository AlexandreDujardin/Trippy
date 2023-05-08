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
}

module.exports = Trip
