const pool = require ('../helpers/db')

class User {
    static async getUsers() {
      const sql = 'SELECT * FROM user';
      const [rows] = await pool.promise().query(sql);
      return rows[0];
    }

    static async createUser(user) {
      const {
        mail, 
        password, 
        lastname, 
        firstname, 
        age, 
        gender, 
        phone, 
        city, 
        description, 
        profile_picture
      } = user
      const sql = 'INSERT INTO user (mail, password, lastname, firstname, age, gender, phone, city, description, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

      const [result] = await pool.promise().query(sql, [mail, password, lastname, firstname, age, gender, phone, city, description, profile_picture]);
      return result.insertId;
    }
  }

  module.exports = User