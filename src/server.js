const express = require('express')
const path = require('path')
const app = express()
const port = 8080

//cấu hình view engine EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('sample')
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})