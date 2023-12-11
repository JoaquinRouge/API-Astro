const { Model, model } = require('mongoose')
let modeloUsers = require('../schema/schemaUsers.js')
let modeloProducts = require('../schema/schemaProducts.js')
const bcrypt = require('bcrypt')

const products = async (req, res) => {
    console.log('ok')
    let resultado = await modeloProducts.find()
    res.send(resultado)
}

const loadUser = async(req, res) => {
    const {username, email, password} = req.body
    
    let passwordHashed = await bcrypt.hash(password,12)

    let newUser = new modeloUsers({

        username: username,
        email: email,
        password : passwordHashed,

    })

    let resultado = await modeloUsers.collection.insertOne(newUser)

    res.status(201).json({'user':'created'})
}

const getImage = (req,res) => {
    let imagen = 'http://localhost:4000/' + req.file.path
    console.log(imagen)
    console.log(req.file.path)
    res.send('info recibida!')


        const { title, price, image, category, description, stock, tipo} = req.body
        
        let newProduct = new modeloProducts({
            title: title,
            price: price,
            image: imagen,
            category: category,
            description: description,
            stock: stock,
            tipo:tipo,
        })

        modeloProducts.collection.insertOne(newProduct)
    
}

module.exports = {products,loadUser,getImage}