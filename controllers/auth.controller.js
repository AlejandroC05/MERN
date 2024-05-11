const bcrypt = require("bcryptjs")
const User = require("../models/user.model")

function register(req, res){ 
    const {firstname, lastname, email, password} = req.body

    console.log(req.body)

    if(!email) res.status(400).send({msg: "El email es obligatorio"})
    if(!password) res.status(400).send({msg: "La contraseña es obligatoria"})
    
    const user = new User({
        firstname,
        lastname,
        password,
        email: email.toLowerCase(),
        role: "User",
        active: false,
    })

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    console.log(password)
    console.log(hashPassword)

    res.status(200).send({msg:"Funcionó perfecto!"})
}

module.exports = {
    register,
}