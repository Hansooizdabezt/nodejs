const connection = require('../config/database')

const getHomePage = async (req, res) => {
    return res.render('../views/home.ejs')
}

const getCreateUserPage = async (req, res) => {
    return res.render('../views/createUser.ejs')
}

const createUser = async (req, res) => {
    let { email, name, city } = req.body;
    const [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city])
    res.send('Created user successfully')
}
module.exports = { getHomePage, createUser, getCreateUserPage }