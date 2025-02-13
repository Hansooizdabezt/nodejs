const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME

//cấu hình view engine EJS
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//cấu hình static file
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('sample')
})

app.listen(port, hostname, () => {
    console.log(`App listening on http://localhost:${port}`)
})