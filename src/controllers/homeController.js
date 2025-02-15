const connection = require('../config/database')

const getHomePage = async (req, res) => {
    return res.render('../views/home.ejs')
}

const createUser = async (req, res) => {
    let { email, name, city } = req.body;
    connection.query(`INSERT INTO Users(email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            // console.log(results);
            res.send('Created user successfully')
        })
}
module.exports = { getHomePage, createUser }