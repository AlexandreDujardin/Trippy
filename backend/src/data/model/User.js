const pool = require ('../helpers/db')

class User {
    static async getAll() {
      const sql = 'SELECT * FROM user';
      const [rows] = await pool.promise().query(sql);
      return rows[0];
    }
  }

  module.exports = User