const  {userModel} = require("./../models")

/**
 *  Buscar un Archivo
 * @param {*} req 
 * @param {*} res 
 */
const getFile = async (req,res)=>{

    const { id } = req.body;
    const user =  await userModel.findById(id);
    if (!user) {
        res.status(500).send({message:"Usuario no encontrado"})
    }else {
        const data = user.storage;
        res.send(data)
    }
}
/**
 * Crear Archivos
 * @param {*} req 
 * @param {*} res 
 */
const createFile = async(req,res)=>{
    const {body} = req;
    const user =  await userModel.findById(body.id);
    if (!user) {
        res.status(500).send({message:"Usuario no encontrado"})
    }else {
        user.storage.push(body.storage);
        user.save();
        console.log(user);
        res.status(200).send({message:"File Ingresado"})
    }
    
}

module.exports = {getFile, createFile}