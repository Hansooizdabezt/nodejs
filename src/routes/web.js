const express = require('express')
const { getHomePage, createUser, getCreateUserPage, getEditUserPage, updateUser } = require('../controllers/homeController')

const router = express.Router()

router.get('/', getHomePage)

router.post('/create-user', createUser);

router.get('/create-user-page', getCreateUserPage);

router.get('/edit-user-page/:id', getEditUserPage);

router.post('/edit-user', updateUser);

module.exports = router