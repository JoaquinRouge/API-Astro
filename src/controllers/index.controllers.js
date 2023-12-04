const { Model, model } = require('mongoose')
let modeloUsers = require('../../schema/schemaUsers.js')
let modeloProducts = require('../../schema/schemaProducts.js')

const products = async (req, res) => {
    console.log('ok')
    let resultado = await modeloProducts.find()
    res.send(resultado)
}

const loadUser = async(req, res) => {
    const {username, email, password} = req.body
    
    let newUser = new modeloUsers({

        username: username,
        email: email,
        password : password,

    })

    let resultado = await modeloUsers.collection.insertOne(newUser)

    res.status(201).json({'user':'created'})
}

module.exports = {products,loadUser}