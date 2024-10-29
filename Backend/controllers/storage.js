const {storageModel} = require('./../models')


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req,res) =>{
    const {body} = req    

    const find = await storageModel.find({name:body.name})
    if (find.length == 0) {
        const data = await storageModel.create(body);
        res.send({message:"Valor ingresado", data: data});   
    }else{
        res.send({message:"valor ya ingresado"})
    }
}
const createStorage = (req, res) =>{
    const {id} = req.body
    const {body} = req


    //const user = storageModel.findById(id)
    console.log(id);
    console.log(body);
    

    res.send(body)
    
}


module.exports = {createUser,createStorage}