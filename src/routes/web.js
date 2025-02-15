const express = require('express')
const { getHomePage, createUser } = require('../controllers/homeController')

const router = express.Router()

router.get('/', getHomePage)

router.post('/create-user', createUser);

module.exports = router