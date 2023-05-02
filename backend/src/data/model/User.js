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
      return { id: result.insertId, ...user }
    }

    static async updateUserById (userId, user) {
      if (!userId) {
        throw new Error('Missing ID')
      }
      if (!user) {
        throw new Error('Missing user')
      }
      const { 
          mail: mail, 
          password: password, 
          lastname: lastname, 
          firstname: firstname, 
          age: age, 
          gender: gender, 
          phone: phone, 
          city: city, 
          description: description, 
          profile_picture: profile_picture 
      } = user

        const updateSql = 'UPDATE user SET ? WHERE id = ?';
        const [result] = await pool.promise().query(updateSql, [user, userId]);
        return { userId: result.insertId, ...user }
    }  

    static async deleteUserById(userId) {
      try {
        const sql = 'DELETE FROM user WHERE id = ?';
        const [rows] = await pool.promise().query(sql, [userId]);
  
        if (rows.length === 0) {
          throw new Error(`User with ID ${id} not found`);
        }
  
        return rows[0];
      } catch (err) {
        console.error(`Error getting user by ID: ${err}`);
        throw err;
      }
    }
  }
  

  module.exports = User