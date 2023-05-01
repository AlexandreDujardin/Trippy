const pool = require ('../helpers/db')

class User {
    static async getUsers() {
      const sql = 'SELECT * FROM user';
      const [rows] = await pool.promise().query(sql);
      return rows[0];
    }

    static async getUserById(id) {
      try {
        const sql = 'SELECT * FROM user WHERE id = ?';
        const [rows] = await pool.promise().query(sql, [id]);
  
        if (rows.length === 0) {
          throw new Error(`User with ID ${id} not found`);
        }
  
        return rows[0];
      } catch (err) {
        console.error(`Error getting user by ID: ${err}`);
        throw err;
      }
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
      const sql = 'INSERT INTO user (mail, password, lastname, firstname, age, gender, phone, city, description, profile_picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
      const [result] = await pool.promise().query(sql, [mail, password, lastname, firstname, age, gender, phone, city, description, profile_picture]);
      return { id: result.insertId, ...user };
    }
  }

  module.exports = User