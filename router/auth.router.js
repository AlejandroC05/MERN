const express = require("express")
const AuthController = require("../controllers/auth.controller")
const { model } = require("mongoose")

const api = express.Router()

api.post("/auth/register/", AuthController.register)

module.exports = api