const { registerCheck, loginCheck, validator } = require('../middlewares/Validator')
const userController = require("../controllers/user");
const express = require('express')
const router=express.Router()
const isAuth = require('../middlewares/isAuth')
const isAdmin=require('../middlewares/isAdmin')
//register
router.post("/register", registerCheck(), validator,isAuth(),userController.register)
//login user 
router.post('/login',loginCheck(),validator,userController.login)
// get current user ==>private
router.get("/current",isAuth(),userController.current)
//getusers
router.get("/userlist",isAuth(),userController.getuser)

module.exports=router