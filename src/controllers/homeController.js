const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
}

const getCreateUserPage = async (req, res) => {
    return res.render('createUser.ejs')
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