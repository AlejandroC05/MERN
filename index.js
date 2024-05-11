const mongoose = require("mongoose")
const { 
    DB_USER, 
    DB_PASSWORD, 
    DB_HOST, 
    IP_SERVER, 
    API_VERSION 
} = require ("./constants.js");
const app = require("./app");

const PORT = process.env.PORT || 3000

mongoose.set("strictQuery", false)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/apirest?retryWrites=true&w=majority&appName=apirest`,
    (error) => {
        if (error) throw error

        app.listen(PORT, () => {
            console.log("#####################")
            console.log("### MERN API REST ###")
            console.log("#####################")
            console.log("Conexión a la base de datos exitosa")
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)
        })
    }
)