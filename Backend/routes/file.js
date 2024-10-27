const express = require('express');
const router =  express.Router();
const { getFile, createFile } =  require('./../controllers/file');

/**
 * Route of the file 
 */
router.get("/",getFile);

router.post("/", createFile);

module.exports = router;