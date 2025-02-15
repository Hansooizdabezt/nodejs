const connection = require('../config/database')

const getHomePage = async (req, res) => {
    return res.render('../views/home.ejs')

}
module.exports = { getHomePage }