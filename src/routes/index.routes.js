const express = require('express')
const routes = express.Router()
const controller = require('../controllers/index.controllers')

routes.post('/index', controller.index)
routes.post('/prueba',controller.prueba)

module.exports = routes