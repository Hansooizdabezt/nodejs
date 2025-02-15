const connection = require('../config/database')

const getHomePage = async (req, res) => {
    return res.render('../views/home.ejs')
}

const createUser = async (req, res) => {
    console.log("req.body: ", req.body)
}
module.exports = { getHomePage, createUser }