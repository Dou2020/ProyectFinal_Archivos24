const express = require("express");
const router = express.Router();
const uploadMiddleware = require("./../utils/handleStorage")

router.post("/",uploadMiddleware.single("myFile"),(req,res)=>{
    res.send({hola:1})
});

module.exports = router; 