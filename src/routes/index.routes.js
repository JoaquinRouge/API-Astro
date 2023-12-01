const express = require('express')
const routes = express.Router()
const {menu,loadUser} = require('../controllers/index.controllers')

routes.get('/users', menu)
routes.post('/newUser', loadUser)

module.exports = routes