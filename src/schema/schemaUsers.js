const mongoose = require('mongoose')

let usersSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
})

module.exports = mongoose.model('users',usersSchema)