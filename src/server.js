require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')


// A simple SELECT query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log("results: ", results);
        console.log("Error connect database: ", err);
    }
);


const app = express()
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME

//cấu hình view engine EJS
configViewEngine(app);

app.use("/", webRoutes);

// test connection


app.listen(port, hostname, () => {
    console.log(`App listening on http://localhost:${port}`)
})