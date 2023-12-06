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
    let {nombre,apellido} = req.body
    let imagen = req.file.path
    console.log(imagen)
    res.send('info recibida!')
}

module.exports = {products,loadUser,getImage}