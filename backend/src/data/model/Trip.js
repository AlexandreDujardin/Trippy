const pool = require('../helpers/db')

class Trip {
  static async getTrips () {
    const sql = 'SELECT * FROM journey'
    const [rows] = await pool.promise().query(sql)
    return rows
  }

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