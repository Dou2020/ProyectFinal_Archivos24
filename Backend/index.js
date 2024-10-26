
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
//conexion DB
const dbConnect = require("./config/mongo")

// utilizar 
app.use(cors())

//instanciando el puerto
const port = process.env.PORT

app.listen(port, () =>{
    console.log('Esta funcionando en el puerto:'+port);
    
})

dbConnect()