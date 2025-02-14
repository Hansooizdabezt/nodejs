const connection = require('../config/database')

const getHomePage = async (req, res) => {
    let users = [];
    // A simple SELECT query
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log("results: ", results);

            res.send(JSON.stringify(users));
        }
    );

}
module.exports = { getHomePage }