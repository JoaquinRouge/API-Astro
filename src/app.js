const express = require('express')
const app = express()
const port = 4000
const routes = require('./routes/index.routes')

app.use(routes)

app.listen(port, () => {
    console.log('app escuchando en el purto ' + port)
})