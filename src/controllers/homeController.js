const connection = require('../config/database')
const { getAllUsers, getUserById } = require('../services/CRUDService')

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
    res.redirect('/');
}

const getEditUserPage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render('editUser.ejs', { user: user })
}

const updateUser = async (req, res) => {
    let { email, name, city, userId } = req.body;
    const [results, fields] = await connection.query(
        `UPDATE Users
        SET email = ?, name =?, city =? WHERE id = ?`,
        [email, name, city, userId])

    res.redirect('/');
}

module.exports = { getHomePage, createUser, getCreateUserPage, getEditUserPage, updateUser }