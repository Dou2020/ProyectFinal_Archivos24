const express = require('express');
const router =  express.Router();
const { createUser, getUser, findUser, findIdUser } =  require('./../controllers/user');

/**
 * Route of the file 
 */
//router.get("/",getFile);

router.post("/", createUser);
router.get("/", getUser);
router.post("/find", findUser);
router.post("/findId", findIdUser);

module.exports = router;