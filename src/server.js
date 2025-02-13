require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME

//cấu hình view engine EJS
configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, hostname, () => {
    console.log(`App listening on http://localhost:${port}`)
})