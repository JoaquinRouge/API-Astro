const express = require('express')
const routes = express.Router()
const {products,loadUser} = require('../controllers/index.controllers')

routes.get('/products', products)
routes.post('/newUser', loadUser)

module.exports = routes