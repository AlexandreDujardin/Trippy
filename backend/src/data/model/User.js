const pool = require('../helpers/db')

class User {
  // On récupère tous les users de la table user
  static async getUsers () {
    const sql = 'SELECT * FROM user'
    const [rows] = await pool.promise().query(sql)
    return rows
  }

  // On récupère l'utilisateur de la table user par l'id donnée
  static async getUserById (id) {
    try {
      const sql = 'SELECT * FROM user WHERE id = ?'
      const [rows] = await pool.promise().query(sql, [id])
      return rows[0]
    } catch (err) {
      console.error(`Error getting user by ID: ${err}`)
      throw err
    }
  }

  // On créer l'utilisateur avec les informations donnée
  static async createUser (user) {
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
    const [result] = await pool.promise().query(sql, [mail, password, lastname, firstname, age, gender, phone, city, description, profile_picture])
    return { id: result.insertId, ...user }
  }

  // On met à jour l'utilisateur n'importe quel champ de la base de donnée de l'utilisateur
  static async updateUserById (id, user) {
    if (!id) {
      throw new Error('Missing ID')
    }
    if (!user) {
      throw new Error('Missing user')
    }

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

    const updateSql = 'UPDATE user SET ? WHERE id = ?'
    const [result] = await pool.promise().query(updateSql, [user, id])
    return { id: result.insertId, ...user }
  }

  // On supprime l'utilisateur de la base de donnée avec l'id donnée
  static async deleteUserById (id) {
    try {
      const sql = 'DELETE FROM user WHERE id = ?'
      const [rows] = await pool.promise().query(sql, [id])

      if (rows.length === 0) {
        throw new Error(`User with ID ${id} not found`)
      }

      return rows[0]
    } catch (err) {
      console.error(`Error getting user by ID: ${err}`)
      throw err
    }
  }

  // On vérifie l'existence de l'utilisateur avec l'email donnée
  static async getUserByEmail (email) {
    try {
      const sql = 'SELECT * FROM user WHERE mail = ?'
      const [rows] = await pool.promise().query(sql, [email])

      return rows[0]
    } catch (err) {
      console.error(`Error getting user by Email: ${err}`)
      throw err
    }
  }
}

module.exports = User
