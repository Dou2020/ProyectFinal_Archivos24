
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
//conexion DB
const dbConnect = require("./config/mongo")
const  { userModel } = require("./models")

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

app.listen(port, async() =>{
    console.log('Esta funcionando en el puerto:'+port);
    const user =  await userModel.find();
    if (user.length < 1) {
        await userModel.create({name:"user", password:"1234", role: "user", storage:[], share:[]});
        await userModel.create({name: "admin", password:"1234", role:"admin", storage:[], share:[]});
        console.log("creado user y admin");
    }else{
        console.log("user y admin creado");
        
    }
    
})

dbConnect();