const  { userModel } = require("./../models")
const { ObjectId } = require('mongoose').Types;
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getFolder = async (req,res) =>{
    const { id, folder } = req.body;
    const user = await userModel.findById(id)
    if (!folder && user) {
        res.status(200).send(user.storage);
    }else{
        if (user) {
            //console.log(storage[0]._id.equals(folder));
            //console.log(searchFolder(storage,folder))
            res.status(200).send(searchFolder(user.storage,folder))
        }
    } 
}
function searchFolder(folder,id) {
    for (let element of folder) {
        //console.log(element);
        if (element.kind == "Folder") {
            //console.log("Folder");
            const objectId = element._id
            if (objectId.equals( id )) {
                return element
            }else{
                if (element.storage) {
                    searchFolder(element.storage,id);
                }
            }
        }
    };
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const saveFolder = async (req,res)=>{
    const { id, folder, nameFolder } = req.body;
    
    const user = await userModel.findById(id);
    if (!folder && user) {
        user.storage.push({kind:"Folder", name:nameFolder})
        user.save();
        res.status(200).send({message:"Folder Creado "+nameFolder})
    }else{
        if (user) {
            console.log("Principal: "+user.storage.length);
            
            console.log(insertFolder(user.storage,nameFolder,folder));
            user.save();
            res.status(200).send({message:"Seave Folder: "+nameFolder})
            
        }else{
            res.status(500).send({message:"Error Folder"})
        }
    }

}
function insertFolder(folder,nameFolder,id) {
    var estado =  true;
    for (let element of folder) {
        //console.log(element);
        if (element.kind == "Folder") {
            //console.log("Folder");
            const objectId = element._id
            estado = element.name != nameFolder;
            if (objectId.equals( id )) {
                //console.log(element.storage);
                
                //let result = JSON.stringify(element.storage).find(item=>item.name == nameFolder)
                //console.log(result);
                
                //if(result.len()>0)
                //    return "Folder ya existente"
                element.storage.push({kind:"Folder",name:nameFolder, storage:[]})
                return "Insert Folder: "+nameFolder;
            }else{
                if(element.storage){
                    //console.log(element.storage.length+" nombre: "+element.name);
                    insertFolder(element.storage,nameFolder,id);
                }
            }
        }
    };
}
function searchName(folder,nameFolder) {
    
}


module.exports = { getFolder, saveFolder }