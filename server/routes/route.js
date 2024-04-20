const express = require('express');

var userController= require('../src/user/userController')

const router= express.Router();

router.route('/').post(userController.createUserControllerFn);
router.route('/').get(userController.createUserControllerFn);


module.exports=router;