const  { userModel } = require("./../models")

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res)=> {
    const { body } = req;
    console.log(body);
    const user = await userModel.find({name:body.name})
    if (user.length > 0) {
        res.status(500).send({message:"Usuario ya ingresado"});
    }else{
        const data = await userModel.create(body);
        res.status(200).send({message:"Usuario Ingresado"});
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
    const { name } = req.body;
    console.log(name);
    
    const user = await userModel.find({name:name})
    res.send(user);
}
module.exports =  { createUser, getUser, findUser, findIdUser }