const  {fileModel} = require("./../models")

/**
 *  Buscar un Archivo
 * @param {*} req 
 * @param {*} res 
 */
const getFile = async (req,res)=>{
    const data = await fileModel.find({});
    res.send({data})
}
/**
 * Crear Archivos
 * @param {*} req 
 * @param {*} res 
 */
const createFile = async(req,res)=>{
    const { body } = req;
    console.log(body);
    const data = await fileModel.create(body);
    res.send(data);
    
}

module.exports = {getFile, createFile}