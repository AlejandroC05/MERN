// Llamado de las librerias necesarias para el funcionamiento 
const express = require('express')
const cors = require("cors")
const { API_VERSION } = require("./constants")
const bodyParser = require('body-parser') 

const app = express()

// Cargar rutas
const authRoutes = require("./router/auth.router.js")

// Cofiguracion de bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configuracion de los estáticos
app.use(express.static('uploads'))

// Configurar Header HTTPS - CORS
app.use(cors())

// Configurar Rutas 
app.use(`/api/${API_VERSION}`, authRoutes)

module.exports = app