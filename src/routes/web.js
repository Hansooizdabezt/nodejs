const express = require('express')
const { getHomePage, createUser, getCreateUserPage } = require('../controllers/homeController')

const router = express.Router()

router.get('/', getHomePage)

router.post('/create-user', createUser);

router.get('/create-user-page', getCreateUserPage);

module.exports = router