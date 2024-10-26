const mongoose = require("mongoose");


//conexion de la base de datos esta funcion se va a exportar
const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        await mongoose.connect( DB_URI)
        .then(()=>console.log("--------Conexion Exitosa-------"))
        .catch((err)=>console.log("----Conexion Fallida--------"+err))
    } catch (error) {
        console.log("**********Conexion incorrecta********");
        
    }
};

module.exports = dbConnect;