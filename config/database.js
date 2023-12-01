const mongoose = require('mongoose')

const host = '127.0.0.1:27017'
const database = 'Astro'

const main = async() => {
    mongoose.connect(`mongodb://${host}/${database}`)
}

main().then(() => {
    console.log('conexion exitosa a la base de datos ' + database)
})
.catch((error) => {
    console.log(error)
})