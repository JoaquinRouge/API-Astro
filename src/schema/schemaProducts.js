const mongoose = require('mongoose')

let productsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    category: String,
    description: String,
    stock: Number,
    tipo: String,
})

module.exports = mongoose.model('products',productsSchema)