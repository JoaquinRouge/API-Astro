const jwt = require('jsonwebtoken')
require('dotenv').config()

const VerifyUser = (req,res,next) => {
    const UserAuthorization = req.headers.authorization

    const token = UserAuthorization.split(' ').pop()

    jwt.verify(token,process.env.jwtpassword, (err,data) => {
        if (err) {
            res.send(err)
        } else {
            console.log(data)
            next()
        }
    })
}

module.exports = VerifyUser