const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users u')
    return results
}

const getUserById = async (userId) => {
    const [results, fields] = await connection.query(`select * from Users where id = ?`, [userId])
    let user = results && results.length ? results[0] : {}
    return user;
}

module.exports = { getAllUsers, getUserById }