const express = require('express')
const routes = express.Router()
const { products, loadUser, getProduct, ComparePassword, seeData } = require('../controllers/index.controllers')
const upload = require('../multer/multer.js')
const VerifyUser = require("../middleware/verifyUser.js")

routes.get('/products', products)
routes.post('/newUser', loadUser)
routes.post('/uploadProduct',upload.single("file"),getProduct)
routes.post('/login', ComparePassword)
routes.get('/access', VerifyUser, seeData)

module.exports = routes