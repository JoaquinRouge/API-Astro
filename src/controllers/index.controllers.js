const { Model, model } = require('mongoose')
let modelo = require('../../schema/schemaUsers')

const menu = async (req, res) => {
    console.log('ok')
    let resultado = await modelo.find()
    res.send(resultado)
}

const loadUser = async(req, res) => {
    const {username, email, password} = req.body
    
    let newUser = new modelo({

        username: username,
        email: email,
        password : password,

    })

    let resultado = await modelo.collection.insertOne(newUser)

    res.status(201).json({'user':'created'})
}

module.exports = {menu,loadUser}