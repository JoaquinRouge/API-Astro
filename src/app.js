const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const routes = require('./routes/index.routes')

app.use(cors())
app.use(express.json())
app.use("", routes)


require('../config/database.js')
require('./schema/schemaProducts.js')

app.listen(port, () => {
    console.log('app escuchando en el puerto ' + port)
})