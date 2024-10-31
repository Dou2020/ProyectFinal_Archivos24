const express = require('express');
const router =  express.Router();
const { getFolder, saveFolder } =  require('./../controllers/folder');

/**
 * Route of the file 
 */
//router.post("/",getFile);

router.post("/", getFolder);
router.post("/insert",saveFolder);

module.exports = router;