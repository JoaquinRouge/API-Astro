const express = require('express')
const routes = express.Router()
const { products, loadUser, getImage } = require('../controllers/index.controllers')
const upload = require('../multer/multer.js')

routes.get('/products', products)
routes.post('/newUser', loadUser)
routes.post('/info',upload.single('file'),getImage)

module.exports = routes