require('dotenv').config()
const mongoose = require('mongoose')

const host = process.env.host
const database = process.env.database

const main = async() => {
    mongoose.connect(`mongodb://${host}/${database}`)
}

main().then(() => {
    console.log('conexion exitosa a la base de datos ' + database)
})
.catch((error) => {
    console.log('ocurrio un error:' + error)
})