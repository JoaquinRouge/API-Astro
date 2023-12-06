const mongoose = require('mongoose')

let productsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    category: String,
    description: String,
    stock: Number,
})

module.exports = mongoose.model('products',productsSchema)