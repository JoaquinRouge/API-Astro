const { Model, model } = require('mongoose')
let modeloUsers = require('../schema/schemaUsers.js')
let modeloProducts = require('../schema/schemaProducts.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const products = async (req, res) => {
    let resultado = await modeloProducts.find()
    res.send(resultado)
}

const loadUser = async(req, res) => {
    const {username, email, password} = req.body
    
    let passwordHashed = await bcrypt.hash(password,12)

    let newUser = new modeloUsers({

        username: username,
        email: email,
        password: passwordHashed,
        role : "user"
    })

    let resultado = await modeloUsers.collection.insertOne(newUser)

    res.status(201).json({'user':'created'})
}

const getProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'La imagen es requerida.' });
        }

        const imagen = 'http://localhost:4000/' + req.file.path;
        console.log(imagen);

        const { title, price, category, description, stock, tipo } = req.body;

        const newProduct = new modeloProducts({
            title: title,
            price: price,
            category: category,
            description: description,
            stock: stock,
            tipo: tipo,
            image: imagen,
        });

        await newProduct.save();
        res.status(201).json({ product: 'added' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al guardar el producto en la base de datos.' });
    }
};

const ComparePassword = async(req,res) => {
    const { username, password } = req.body
    let userLoged = await modeloUsers.findOne({ username: username })
    if (!userLoged) {
        res.send({"user":"not found"})
    }
    if (userLoged) {
        let compare = await bcrypt.compare(password, userLoged.password)
        console.log(compare)
        if (compare) {
            if (userLoged.role === "admin") {
                
                const payload = {
                    _id: userLoged._id,
                    username: userLoged.username,
                    email: userLoged.email,
                    password: userLoged.password,
                    role: userLoged.role,
                };
    
                jwt.sign(payload, process.env.jwtpassword, { expiresIn: '15s' }, (err,token) => {
                    if (err) {
                        console.log(err)
                        res.status(500).send(err)
                    } else {
                        res.status(200).json({ "user": "admin", "token": token })
                        console.log(token)
                    }
                })
            } else {
    
                const payload = {
                    _id: userLoged._id,
                    username: userLoged.username,
                    email: userLoged.email,
                    password: userLoged.password,
                    role: userLoged.role,
                };
    
                jwt.sign(payload, process.env.jwtpassword, { expiresIn: '15s' }, (err, token) => {
                    if (err) {
                        console.log(err)
                        res.status(500).send(err)
                    } else {
                        res.status(200).json({"user":"user", "token": token })
                    }
                })
            }
        } else {
            res.status(401).json({"contraseña":"incorrecta"})
        } 
    }
}

const seeData = async(req, res) => {
    res.redirect('http://localhost:5173/remeras')
}

const DeleteProduct = async (req, res)=>{
    const { title } = req.body
    
    let productId = new modeloProducts({
        title: title,
    })

    let resultado = await modeloProducts.collection.deleteOne({title:title})

    res.status(201).json({"product":"deleted"})

}

module.exports = {products,loadUser,getProduct,ComparePassword,seeData,DeleteProduct}