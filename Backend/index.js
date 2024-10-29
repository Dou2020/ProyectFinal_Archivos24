
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
//conexion DB
const dbConnect = require("./config/mongo")

// utilizar 
app.use(cors())
// Aceptar entradas de JSON
app.use(express.json())
// Realizar Publico la carpeta storage
app.use(express.static("storage"))

app.use(bodyParser.urlencoded({ extended: true }));

//instanciando el puerto
const port = process.env.PORT
/** 
 *  Aqui invocamos a las rutas
*/
app.use("/api",require("./routes"))

app.listen(port, () =>{
    console.log('Esta funcionando en el puerto:'+port);
    
})

dbConnect();