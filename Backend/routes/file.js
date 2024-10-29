const express = require('express');
const router =  express.Router();
const { getFile, createFile } =  require('./../controllers/file');

/**
 * Route of the file 
 */
//router.post("/",getFile);

router.post("/", createFile);

module.exports = router;