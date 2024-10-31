const  { userModel } = require("./../models")

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res)=> {
    const { name, pass, role } = req.body;
    const user = await userModel.find({name:name})
    if (user.length > 0) {
        res.status(500).send({message:"Usuario ya ingresado"});
    }else{
        const data = await userModel.create({name: name, password: pass, role: role, storage:[], share:[]});
        res.status(200).send({message:"Usuario Ingresado: "+name});
    }
    
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async (req, res) => {
    const user =  await userModel.find({});
    res.send(user);
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const findIdUser = async (req, res) => {
    const { id } = req.body;
    const user = await userModel.findById(id)
    res.send(user);
}

const findUser = async (req, res) => {
    const { usuario,pass } = req.body;
    console.log(usuario);
    
    const userr = await userModel.find({name:usuario, password:pass})
    res.send(userr);
}
module.exports =  { createUser, getUser, findUser, findIdUser }